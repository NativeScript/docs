---
title: ImageCache
---

ImageCache allows you to cache an image from an HTTP request.

## Using ImageCache

For consistency, you should use a single ImageCache instance throughout your app.

```ts
import { ImageCache } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  imageCache = new ImageCache()

  constructor() {
    super()
  }
}
```

### Save an image to cache

To retrieve an image from a remote server and cache it, use either the [push](#push) or [enqueue](#enqueue) method. These methods cache the `android.graphics.Bitmap` (Android) or `UIImage` (iOS) instance.

```ts
this.imageCache.enqueue({
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
const cachedImage = this.imageCache.get('cat')
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
this.imageCache.placeholder = imageSource
```

The image to be used to notify for a pending download request - e.g. loading indicator.

---

### maxRequests

```ts
this.imageCache.number = 2
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
this.imageCache.push(request)
```

Adds a new image to the **start** of the cache. `request` is an object with the following members:

- `url`(`string`): The url of the image.
- `key`(`string`): The name to uniquely identify the image in the cache.
- _Optional_: `completed` is a function to be called upon caching an image successfully.
- _Optional_: `error` is a function to be called when error has occured during caching.

---

### enqueue

```ts
this.imageCache.enqueue(request)
```

Adds a new image to the **end** of the cache. For more details about the `request` parameter, see the [push()](#push) method.

---

### get

```ts
this.imageCache.get(key)
```

Gets the image with a given `key` from the cache, or undefined if it's not in the cache.

### remove

```ts
this.imageCache.remove(imageKey)
```

Remove the specified image from the cache.

---

### clear

```ts
this.imageCache.clear()
```

Clears all the images from the cache.

---
