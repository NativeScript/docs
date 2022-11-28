---
title: Platform
---

This class allows you to access information about the current device such as screen resolution,operating system, model, manufacturer,etc.


## Using Platform

The API of the Platform module is accessible through the following imports:

```ts
import { Device, Screen } from '@nativescript/core'
```

### Getting a device type

To check if a device is a phone or tablet, use the [deviceType](#devicetype) property.

```ts
const deviceType: string = Device.deviceType
```

### Getting a device manufacturer

A device's manufacturer get be accessed using the [manufacturer](#manufacturer) property.

```ts
const manufacturer: string = Device.manufacturer
```

### Getting the model of a device
```ts
const model: string = Device.model
```

 ### Checking a device operating system name
 To get the device operating system name, use the [os](#os) property:

 ```ts
 const os: string = Device.os
 ```

### Getting a device operating system version

To access the operating system version of the device, use the [osVersion](#osversion) property:

```ts
const osVersion: string = Device.osVersion
```

### Getting the device region
```ts
const region: string = Device.region
```

### Getting the device's sdk version

Use the [sdkVersion](#sdkversion) property to get the
SDK version:
```ts
const sdkVersion: string = Device.sdkVersion
```

### Getting the device uuid
To access the device's universally unique id(uuid), use the [uuid](#uuid) property:

```ts
const uuid: string = Device.uuid
```

### Getting the device screen height

To get the absolute height of the device, use the [heightDIPs](#heightdips) and/or [heightPixels](#heightpixels) property.

```ts
const heightDIPs: number = Screen.mainScreeen.heightDIPs

const heightPixels: number = Screen.mainScreeen.heightPixels
```

### Getting the device screen width

To get the absolute width of the device, use the [widthDIPs](#widthdips) and/or [widthPixels](#widthpixels) property.

```ts
const widthDIPs: number = Screen.mainScreeen.widthDIPs

const widthPixels: number = Screen.mainScreeen.widthPixels
```

## Getting screen display density
```ts
const scale: number = Screen.mainScreen.scale
```

## Platform API

### deviceType

Gets the type of the current device.

---

### language

Gets the preferred language.

---
### manufacturer

Gets the manufacturer of the device.

---
### model

Gets the model of the device.

---
### region

Gets the preferred region.

---
### os

Gets the OS of the device.

---
### osVersion

Gets the OS version.

---

### sdkVersion

Gets the SDK version.

---
### uuid

Gets the uuid.
On iOS this will return a new uuid if the application is re-installed on the device. If you need to receive the same uuid even after the application has been re-installed on the device, use this plugin: https://www.npmjs.com/package/nativescript-ios-uuid

---

### heightDIPs

Gets the absolute height of the screen in density independent pixels.

---
### widthDIPs

Gets the absolute width of the screen in pixels.

---

### scale

The logical density of the display. This is a scaling factor for the Density Independent Pixel unit.

---
### heightPixels

Gets the absolute height of the screen in pixels.

---

### widthPixels

Gets the absolute width of the screen in pixels.

