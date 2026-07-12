---
title: getViewById
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function getViewById(view: ViewBase, id: string): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets a child view by id.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](../classes/ViewBase.md) | The parent (container) view of the view to look for. |
| `id` | `string` | The id of the view to look for. Returns an instance of a view (if found), otherwise undefined. |

## Returns

[`ViewBase`](../classes/ViewBase.md)
