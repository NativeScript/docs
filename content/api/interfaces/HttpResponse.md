---
title: HttpResponse
titleTemplate: :title - API / NativeScript
description: Encapsulates HTTP-response information from an HTTP-request.
contributors: false
---

Defined in: http/http-interfaces.d.ts:36

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

Defined in: http/http-interfaces.d.ts:48

Gets the response content.

***

### headers

```ts
headers: Headers;
```

Defined in: http/http-interfaces.d.ts:44

Gets the response headers.

***

### statusCode

```ts
statusCode: number;
```

Defined in: http/http-interfaces.d.ts:40

Gets the response status code.
