---
title: fromObjectRecursive
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function fromObjectRecursive(source: any): Observable;
```

Defined in: data/observable/index.d.ts:213

Creates an Observable instance and sets its properties according to the supplied JavaScript object.
This function will create new Observable for each nested object (expect arrays and functions) from supplied JavaScript object.
param obj - A JavaScript object used to initialize nativescript Observable instance.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `any` |

## Returns

[`Observable`](../classes/Observable.md)
