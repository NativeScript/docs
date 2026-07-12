---
title: ImageSource
titleTemplate: :title - API / NativeScript
description: Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images.
contributors: false
---

Defined in: image-source/index.d.ts:8

Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images.

## Constructors

### Constructor

```ts
new ImageSource(nativeSource?: any): ImageSource;
```

Defined in: image-source/index.d.ts:131

Creates a new ImageSource instance and sets the provided native source object (typically a Bitmap).
The native source object will update either the android or ios properties, depending on the target os.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nativeSource?` | `any` | The native image object. Will be either a Bitmap for Android or a UIImage for iOS. |

#### Returns

`ImageSource`

## Properties

### android

```ts
android: any;
```

Defined in: image-source/index.d.ts:32

The Android-specific [image](http://developer.android.com/reference/android/graphics/Bitmap.html) instance. Will be undefined when running on iOS.

***

### height

```ts
height: number;
```

Defined in: image-source/index.d.ts:12

Gets the height of this instance. This is a read-only property.

***

### ios

```ts
ios: any;
```

Defined in: image-source/index.d.ts:27

The iOS-specific [UIImage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/) instance. Will be undefined when running on Android.

***

### rotationAngle

```ts
rotationAngle: number;
```

Defined in: image-source/index.d.ts:22

Gets or sets the rotation angle that should be applied to the image. (Used in android)

***

### width

```ts
width: number;
```

Defined in: image-source/index.d.ts:17

Gets the width of this instance. This is a read-only property.

## Methods

### ~~fromAsset()~~

```ts
fromAsset(asset: ImageAsset): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:138

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`ImageAsset`](ImageAsset.md) | The ImageAsset instance used to create ImageSource. |

#### Returns

`Promise`\<`ImageSource`\>

#### Deprecated

Use ImageSource.fromAsset() instead.
Loads this instance from the specified asset asynchronously.

***

### ~~fromBase64()~~

```ts
fromBase64(source: string): Promise<boolean>;
```

Defined in: image-source/index.d.ts:194

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The Base64 string to load the image from. |

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

Use ImageSource.fromBase64() instead.
Loads this instance from the specified base64 encoded string asynchronously.

***

### ~~fromData()~~

```ts
fromData(data: any): Promise<boolean>;
```

Defined in: image-source/index.d.ts:180

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `any` | The native data (byte array) to load the image from. This will be either Stream for Android or NSData for iOS. |

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

Use ImageSource.fromData() instead.
Loads this instance from the specified native image data asynchronously.

***

### ~~fromFile()~~

```ts
fromFile(path: string): Promise<boolean>;
```

Defined in: image-source/index.d.ts:166

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The location of the file on the file system. |

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

Use ImageSource.fromFile() instead.
Loads this instance from the specified file asynchronously.

***

### ~~fromResource()~~

```ts
fromResource(name: string): Promise<boolean>;
```

Defined in: image-source/index.d.ts:152

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the resource (without its extension). |

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

Use ImageSource.fromResource() instead.
Loads this instance from the specified resource name asynchronously.

***

### getNativeSource()

```ts
getNativeSource(): any;
```

Defined in: image-source/index.d.ts:208

Gets the native source object (typically a Bitmap or a UIImage).

#### Returns

`any`

***

### ~~loadFromBase64()~~

```ts
loadFromBase64(source: string): boolean;
```

Defined in: image-source/index.d.ts:187

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The Base64 string to load the image from. |

#### Returns

`boolean`

#### Deprecated

Use ImageSource.fromBase64Sync() instead.
Loads this instance from the specified base64 encoded string.

***

### ~~loadFromData()~~

```ts
loadFromData(data: any): boolean;
```

Defined in: image-source/index.d.ts:173

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `any` | The native data (byte array) to load the image from. This will be either Stream for Android or NSData for iOS. |

#### Returns

`boolean`

#### Deprecated

Use ImageSource.fromDataSync() instead.
Loads this instance from the specified native image data.

***

### ~~loadFromFile()~~

```ts
loadFromFile(path: string): boolean;
```

Defined in: image-source/index.d.ts:159

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The location of the file on the file system. |

#### Returns

`boolean`

#### Deprecated

Use ImageSource.fromFileSync() instead.
Loads this instance from the specified file.

***

### ~~loadFromFontIconCode()~~

```ts
loadFromFontIconCode(
   source: string, 
   font: Font, 
   color: Color): boolean;
```

Defined in: image-source/index.d.ts:203

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The hex font icon code string |
| `font` | [`Font`](Font.md) | The font for the corresponding font icon code |
| `color` | [`Color`](Color.md) | The color of the generated icon image |

#### Returns

`boolean`

#### Deprecated

Use ImageSource.fromFontIconCode() instead.
Loads this instance from the specified font icon code.

***

### ~~loadFromResource()~~

```ts
loadFromResource(name: string): boolean;
```

Defined in: image-source/index.d.ts:145

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the resource (without its extension). |

#### Returns

`boolean`

#### Deprecated

Use ImageSource.fromResourceSync() instead.
Loads this instance from the specified resource name.

***

### resize()

```ts
resize(maxSize: number, options?: any): ImageSource;
```

Defined in: image-source/index.d.ts:258

Returns a new ImageSource that is a resized version of this image with the same aspect ratio, but the max dimension set to the provided maxSize.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxSize` | `number` | The maximum pixel dimension of the resulting image. |
| `options?` | `any` | Optional parameter, Only used for android, options.filter is a boolean which determines whether or not bilinear filtering should be used when scaling the bitmap. If this is true then bilinear filtering will be used when scaling which has better image quality at the cost of worse performance. If this is false then nearest-neighbor scaling is used instead which will have worse image quality but is faster. Recommended default is to set filter to 'true' as the cost of bilinear filtering is typically minimal and the improved image quality is significant. |

#### Returns

`ImageSource`

***

### resizeAsync()

```ts
resizeAsync(maxSize: number, options?: any): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:271

Returns a new ImageSource that is a resized version of this image with the same aspect ratio, but the max dimension set to the provided maxSize asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxSize` | `number` | The maximum pixel dimension of the resulting image. |
| `options?` | `any` | Optional parameter, Only used for android, options.filter is a boolean which determines whether or not bilinear filtering should be used when scaling the bitmap. If this is true then bilinear filtering will be used when scaling which has better image quality at the cost of worse performance. If this is false then nearest-neighbor scaling is used instead which will have worse image quality but is faster. Recommended default is to set filter to 'true' as the cost of bilinear filtering is typically minimal and the improved image quality is significant. |

#### Returns

`Promise`\<`ImageSource`\>

***

### saveToFile()

```ts
saveToFile(
   path: string, 
   format: "png" | "jpeg" | "jpg", 
   quality?: number): boolean;
```

Defined in: image-source/index.d.ts:223

Saves this instance to the specified file, using the provided image format and quality.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file on the file system to save to. |
| `format` | `"png"` \| `"jpeg"` \| `"jpg"` | The format (encoding) of the image. |
| `quality?` | `number` | Optional parameter, specifying the quality of the encoding. Defaults to the maximum available quality. Quality varies on a scale of 0 to 100. |

#### Returns

`boolean`

***

### saveToFileAsync()

```ts
saveToFileAsync(
   path: string, 
   format: "png" | "jpeg" | "jpg", 
quality?: number): Promise<boolean>;
```

Defined in: image-source/index.d.ts:231

Saves this instance to the specified file, using the provided image format and quality asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The path of the file on the file system to save to. |
| `format` | `"png"` \| `"jpeg"` \| `"jpg"` | The format (encoding) of the image. |
| `quality?` | `number` | Optional parameter, specifying the quality of the encoding. Defaults to the maximum available quality. Quality varies on a scale of 0 to 100. |

#### Returns

`Promise`\<`boolean`\>

***

### setNativeSource()

```ts
setNativeSource(nativeSource: any): void;
```

Defined in: image-source/index.d.ts:215

Sets the provided native source object (typically a Bitmap or a UIImage).
This will update either the android or ios properties, depending on the target os.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nativeSource` | `any` | The native image object. Will be either a Bitmap for Android or a UIImage for iOS. |

#### Returns

`void`

***

### toBase64String()

```ts
toBase64String(format: "png" | "jpeg" | "jpg", quality?: number): string;
```

Defined in: image-source/index.d.ts:238

Converts the image to base64 encoded string, using the provided image format and quality.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `"png"` \| `"jpeg"` \| `"jpg"` | The format (encoding) of the image. |
| `quality?` | `number` | Optional parameter, specifying the quality of the encoding. Defaults to the maximum available quality. Quality varies on a scale of 0 to 100. |

#### Returns

`string`

***

### toBase64StringAsync()

```ts
toBase64StringAsync(format: "png" | "jpeg" | "jpg", quality?: number): Promise<string>;
```

Defined in: image-source/index.d.ts:245

Converts the image to base64 encoded string, using the provided image format and quality asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `"png"` \| `"jpeg"` \| `"jpg"` | The format (encoding) of the image. |
| `quality?` | `number` | Optional parameter, specifying the quality of the encoding. Defaults to the maximum available quality. Quality varies on a scale of 0 to 100. |

#### Returns

`Promise`\<`string`\>

***

### fromAsset()

```ts
static fromAsset(asset: ImageAsset): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:38

Loads this instance from the specified asset asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`ImageAsset`](ImageAsset.md) | The ImageAsset instance used to create ImageSource. |

#### Returns

`Promise`\<`ImageSource`\>

***

### fromBase64()

```ts
static fromBase64(source: string): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:116

Loads this instance from the specified base64 encoded string asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The Base64 string to load the image from. |

#### Returns

`Promise`\<`ImageSource`\>

***

### fromBase64Sync()

```ts
static fromBase64Sync(source: string): ImageSource;
```

Defined in: image-source/index.d.ts:110

Loads this instance from the specified base64 encoded string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The Base64 string to load the image from. |

#### Returns

`ImageSource`

***

### fromData()

```ts
static fromData(data: any): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:104

Loads this instance from the specified native image data asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `any` | The native data (byte array) to load the image from. This will be either Stream for Android or NSData for iOS. |

#### Returns

`Promise`\<`ImageSource`\>

***

### fromDataSync()

```ts
static fromDataSync(data: any): ImageSource;
```

Defined in: image-source/index.d.ts:98

Loads this instance from the specified native image data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `any` | The native data (byte array) to load the image from. This will be either Stream for Android or NSData for iOS. |

#### Returns

`ImageSource`

***

### fromFile()

```ts
static fromFile(path: string): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:86

Loads this instance from the specified file asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The location of the file on the file system. |

#### Returns

`Promise`\<`ImageSource`\>

***

### fromFileOrResourceSync()

```ts
static fromFileOrResourceSync(path: string): ImageSource;
```

Defined in: image-source/index.d.ts:92

Creates a new ImageSource instance and loads it from the specified local file or resource (if specified with the "res://" prefix).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The location of the file on the file system. |

#### Returns

`ImageSource`

***

### fromFileSync()

```ts
static fromFileSync(path: string): ImageSource;
```

Defined in: image-source/index.d.ts:80

Loads this instance from the specified file.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | The location of the file on the file system. |

#### Returns

`ImageSource`

***

### fromFontIconCodeSync()

```ts
static fromFontIconCodeSync(
   source: string, 
   font: Font, 
   color: Color): ImageSource;
```

Defined in: image-source/index.d.ts:124

Creates a new ImageSource instance and loads it from the specified font icon code.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | The hex font icon code string |
| `font` | [`Font`](Font.md) | The font for the corresponding font icon code |
| `color` | [`Color`](Color.md) | The color of the generated icon image |

#### Returns

`ImageSource`

***

### fromResource()

```ts
static fromResource(name: string): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:56

Loads this instance from the specified resource name asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the resource (without its extension). |

#### Returns

`Promise`\<`ImageSource`\>

***

### fromResourceSync()

```ts
static fromResourceSync(name: string): ImageSource;
```

Defined in: image-source/index.d.ts:50

Loads this instance from the specified resource name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the resource (without its extension). |

#### Returns

`ImageSource`

***

### fromSystemImage()

```ts
static fromSystemImage(name: string, instance?: ImageBase): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:74

Loads this instance from the specified system image name asynchronously.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | the name of the system image |
| `instance?` | `ImageBase` | - |

#### Returns

`Promise`\<`ImageSource`\>

***

### fromSystemImageSync()

```ts
static fromSystemImageSync(name: string, instance?: ImageBase): ImageSource;
```

Defined in: image-source/index.d.ts:68

Loads this instance from the specified system image name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | the name of the system image |
| `instance?` | `ImageBase` | - |

#### Returns

`ImageSource`

***

### fromUrl()

```ts
static fromUrl(url: string): Promise<ImageSource>;
```

Defined in: image-source/index.d.ts:44

Downloads the image from the provided Url and creates a new ImageSource instance from it.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The link to the remote image object. This operation will download and decode the image. |

#### Returns

`Promise`\<`ImageSource`\>

***

### iosSymbolScaleFor()

```ts
static iosSymbolScaleFor(scale: iosSymbolScaleType): number;
```

Defined in: image-source/index.d.ts:62

(iOS only) Get system symbol scale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scale` | [`iosSymbolScaleType`](../type-aliases/iosSymbolScaleType.md) | symbol scale type |

#### Returns

`number`
