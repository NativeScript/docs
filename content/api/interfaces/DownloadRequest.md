---
title: DownloadRequest
titleTemplate: :title - API / NativeScript
description: Represents a single download request.
contributors: false
---

Defined in: ui/image-cache/index.d.ts:7

Represents a single download request.

## Properties

### completed?

```ts
optional completed?: (image: any, key: string) => void;
```

Defined in: ui/image-cache/index.d.ts:19

An optional function to be called when the download is complete.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `image` | `any` |
| `key` | `string` |

#### Returns

`void`

***

### error?

```ts
optional error?: (key: string) => void;
```

Defined in: ui/image-cache/index.d.ts:23

An optional function to be called if the download errors.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`void`

***

### key

```ts
key: string;
```

Defined in: ui/image-cache/index.d.ts:15

The key used to cache the image.

***

### url

```ts
url: string;
```

Defined in: ui/image-cache/index.d.ts:11

The url of the image.
