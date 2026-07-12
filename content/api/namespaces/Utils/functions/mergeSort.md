---
title: mergeSort
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function mergeSort(arr: any[], compareFunc: (a: any, b: any) => number): any[];
```

Defined in: [utils/index.d.ts:145](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/index.d.ts#L145)

Sorts an array by using merge sort algorithm (which ensures stable sort since the built-in Array.sort() does not promise a stable sort).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arr` | `any`[] | array to be sorted |
| `compareFunc` | (`a`: `any`, `b`: `any`) => `number` | function that will be used to compare two elements of the array |

## Returns

`any`[]
