---
title: HttpRequestOptions
titleTemplate: :title - API / NativeScript
description: Provides options for the http requests.
contributors: false
---

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Provides options for the http requests.

## Properties

### content?

```ts
optional content?: string | FormData | ArrayBuffer | Uint8Array<ArrayBufferLike>;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets or sets the request body.

***

### dontFollowRedirects?

```ts
optional dontFollowRedirects?: boolean;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets or sets whether to *not* follow server's redirection responses.

***

### headers?

```ts
optional headers?: any;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets or sets the request headers in JSON format.

***

### method

```ts
method: string;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets or sets the request method.

***

### timeout?

```ts
optional timeout?: number;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets or sets the request timeout in milliseconds.

***

### url

```ts
url: string;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets or sets the request url.
