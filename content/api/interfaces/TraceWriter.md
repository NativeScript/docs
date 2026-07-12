---
title: TraceWriter
titleTemplate: :title - API / NativeScript
description: An interface used to define a writer used by trace to print (log).
contributors: false
---

Defined in: [trace/index.d.ts:4](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/trace/index.d.ts#L4)

An interface used to define a writer used by trace to print (log).

## Methods

### write()

```ts
write(
   message: any, 
   category: string, 
   type?: number): void;
```

Defined in: [trace/index.d.ts:5](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/trace/index.d.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `any` |
| `category` | `string` |
| `type?` | `number` |

#### Returns

`void`
