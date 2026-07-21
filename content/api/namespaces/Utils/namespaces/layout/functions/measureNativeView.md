---
title: measureNativeView
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function measureNativeView(
   nativeView: any, 
   width: number, 
   widthMode: number, 
   height: number, 
   heightMode: number): {
  height: number;
  width: number;
};
```

Defined in: [utils/layout-helper/index.d.ts:82](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/layout-helper/index.d.ts#L82)

Converts device pixels to device independent pixes and measure the nativeView.
Returns the desired size of the nativeView in device pixels.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nativeView` | `any` | the nativeView to measure (UIView or android.view.View) |
| `width` | `number` | the available width |
| `widthMode` | `number` | width mode - UNSPECIFIED, EXACTLY or AT_MOST |
| `height` | `number` | the available hegiht |
| `heightMode` | `number` | height mode - UNSPECIFIED, EXACTLY or AT_MOST |

## Returns

```ts
{
  height: number;
  width: number;
}
```

### height

```ts
height: number;
```

### width

```ts
width: number;
```
