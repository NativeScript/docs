---
title: HttpContentHandler
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: http/http-interfaces.d.ts:57

## Extended by

- [`HttpContent`](../../../../interfaces/HttpContent.md)

## Properties

### toArrayBuffer

```ts
toArrayBuffer: () => ArrayBuffer;
```

Defined in: http/http-interfaces.d.ts:61

Gets the response body as ArrayBuffer

#### Returns

`ArrayBuffer`

***

### toFile

```ts
toFile: (destinationFilePath?: string) => File;
```

Defined in: http/http-interfaces.d.ts:77

Gets the response body as file.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `destinationFilePath?` | `string` |

#### Returns

[`File`](../../../../classes/File.md)

***

### toImage

```ts
toImage: () => Promise<ImageSource>;
```

Defined in: http/http-interfaces.d.ts:73

Gets the response body as ImageSource.

#### Returns

`Promise`\<[`ImageSource`](../../../../classes/ImageSource.md)\>

***

### toJSON

```ts
toJSON: (encoding?: HttpResponseEncoding) => any;
```

Defined in: http/http-interfaces.d.ts:69

Gets the response body as JSON object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding?` | [`HttpResponseEncoding`](../../../../enumerations/HttpResponseEncoding.md) |

#### Returns

`any`

***

### toString

```ts
toString: (encoding?: HttpResponseEncoding) => string;
```

Defined in: http/http-interfaces.d.ts:65

Gets the response body as string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoding?` | [`HttpResponseEncoding`](../../../../enumerations/HttpResponseEncoding.md) |

#### Returns

`string`
