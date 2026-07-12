---
title: getAncestor
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function getAncestor<T>(view: T, criterion: string | (() => any)): T;
```

Defined in: ui/core/view-base/index.d.ts:87

Gets an ancestor from a given type.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`ViewBase`](../classes/ViewBase.md) | [`ViewBase`](../classes/ViewBase.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | `T` | Starting view (child view). |
| `criterion` | `string` \| (() => `any`) | The type of ancestor view we are looking for. Could be a string containing a class name or an actual type. Returns an instance of a view (if found), otherwise undefined. |

## Returns

`T`
