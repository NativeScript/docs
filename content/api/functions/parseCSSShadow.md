---
title: parseCSSShadow
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function parseCSSShadow(value: string): ShadowCSSValues;
```

Defined in: [ui/styling/css-shadow.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/css-shadow.ts)

Parse a string into ShadowCSSValues
Supports any valid css box/text shadow combination.

inspired by https://github.com/jxnblk/css-box-shadow/blob/master/index.js (MIT License)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | - |

## Returns

[`ShadowCSSValues`](../interfaces/ShadowCSSValues.md)
