---
title: executeOnMainThread
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function executeOnMainThread(func: Function): any;
```

Defined in: [utils/index.d.ts:55](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/index.d.ts#L55)

Checks if the current thread is the main thread. Directly calls the passed function
if it is, or dispatches it to the main thread otherwise.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `func` | `Function` | The function to execute on the main thread. |

## Returns

`any`
