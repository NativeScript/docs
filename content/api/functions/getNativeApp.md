---
title: getNativeApp
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function getNativeApp<T>(): T;
```

Defined in: [application/helpers-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/helpers-common.ts)

Get the current application instance.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any` |

## Returns

`T`

current application instance, UIApplication on iOS or android.app.Application on Android.
