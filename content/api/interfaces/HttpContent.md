---
title: HttpContent
titleTemplate: :title - API / NativeScript
description: Encapsulates the content of an HttpResponse.
contributors: false
---

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Encapsulates the content of an HttpResponse.

## Extends

- [`HttpContentHandler`](../namespaces/Http/interfaces/HttpContentHandler.md).`BaseHttpContent`

## Properties

### raw

```ts
raw: any;
```

Defined in: [http/http-request-internal/index.d.ts:7](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-request-internal/index.d.ts#L7)

Gets the response body as raw data.

#### Inherited from

```ts
BaseHttpContent.raw
```

***

### requestURL

```ts
requestURL: string;
```

Defined in: [http/http-request-internal/index.d.ts:11](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-request-internal/index.d.ts#L11)

Gets the request options URL.

#### Inherited from

```ts
BaseHttpContent.requestURL
```

***

### toArrayBuffer

```ts
toArrayBuffer: () => ArrayBuffer;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response body as ArrayBuffer

#### Returns

`ArrayBuffer`

#### Inherited from

[`HttpContentHandler`](../namespaces/Http/interfaces/HttpContentHandler.md).[`toArrayBuffer`](../namespaces/Http/interfaces/HttpContentHandler.md#toarraybuffer)

***

### toFile

```ts
toFile: (destinationFilePath?: string) => File;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response body as file.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `destinationFilePath?` | `string` |

#### Returns

[`File`](../classes/File.md)

#### Inherited from

[`HttpContentHandler`](../namespaces/Http/interfaces/HttpContentHandler.md).[`toFile`](../namespaces/Http/interfaces/HttpContentHandler.md#tofile)

***

### toImage

```ts
toImage: () => Promise<ImageSource>;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response body as ImageSource.

#### Returns

`Promise`\<[`ImageSource`](../classes/ImageSource.md)\>

#### Inherited from

[`HttpContentHandler`](../namespaces/Http/interfaces/HttpContentHandler.md).[`toImage`](../namespaces/Http/interfaces/HttpContentHandler.md#toimage)

***

### toJSON

```ts
toJSON: (encoding?: HttpResponseEncoding) => any;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response body as JSON object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding?` | [`HttpResponseEncoding`](../enumerations/HttpResponseEncoding.md) |

#### Returns

`any`

#### Inherited from

[`HttpContentHandler`](../namespaces/Http/interfaces/HttpContentHandler.md).[`toJSON`](../namespaces/Http/interfaces/HttpContentHandler.md#tojson)

***

### toNativeImage

```ts
toNativeImage: () => Promise<any>;
```

Defined in: [http/http-request-internal/index.d.ts:15](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-request-internal/index.d.ts#L15)

Gets the response native image.

#### Returns

`Promise`\<`any`\>

#### Inherited from

```ts
BaseHttpContent.toNativeImage
```

***

### toNativeString

```ts
toNativeString: (encoding?: HttpResponseEncoding) => any;
```

Defined in: [http/http-request-internal/index.d.ts:19](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-request-internal/index.d.ts#L19)

Gets the response as native string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding?` | [`HttpResponseEncoding`](../enumerations/HttpResponseEncoding.md) |

#### Returns

`any`

#### Inherited from

```ts
BaseHttpContent.toNativeString
```

***

### toString

```ts
toString: (encoding?: HttpResponseEncoding) => string;
```

Defined in: [http/http-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/http-interfaces.ts)

Gets the response body as string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding?` | [`HttpResponseEncoding`](../enumerations/HttpResponseEncoding.md) |

#### Returns

`string`

#### Inherited from

[`HttpContentHandler`](../namespaces/Http/interfaces/HttpContentHandler.md).[`toString`](../namespaces/Http/interfaces/HttpContentHandler.md#tostring)
