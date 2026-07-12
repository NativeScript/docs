---
title: setInterval
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function setInterval(
   callback: Function, 
   milliseconds?: number, ...
   args: any[]): number;
```

Defined in: [timer/index.d.ts:21](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/timer/index.d.ts#L21)

Calls a function repeatedly with a delay between each call.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | `Function` | The function to be called. |
| `milliseconds?` | `number` | The delay between each function call. |
| ...`args?` | `any`[] | One or more parameter to use once the function is called. Defaults to no parameters. |

## Returns

`number`
