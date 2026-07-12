---
title: toDevicePixels
titleTemplate: :title - API / NativeScript
description: Converts PercentLengthType unit to device pixels.
contributors: false
---

```ts
const toDevicePixels: (length: PercentLengthType, auto: number, parentAvailableWidth: number) => number;
```

Defined in: ui/styling/length-shared.d.ts:13

Converts PercentLengthType unit to device pixels.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `length` | [`PercentLengthType`](../../CoreTypes/type-aliases/PercentLengthType.md) | The PercentLengthType to convert. |
| `auto` | `number` | Value to use for conversion of "auto". By default is Math.NaN. |
| `parentAvailableWidth` | `number` | Value to use as base when converting percent unit. By default is Math.NaN. |

## Returns

`number`
