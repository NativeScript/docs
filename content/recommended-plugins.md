---
title: Recommended Plugins
description: Recommended plugins for when core doesn't support it...
contributors:
  - rigor789
---

This page serves as a quick reference for finding plugins for commonly used features. Feel free to request additional plugins to be listed here by submitting a request on the [Docs GitHub Repository](https://github.com/NativeScript/docs/issues/new?title=[request]%20add%20`xyz`%20to%20the%20recommended%20plugins&body=%3C!--%20Please%20fill%20this%20with%20more%20details,%20and%20make%20sure%20to%20update%20the%20issue%20title.%20--%3E).

## WebSockets

### @valor/nativescript-websockets

For web-compatible WebSockets, we recommend installing the [`@valor/nativescript-websockets`](https://www.npmjs.com/package/@valor/nativescript-websockets) plugin:

::: code-group

```bash [NPM]
npm i --save @valor/nativescript-websockets
```

```bash [Yarn]
yarn add @valor/nativescript-websockets
```

:::

## Image Caching

For image-heavy applications, it's a good practice to adopt an image-caching strategy that helps keep the memory usage down (remote images are cached after first download for example).

### @triniwiz/nativescript-image-cache-it

One of the go-to plugins is [`@triniwiz/nativescript-image-cache-it`](https://www.npmjs.com/package/@triniwiz/nativescript-image-cache-it). It uses `SDWebImage` on iOS and `Glide` on android.

::: code-group

```bash [NPM]
npm i --save @triniwiz/nativescript-image-cache-it
```

```bash [Yarn]
yarn add @triniwiz/nativescript-image-cache-it
```

:::

### @nativescript-community/ui-image

Another great plugin is from the NativeScript-Community ['@nativescript-community/ui-image'](https://www.npmjs.com/package/@nativescript-community/ui-image). It uses `SDWebImage` on iOS and `Fresco` on android.

::: code-group

```bash [NPM]
npm i --save @nativescript-community/ui-image
```

```bash [Yarn]
yarn add @nativescript-community/ui-image
```

:::

## Text

### @nativescript-community/ui-label

As an alternative to the core [Label](/ui/label), check out [`@nativescript-community/ui-label`](https://www.npmjs.com/package/@nativescript-community/ui-label).

::: code-group

```bash [NPM]
npm i --save @nativescript-community/ui-label
```

```bash [Yarn]
yarn add @nativescript-community/ui-label
```

:::

## HTTP

### @nativescript-community/https

A drop-in replacement for the core HTTP with improvements and additions like connection pooling, form data support and certificate pinning. Check out [`@nativescript-community/https`](https://www.npmjs.com/package/@nativescript-community/https).

::: code-group

```bash [NPM]
npm i --save @nativescript-community/https
```

```bash [Yarn]
yarn add @nativescript-community/https
```

:::

### @klippa/nativescript-http

A drop-in replacement for the core HTTP with improvements and additions like connection pooling, form data support and certificate pinning. Check out [`@klippa/nativescript-http`](https://www.npmjs.com/package/@klippa/nativescript-http).

::: code-group

```bash [NPM]
npm i --save @klippa/nativescript-http
```

```bash [Yarn]
yarn add @klippa/nativescript-http
```

:::
