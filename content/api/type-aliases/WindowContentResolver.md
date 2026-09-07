---
title: WindowContentResolver
titleTemplate: :title - API / NativeScript
description: Supplies the UI for a window that needs content. Called once per window that needs it. Return a `View`, a `NavigationEntry` or a module name to set the windo...
contributors: false
---

```ts
type WindowContentResolver = (request: WindowContentRequest) => View | NavigationEntry | string | null | undefined;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Supplies the UI for a window that needs content. Called once per window that needs it.

Return a `View`, a `NavigationEntry` or a module name to set the window content,
`null` to take ownership and set the content asynchronously later, or `undefined`
to fall back to the application main entry.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | [`WindowContentRequest`](../interfaces/WindowContentRequest.md) |

## Returns

[`View`](../classes/View.md) \| `NavigationEntry` \| `string` \| `null` \| `undefined`
