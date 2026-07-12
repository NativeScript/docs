---
title: throttle
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function throttle(fn: Function, delay?: number): (...args: any[]) => void;
```

Defined in: utils/shared.d.ts:17

Creates a throttled function that only invokes the provided function at most once per specified delay

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `Function` | The function to throttle |
| `delay?` | `number` | The number of milliseconds to delay |

## Returns

A new throttled function

(...`args`: `any`[]) => `void`
