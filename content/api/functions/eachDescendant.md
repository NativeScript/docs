---
title: eachDescendant
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function eachDescendant(view: ViewBase, callback: (child: ViewBase) => boolean): void;
```

Defined in: ui/core/view-base/index.d.ts:116

Iterates through all child views (via visual tree) and executes a function.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](../classes/ViewBase.md) | Starting view (parent container). |
| `callback` | (`child`: [`ViewBase`](../classes/ViewBase.md)) => `boolean` | A function to execute on every child. If function returns false it breaks the iteration. |

## Returns

`void`
