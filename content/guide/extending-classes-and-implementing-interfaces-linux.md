---
title: Extending GObject classes and implementing interfaces
description: Subclass GObject and GTK classes and implement GObject interfaces from JavaScript on Linux.
contributors:
  - triniwiz
---

::: warning Experimental
The Linux platform is experimental. See [Developing for Linux](/guide/linux/).
:::

On Linux you can extend GObject classes (for example `GObject`, `GtkWidget` or `GtkButton`) and implement GObject interfaces (for example `GListModel` or `GtkOrientable`), with GObject properties and signals. When native code calls a virtual function (vfunc) or interface method you implement, your JavaScript runs. Members you don't override keep their native behavior.

## Extending classes

Extend the struct of a GObject class with the `class` syntax. Methods with the name of a vfunc of the class (or of one of its parents) override it:

```ts
class Swatch extends GtkWidget {
  constructor() {
    super()
    this.color = new GdkRGBA({ red: 1, alpha: 1 })
  }

  measure(
    orientation,
    forSize,
    minimum,
    natural,
    minimumBaseline,
    naturalBaseline,
  ) {
    new interop.Reference(interop.types.int32, minimum).value = 48
    new interop.Reference(interop.types.int32, natural).value = 96
  }

  snapshot(snapshot) {
    const rect = new graphene_rect_t({
      origin: { x: 0, y: 0 },
      size: {
        width: gtk_widget_get_width(this),
        height: gtk_widget_get_height(this),
      },
    })
    gtk_snapshot_append_color(snapshot, this.color, rect)
  }
}

const swatch = new Swatch()
gtk_box_append(box, swatch)
```

```ts
class CountingButton extends GtkButton {
  constructor(label) {
    super()
    this.clicks = 0
    gtk_button_set_label(this, label)
  }

  // GtkButtonClass.clicked, the class handler of the "clicked" signal
  clicked() {
    this.clicks++
  }
}
```

- Vfuncs are named as in the class structs of the C headers (`GtkWidgetClass.snapshot`, `GObjectClass.constructed`), in snake_case or camelCase (`size_allocate` or `sizeAllocate`). Vfuncs receive the instance as `this`, followed by their other arguments.
- `super.method(...)` calls the parent's implementation, a JavaScript one or the native one.
- An instance is passed to C functions as the GObject (`gtk_box_append(box, swatch)`), and fields you set on `this` are visible when native code calls your overrides.
- `instanceof` works for your class and its native parents.
- Classes can be extended again, from JavaScript.
- `MyClass.$gtype` is the GType registered for the class, named after it (or after a `static GTypeName`).

Or call `extend` on the class, optionally passing the name of the GType first:

```ts
const Swatch = GtkWidget.extend('Swatch', {
  init() {
    // called after construction, with the constructor arguments
    this.color = new GdkRGBA({ red: 1, alpha: 1 })
  },
  snapshot(snapshot) {
    this.super.snapshot(snapshot)
  },
})
```

::: warning Final classes
Only derivable classes can be extended. Classes declared final in C (for example `GListStore`) can't, and constructing a subclass of one throws.
:::

### TypeScript and `@NativeClass()`

Code written for Android and iOS works unchanged: `@NativeClass()` classes and TypeScript's ES5 output are supported. On Linux the decorator isn't required.

```ts
@NativeClass()
class CountingButton extends GtkButton {
  declare clicks: number

  clicked() {
    this.clicks = (this.clicks ?? 0) + 1
  }
}
```

### Construction

`constructed` and other vfuncs that GObject calls while it creates an instance run before the constructor's code after `super()`, as they do in C.

The argument passed to `super()` sets GObject properties when it is a plain object, as `g_object_new` does. A class without a constructor passes its argument on:

```ts
const item = new TodoItem({ title: 'Write docs', done: false })
```

Instances created by native code, for example by `GtkBuilder` or by `g_object_new`, get a JavaScript object when JavaScript first needs one, and the class's constructor runs for them without arguments.

## Properties

Declare GObject properties in a static `properties` object. They are JavaScript properties of the instances, and GObject properties for native code (`g_object_get`, property bindings, `GtkBuilder`, `notify::` signals):

```ts
class TodoItem extends GObject {
  static properties = {
    title: { type: G_TYPE_STRING, default: '' },
    done: { type: G_TYPE_BOOLEAN, default: false },
    priority: { type: G_TYPE_INT, minimum: 0, maximum: 10, default: 5 },
  }
}

const item = new TodoItem({ title: 'Write docs' })
g_signal_connect(item, 'notify::done', () => console.log('done changed'))
item.done = true // notifies
```

| Option               | Description                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`               | A `G_TYPE_*` constant, a GType, a GObject class (`GtkWidget` or a JavaScript class), or an enum, flags or boxed type. Default `G_TYPE_STRING`. |
| `default`            | The default value.                                                                                                                             |
| `minimum`, `maximum` | The range of numeric properties.                                                                                                               |
| `flags`              | `GParamFlags`, default `GParamFlags.READWRITE`.                                                                                                |
| `nick`, `blurb`      | The property's nickname and description.                                                                                                       |
| `override`           | Implements a property declared by an interface or a parent class, see [Implementing interfaces](#implementing-interfaces).                     |

The GObject name of a property is its key in kebab-case: `itemCount` is the `item-count` property. To compute a property, define a getter and setter for it in the class. Call `g_object_notify(this, 'name')` when its value changes.

## Signals

Declare signals in a static `signals` object, and emit them with `emit`:

```ts
class Timer extends GObject {
  static signals = {
    tick: { params: [G_TYPE_INT] },
    'time-up': {},
  }

  start(seconds) {
    let left = seconds
    g_timeout_add(
      1000,
      () => {
        this.emit('tick', --left)
        if (left > 0) return 1
        this.emit('time-up')
        return 0
      },
      null,
    )
  }
}

const timer = new Timer()
g_signal_connect(timer, 'tick', (self, left) => console.log(left))
```

| Option       | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `params`     | The parameter types: `G_TYPE_*` constants, GTypes or GObject classes. |
| `returnType` | The return type, default `G_TYPE_NONE`.                               |
| `flags`      | `GSignalFlags`, default `GSignalFlags.RUN_LAST`.                      |

`emit` converts the arguments to the signal's parameter types and returns the signal's return value. It works for every signal of the instance, including those of native parent classes.

## Implementing interfaces

List the interfaces a class implements in a static `interfaces` array, or with `@Interfaces`. Methods with the name of an interface method implement it:

```ts
class TodoList extends GObject {
  static interfaces = [GListModelInterface]

  constructor() {
    super()
    this.items = []
  }

  getItemType() {
    return TodoItem.$gtype
  }

  getNItems() {
    return this.items.length
  }

  getItem(position) {
    const item = this.items[position]
    // get_item returns a new reference (transfer full)
    return item ? g_object_ref(item) : null
  }

  add(item) {
    this.items.push(item)
    g_list_model_items_changed(this, this.items.length - 1, 0, 1)
  }
}

const list = new TodoList()
const selection = gtk_no_selection_new(list)
```

An interface is given as its interface struct (`GListModelInterface`, `GtkOrientableIface`), its GType (`g_list_model_get_type()`) or its type name (`'GListModel'`).

Properties declared by an interface are implemented with `override`:

```ts
@Interfaces([GtkOrientableIface])
class Strip extends GtkWidget {
  static properties = { orientation: { override: true } }

  constructor() {
    super()
    this.orientation = GtkOrientation.HORIZONTAL
  }
}
```

Values and objects returned to C follow the C function's ownership rules, as for any [callback](/guide/linux-marshalling#callbacks): return a new reference where the C API expects one (`transfer full`), as `getItem` above does.

## Lifetime

An instance of a JavaScript class is a JavaScript object together with the GObject it drives. The JavaScript object holds a toggle reference on the GObject:

- While native code also references the GObject (for example a parent widget or a `GListStore`), the JavaScript object is kept alive, with its fields.
- When only JavaScript references it, the JavaScript object can be garbage collected, which releases the GObject.

You don't need to unref instances you create with `new`. Use `dispose` (not `finalize`) to release resources, and call `super.dispose()`.

Signal arguments, property values and vfunc instances that are instances of a JavaScript class are passed to JavaScript as their JavaScript object. C functions that return them return an `interop.Pointer` to the GObject. To compare it with an instance, use `interop.handleof(instance).equals(pointer)`.

## How it works

The runtime registers a GType for each class the first time it is constructed, deriving from the GType of the class it extends. The vtable slots of the methods you override, and the interface methods you implement, call into your JavaScript object. No build step or generated code is involved.

## Limitations

- Final classes can't be extended.
- `finalize` can't be overridden, use `dispose`.
- GTK classes can only be used on the main thread. Native code that calls an override from another thread waits while it runs on the JavaScript thread, see [Multithreading › Linux](/guide/multithreading#linux).
