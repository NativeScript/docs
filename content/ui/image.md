---
title: Image
---

`<Image>` is a UI component that shows an image from an [ImageSource](https://docs.nativescript.org/api-reference/classes/imagesource) or from a URL.

<!-- TODO: fix links -->
<!-- TODO: add flavors -->

::: tip
When working with images, consider following [the best practices](/performance.html#image-optimizations).
:::

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/Image.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Image.png" />
</DeviceFrame>

### Displaying an image from `App_Resources`

<!-- /// flavor plain -->

```xml
<Image src="res://icon" stretch="aspectFill" />
```

<!-- ///

/// flavor angular

```xml
<Image src="res://icon" stretch="aspectFill"> </image>
```

///

/// flavor react

```tsx
<Image src="res://icon" stretch="aspectFill" />
```

///

/// flavor vue

```xml
<Image src="res://icon" stretch="aspectFill" />
```

///

/// flavor svelte

```xml
<Image src="res://icon" stretch="aspectFill" />
```

/// -->

### Displaying an image relative to the `app` directory

<!-- /// flavor plain -->

```xml
<Image src="~/logo.png" stretch="aspectFill" />
```

<!-- ///

/// flavor angular

```xml
<Image src="~/logo.png" stretch="aspectFill"></image>
```

///

/// flavor react

```tsx
<Image src="~/logo.png" stretch="aspectFill" />
```

///

/// flavor vue

```xml
<Image src="~/logo.png" stretch="aspectFill" />
```

///

/// flavor svelte

```xml
<Image src="~/logo.png" stretch="aspectFill" />
```

/// -->

### Displaying an image from a URL

:::tip Note

Setting `loadMode` to `async` will prevent freezing the UI on Android when loading photos async (e.g. from online API)

:::

<!-- /// flavor plain -->

```xml
<Image
  src="https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png"
  stretch="aspectFill"
/>
```

<!-- ///

/// flavor angular

```xml
<Image
  src="https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png"
  stretch="aspectFill"
>
</image>
```

///

/// flavor react

```tsx
<Image
  src="https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png"
  stretch="aspectFill"
/>
```

///

/// flavor vue

```xml
<Image
  src="https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png"
  stretch="aspectFill"
/>
```

///

/// flavor svelte

```xml
<Image
  src="https://art.nativescript.org/logo/export/NativeScript_Logo_Blue_White.png"
  stretch="aspectFill"
/>
```

/// -->

### Displaying a `base64`-encoded image

<!-- /// flavor plain -->

```xml
<Image src="data:Image/png;base64,iVBORw..." stretch="aspectFill" />
```

<!--
///

/// flavor angular

```xml
<Image src="data:Image/png;base64,iVBORw..." stretch="aspectFill"></image>
```

///

/// flavor react

```tsx
<Image src="data:Image/png;base64,iVBORw..." stretch="aspectFill" />
```

///

/// flavor vue

```xml
<Image src="data:Image/png;base64,iVBORw..." stretch="aspectFill" />
```

///

/// flavor svelte

```xml
<Image src="data:Image/png;base64,iVBORw..." stretch="aspectFill" />
```

/// -->

### Rendering a font icon as image

<!-- /// flavor plain -->

```xml
<Image src="font://&#xf004;" class="fas" />
```

<!--
///

/// flavor angular

```xml
<Image src="font://&#xf004;" class="fas"></image>
```

///

/// flavor react

```tsx
<Image src="font://&#xf004;" class="fas" />
```

///

/// flavor vue

```xml
<Image src.decode="font://&#xf004;" class="fas" />
```

:::warning Note

In NativeScript-Vue, `.decode` is required for parsing properties that have HTML entities in them.

:::

///

/// flavor svelte

```xml
<Image src="font://&#xf004;" class="fas" />
```

/// -->

## Props

### src

```xml
<Image src="{{ src }}" />

<Image src="font://&#xf004;" />

<Image src="~/assets/images/cat.jpeg" />
```

```ts
export class HelloWorldModel extends Observable {
  src: string | ImageSource | ImageAsset = '~/assets/images/cat.jpeg'
}
```

Gets or sets the source([`ImageSource`](https://docs.nativescript.org/api-reference/classes/imagesource) | [`ImageAsset`](/api-reference/classes/imageasset)) of the image.

---

### imageSource

```ts
ImageSource.fromUrl(url)
  .then((imageSource: ImageSource) => {
    image.imageSource = imageSource
  })
  .catch((error) => {
    // handle errror
  })
```

### tintColor

```xml
<Image src="{{ src }}" tintColor="#ff00ffaa"/>
```

Sets a color to tint template images.

---

### stretch

```xml
<Image src="{{ src }}" class="fas" stretch="aspectFill"/>
```

Gets or sets the way the image is resized to fill its allocated space. For valid values, see [ImageStretch](https://docs.nativescript.org/api-reference/modules/coretypes.imagestretch).

---

### loadMode

```xml
<Image src="{{ src }}" loadMode="sync"/>

```

Gets or sets the loading strategy for the images on the local file system.
Valid values:

- `sync` - blocks the UI if necessary to display immediately. Only recommeded for small icons.
- `async` (`default`) - will load in the background, may appear with short delay, good for large images. When loading images from web they are always loaded async no regardless `loadMode` value.

---

### ...Inherited

For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/image).

## Native component

| Android                                                                                        | iOS                                                                          |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`android.widget.ImageView`](https://developer.android.com/reference/android/widget/ImageView) | [`UIImageView`](https://developer.apple.com/documentation/uikit/uiimageview) |
