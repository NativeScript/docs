---
title: getNativeApp
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function getNativeApp<T>(): T;
```

Defined in: application/helpers-common.d.ts:15

Get the current application instance.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any` |

## Returns

`T`

current application instance, UIApplication on iOS or android.app.Application on Android.
