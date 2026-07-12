---
title: setNativeApp
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function setNativeApp(app: any): void;
```

Defined in: [application/helpers-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/helpers-common.ts)

This is called internally to set the native application instance.
You typically do not need to call this directly.
However, it's exposed for special case purposes, such as custom application initialization.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `app` | `any` | The native application instance to set. This should be called once during application startup to set the native app instance. |

## Returns

`void`
