---
title: ImageCache
contributors:
  - Ombuweb
  - NathanWalker
---

ImageCache allows you to cache an image from an HTTP request. You can alternatively use a plugin that auto handles image caching like [`@triniwiz/nativescript-image-cache-it`](https://www.npmjs.com/package/@triniwiz/nativescript-image-cache-it).

## Using ImageCache

For consistency, you should use a single ImageCache instance throughout your app.

```ts
import { ImageCache } from '@nativescript/core'

const imageCache = new ImageCache()
```

### Save an image to cache

To retrieve an image from a remote server and cache it, use either the [push](#push) or [enqueue](#enqueue) method. These methods cache the `android.graphics.Bitmap` (Android) or `UIImage` (iOS) instance.

```ts
imageCache.enqueue({
  url: this.url,
  key: 'cat',
  completed(image: android.graphics.Bitmap | UIImage, key) {
    console.log('Successfully retrived and cached the cat image')
  },
  error(key) {
    console.log('cache error')
  },
})
```

:::tip Note
To call the [push](#push) method instead, just replace `enqueue` with `push`
:::

### Getting an image from cache

To get an image from the cache, use the [get](#get) method.

```ts
const cachedImage = imageCache.get('cat')
```

## API

### constructor

```ts
const imageCache = new ImageCache()
```

Creates an ImageCache instance.

---

<!-- ### downloadedEvent
```ts
self.on(ImageCache.downloadedEvent, (args: DownloadedData) => {

    })
```

---

### downloadedEvent
```ts
self.on(ImageCache.downloadErrorEvent, (args: DownloadError) => {

    })
```

--- -->

### placeholder

```ts
imageCache.placeholder = imageSource
```

The image to be used to notify for a pending download request - e.g. loading indicator.

---

### maxRequests

```ts
imageCache.number = 2
```

The maximum number of simultaneous download requests. Defaults to 5

---

<!-- ### enableDownload()
```ts
imageCache.enableDownload()
```
Enables suspended download requests.

---
### disableDownload()
```ts
imageCache.disableDownload()
```
Temporary disables download requests.

--- -->

### push

```ts
imageCache.push(request)
```

Adds a new image to the **start** of the cache. `request` is an object with the following members:

- `url`(`string`): The url of the image.
- `key`(`string`): The name to uniquely identify the image in the cache.
- _Optional_: `completed` is a function to be called upon caching an image successfully.
- _Optional_: `error` is a function to be called when error has occured during caching.

---

### enqueue

```ts
imageCache.enqueue(request)
```

Adds a new image to the **end** of the cache. For more details about the `request` parameter, see the [push()](#push) method.

---

### get

```ts
imageCache.get(key)
```

Gets the image with a given `key` from the cache, or undefined if it's not in the cache.

### remove

```ts
imageCache.remove(imageKey)
```

Remove the specified image from the cache.

---

### clear

```ts
imageCache.clear()
```

Clears all the images from the cache.

---
