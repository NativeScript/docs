---
title: ImageSource
description: Create an instance from different sources.
---

ImageSource provides a common interface over ([android.graphics.Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) for Android and [UIImage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class) for iOS, allowing you to create an images from URLs, local files, base64 strings, etc.
<!-- TODO: add links -->
<!-- TODO: add Preview -->

## How to use the ImageSource class

The following sections demonstrate how to create an ImageSource from different sources.

### Load an image using a resource name

To load an image from the [App_Resources]() folder, use the [fromResource](#fromresource) or [fromResourceSync](#fromresourcesync) method:

```ts
ImageSource.fromResource('logo')
  .then((image: ImageSource) => {
    console.log(image.width)
  })
  .catch(err => {
    console.error(err.stack)
  })
```

### Load an image from the device file system

To load an image from a file, use any of [fromFile](#fromfile), [fromFileOrResourceSync](#fromfileorresourcesync) or the [fromFileSync](#fromfilesync) method:

```ts
async function loadImage(){

  try {
    const imageFromFile: ImageSource = await ImageSource.fromFile(filePath)
    
  } catch (error) {

  }
```

### Create an image from a base64 string

To create an image from a base64 string, use the [fromBase64](#tobase64string) or [fromBase64Sync](#frombase64sync) method:

```ts
const base64Str = "some base64Str"
const image: ImageSource = ImageSource.fromBase64Sync(base64Str)

```
### Create an ImageSource from a font icon code
```ts
const font = new Font("sans serif")
const color = new Color("black")
const imageSource: ImageSource = ImageSource.fromFontIconCodeSync("\uf004", font, color)
```
### Save an image to a file on the File System

To save an ImageSource instance to a file, call the [saveToFile](#savetofile) or [saveToFileAsync](#savetofileasync) method on the instance.

```ts
async function saveImage(){

try {
    
    const folderDest: Folder = knownFolders.documents()

    folderDest.getFile('/images/test.png') //1. Create the file

    const pathDest = path.join(folderDest.path, '/images/test.png')
    const saved: boolean = await image.saveToFileAsync(pathDest, 'png') // Save to the file
    if (saved) {
      Dialogs.alert('Saved successfully')
    }
  } catch (err) {
    Dialogs.alert(err)
  }

}
```

## ImageSource API

### constructor()
```ts
const imageSource = new ImageSource(nativeSource)
```
 Creates a new ImageSource instance and sets the provided native source object. `nativeSource` object will update either the android or ios properties, depending on the target platform.

---
The ImageSource class provides the following image static methods loaders.

### fromAsset()

```ts
ImageSource.fromAsset(asset: ImageAsset)
.then((imageSource: ImageSource) =>{
// handle the created image
})
.catch(error =>{
    // handle errror
})
```

Loads an ImageSource instance from the specified [ImageAsset]() instance asynchronously.

---
### fromBase64()
```ts
ImageSource.fromBase64(base64String)
.then((imageSource: ImageSource) =>{
// handle the created image
})
.catch(error =>{
    // handle errror
})
```
Loads an ImageSource instance from the specified base64 encoded string asynchronously

---

### fromBase64Sync()
```ts
const imageSource: ImageSource = ImageSource.fromBase64Sync(base64String)
```
Loads an ImageSource instance from the specified base64 encoded string synchronously.

---
### fromData()
```ts
ImageSource.fromData(data)
.then((imageSource: ImageSource) =>{
// handle the created image
})
.catch(error =>{
    // handle errror
})
```
Asynchronously loads an ImageSource instance from the specified native image data(byte array) asynchronously. `data` can be a Stream on Android or [NSData](https://developer.apple.com/documentation/foundation/nsdata) on iOS.

---
### fromDataSync()

```ts
const imageSource: ImageSource = ImageSource.fromDataSync(data);
```

Loads an ImageSource instance from the specified native image data(byte array).

---

### fromFile()
```ts
ImageSource.fromFile(path)
.then((imageSource: ImageSource) =>{
// handle the created image
})
.catch(error =>{
    // handle errror
})
```

Loads an ImageSource instance from the specified file asynchronously.

---
### fromFileSync()
```ts
const imageSource: ImageSource = ImageSource.fromFileSync(data);
```

Loads an ImageSource instance from the specified file.

### fromFileOrResourceSync()
```ts
const imageSource: ImageSource = ImageSource.fromFileOrResourceSync(path);
```

Create an ImageSource from the specified local file or resource (if specified with the `"res://"` prefix).

---

### fromFontIconCodeSync()
```ts
const imageSource: ImageSource = ImageSource.fromFontIconCodeSync(source, font, color);
```

Creates a new ImageSource instance from the specified font icon code.

- `source`: The unicode string. 
- `font`: Font instance.
- `color`: Color instance.

---
### fromResource()
```ts
ImageSource.fromResource(name)
.then((imageSource: ImageSource) =>{
// handle the created image
})
.catch(error =>{
    // handle errror
})
```
Creates an ImageSource from the specified resource name(without the extension) asynchronously.

---
### fromResourceSync()

```ts
const imageSource: ImageSource = ImageSource.fromResourceSync(name)
```

Creates an ImageSource from the specified resource name(without the extension) synchronously.

---
### fromUrl()

```ts
ImageSource.fromUrl(url)
.then((imageSource: ImageSource) =>{
// handle the created image
})
.catch(error =>{
    // handle errror
})
```

Downloads and decodes the image from the provided url and creates a new ImageSource instance from it.

---

#### The loaded ImageSource instance has the following properties and methods.

### android
```ts
imageAndroid: android.graphics.BitMap = imageSource.android
```
The Android-specific([Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html)) instance.

---

### ios
```ts
imageIOS: UIImage = imageSource.ios
```
 The iOS-specific([UIImage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/)) instance.

---

### height
```ts
height: number = imageSource.height
```
Gets the height of the instance.

---
### width
```ts
width: number = imageSource.width
```
Gets the width of the instance.

---
### rotationAngle
```ts
rotationAngle: number = imageSource.rotationAngle
```

`Android-only`: Gets or sets the rotation angle that should be applied to the image.

---
### resizeAsync()
```ts
imageSource.resize(maxSize, options)
.then((resizedImage: ImageSource)=>{

}).
catch(error=>{

})
```

Asynchronously returns a new ImageSource that is a resized version of the imageSource with the same aspect ratio, and the max dimension set to the provided maxSize.

- `maxSize` is the maximum desired pixel dimension of the resulting image.
- _Optional_: (`Android` only) `options.filter` options.filter is a `boolean` which determines whether or not bilinear filtering should be used when scaling the bitmap. If `true` then bilinear filtering will be used when scaling which has better image quality at the cost of worse performance. If this is false then nearest-neighbor scaling is used instead which will have worse image quality but is faster. Recommended is to set filter to 'true' as the cost of bilinear filtering is typically minimal and the improved image quality is significant.

---
### resize()

```ts
resizedImage: ImageSource = imageSource.resize(maxSize, options)
```

Returns a new ImageSource that is a resized version of the imageSource with the same aspect ratio, and the max dimension set to the provided `maxSize`.

---

### saveToFile()
```ts
isSaved: boolean = imageSource.saveToFile(path, format, quality)
```

Saves this instance to the specified file, using the provided image `format` and `quality`.

---
### saveToFileAsync()

```ts
imageSource.saveToFileAsync(path, format, quality)
.then((isSaved:boolean)=>{

})
.catch(error=>{

})
```

Asynchronously saves this instance to the specified file, using the provided image `format` and `quality`.

- `path` (`string`) is the path of the file on the file system to save to.
- `format` (`'png' | 'jpeg' | 'jpg'`) is the format (encoding) of the image.
- _Optional_: `quality` specifies the quality of the encoding. It defaults to the maximum available quality, and varies on a scale of 0 to 100.

---
### setNativeSource()
```ts
imageSource.setNativeSource(nativeSource)
```
Sets the provided native source object, either a Bitmap for Android or a UIImage for iOS.

---
### toBase64String()

```ts
base64String : string = imageSource.toBase64String(format, quality)
```

Converts the image to base64 encoded string, using the provided image format and quality.

---
### toBase64StringAsync()

```ts
imageSource.toBase64StringAsync(format, quality)
            .then((base64String:string)=>{

            })
            .catch(error=>{

            })
```

Asynchronously converts the image to base64 encoded string, using the provided image format and quality.


## API Reference(s)
- [ImageSource](https://docs.nativescript.org/api-reference/classes/imagesource) class

## Native Component

- `android`: [android.graphics.Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html)
- `iOS`: [UIImage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class)

