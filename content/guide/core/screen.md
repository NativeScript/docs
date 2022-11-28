---
title: Screen
---

This class allows you to get the screen size and scale of the device.

## Using Screen
To use the Screen class, import it from `@nativescript/core`.

```ts
import { Screen } from '@nativescript/core'
```
### Getting the device screen height

To get the absolute height of the device in device/density independent pixels, use the [heightDIPs](#heightdips) and to get the height in pixels use the [heightPixels](#heightpixels) property.

```ts
const heightDIPs: number = Screen.mainScreeen.heightDIPs

const heightPixels: number = Screen.mainScreeen.heightPixels
```

### Getting the device screen width

To get the absolute width of the device in device/density independent pixels, use the [widthDIPs](#widthdips) and to get the width in pixels, use the [widthPixels](#widthpixels) property.

```ts
const widthDIPs: number = Screen.mainScreeen.widthDIPs

const widthPixels: number = Screen.mainScreeen.widthPixels
```

## Getting screen display density
```ts
const scale: number = Screen.mainScreen.scale // 2.75
```

## Screen API

### heightDIPs

Gets the absolute height of the screen in density independent pixels(DIPs).

---
### widthDIPs

Gets the absolute width of the screen in density independent pixels(DIPs).

---

### scale

Gets the density of the display in DIPs.

---
### heightPixels

Gets the absolute height of the screen in pixels.

---

### widthPixels

Gets the absolute width of the screen in pixels.

