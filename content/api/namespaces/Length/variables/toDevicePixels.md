---
title: toDevicePixels
titleTemplate: :title - API / NativeScript
description: Converts LengthType unit to device pixels.
contributors: false
---

```ts
const toDevicePixels: (length: LengthType, auto?: number) => number;
```

Defined in: [ui/styling/length-shared.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/length-shared.ts)

Converts LengthType unit to device pixels.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `length` | [`LengthType`](../../CoreTypes/type-aliases/LengthType.md) | The LengthType to convert. |
| `auto?` | `number` | Value to use for conversion of "auto". By default is Math.NaN. |

## Returns

`number`
