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

- [@triniwiz/nativescript-image-cache-it](https://triniwiz.github.io/nativescript-plugins/api-reference/image-cache-it.html)
- [@nativescript-community/ui-image](https://github.com/nativescript-community/ui-image)

:::

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/Image.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/Image.png"/>
</DeviceFrame>

<Tabs>
<Tab flavor="typescript">

<<< @/../examples/typescript/src/ui/Image/template.xml#example

</Tab>
<Tab flavor="angular">

<<< @/../examples/angular/src/ui/Image/component.html#example

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/image.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/image.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/Image.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/Image/component.vue#example

</Tab>
</Tabs>

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

### Using SF Symbols on iOS (8.8+)

Images can also be used to display [SF Symbols](https://developer.apple.com/sf-symbols/) on iOS by using the `sys://` prefix along with the symbol name. These also support `iosSymbolEffect` for animated effects as well as `iosSymbolScale` with a possible value of `small|medium|large`;

```html
<GridLayout rows="auto,auto" columns="*,*">
  <image
    src="sys://photo.on.rectangle.angled"
    tintColor="green"
    [iosSymbolEffect]="symbolBounceEffect"
  />

  <image
    col="1"
    src="sys://photo.on.rectangle.angled"
    tintColor="green"
    [iosSymbolEffect]="symbolBounceEffect"
    iosSymbolScale="small"
  />

  <image
    row="1"
    src="sys://photo.on.rectangle.angled"
    tintColor="green"
    [iosSymbolEffect]="symbolBounceEffect"
    iosSymbolScale="medium"
  />

  <image
    row="1"
    col="1"
    src="sys://photo.on.rectangle.angled"
    tintColor="green"
    [iosSymbolEffect]="symbolBounceEffect"
    iosSymbolScale="large"
  />
</GridLayout>
```

```ts
import { ImageSymbolEffects } from '@nativescript/core'

const symbolBounceEffect = ImageSymbolEffects.Bounce
```

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/y_ULvYe5mTA" title="SF Symbol usage with NativeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This demonstrates using various built-in presets for effects and also using the `iosSymbolScale` property which is useful when you apply affects so the animation doesn't exceed the bounds of it's Image container (_as can be seen in the top left usage in the video_).

#### Custom Symbol Effects

You can also create custom effects using the full expansive iOS symbol API, for example:

```ts
import { ImageSymbolEffect } from '@nativescript/core'

const effect = new ImageSymbolEffect(NSSymbolBounceEffect.effect())
effect.options =
  NSSymbolEffectOptions.optionsWithSpeed(2).optionsWithRepeatCount(6)
effect.completion = (context) => {
  console.log('effect completed!', context)
}
const customSymbolEffect = effect
```

```html
<image
  src="sys://heart.fill"
  tintColor="red"
  [iosSymbolEffect]="customSymbolEffect"
/>
```

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/IuyGBoqJNKo" title="SF Symbol custom effects with NativeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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

### iosSymbolEffect (8.8+)

```ts
iosSymbolEffect: ImageSymbolEffect | ImageSymbolEffects
```

Gets or sets the effect of the SF Symbol. You can create your own custom `ImageSymbolEffect` or use presets defined from `ImageSymbolEffects`, for example:

```ts
export enum ImageSymbolEffects {
  Appear = 'appear',
  AppearUp = 'appearUp',
  AppearDown = 'appearDown',
  Bounce = 'bounce',
  BounceUp = 'bounceUp',
  BounceDown = 'bounceDown',
  Disappear = 'disappear',
  DisappearDown = 'disappearDown',
  DisappearUp = 'disappearUp',
  Pulse = 'pulse',
  Scale = 'scale',
  ScaleDown = 'scaleDown',
  ScaleUp = 'scaleUp',
  VariableColor = 'variableColor',
  Breathe = 'breathe',
  BreathePlain = 'breathePlain',
  BreathePulse = 'breathePulse',
  Rotate = 'rotate',
  RotateClockwise = 'rotateClockwise',
  RotateCounterClockwise = 'rotateCounterClockwise',
  Wiggle = 'wiggle',
  WiggleBackward = 'wiggleBackward',
  WiggleClockwise = 'wiggleClockwise',
  WiggleCounterClockwise = 'wiggleCounterClockwise',
  WiggleDown = 'wiggleDown',
  WiggleForward = 'wiggleForward',
  WiggleUp = 'wiggleUp',
  WiggleLeft = 'wiggleLeft',
  WiggleRight = 'wiggleRight',
}
```

Keep in mind that some are only iOS 17 or 18 and above.

### iosSymbolScale (8.8+)

```ts
iosSymbolScale: number
```

Gets or sets the scale of the SF Symbol.

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
