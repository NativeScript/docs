---
title: ShownModallyData
titleTemplate: :title - API / NativeScript
description: Defines the data for the shownModally event.
contributors: false
---

Defined in: ui/core/view/view-interfaces.d.ts:5

Defines the data for the shownModally event.

## Extends

- [`EventData`](EventData.md)

## Properties

### closeCallback?

```ts
optional closeCallback?: Function;
```

Defined in: ui/core/view/view-interfaces.d.ts:15

A callback to call when you want to close the modally shown view.
Pass in any kind of arguments and you will receive when the callback parameter
of View.showModal is executed.

***

### context?

```ts
optional context?: any;
```

Defined in: ui/core/view/view-interfaces.d.ts:9

The context (optional, may be undefined) passed to the view when shown modally.

***

### eventName

```ts
eventName: string;
```

Defined in: data/observable/index.d.ts:9

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### object

```ts
object: Observable;
```

Defined in: data/observable/index.d.ts:13

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)
