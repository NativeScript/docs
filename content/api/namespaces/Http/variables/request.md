---
title: request
titleTemplate: :title - API / NativeScript
description: Makes a generic http request using the provided options and returns a HttpResponse Object.
contributors: false
---

```ts
const request: (options: HttpRequestOptions) => Promise<HttpResponse>;
```

Defined in: [http/http-request/index.d.ts:7](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-request/index.d.ts#L7)

Makes a generic http request using the provided options and returns a HttpResponse Object.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`HttpRequestOptions`](../../../../interfaces/HttpRequestOptions.md) | An object that specifies various request options. |

## Returns

`Promise`\<[`HttpResponse`](../../../../interfaces/HttpResponse.md)\>
