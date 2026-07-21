---
title: HttpResponse
titleTemplate: :title - API / NativeScript
description: Encapsulates HTTP-response information from an HTTP-request.
contributors: false
---

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Encapsulates HTTP-response information from an HTTP-request.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`HttpContent`](HttpContent.md) |

## Properties

### content?

```ts
optional content?: T;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response content.

***

### headers

```ts
headers: Headers;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response headers.

***

### statusCode

```ts
statusCode: number;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response status code.
