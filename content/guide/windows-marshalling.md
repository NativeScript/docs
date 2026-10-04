---
title: Windows Marshalling
description: How JavaScript values are converted to and from Windows Runtime (WinRT) types.
contributors:
  - triniwiz
---

::: warning Experimental
The Windows platform is experimental. See [Developing for Windows](/guide/windows/).
:::

The NativeScript Windows runtime reads WinRT metadata at runtime and converts values between JavaScript and WinRT automatically. This page describes how the WinRT type system is projected to JavaScript.

## Namespaces and types

Every root WinRT namespace is available as a global. `Windows.*` contains the system APIs and `Microsoft.*` contains WinUI 3 and the Windows App SDK:

```ts
const uri = new Windows.Foundation.Uri('https://nativescript.org/')
const grid = new Microsoft.UI.Xaml.Controls.Grid()
```

Namespaces and types are resolved lazily the first time they are accessed.

::: tip Use `Microsoft.UI.Xaml`
For UI, use the WinUI 3 types in `Microsoft.UI.Xaml.*`. The older `Windows.UI.Xaml.*` (UWP XAML) types can't be used in a WinUI 3 app. Some types such as `Windows.UI.Color` and `Windows.UI.Text.FontStyle` are still used by WinUI 3 and remain in the `Windows.*` namespace.
:::

## Classes

### Constructors

Runtime classes are created with `new`. Constructors with parameters are selected by the number of arguments:

```ts
const formatter = new Windows.Globalization.NumberFormatting.DecimalFormatter(
  ['fr-FR'],
  'FR',
)
```

### Properties and methods

Member names are used exactly as they are declared in WinRT (PascalCase), there is no camelCase aliasing:

```ts
const uri = new Windows.Foundation.Uri('https://nativescript.org/docs')
console.log(uri.AbsoluteUri, uri.Host)

const textBlock = new Microsoft.UI.Xaml.Controls.TextBlock()
textBlock.Text = 'Hello'
textBlock.FontSize = 24
```

Static members are accessed on the class:

```ts
const guid = Windows.Foundation.GuidHelper.CreateNewGuid()
const localSettings = Windows.Storage.ApplicationData.Current.LocalSettings
```

A failing call throws a JavaScript `Error` that contains the `HRESULT` returned by WinRT.

### Overloads

Overloaded methods are resolved by the number of arguments. When two overloads take the same number of arguments, call the overload by its WinRT overload name (the name shown in the Microsoft documentation under `[Overload]`, for example `CreateColorBrushWithColor`).

### Type checks

`instanceof` works against runtime classes as well as the interfaces they implement:

```ts
uri instanceof Windows.Foundation.Uri // true
uri instanceof Windows.Foundation.IStringable // true
```

Objects returned as an interface or as `Object` (`IInspectable`) are resolved to their concrete runtime class, so there is no need to cast or call `QueryInterface`. All members of the class, its interfaces and base classes are available on the returned object.

## Primitive types

| WinRT                            | JavaScript                                                         |
| -------------------------------- | ------------------------------------------------------------------ |
| `Boolean`                        | `boolean`                                                          |
| `Int8`, `Int16`, `Int32`         | `number`                                                           |
| `UInt8`, `UInt16`, `UInt32`      | `number`                                                           |
| `Int64`, `UInt64`                | `number`, or `BigInt` when the value doesn't fit in a safe integer |
| `Single`, `Double`               | `number`                                                           |
| `String`                         | `string`                                                           |
| Enums                            | `number` (combine flags with `\|`)                                 |
| `IReference<T>` (nullable value) | the value, or `null`                                               |
| Runtime classes and interfaces   | a JavaScript wrapper object, or `null`                             |

::: warning Strict strings and booleans
`String` and `Boolean` parameters are not coerced. Passing a number to a `String` parameter (or `null`) throws a `TypeError`. Convert values yourself:

```ts
textBlock.Text = String(count)
```

:::

### Nullable values (`IReference<T>`)

Pass a plain JavaScript value, `null` or `undefined` to properties and parameters of type `IReference<T>`. The runtime boxes the value for you:

```ts
datePicker.SelectedDate = null
```

### `Object` (`IInspectable`) values

When a parameter or property is typed as `Object`, JavaScript strings, numbers and booleans are boxed automatically, and boxed values read back as JavaScript primitives (`element.Tag = 'a'` then `element.Tag === 'a'`). To box to a specific WinRT type, use the `interop` helpers:

```ts
const values = new Windows.Foundation.Collections.PropertySet()
values.Insert('count', interop.uint(3))
values.Insert('name', 'NativeScript')
```

Available helpers: `interop.int`, `interop.uint`, `interop.long`, `interop.ulong`, `interop.short`, `interop.ushort`, `interop.byte`, `interop.float`, `interop.double`, `interop.bool`, `interop.char`, `interop.guid`, `interop.timeSpan` and `interop.dateTime`.

## Structs

Structs such as `Windows.Foundation.Point`, `Windows.UI.Color` or `Microsoft.UI.Xaml.Thickness` can be passed as plain objects using the WinRT field names:

```ts
border.BorderThickness = { Left: 1, Top: 1, Right: 1, Bottom: 1 }
border.Background = new Microsoft.UI.Xaml.Media.SolidColorBrush({
  A: 255,
  R: 101,
  G: 173,
  B: 241,
})
```

Structs returned from WinRT are copies. Changing a field on the returned object does **not** update the native value, assign the struct back instead:

```ts
const margin = element.Margin
margin.Left = 16
element.Margin = margin
```

### Date and time

`Windows.Foundation.DateTime` and `Windows.Foundation.TimeSpan` are structs measured in 100-nanosecond ticks, stored in their `UniversalTime` and `Duration` fields. Use the `interop` helpers to convert between a JavaScript `Date` and `DateTime` ticks:

```ts
// Date -> DateTime
datePicker.SelectedDate = {
  UniversalTime: interop.toWinRTDateTimeTicks(new Date()),
}

// DateTime -> Date
const date = interop.fromWinRTDateTimeTicks(
  datePicker.SelectedDate.UniversalTime,
)

// TimeSpan from milliseconds (1 ms = 10000 ticks)
timePicker.SelectedTime = { Duration: 1000 * 10000 }
```

Tick values larger than `Number.MAX_SAFE_INTEGER` are returned as `BigInt`.

To pass a `DateTime` or `TimeSpan` where WinRT expects an `Object`, box it with `interop.dateTime(date)` or `interop.timeSpan(milliseconds)`.

::: tip Raw struct bytes
Any struct can also be passed as an `ArrayBuffer` containing its raw (little-endian) memory layout. This is useful as a fallback when a plain object isn't accepted:

```ts
const buffer = new ArrayBuffer(8)
new DataView(buffer).setBigInt64(0, interop.toWinRTDateTimeTicks(date), true)
datePicker.MinYear = buffer
```

:::

## Collections

### Arrays

JavaScript arrays can be passed where WinRT expects an `IIterable<T>`, `IVectorView<T>` or `IVector<T>`:

```ts
const formatter =
  new Windows.Globalization.DateTimeFormatting.DateTimeFormatter('shortdate', [
    'en-US',
    'de-DE',
  ])
```

Collections returned from WinRT are wrapper objects, use their WinRT members to read them:

```ts
const languages = Windows.System.UserProfile.GlobalizationPreferences.Languages
for (let i = 0; i < languages.Size; i++) {
  console.log(languages.GetAt(i))
}
```

Maps (`IMap<K, V>`, `IPropertySet`) are used through `Insert`, `Lookup`, `HasKey`, `Remove` and `Size`.

### Byte arrays and buffers

Parameters of type `UInt8[]` (`byte[]`) accept an `ArrayBuffer`, a typed array or a `DataView` without copying. Methods that fill an array write directly into it:

```ts
const bytes = new Uint8Array(reader.UnconsumedBufferLength)
reader.ReadBytes(bytes)
```

To create an `IBuffer` from bytes, use `CryptographicBuffer`:

```ts
const buffer =
  Windows.Security.Cryptography.CryptographicBuffer.CreateFromByteArray(bytes)
```

## Out parameters

When a method has `out` parameters, omit them. The call returns an array containing the return value followed by each `out` value:

```ts
const [ok, value] = Windows.Data.Json.JsonValue.TryParse('"hello"')
if (ok) {
  console.log(value.GetString())
}
```

## Events

WinRT events are subscribed to by assigning a handler to the event property, and unsubscribed by assigning `null`:

```ts
const button = new Microsoft.UI.Xaml.Controls.Button()

button.Click = NSWinRT.asDelegate(
  'Microsoft.UI.Xaml.RoutedEventHandler',
  (sender, args) => {
    console.log('clicked')
  },
)

// unsubscribe
button.Click = null
```

Each event holds **one** JavaScript handler per object. Assigning a new handler replaces (and unsubscribes) the previous one.

A plain function can be assigned when the delegate type is not generic, but we recommend wrapping handlers with `NSWinRT.asDelegate(typeName, fn)`, which always subscribes reliably. For generic delegates such as `TypedEventHandler<TSender, TResult>`, pass the closed generic type name using the backtick arity notation:

```ts
datePicker.SelectedDateChanged = NSWinRT.asDelegate(
  'Windows.Foundation.TypedEventHandler`2<Microsoft.UI.Xaml.Controls.DatePicker,Microsoft.UI.Xaml.Controls.DatePickerSelectedValueChangedEventArgs>',
  (sender, args) => {
    console.log('date changed')
  },
)
```

::: warning Keep a reference
Keep a reference to handlers you create with `NSWinRT.asDelegate` (for example on your view instance) for as long as the subscription is needed.
:::

Static events are assigned on the class the same way:

```ts
Microsoft.UI.Xaml.Media.CompositionTarget.Rendering = () => {
  // called once per frame
}
// ...
Microsoft.UI.Xaml.Media.CompositionTarget.Rendering = null
```

## Async operations

WinRT async operations (`IAsyncAction`, `IAsyncOperation<T>`) are not promises. Convert them with `NSWinRT.toPromise`:

```ts
const folder = Windows.Storage.ApplicationData.Current.LocalFolder
const file = await NSWinRT.toPromise(
  folder.CreateFileAsync(
    'notes.txt',
    Windows.Storage.CreationCollisionOption.ReplaceExisting,
  ),
)
await NSWinRT.toPromise(Windows.Storage.FileIO.WriteTextAsync(file, 'Hello'))
```

The promise resolves with the operation's result, and rejects if the operation fails or is canceled. An optional timeout can be passed:

```ts
await NSWinRT.toPromise(operation, { timeoutMs: 10000 })
```

## .NET types

.NET libraries are available through the `System` global and the root namespaces of the app's other assemblies. Methods returning a .NET `Task` return an awaitable, which `NSWinRT.toPromise` also accepts:

```ts
const stopwatch = System.Diagnostics.Stopwatch.StartNew()
// ...
stopwatch.Stop()
console.log(stopwatch.ElapsedMilliseconds)
```

See [Adding Windows native code](/guide/native-code/windows#using-net-libraries) for using NuGet packages and your own .NET code.

## Win32 functions

Exported functions of Win32 DLLs can be called using `NSWinRT.win32`:

```ts
const user32 = NSWinRT.win32.define(
  'user32.dll',
  { MessageBoxW: ['pointer', 'wstr', 'wstr', 'u32'] },
  'i32',
)
user32.MessageBoxW(null, 'Hello from NativeScript', 'NativeScript', 0)
```

Supported types are `void`, `bool`, `i8`, `i16`, `i32`, `i64`, `u8`, `u16`, `u32`, `u64`, `f32`, `f64`, `pointer`, `wstr` (UTF-16 string) and `str` (ANSI string).

## Threading

JavaScript runs on the WinUI UI thread, so WinRT and XAML APIs can be called directly. A callback that WinRT or .NET invokes on a background thread (an event, a delegate, an overridden member, a `Task` continuation) runs on the UI thread (or on the worker that created it), while the calling thread waits for it. Its return value or exception is passed back to the caller. See [Multithreading](/guide/multithreading#windows).

You can add, remove and reparent XAML elements from any handler, including `CompositionTarget.Rendering`, `LayoutUpdated` and `SizeChanged`.
