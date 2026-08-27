---
title: WindowSystemAppearanceChangedEventData
titleTemplate: :title - API / NativeScript
description: Event data for the `systemAppearanceChanged` event of a NativeWindow.
contributors: false
---

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Event data for the `systemAppearanceChanged` event of a NativeWindow.

## Extends

- [`NativeWindowEventData`](NativeWindowEventData.md)

## Properties

### eventName

```ts
eventName: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

The name of the event.

#### Inherited from

[`NativeWindowEventData`](NativeWindowEventData.md).[`eventName`](NativeWindowEventData.md#eventname)

***

### newValue

```ts
newValue: "dark" | "light";
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

The system appearance the window is now showing.

***

### object

```ts
object: Observable;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

The Observable instance that has raised the event.

#### Inherited from

[`NativeWindowEventData`](NativeWindowEventData.md).[`object`](NativeWindowEventData.md#object)

***

### window

```ts
window: NativeWindow;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

The NativeWindow that emitted the event.

#### Inherited from

[`NativeWindowEventData`](NativeWindowEventData.md).[`window`](NativeWindowEventData.md#window)
