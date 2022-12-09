---
title: RootLayout
---
<!-- TODO: Add Preview -->
`<RootLayout>` is a layout container designed to be used as the primary root layout container for your app with a built in api to easily control dynamic view layers. It extends a GridLayout so has all the features of a grid but enhanced with additional apis.

It's api can be observed here:

```ts
export class RootLayout extends GridLayout {
  open(view: View, options?: RootLayoutOptions): Promise<void>
  close(view: View, exitTo?: TransitionAnimation): Promise<void>
  bringToFront(view: View, animated?: boolean): Promise<void>
  closeAll(): Promise<void>
  getShadeCover(): View
}

export function getRootLayout(): RootLayout

export interface RootLayoutOptions {
  shadeCover?: ShadeCoverOptions
  animation?: {
    enterFrom?: TransitionAnimation
    exitTo?: TransitionAnimation
  }
}

export interface ShadeCoverOptions {
  opacity?: number
  color?: string
  tapToClose?: boolean
  animation?: {
    enterFrom?: TransitionAnimation // only applied if first one to be opened
    exitTo?: TransitionAnimation // only applied if last one to be closed
  }
  ignoreShadeRestore?: boolean
}

export interface TransitionAnimation {
  translateX?: number
  translateY?: number
  scaleX?: number
  scaleY?: number
  rotate?: number // in degrees
  opacity?: number
  duration?: number // in milliseconds
  curve?: any // CoreTypes.AnimationCurve (string, cubicBezier, etc.)
}
```

You can use `getRootLayout()` to get a reference to the root layout in your app from anywhere.

#### Example: RootLayout setup

Sample layout:

```html
<RootLayout height="100%" width="100%">
  <GridLayout height="100%">
    <label
      verticalAlignment="center"
      textAlignment="center"
      text="MAIN CONTENT AREA"
    ></label>
  </GridLayout>
</RootLayout>
```

Sample api usage:

```ts
// Open a dynamic popup
const view = this.getPopup('#EA5936', 110, -30)
getRootLayout()
  .open(view, {
    shadeCover: {
      color: '#000',
      opacity: 0.7,
      tapToClose: true
    },
    animation: {
      enterFrom: {
        opacity: 0,
        translateY: 500,
        duration: 500
      },
      exitTo: {
        opacity: 0,
        duration: 300
      }
    }
  })
  .catch(ex => console.error(ex))

// Close the dynamic popup
getRootLayout()
  .close(view, {
    opacity: 0,
    translate: { x: 0, y: -500 }
  })
  .catch(ex => console.error(ex))

function getPopup(color: string, size: number, offset: number): View {
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

<!-- You can play with [the toolbox app here](https://github.com/NativeScript/NativeScript/tree/master/apps/toolbox/src/pages/root-layout.ts)

You can also find a more [thorough example in this sample repo](https://github.com/williamjuan027/nativescript-rootlayout-demo) -->
