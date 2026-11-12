---
title: Linux Marshalling
description: How JavaScript values are converted to and from C types on Linux.
contributors:
  - triniwiz
---

::: warning Experimental
The Linux platform is experimental. See [Developing for Linux](/guide/linux/).
:::

On Linux, NativeScript calls C libraries directly. The runtime reads the signatures of C functions, structs, enums and constants from metadata generated from the C headers, and converts JavaScript values to C values (and back) on every call.

## Functions, enums and constants

C functions, enums, constants and global variables are JavaScript globals with the same name as in C. They are resolved from the metadata the first time they are used:

```ts
const pid = getpid()
const home = g_get_home_dir() // a JavaScript string

const box = gtk_box_new(GtkOrientation.VERTICAL, 8)
gtk_box_append(box, gtk_label_new('Hello'))
```

Enum members can be used with the enum's prefix removed (`GtkOrientation.VERTICAL`), with their full C name (`GLogLevelFlags.G_LOG_LEVEL_WARNING`), or as a global (`G_LOG_LEVEL_WARNING`). Enums are also reverse mapped, `GLogLevelFlags[16]` returns the member's name.

Function-like C macros (for example `G_OBJECT()` or `GTK_WIDGET()`) aren't available. Casts between pointer types aren't needed in JavaScript, pass the pointer as it is.

Calls are checked against the C signature: passing the wrong number of arguments, or a value that can't be converted, throws a `TypeError`.

## Primitive types

| C type                                                          | JavaScript to C                                                                      | C to JavaScript                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| `char`, `short`, `int` (signed and unsigned), enums             | `number` (truncated to the C type's size)                                            | `number`                                                        |
| `long`, `long long`, `int64_t`, `size_t`, `gsize`, `GType`, ... | `number` or `bigint`                                                                 | `number`, or `bigint` for values outside &plusmn;2<sup>53</sup> |
| `float`, `double`, `long double`                                | `number`                                                                             | `number`                                                        |
| `bool` (`_Bool`)                                                | any value, converted to `true` or `false`                                            | `boolean`                                                       |
| `gboolean`                                                      | `number` or `boolean`                                                                | `number` (`0` or `1`), because `gboolean` is a C `int`          |
| `const char *`                                                  | `string`, `interop.Pointer` or `null`                                                | `string`, or `null` for `NULL`                                  |
| `char *`                                                        | `string`, `interop.Pointer` or `null`                                                | `interop.Pointer`, see [Strings](#strings)                      |
| pointers (`void *`, `GtkWidget *`, ...)                         | `interop.Pointer`, `interop.Reference`, struct, `ArrayBuffer`, typed array or `null` | `interop.Pointer`, or `null` for `NULL`                         |
| function pointers                                               | a JavaScript function, see [Callbacks](#callbacks)                                   | a callable JavaScript function                                  |
| structs and unions (by value)                                   | a struct instance or a plain object                                                  | a struct instance, see [Structs](#structs)                      |

`null` and `undefined` are passed as `NULL` (or `0` for numbers).

64-bit integers are returned as a `number` when the value fits, and as a `bigint` otherwise, so code that reads them should handle both:

```ts
atoll('42') // 42
atoll('9007199254740993') // 9007199254740993n
```

## Pointers

Pointers are `interop.Pointer` objects. Every call returns a new object, so compare pointers with `equals()`, not `===`:

```ts
const box = gtk_box_new(GtkOrientation.VERTICAL, 0)
const label = gtk_label_new('Hello')
gtk_box_append(box, label)

gtk_widget_get_parent(label).equals(box) // true

box.toHexString() // '0x5581f3a0c2d0'
box.add(8) // a pointer 8 bytes further
new interop.Pointer(0x1000) // a pointer from an address
```

To allocate memory, use `interop.alloc`. The memory is zeroed and freed when the returned pointer is garbage collected:

```ts
const buffer = interop.alloc(64)
```

`interop.sizeof()` returns the size of a type or struct in bytes, and `interop.handleof()` returns the address of a reference, struct, typed array or `ArrayBuffer`.

### Memory owned by C

Memory returned by C functions isn't managed by JavaScript. Free it the same way you would in C, or use `interop.adopt` to free it automatically when the pointer is garbage collected:

```ts
const text = g_strdup('hello')
// ...
g_free(text)

// freed with g_free once `owned` is garbage collected
const owned = interop.adopt(g_malloc0(64), g_free)
```

The free function must be a native function (such as `free`, `g_free` or `g_object_unref`). It is called from the event loop after garbage collection, not during it.

## Strings

JavaScript strings passed to `char *` and `const char *` parameters are converted to a temporary UTF-8 copy, which is only valid during the call. To pass a string that the C code keeps, create it with `interop.cstring()`, which returns a pointer to a copy that lives as long as the pointer:

```ts
const name = interop.cstring('my-app')
```

`const char *` results are returned as JavaScript strings. `char *` results are returned as pointers, because the caller usually owns (and has to free) the memory. Use `interop.stringFromCString()` to read them:

```ts
const path = g_build_filename('/tmp', 'file.txt', null)
console.log(interop.stringFromCString(path)) // '/tmp/file.txt'
g_free(path)
```

## Typed arrays and buffers

An `ArrayBuffer`, typed array or `DataView` can be passed to any pointer parameter. The C function receives the address of its data, without a copy:

```ts
const nums = new Int32Array([3, 1, 2])
qsort(nums, nums.length, 4, (a, b) => int(a) - int(b))
console.log(nums) // [1, 2, 3]
```

To read or write C memory from JavaScript without a copy, create an `ArrayBuffer` over it with `interop.bufferFromData()`. The optional third argument is a native function that frees the memory when the buffer is garbage collected:

```ts
const mem = g_malloc0(8)
const bytes = new Uint8Array(interop.bufferFromData(mem, 8, g_free))
memset(mem, 7, 4)
console.log(bytes[0]) // 7
```

## References and out parameters

`interop.Reference` holds a C value in memory, and is passed as a pointer to it. Use it for out parameters:

```ts
const src = interop.cstring('42rest')
const end = new interop.Reference(interop.types.pointer, null)

strtol(src, end, 10) // 42
interop.stringFromCString(end.value) // 'rest'
```

```ts
const error = new interop.Reference(interop.types.pointer, null)
const contents = new interop.Reference(interop.types.pointer, null)

if (!g_file_get_contents('/etc/hostname', contents, null, error)) {
  console.log(
    interop.stringFromCString(
      new interop.Reference(GError, error.value).value.message,
    ),
  )
}
```

`new interop.Reference(type, value)` allocates memory for one value of `type`. When `value` is a pointer, the reference reads and writes the memory at that pointer instead, which is how you read a value a pointer points to:

```ts
const int = (p) => new interop.Reference(interop.types.int32, p).value
```

The available types are `interop.types.bool`, `int8`, `uint8`, `int16`, `uint16`, `int32`, `uint32`, `int64`, `uint64`, `long`, `ulong`, `float`, `double`, `longdouble`, `unichar`, `UTF8CString` (`char *`), `pointer` (`void *`) and `void`. Struct constructors can be used as types too.

A reference only has a `value` property. To read the elements of a C array, move the pointer with `add()`:

```ts
const third = new interop.Reference(interop.types.int32, array.add(2 * 4)).value
```

## Structs

C structs and unions are globals named after their typedef (`GdkRGBA`, `graphene_rect_t`, `GList`). The struct tag (`_GdkRGBA`) is the same constructor.

```ts
const color = new GdkRGBA({ red: 1, green: 0.5, blue: 0, alpha: 1 })
color.alpha = 0.5

const time = new tm() // zero filled
gmtime_r(new interop.Reference(interop.types.long, 0), time)
console.log(time.tm_year) // 70
```

Struct fields read and write the struct's memory directly. Nested structs are views into the same memory:

```ts
const timer = new itimerval()
timer.it_value.tv_sec = 5
timer.it_interval = { tv_sec: 2, tv_usec: 0 }
```

- Structs returned by value are copied into memory owned by JavaScript.
- A struct instance passed to a pointer parameter is passed by reference, so the C function writes into it.
- A plain object can be passed instead of a struct instance. Its fields are copied in and, for pointer parameters, copied back after the call. Missing fields are zero.
- Fields are not own properties, so `Object.keys()` and spreading return nothing. Use `toJSON()` (or `JSON.stringify()`) to get a plain object.
- Pointer fields are read as `interop.Pointer`. To view a struct that a pointer points to, use `new interop.Reference(StructType, pointer).value`.

```ts
const label = g_object_ref_sink(gtk_label_new('Hello'))
const object = new interop.Reference(GObject, label).value
console.log(object.ref_count) // 1
```

## Callbacks

A JavaScript function can be passed to any function pointer parameter. The runtime generates a C function with the parameter's signature that calls it:

```ts
const nums = new Int32Array([4, 2, 8, 6])
qsort(nums, 4, 4, (a, b) => {
  return (
    new interop.Reference(interop.types.int32, a).value -
    new interop.Reference(interop.types.int32, b).value
  )
})

g_timeout_add(
  1000,
  () => {
    console.log('tick')
    return 1 // G_SOURCE_CONTINUE
  },
  null,
)
```

C functions can be passed as callbacks too, for example `qsort(array, count, size, strcmp)`.

For parameters with a generic type, such as `GCallback`, create the C function with an explicit signature using `interop.callback()`:

```ts
const compare = interop.callback((a, b) => int(a) - int(b), {
  returns: interop.types.int32,
  args: [interop.types.pointer, interop.types.pointer],
})
```

Keep the following in mind:

- The C function generated for a JavaScript function stays valid until you call `interop.release(fn)`, so it is safe to use for callbacks that are called later (signal handlers, timeouts and idle callbacks). Release callbacks you no longer need.
- A string returned from a callback is only valid until the callback returns. Return `interop.cstring()` (and keep a reference to it) or `g_strdup()` instead.
- An exception thrown in a callback doesn't reach the C caller. It is reported as an uncaught error, and the C caller receives `0` (or `NULL`).
- Callbacks always run on the JavaScript thread that created them, see [Threading](#threading).

## GObject signals

`g_signal_connect` and `g_signal_connect_after` connect a JavaScript function to a GObject signal. The handler receives the instance, the signal's arguments and the user data:

```ts
g_signal_connect(button, 'clicked', (self) => {
  console.log('clicked')
})

g_signal_connect(toggle, 'notify::active', (self) => {
  console.log(gtk_switch_get_active(self))
})
```

The argument types are read from the signal's definition. String arguments are passed as pointers, read them with `interop.stringFromCString()`.

## GObject memory management

GObjects are `interop.Pointer` values, and their reference counts are not managed by the runtime. Follow the [GObject ownership rules](https://docs.gtk.org/gobject/concepts.html#object-memory-management) as you would in C: unref objects you own when you are done with them, or adopt them so they are unreffed when the pointer is garbage collected:

```ts
const label = interop.adopt(
  g_object_ref_sink(gtk_label_new('hi')),
  g_object_unref,
)
```

Widgets added to a parent widget are owned by the parent and don't need to be unreffed.

Instances of [JavaScript GObject classes](/guide/extending-classes-and-implementing-interfaces-linux) are managed for you: their JavaScript object holds a reference on the GObject.

## Variadic functions

The C types of the variadic arguments of functions such as `printf` are chosen from the JavaScript values:

| JavaScript value                  | C type                                                  |
| --------------------------------- | ------------------------------------------------------- |
| integer `number`, `boolean`       | `int` (`unsigned int` or `long long` if it doesn't fit) |
| non-integer `number`              | `double`                                                |
| `bigint`                          | `long long`                                             |
| `string`                          | `char *`                                                |
| `interop.Pointer`, struct, `null` | pointer                                                 |

```ts
const buffer = interop.alloc(64)
snprintf(buffer, 64, '%s|%d|%.2f|%lld', 'x', -7, 0.5, 1234567890123n)
interop.stringFromCString(buffer) // 'x|-7|0.50|1234567890123'
```

A whole number is always passed as an integer, so `printf('%f', 2)` doesn't print `2.000000`. Format whole numbers with `%d`, and pass a `bigint` to `%lld` and `%ld`, as small numbers are passed as a 32-bit `int`.

## Threading

JavaScript runs on the main thread, which runs the GLib main loop together with GTK. `setTimeout`, promises and GTK signals all run on that loop.

When C code calls a JavaScript callback from another thread, the call is queued to the JavaScript thread, and the C thread waits until the callback has run. Don't block the JavaScript thread waiting for such a thread (for example with `g_thread_join`), as that deadlocks.

[Workers](/guide/multithreading#linux) have their own thread and GLib main context, and can call C APIs, but not GTK. See [Multithreading › Linux](/guide/multithreading#linux).
