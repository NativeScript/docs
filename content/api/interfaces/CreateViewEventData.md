---
title: CreateViewEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for creating a native view that will be added to the visual tree.
contributors: false
---

Defined in: [ui/placeholder/index.d.ts:40](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/placeholder/index.d.ts#L40)

Event data containing information for creating a native view that will be added to the visual tree.

## Extends

- [`EventData`](EventData.md)

## Properties

### context?

```ts
optional context?: any;
```

Defined in: [ui/placeholder/index.d.ts:49](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/placeholder/index.d.ts#L49)

An optional context for creating the view.

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

***

### view

```ts
view: any;
```

Defined in: [ui/placeholder/index.d.ts:44](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/placeholder/index.d.ts#L44)

The native view that should be added to the visual tree.
