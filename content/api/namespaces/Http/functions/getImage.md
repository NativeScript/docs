---
title: getImage
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function getImage(url: string): Promise<ImageSource>;
```

Defined in: [http/index.d.ts:35](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L35)

Downloads the content from the specified URL and attempts to decode it as an image.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to request from. |

### Returns

`Promise`\<[`ImageSource`](../../../../classes/ImageSource.md)\>

## Call Signature

```ts
function getImage(options: HttpRequestOptions): Promise<ImageSource>;
```

Defined in: [http/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L41)

Downloads the content from the specified URL and attempts to decode it as an image.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`HttpRequestOptions`](../../../../interfaces/HttpRequestOptions.md) | An object that specifies various request options. |

### Returns

`Promise`\<[`ImageSource`](../../../../classes/ImageSource.md)\>
