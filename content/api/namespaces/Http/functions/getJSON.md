---
title: getJSON
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function getJSON<T>(url: string): Promise<T>;
```

Defined in: [http/index.d.ts:23](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L23)

Downloads the content from the specified URL as a string and returns its JSON.parse representation.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to request from. |

### Returns

`Promise`\<`T`\>

## Call Signature

```ts
function getJSON<T>(options: HttpRequestOptions): Promise<T>;
```

Defined in: [http/index.d.ts:29](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/http/index.d.ts#L29)

Downloads the content from the specified URL as a string and returns its JSON.parse representation.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`HttpRequestOptions`](../../../../interfaces/HttpRequestOptions.md) | An object that specifies various request options. |

### Returns

`Promise`\<`T`\>
