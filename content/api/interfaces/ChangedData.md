---
title: ChangedData
titleTemplate: :title - API / NativeScript
description: Event args for "changed" event.
contributors: false
---

Defined in: [data/observable-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable-array/index.ts)

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

Defined in: [data/observable-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable-array/index.ts)

Change type.

***

### addedCount

```ts
addedCount: number;
```

Defined in: [data/observable-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable-array/index.ts)

Number of added items.

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

### index

```ts
index: number;
```

Defined in: [data/observable-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable-array/index.ts)

Start index.

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

### removed

```ts
removed: T[];
```

Defined in: [data/observable-array/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable-array/index.ts)

Removed items.
