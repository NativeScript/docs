---
title: write
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function write(
   message: any, 
   category: string, 
   type?: number): void;
```

Defined in: trace/index.d.ts:82

Writes a message using the available writers.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `any` | The message to be written. |
| `category` | `string` | The category of the message. |
| `type?` | `number` | Optional, the type of the message - info, warning, error. |

## Returns

`void`
