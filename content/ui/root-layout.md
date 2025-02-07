---
title: RootLayout
description: Layout container for dynamically layering views with a programmatic API.
contributors:
  - NathanWalker
  - Ombuweb
  - rigor789
---

`<RootLayout>` is a layout container designed to be used as the primary RootLayout container for your app with a built-in API to easily control dynamic view layers. It extends a [GridLayout](/ui/grid-layout) so has all the features of a GridLayout, enhanced with additional APIs.

## Examples

### Using RootLayout to open dynamic popups

```xml
<RootLayout>
  <!-- main content -->
  <GridLayout>
    <Label
      verticalAlignment="center"
      textAlignment="center"
      text="Main content area"
    />
  </GridLayout>
</RootLayout>
```

```ts
import { createPopupView } from './helper'
// create a dynamic popup
const view = createPopupView('#65adf1', 110, -30)
```

::: code-group

```ts [Opening]
// open the dynamic popup
getRootLayout()
  .open(view, {
    shadeCover: {
      color: '#000',
      opacity: 0.7,
      tapToClose: true,
    },
    animation: {
      enterFrom: {
        opacity: 0,
        translateY: 500,
        duration: 500,
      },
      exitTo: {
        opacity: 0,
        duration: 300,
      },
    },
  })
  .catch((ex) => console.error(ex))
```

```ts [Closing]
// close the dynamic popup
getRootLayout()
  .close(view, {
    opacity: 0,
    translate: { x: 0, y: -500 },
  })
  .catch((ex) => console.error(ex))
```

```ts [helper.ts]
// helper to create a popup view
export function createPopupView(
  color: string,
  size: number,
  offset: number,
): View {
  const layout = new StackLayout()
  layout.height = size
  layout.width = size
  layout.marginTop = offset
  layout.marginLeft = offset
  layout.backgroundColor = color
  layout.borderRadius = 10
  return layout
}
```

:::

<!--
### Listening to a view closed event

To handle a closed view event, listen to the view's `unloaded` event.

```ts
view.on(ViewBase.unloadedEvent, () => {
  // Do something
})
``` -->

## API

### getRootLayout()

```ts
import { getRootLayout } from '@nativescript/core'

const rootLayout: RootLayout = getRootLayout()
```

Returns the reference to the `RootLayout`, or `undefined` if there's no `<RootLayout>`.

::: danger RootLayout is designed to be used as a single instance
Technically you can place multiple RootLayouts in your templates, but only the last created instance will be accessible via the `getRootLayout` method. The API has been designed to control a single instance, usually placed as the root view of your Application.
:::

## Methods

### open()

```ts
open(view: View, options?: RootLayoutOptions): Promise<void>
```

Opens the `view` and brings it to the front by default.

See [View](/api/class/View), [RootLayoutOptions](#rootLayoutOptions).

### bringToFront()

```ts
bringToFront(view: View, animated?: boolean): Promise<void>
```

Brings the `view` to the front if it's not already. If the view is not currently shown inside the RootLayout, the call is ignored.

See [View](/api/class/View).

### close()

```ts
close(view: View, exitTo?: TransitionAnimation): Promise<void>
```

See [View](/api/class/View), [TransitionAnimation](#transitionAnimation).

### closeAll()

```ts
closeAll(): Promise<void>
```

Closes all views.

### getShadeCover()

```ts
getShadeCover(): View
```

Returns the shade cover (overlay view).

## RootLayoutOptions {#rootLayoutOptions}

### shadeCover

```ts
shadeCover: ShadeCoverOptions
```

See [ShadeCoverOptions](#shadeCoverOptions).

### animation

```ts
animation: {
  enterFrom?: TransitionAnimation,
  exitTo?: TransitionAnimation
}
```

`enterFrom` is only applied if it's the first one to be opened.

`exitFrom` is only applied if it's the last one to be closed

See [TransitionAnimation](#transitionAnimation).

## ShadeCoverOptions {#shadeCoverOptions}

### opacity

```ts
opacity: number
```

### color

```ts
color: Color
```

Sets the color of the shade cover.

See [Color](/api/class/Color).

### tapToClose

```ts
tapToClose: boolean
```

Allows closing by tapping on the shade cover.

### animation

```ts
animation: {
  enterFrom?: TransitionAnimation,
  exitTo?: TransitionAnimation
}
```

`enterFrom` is only applied if it's the first one to be opened.

`exitFrom` is only applied if it's the last one to be closed

See [TransitionAnimation](#transitionAnimation).

### ignoreShadeRestore

```ts
ignoreShadeRestore: boolean
```

## TransitionAnimation {#transitionAnimation}

```ts
interface TransitionAnimation {
  translateX?: number
  translateY?: number
  scaleX?: number
  scaleY?: number
  rotate?: number // degrees
  opacity?: number
  duration?: number // in ms
  curve?: CoreTypes.AnimationCurve
}
```

See [CoreTypes.AnimationCurve](/api/namespace/CoreTypes-AnimationCurve).
