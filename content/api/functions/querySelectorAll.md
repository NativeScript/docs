---
title: querySelectorAll
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function querySelectorAll(view: ViewBase, selector: string): ViewBase[];
```

Defined in: ui/core/view-base/index.d.ts:110

Gets a child view by selector.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](../classes/ViewBase.md) | The parent (container) view of the view to look for. |
| `selector` | `string` | The selector of the view to look for. Returns an instance of a view (if found), otherwise undefined. |

## Returns

[`ViewBase`](../classes/ViewBase.md)[]
