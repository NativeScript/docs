---
title: NativeWindowEventData
titleTemplate: :title - API / NativeScript
description: Base event data for NativeWindow events.
contributors: false
---

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Base event data for NativeWindow events.

## Extends

- [`WindowBaseEventData`](WindowBaseEventData.md)

## Extended by

- [`WindowOrientationChangedEventData`](WindowOrientationChangedEventData.md)
- [`WindowSystemAppearanceChangedEventData`](WindowSystemAppearanceChangedEventData.md)
- [`WindowLayoutDirectionChangedEventData`](WindowLayoutDirectionChangedEventData.md)

## Properties

### eventName

```ts
eventName: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

The name of the event.

#### Inherited from

[`WindowBaseEventData`](WindowBaseEventData.md).[`eventName`](WindowBaseEventData.md#eventname)

***

### object

```ts
object: Observable;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

The Observable instance that has raised the event.

#### Inherited from

[`WindowBaseEventData`](WindowBaseEventData.md).[`object`](WindowBaseEventData.md#object)

***

### window

```ts
window: NativeWindow;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

The NativeWindow that emitted the event.

#### Overrides

[`WindowBaseEventData`](WindowBaseEventData.md).[`window`](WindowBaseEventData.md#window)
