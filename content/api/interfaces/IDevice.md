---
title: IDevice
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [platform/device/index.d.ts:4](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L4)

## Properties

### deviceType

```ts
deviceType: "Phone" | "Tablet";
```

Defined in: [platform/device/index.d.ts:39](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L39)

Gets the type of the current device.
Available values: "Phone", "Tablet".

***

### language

```ts
language: string;
```

Defined in: [platform/device/index.d.ts:52](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L52)

Gets the preferred language. For example "en" or "en-US".

***

### manufacturer

```ts
manufacturer: string;
```

Defined in: [platform/device/index.d.ts:9](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L9)

Gets the manufacturer of the device.
For example: "Apple" or "HTC" or "Samsung".

***

### model

```ts
model: string;
```

Defined in: [platform/device/index.d.ts:15](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L15)

Gets the model of the device.
For example: "Nexus 5" or "iPhone".

***

### os

```ts
os: string;
```

Defined in: [platform/device/index.d.ts:21](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L21)

Gets the OS of the device.
For example: "Android" or "iOS".

***

### osVersion

```ts
osVersion: string;
```

Defined in: [platform/device/index.d.ts:27](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L27)

Gets the OS version.
For example: 4.4.4(android), 8.1(ios)

***

### region

```ts
region: string;
```

Defined in: [platform/device/index.d.ts:57](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L57)

Gets the preferred region. For example "US".

***

### sdkVersion

```ts
sdkVersion: string;
```

Defined in: [platform/device/index.d.ts:33](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L33)

Gets the SDK version.
For example: 19(android), 8.1(ios).

***

### uuid

```ts
uuid: string;
```

Defined in: [platform/device/index.d.ts:47](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/platform/device/index.d.ts#L47)

Gets the uuid.
On iOS this will return a new uuid if the application is re-installed on the device.
If you need to receive the same uuid even after the application has been re-installed on the device,
use this plugin: https://www.npmjs.com/package/nativescript-ios-uuid
