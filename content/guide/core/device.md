---
title: Device
---

The `Device` class (singleton) contains information about the current device, such as `os`, `manufacturer`, `uuid` and more.


## Using the Device class

To use the Device class, import it from `@nativescript/core`.

```ts
import { Device } from '@nativescript/core'

### Getting the device type

To check if the device is a phone or tablet, use the [deviceType](#devicetype) property.

```ts
const deviceType: string = Device.deviceType // Phone
```

### Getting the device manufacturer

The device manufacturer is accessed using the [manufacturer](#manufacturer) property.

```ts
const manufacturer: string = Device.manufacturer // "Samsung"
```

### Getting the device model
```ts
const model: string = Device.model
```

### Getting the language of the device
```ts
const language: string = Device.language // "en"
```

 ### Checking the device operating system name
 To get the device operating system name, use the [os](#os) property:

 ```ts
 const os: string = Device.os // Android
 ```

### Getting the device operating system version

To access the operating system version of the device, use the [osVersion](#osversion) property:

```ts
const osVersion: string = Device.osVersion // 13
```

### Getting the device region

To get the country or region of the device, use the [region](#region) property:
```ts
const region: string = Device.region // ES 
```

### Getting the device SDK version

Use the [sdkVersion](#sdkversion) property to get the
SDK version:
```ts
const sdkVersion: string = Device.sdkVersion // 33
```

### Getting the device uuid
To access the device's universally unique identifier(uuid), use the [uuid](#uuid) property:

```ts
const uuid: string = Device.uuid // cb83c3347392bfe2
```

## Device API

### deviceType

Gets current device type. Available types: `"Phone" | "Tablet"`

---

### language

Gets the device language.

---
### manufacturer

Gets the manufacturer of the device.

---
### model

Gets the model of the device.

---
### region

Gets the device region/country.

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

Gets the <abbr title="Universal Unique Identifier">uuid</abbr> for the device.

::: info Note
If you need to receive the same uuid after the application is re-installed, consider using a plugin instead.
:::

---

