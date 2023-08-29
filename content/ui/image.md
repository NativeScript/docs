---
title: Image
description: UI component for rendering images
contributors:
  - rigor789
  - Ombuweb
---

`<Image>` is a UI component for rendering images. Images can be referenced by URL, resource URL (`res://`), base64 string, font resource (`font://`), [ImageSource](/api/class/ImageSource), and [ImageAsset](/api/class/ImageAsset).

<!-- ::: tip
When working with images, consider following [the best practices](/performance.html#image-optimizations).
::: -->

::: tip

Working with many images can quickly become a memory hog, for improved image handling it's recommended to use an Image caching library. Here are a few plugins from our community:

- [@triniwiz/image-cache-it](https://triniwiz.github.io/nativescript-plugins/api-reference/image-cache-it.html)
- [@nativescript-community/ui-image](https://github.com/nativescript-community/ui-image)

:::

<DeviceFrame type="ios">
<img src="../screenshots/ios/Image.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../screenshots/android/Image.png"/>
</DeviceFrame>

<<< @/../examples/src/ui/Image/template.xml#example

## Examples

### Displaying images from App_Resources

To display images from platform specific locations (`App_Resources/Android/drawable-XXX/`, or `App_Resources/iOS/`) prefix the source with `res://`.

```xml
<Image src="res://icon" />
```

### Displaying images from the src/assets directory

By default all assets placed in the `src/assets` directory (create the directory if it's not present) will be copied to the correct native platform location to be bundled with the app. To reference these images, prefix them with the `~` character, which is an alias pointing to the `src` folder.

```xml
<Image src="~/assets/logo.png" />
```

### Displaying images from URLs

Images can be displayed from remote URLs. Depending on the software version of the device, insecure URLs may be blocked (`http://`), it's recommended to always use secure URLs (`https://`).

```xml
<Image
  src="https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png"
/>
```

### Displaying `base64`-encoded images

Images can be displayed from `base64` encoded strings.

```xml
<Image src="data:Image/png;base64,iVBORw..." />
```

### Rendering font icons as images

Font symbols can be rendered as an image by prefixing the source with `font://` and setting the correct `font-family` via eg. a CSS class:

```xml
<Image src="font://&#xf004;" class="fas" />
```

```css
.fas {
  font-family: 'Font Awesome';
  /* ... */
}
```

## Props

### src

```ts
src: string | ImageSource | ImageAsset
```

Gets or sets the source.

A string can be a `http://`, `https://`, `res://`, `font://` or an absolute path (eg. `~/assets/image.png`).

See [`ImageSource`](/api/class/ImageSource) and [`ImageAsset`](/api/class/ImageAsset).

### imageSource

```ts
imageSource: ImageSource
```

Gets or sets the source from an `ImageSource` instance.

See [`ImageSource`](/api/class/ImageSource).

### tintColor

```ts
tintColor: Color | string
```

Sets a color to tint the image.

See [`Color`](/api/class/Color).

### stretch

```ts
stretch: ImageStretchType // "none" | "aspectFill" | "aspectFit" | "fill"
```

Gets or sets the way the image is resized to fill its allocated space.

See [`ImageStretchType`](/api/namespace/CoreTypes#imagestretchtype)

### loadMode

```ts
loadMode: 'sync' | 'async'
```

Gets or sets the loading strategy for the images.

Default value: `async`.

Valid values:

- `sync` - blocks the UI if necessary to display immediately. Only recommeded for small images like icons.
- `async` - loads in the background, the image may appear with a short delay, good for large images.

**Note:** When loading images from the web, they are always loaded `async`.

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/Image).

## Native component

- Android: [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView)
- iOS: [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview)
