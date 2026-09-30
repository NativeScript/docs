---
title: Extending WinRT classes and implementing interfaces
description: Subclass Windows Runtime classes and implement WinRT interfaces from JavaScript.
contributors:
  - triniwiz
---

::: warning Experimental
Subclassing and interface implementation on Windows are experimental and more limited than on Android and iOS. For most use cases prefer composition (wrapping native controls, as `@nativescript/core` does), or implement the native part in [C# or C++/WinRT](/guide/native-code/windows) and call it from JavaScript.
:::

On Windows, extending a native class or implementing a native interface creates a real .NET type behind the scenes. That type forwards the members you override to your JavaScript implementation, while all other members keep their native behavior.

## Implementing WinRT interfaces

Use `Object.extend` with an `interfaces` list, and implement the interface members using their WinRT names:

```ts
const Stringable = Object.extend({
  interfaces: [Windows.Foundation.IStringable],
  ToString() {
    return 'Hello from JavaScript'
  },
})

const instance = new Stringable()
console.log(instance.ToString()) // Hello from JavaScript
```

Multiple interfaces can be listed, and all of their members implemented in the same object.

## Extending WinRT classes

Call `extend` on the base class and pass the members to override. An optional name can be passed as the first argument:

```ts
const MyClass = SomeNamespace.SomeUnsealedClass.extend('MyClass', {
  init() {
    // called after the instance is constructed
  },
  SomeVirtualMethod(arg) {
    // override
  },
})

const instance = new MyClass()
```

- Only the members listed in the overrides object are overridden, all other members use the base implementation.
- `init(...args)` is called after the instance is constructed, with the constructor arguments.
- Getters and setters in the overrides object override the corresponding WinRT properties.

::: warning Sealed classes
Only classes that can be derived from (unsealed, "composable" classes) can be extended. Most WinRT runtime classes, for example `Windows.Data.Json.JsonObject`, are **sealed**. Overrides passed to `extend` on a sealed class have no effect.
:::

### Using TypeScript classes

With TypeScript, decorate a class that extends a WinRT class with `@NativeClass()`, and optionally with the `@Interfaces` and `@CSharpProxy` decorators:

```ts
@NativeClass()
@Interfaces([Windows.Foundation.IStringable])
@CSharpProxy('MyApp.Native.MyStringable')
class MyStringable extends SomeNamespace.SomeUnsealedClass {
  ToString() {
    return 'MyStringable'
  }
}
```

- `@Interfaces([...])` lists the interfaces implemented by the class.
- `@CSharpProxy(name)` sets the full name of the generated .NET type.

::: tip Note
As on Android and iOS, `@NativeClass()` makes sure the class is compiled in a way the runtime can intercept. See [the NativeClass decorator](/best-practices/native-class).
:::

## How it works

At build time the CLI scans your bundled JavaScript for `extend` calls and decorated classes, and generates matching C# proxy types that are compiled into the app. This is similar to the static binding generator used on Android.

In development builds, types that weren't found at build time are generated at runtime instead.

## Limitations

- Sealed classes can't be extended.
- JavaScript overrides are only called on the UI thread, see [Multithreading](/guide/multithreading#windows).
