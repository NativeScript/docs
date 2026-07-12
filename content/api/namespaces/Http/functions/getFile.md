---
title: getFile
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function getFile(url: string, destinationFilePath?: string): Promise<any>;
```

Defined in: http/index.d.ts:48

Downloads the content from the specified URL and attempts to save it as file.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL to request from. |
| `destinationFilePath?` | `string` | Optional. The downloaded file path. |

### Returns

`Promise`\<`any`\>

## Call Signature

```ts
function getFile(options: HttpRequestOptions, destinationFilePath?: string): Promise<File>;
```

Defined in: http/index.d.ts:55

Downloads the content from the specified URL and attempts to save it as file.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`HttpRequestOptions`](../../../../interfaces/HttpRequestOptions.md) | An object that specifies various request options. |
| `destinationFilePath?` | `string` | Optional. The downloaded file path. |

### Returns

`Promise`\<[`File`](../../../../classes/File.md)\>
