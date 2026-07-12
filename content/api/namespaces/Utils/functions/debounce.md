---
title: debounce
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function debounce(
   fn: any, 
   delay?: number, 
   param2?: {
  leading?: boolean;
}): (...args: any[]) => void;
```

Defined in: utils/shared.d.ts:8

Creates a debounced function that delays invoking the provided function until after a specified delay

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `any` | The function to debounce |
| `delay?` | `number` | The number of milliseconds to delay |
| `param2?` | \{ `leading?`: `boolean`; \} | Options for the debounce behavior |
| `param2.leading?` | `boolean` | - |

## Returns

A new debounced function

(...`args`: `any`[]) => `void`
