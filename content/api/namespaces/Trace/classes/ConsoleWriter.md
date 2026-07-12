---
title: ConsoleWriter
titleTemplate: :title - API / NativeScript
description: An interface used to define a writer used by trace to print (log).
contributors: false
---

Defined in: trace/index.d.ts:130

An interface used to define a writer used by trace to print (log).

## Implements

- [`TraceWriter`](../../../../interfaces/TraceWriter.md)

## Constructors

### Constructor

```ts
new ConsoleWriter(): ConsoleWriter;
```

#### Returns

`ConsoleWriter`

## Methods

### write()

```ts
write(
   message: any, 
   category: string, 
   type?: number): void;
```

Defined in: trace/index.d.ts:131

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |
| `category` | `string` |
| `type?` | `number` |

#### Returns

`void`

#### Implementation of

[`TraceWriter`](../../../../interfaces/TraceWriter.md).[`write`](../../../../interfaces/TraceWriter.md#write)
