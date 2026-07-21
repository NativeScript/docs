---
title: getBinary
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function getBinary(url: string): Promise<ArrayBuffer>;
```

Defined in: [http/index.d.ts:61](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L61)

Downloads the content from the specified URL as binary and returns an ArrayBuffer.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to request from. |

### Returns

`Promise`\<`ArrayBuffer`\>

## Call Signature

```ts
function getBinary(options: HttpRequestOptions): Promise<ArrayBuffer>;
```

Defined in: [http/index.d.ts:67](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L67)

Downloads the content from the specified URL as binary and returns an ArrayBuffer.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`HttpRequestOptions`](../../../../interfaces/HttpRequestOptions.md) | An object that specifies various request options. |

### Returns

`Promise`\<`ArrayBuffer`\>
