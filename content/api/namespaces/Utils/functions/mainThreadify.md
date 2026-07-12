---
title: mainThreadify
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function mainThreadify(func: Function): (...args: any[]) => void;
```

Defined in: utils/index.d.ts:70

Returns a function wrapper which executes the supplied function on the main thread.
The wrapper behaves like the original function and passes all of its arguments BUT
discards its return value.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `func` | `Function` | The function to execute on the main thread |

## Returns

The wrapper function which schedules execution to the main thread

(...`args`: `any`[]) => `void`
