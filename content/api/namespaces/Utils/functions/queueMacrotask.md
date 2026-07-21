---
title: queueMacrotask
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function queueMacrotask(task: () => void): void;
```

Defined in: [utils/index.d.ts:48](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/index.d.ts#L48)

Queues the passed function to be ran in a macroTask

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `task` | () => `void` | the function to execute as a macroTask |

## Returns

`void`
