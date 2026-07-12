---
title: querySelectorAll
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function querySelectorAll(view: ViewBase, selector: string): ViewBase[];
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets a child view by selector.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](../classes/ViewBase.md) | The parent (container) view of the view to look for. |
| `selector` | `string` | The selector of the view to look for. Returns an instance of a view (if found), otherwise undefined. |

## Returns

[`ViewBase`](../classes/ViewBase.md)[]
