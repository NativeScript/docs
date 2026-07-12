---
title: setTimeout
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function setTimeout(
   callback: Function, 
   milliseconds?: number, ...
   args: any[]): number;
```

Defined in: [timer/index.d.ts:7](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/timer/index.d.ts#L7)

Calls a function after a specified delay.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | `Function` | The function to be called. |
| `milliseconds?` | `number` | The time to wait before the function is called. Defaults to 0. |
| ...`args?` | `any`[] | One or more parameter to use once the function is called. Defaults to no parameters. |

## Returns

`number`
