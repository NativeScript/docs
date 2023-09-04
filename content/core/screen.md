---
title: Screen
---

The `Screen` class provides methods and properties to retrieve the screen size and scale of the device.

## Importing Screen

To use the `Screen` class, import it from `@nativescript/core`.

```ts
import { Screen } from '@nativescript/core'
```

## Getting the Device Screen Size

To obtain the device screen size, you can use the following properties:

### heightDIPs

Returns the absolute height of the device screen in density-independent pixels (DIPs).

```ts
const heightDIPs: number = Screen.mainScreen.heightDIPs
```

### widthDIPs

Returns the absolute width of the device screen in density-independent pixels (DIPs).

```ts
const widthDIPs: number = Screen.mainScreen.widthDIPs
```

### heightPixels

Returns the absolute height of the device screen in pixels.

```ts
const heightPixels: number = Screen.mainScreen.heightPixels
```

### widthPixels

Returns the absolute width of the device screen in pixels.

```ts
const widthPixels: number = Screen.mainScreen.widthPixels
```

## Getting the Screen Display Density

To obtain the screen display density, you can use the `scale` property, which returns the density of the display in DIPs.

```ts
const scale: number = Screen.mainScreen.scale // e.g., 2.75
```

## API Reference

### Properties

- `heightDIPs`: Returns the absolute height of the screen in density-independent pixels (DIPs).
- `widthDIPs`: Returns the absolute width of the screen in density-independent pixels (DIPs).
- `scale`: Returns the density of the display in DIPs.
- `heightPixels`: Returns the absolute height of the screen in pixels.
- `widthPixels`: Returns the absolute width of the screen in pixels.

The "absolute height" refers to the exact height of the device's screen, without taking into account any scaling factors or density considerations. It represents the true physical height of the screen, unaffected by the screen's pixel density or any scaling applied by the operating system.

With the `Screen` class, you can easily retrieve the screen size and scale of the device, allowing you to create responsive and adaptive user interfaces in your NativeScript applications.
