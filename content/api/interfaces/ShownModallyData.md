---
title: ShownModallyData
titleTemplate: :title - API / NativeScript
description: Defines the data for the shownModally event.
contributors: false
---

Defined in: [ui/core/view/view-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-interfaces.ts)

Defines the data for the shownModally event.

## Extends

- [`EventData`](EventData.md)

## Properties

### closeCallback?

```ts
optional closeCallback?: Function;
```

Defined in: [ui/core/view/view-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-interfaces.ts)

A callback to call when you want to close the modally shown view.
Pass in any kind of arguments and you will receive when the callback parameter
of View.showModal is executed.

***

### context?

```ts
optional context?: any;
```

Defined in: [ui/core/view/view-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-interfaces.ts)

The context (optional, may be undefined) passed to the view when shown modally.

***

### eventName

```ts
eventName: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### object

```ts
object: Observable;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)
