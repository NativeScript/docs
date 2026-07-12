---
title: queueGC
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function queueGC(delay?: number, useThrottle?: boolean): any;
```

Defined in: [utils/index.d.ts:36](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/index.d.ts#L36)

An utility function that queues a garbage collection, multiple calls in quick succession are debounced by default and only one gc will be executed after 900ms.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `delay?` | `number` | Customize the delay |
| `useThrottle?` | `boolean` | Instead of default debounce strategy, use throttling |

## Returns

`any`
