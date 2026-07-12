---
title: getString
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function getString(url: string): Promise<string>;
```

Defined in: [http/index.d.ts:11](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L11)

Downloads the content from the specified URL as a string.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to request from. |

### Returns

`Promise`\<`string`\>

## Call Signature

```ts
function getString(options: HttpRequestOptions): Promise<string>;
```

Defined in: [http/index.d.ts:17](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L17)

Downloads the content from the specified URL as a string.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`HttpRequestOptions`](../../../../interfaces/HttpRequestOptions.md) | An object that specifies various request options. |

### Returns

`Promise`\<`string`\>
