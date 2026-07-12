---
title: NavigatedData
titleTemplate: :title - API / NativeScript
description: Defines the data for the page navigation events.
contributors: false
---

Defined in: [ui/page/index.d.ts:15](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/page/index.d.ts#L15)

Defines the data for the page navigation events.

## Extends

- [`EventData`](EventData.md)

## Properties

### context

```ts
context: any;
```

Defined in: [ui/page/index.d.ts:19](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/page/index.d.ts#L19)

The navigation context (optional, may be undefined) passed to the page navigation events method.

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

### isBackNavigation

```ts
isBackNavigation: boolean;
```

Defined in: [ui/page/index.d.ts:24](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/page/index.d.ts#L24)

Represents if a navigation is forward or backward.

***

### object

```ts
object: Observable;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)
