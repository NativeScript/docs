---
title: ChangedData
titleTemplate: :title - API / NativeScript
description: Event args for "changed" event.
contributors: false
---

Defined in: data/observable-array/index.d.ts:12

Event args for "changed" event.

## Extends

- [`EventData`](EventData.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

### action

```ts
action: string;
```

Defined in: data/observable-array/index.d.ts:16

Change type.

***

### addedCount

```ts
addedCount: number;
```

Defined in: data/observable-array/index.d.ts:28

Number of added items.

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

### index

```ts
index: number;
```

Defined in: data/observable-array/index.d.ts:20

Start index.

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

### removed

```ts
removed: T[];
```

Defined in: data/observable-array/index.d.ts:24

Removed items.
