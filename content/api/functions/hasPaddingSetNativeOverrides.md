---
title: _hasPaddingSetNativeOverrides
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function _hasPaddingSetNativeOverrides(view: unknown, coreProto: object): boolean;
```

Defined in: [ui/styling/style-properties.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/styling/style-properties.ts)

Whether a subclass overrides any of the per-side [padding*Property.setNative]
handlers `coreProto` defines. An override owns padding application - the
consolidated paddingInternal write must stand down, or it would apply padding
around handlers designed to intercept it.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `unknown` |
| `coreProto` | `object` |

## Returns

`boolean`
