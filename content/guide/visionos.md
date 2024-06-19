---
title: Developing with visionOS
description: New exciting realities await you when developing apps for Vision Pro.
contributors:
  - NathanWalker
  - rigor789
---

<img class="mx-auto" src="../assets/images/guide/vision-pro.png" alt="Vision Pro" />

Apple provides [visionOS](https://developer.apple.com/visionos/) development starting with [Xcode 15.2](https://developer.apple.com/xcode/resources/) or higher.

::: info Note
You will need an [Apple developer account](https://developer.apple.com/programs/enroll/) to download developer tools and SDKs.
:::

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/1NGoY74-vZc" title="Developing for visionOS with NativeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Create a visionOS project

You can develop with a physical Vision Pro plugged in or using the Vision Pro Simulator.

**You will need at least the 8.7+ NativeScript CLI**:

```bash
npm install -g nativescript@latest
```

You can now use the `--vision` (or `--visionos`) flags when creating your app.

```bash
ns create myapp --vision
```

This will setup a preconfigured visionOS ready app using a plain TypeScript base.

If you prefer a flavor, you can use any of the following:

- [Angular](https://angular.io/): `ns create myapp --vision-ng`
- [React](https://react.dev/): `ns create myapp --vision-react`
- [Solid](https://www.solidjs.com/): `ns create myapp --vision-solid`
- [Svelte](https://svelte.dev/): `ns create myapp --vision-svelte`
- [Vue (3.x)](https://vuejs.org/): `ns create myapp --vision-vue`

All projects are preconfigured with [tailwindcss](https://tailwindcss.com).

### Run your visionOS project

Open the Vision Pro Simulator, then run your app with:

```bash
ns run vision --no-hmr
```

The `vision` platform target is a shorthand alias for `visionos` so this can also be used:

```bash
ns run visionos --no-hmr
```

#### Develop with physical Vision Pro

You can use a [Developer Strap](https://developer.apple.com/visionos/developer-strap/purchase) to connect your Vision Pro to your Mac.

> The Developer Strap is an optional accessory that provides a USB-C connection between Apple Vision Pro and Mac and is helpful for accelerating the development of graphics-intensive apps and games. The Developer Strap provides the same audio experience as the in-box Right Audio Strap, so developers can keep the Developer Strap attached for both development and testing.

Once connected, you can run `ns device` to list all connected physical devices:

```bash
% ns device
Searching for devices...

 Connected devices & emulators
┌───┬──────────────────┬──────────┬───────────────────────────┬────────┬───────────┬─────────────────┐
│ # │ Device Name      │ Platform │ Device Identifier         │ Type   │ Status    │ Connection Type │
│ 1 │ Apple Vision Pro │ visionOS │ 00008112-001A10812278A01E │ Device │ Connected │ USB             │
```

You can then run on that device as follows:

```bash
ns run visionos --no-hmr --device=00008112-001A10812278A01E
```

### What makes a project work on visionOS?

Primarily 2 key elements make up a NativeScript driven visionOS project:

1. `App_Resources/visionOS/src/NativeScriptApp.swift`
2. The following dependencies:

```json
{
  "dependencies": {
    "@nativescript/core": "~8.7.0"
  },
  "devDependencies": {
    "@nativescript/visionos": "~8.7.0",
    "@nativescript/webpack": "~5.0.21"
  }
}
```

## Design Guidelines and Notes

We strongly encourage developers to understand and use Apple's system glass materials throughout their apps in addition to closely following their design guidelines.

We recommend watching the following WWDC 2023 videos covering visionOS for fundamental understandings:

- [Design for spatial user interfaces](https://developer.apple.com/videos/play/wwdc2023/10076/)
- [Design considerations for vision and motion](https://developer.apple.com/videos/play/wwdc2023/10078/)
- [Meet UIKit for spatial computing](https://developer.apple.com/videos/play/wwdc2023/111215/)
- [Create accessible spatial experiences](https://developer.apple.com/videos/play/wwdc2023/10034/)
- [Explore immersive sound design](https://developer.apple.com/videos/play/wwdc2023/10271/)
- [Deliver video content for spatial experiences](https://developer.apple.com/videos/play/wwdc2023/10071/)
- [Create a great spatial playback experience](https://developer.apple.com/videos/play/wwdc2023/10070/)

You may by interested in more [here](https://developer.apple.com/videos/wwdc2023/).

### CSS Adjustments for visionOS

You will likely want to make your Pages transparent to allow the natural glass materials to come through by using this CSS specifier:

```css
.ns-visionos Page {
  background-color: transparent;
}
```

When running your app on `visionOS`, you can scope CSS selectors where needed by the root level `.ns-visionos` class.

### Hover effect for visionOS materials

All standard/system UI Component usages like Button, Switch, Pickers, etc. will automatically get system hover style effects on visionOS.

It's common to add `tap` bindings in NativeScript to things like StackLayout, GridLayout, etc. which are just [UIView](https://developer.apple.com/documentation/uikit/uiview)'s.

You can use new @nativescript/core APIs to easily enable visionOS [hover styles](https://developer.apple.com/documentation/uikit/uihoverstyle) on any view type throughout your app or customize per view.

Apple discusses some of the important spatial considerations with these effects in [this session](https://developer.apple.com/videos/play/wwdc2023/111215/).

Each view can specify it's own custom `hoverStyle` as follows:

```xml
<GridLayout hoverStyle="{{customHoverStyle}}" tap="{{tapAction}}"/>
```

The `hoverStyle` property can be defined as a `string` or `VisionHoverOptions`.

```ts
import { VisionHoverOptions } from '@nativescript/core'

const hoverStyle: VisionHoverOptions = {
  effect: 'highlight',
  shape: 'rect',
  shapeCornerRadius: 16,
}
```

This would apply a visionOS system highlight rectangle with a cornerRadius of 16 to that `GridLayout` when a hover is detected.

The options are as follows:

```ts
export type VisionHoverEffect = 'automatic' | 'highlight' | 'lift'
export type VisionHoverShape = 'circle' | 'rect'
export type VisionHoverOptions = {
  effect: VisionHoverEffect
  shape?: VisionHoverShape
  shapeCornerRadius?: number
}
```

When a `string` is provided, it will look for predefined `hoverStyle`'s within the `TouchManager.visionHoverOptions` that match the string name. This allows you to predefine and share custom hoverStyle's across your entire app.

You can enable these effects globally throughout your app for any view which has a `tap` binding by enabling:

```ts
TouchManager.enableGlobalHoverWhereTap = true
```

This allows you to predefine any number of custom `hoverStyle`'s you'd like to use throughout your app. You could do so in the `app.ts` or `main.ts` (aka, bootstrap file), for example:

```ts
TouchManager.enableGlobalHoverWhereTap = true
TouchManager.visionHoverOptions = {
  default: {
    effect: 'highlight',
    shape: 'rect',
    shapeCornerRadius: 16,
  },
  slimBox: {
    effect: 'lift',
    shape: 'rect',
    shapeCornerRadius: 8,
  },
  round: {
    effect: 'lift',
    shape: 'circle',
  },
}
```

You could then apply custom `hoverStyle`'s by their name anywhere in your app:

```xml
<GridLayout hoverStyle="default" tap="tapAction"/>
<GridLayout hoverStyle="slimBox" tap="tapAction"/>
<GridLayout hoverStyle="round" tap="tapAction"/>
```

You can also disable a hoverStyle on any view by adding the `visionIgnoreHoverStyle` property if desired.

::: info Note
When no `hoverStyle` is defined and not using `TouchManager.enableGlobalHoverWhereTap`, visionOS will use default behavior by enabling hoverStyle's on standard controls as mentioned. Other views would have no hoverStyle as expected.
:::

### View template visionOS scoping

You can also scope sections of your view templates specifically for visionOS layouts as needed:

```xml
<visionos>
    <Label>I only show on visionOS</Label>
</visionos>
<ios>
    <Label>I only show on iOS</Label>
</ios>
<android>
    <Label>I only show on Android</Label>
</android>
```

::: info Note
You should not have to do a lot of this throughout apps in general but these options are available to you where desired.
:::

## NativeScript and the SwiftUI App Lifecycle

Starting with NativeScript 8.6 we support the [SwiftUI App](https://developer.apple.com/documentation/swiftui/app) Lifecycle for the first time. For a better understanding of the SwiftUI App Lifecycle, we recommend the following articles:

- https://peterfriese.dev/posts/ultimate-guide-to-swiftui2-application-lifecycle/
- https://dev.to/sam_programiz/swiftui-app-life-cycle-2n68

> how can we tell the compiler about the entry point to our application?

Historically with NativeScript apps, we would use the [Objective C main entry](https://github.com/NativeScript/ios/blob/d67588cb3866212ccd86b105edf1207fddde2db9/project-template/internal/main.m#L19) to define the entry point where the NativeScript engine was intialized and your app would be booted.

We now also support a SwiftUI `@main` entry via a single `App_Resources/visionOS/src/NativeScriptApp.swift` file:

```swift
import SwiftUI

@main
struct NativeScriptApp: App {

    var body: some Scene {
        NativeScriptMainWindow()
    }
}
```

The `NativeScriptMainWindow` is a SwiftUI [WindowGroup](https://developer.apple.com/documentation/swiftui/windowgroup) which returns a Scene, your NativeScript app. In visionOS apps, you can expand this `struct` to support new [Scenes](https://developer.apple.com/documentation/swiftui/scene) and [Spaces](https://developer.apple.com/documentation/visionos/presenting-windows-and-spaces) with new and exciting window styles like [volumetric](https://developer.apple.com/documentation/swiftui/windowstyle/volumetric/) as well as [Immersive Spaces](https://developer.apple.com/documentation/visionos/creating-fully-immersive-experiences).

`NativeScriptMainWindow` is a SwiftUI struct representing a Scene itself which looks like this:

```swift
struct NativeScriptMainWindow: Scene {
    var body: some Scene {
        WindowGroup {
            NativeScriptAppView(found: { windowScene in
                NativeScriptEmbedder.sharedInstance().setWindowScene(windowScene)
            }).onAppear {
                // Your app is booted here!
                DispatchQueue.main.async {
                    NativeScriptStart.boot()
                }
            }
        }
        .windowStyle(.plain)
    }

    init() {
        // NativeScript engine is configured here!
        NativeScriptEmbedder.sharedInstance().setDelegate(NativeScriptViewRegistry.shared)
        NativeScriptStart.setup()
    }
}
```

::: info Note
This is enabled for `visionOS` only right now with NativeScript however this will be used in iOS and macOS apps in the future.
:::

### Support multiple windows

In order to add volumetric and immersize spaces, be sure you add the following setting to your `App_Resources/visionOS/Info.plist`:

```xml
<key>UIApplicationSceneManifest</key>
<dict>
    <key>UIApplicationSupportsMultipleScenes</key>
    <true/>
</dict>
```

## Vision Pro Tutorials in all Flavors

You can follow along in these "Vision Pro 🥽 Hello World" tutorials:

- [Develop Vision Pro 🥽 apps with TypeScript](https://blog.nativescript.org/develop-visionos-apps-with-typescript)
- [Develop Vision Pro 🥽 apps with Angular](https://blog.nativescript.org/develop-visionos-apps-with-angular)
- [Develop Vision Pro 🥽 apps with React](https://blog.nativescript.org/develop-visionos-apps-with-react)
- [Develop Vision Pro 🥽 apps with Solid](https://blog.nativescript.org/develop-visionos-apps-with-solid)
- [Develop Vision Pro 🥽 apps with Svelte](https://blog.nativescript.org/develop-visionos-apps-with-svelte)
- [Develop Vision Pro 🥽 apps with Vue](https://blog.nativescript.org/develop-visionos-apps-with-vue)

### Vision Pro for Angular Developers 

This tutorial was hosted by [This Dot Media](https://www.youtube.com/@ThisDotMedia)

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/OXkUXRUOj5o" title="Vision Pro for Angular Developers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Blog Posts

### Particle Systems via RealityKit and Multiple Scenes during Vision Pro development with NativeScript

https://blog.nativescript.org/particles-and-multiple-scenes-vision-pro-development/

### How to add visionOS to an existing app?

https://blog.nativescript.org/add-visionos-to-existing-nativescript-app/