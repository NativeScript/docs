---
title: CreateViewEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for creating a native view that will be added to the visual tree.
contributors: false
---

Defined in: ui/placeholder/index.d.ts:40

Event data containing information for creating a native view that will be added to the visual tree.

## Extends

- [`EventData`](EventData.md)

## Properties

### context?

```ts
optional context?: any;
```

Defined in: ui/placeholder/index.d.ts:49

An optional context for creating the view.

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

***

### view

```ts
view: any;
```

Defined in: ui/placeholder/index.d.ts:44

The native view that should be added to the visual tree.
