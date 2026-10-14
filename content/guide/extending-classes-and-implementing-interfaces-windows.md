---
title: Extending WinRT and .NET classes and implementing interfaces
description: Subclass WinRT and .NET classes and implement interfaces from JavaScript.
contributors:
  - triniwiz
---

::: warning Experimental
The Windows platform is experimental. See [Developing for Windows](/guide/windows/).
:::

On Windows you can extend unsealed WinRT classes (for example WinUI's `Panel` or `Control`) and .NET classes (including your own [C# code](/guide/native-code/windows#adding-your-own-c-code)), and implement WinRT and .NET interfaces. When native code calls a member you override, your JavaScript runs. Members you don't override keep their native behavior.

## Extending classes

Extend a class with the `class` syntax:

```ts
class FixedPanel extends Microsoft.UI.Xaml.Controls.Panel {
  constructor() {
    super()
    this.measures = 0
  }

  MeasureOverride(availableSize) {
    this.measures++
    return { Width: 120, Height: 40 }
  }

  ArrangeOverride(finalSize) {
    return super.ArrangeOverride(finalSize)
  }
}

const panel = new FixedPanel()
container.Children.Append(panel) // XAML now calls MeasureOverride/ArrangeOverride
```

Or call `extend` on the class, optionally passing a name first:

```ts
const FixedPanel = Microsoft.UI.Xaml.Controls.Panel.extend('FixedPanel', {
  init() {
    // called after construction, with the constructor arguments
  },
  MeasureOverride(availableSize) {
    return { Width: 120, Height: 40 }
  },
  ArrangeOverride(finalSize) {
    return this.super.ArrangeOverride(finalSize)
  },
})
```

The same works for .NET classes:

```cs
// App_Resources/Windows/src/Animal.cs
namespace MyCompany.Native;

public class Animal
{
    public Animal(string name) { Name = name; }
    public string Name { get; }
    public virtual string Speak() => "...";
    public string Describe() => $"{Name} says {Speak()}";
}
```

```ts
class Cat extends MyCompany.Native.Animal {
  Speak() {
    return 'Meow'
  }
}

console.log(new Cat('Tom').Describe()) // Tom says Meow
```

- Override methods and properties with their WinRT/.NET names. Override properties with `get`/`set` accessors.
- Constructor arguments passed to `super(...)` (or to `new` for classes made with `extend`) select and call the matching base constructor.
- `super.Member(...)` (or `this.super.Member(...)` in `extend`) calls the base implementation.
- You can override protected members and implement the abstract members of abstract classes.
- Fields you set on `this` are visible when native code calls your overrides, and `instanceof` works for your class and its native base classes.
- When native code hands an instance back to JavaScript (for example `panel.Children.GetAt(0)`), you get the same JavaScript object.
- Classes can be extended again, from JavaScript.

::: warning Sealed classes
Only unsealed classes can be extended. Most WinRT runtime classes, for example `Windows.Data.Json.JsonObject`, are **sealed**. A JavaScript subclass of a sealed class gets your JavaScript members, but native code never calls them.
:::

### TypeScript and `@NativeClass()`

Code written for Android and iOS works unchanged: `@NativeClass()` classes, TypeScript's ES5 output, and constructors ending with `return global.__native(this)` are all supported. On Windows the decorator isn't required.

```ts
@NativeClass()
class FixedPanel extends Microsoft.UI.Xaml.Controls.Panel {
  MeasureOverride(availableSize: Windows.Foundation.Size) {
    return { Width: 120, Height: 40 }
  }
}
```

## Implementing interfaces

Implement an interface by passing its members to the interface constructor:

```ts
const calculator = new MyCompany.Native.ICalculator({
  Compute(a, b) {
    return a * b
  },
  get Name() {
    return 'multiply'
  },
})

MyCompany.Native.Runner.Run(calculator, 6, 7) // 42
```

To implement interfaces on a class, list them with `@Interfaces`, or with an `interfaces` key when using `extend`:

```ts
@Interfaces([Windows.Foundation.IStringable])
class Named extends System.Object {
  ToString() {
    return 'named'
  }
}

const Stringable = Object.extend({
  interfaces: [Windows.Foundation.IStringable],
  ToString() {
    return 'Hello from JavaScript'
  },
})
```

## Lifetime

An instance of a JavaScript subclass is a JavaScript object together with the native object it drives. It is freed when neither your JavaScript nor native code references it.

As on Android, keep a reference to an instance that is only used from native code if its fields matter. If native code calls into an instance whose JavaScript object was garbage collected, a new JavaScript object of the same class is created for it, without the fields its constructor set. Instances of UI classes stay alive, with their fields, while they are in the visual tree.

## How it works

The runtime creates a .NET type for each subclass at runtime, deriving from the C#/WinRT projection of the base class (the way a C# subclass does). That type forwards the members you override, and the interface members you implement, to your JavaScript object. No build step or generated code is involved.

## Limitations

- Sealed classes can't be extended.
- JavaScript runs on the UI thread. Native code that calls an override on a background thread waits while it runs there, see [Multithreading](/guide/multithreading#windows).
