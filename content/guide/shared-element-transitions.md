---
title: Shared Element Transitions 8.5+
description: Shared Element Transitions allow you to auto animate shared elements from one screen to the next allowing you to deliver smooth navigational experiences.
---

When looking for ways to elevate user experience of your apps, Shared Element Transitions can help create associated movement of visuals throughout your app.

::: info Note
The iOS platform has supported "Shared Element Transitions" via "tagging" of UIViews alongside the introduction of [UIViewControllerAnimatedTransitioning](UIViewControllerAnimatedTransitioning) protocol long time ago starting in iOS 7.

The Android platform has supported "Shared Element Transitions" through Fragments as early as API Level 21 (Android 5) via the [setSharedElementEnterTransition](https://developer.android.com/reference/android/app/Fragment#setSharedElementEnterTransition(android.transition.Transition)) and related APIs.

NativeScript has allowed developers to use "Shared Element Transitions" for several years through these natural APIs.
:::

Starting with @nativescript/core 8.5, you can now enable them easier for both iOS and Android.

Inspired by [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions/), you can define `sharedTransitionTag` attributes on components across different pages alongside defining a custom `SharedTransition` to create engaging visual effects.

The `SharedTransition` contains quite a number of advanced options. To provide great page and modal transition handling "out of the box", @nativescript/core provides `PageTransition` and `ModalTransition` preconfigured for a wide majority of popular use cases. 

## Usage

You can use Shared Element Transitions with the following:

|       | iOS      | Android |
| ----------- | ----------- | ----------- |
| Page Navigation      | ✅       | ✅        |
| Modals   | ✅    | *Coming Soon*        |

### 1. sharedTransitionTag

You can declare any View component with the `sharedTransitionTag` attribute containing a unique value on any given Page, for example:

#### Page A

```html
<GridLayout sharedTransitionTag="hero"/>
```

On the page your are navigating to (or opening as a modal), you can declare the same `sharedTransitionTag` on a View component which has an associated visual you'd like animated to:

#### Page B

```html
<GridLayout sharedTransitionTag="hero"/>
```

### 2. SharedTransition

Use `SharedTransition` to define your page transition on iOS or Android:

```ts
import { SharedTransition, PageTransition } from '@nativescript/core';

page.frame.navigate({
  moduleName: `pages/transitions/transitions-detail`,
  transition: SharedTransition.custom(new PageTransition()),
});
```

Or define when a modal opens (*for iOS only*):

```ts
import { PageTransition, ModalTransition } from '@nativescript/core';

page.showModal('pages/transitions/transitions-modal', {
  transition: SharedTransition.custom(new ModalTransition()),
  closeCallback(args) {
    // modal closed
  },
});
```

## Understanding

`SharedTransition` contains a number of advanced options. To provide great page and modal transition handling "out of the box", @nativescript/core provides `PageTransition` and `ModalTransition` preconfigured for a wide majority of popular use cases as seen in the examples above.

Each transition engages in this sequence:
1. Find matching `sharedTransitionTag` between starting and ending screens.
2. Animate between their starting and ending locations between both screens.

### Interactive Transitions

On iOS, you can take advantage of **interactive** transition options. *These options will be enabled for Android in the future.*

You can interactively dismiss a page navigation or modal presentation, for example:

// TODO


## API


## Notes

- When declaring images with `sharedTransitionTag`, ensure that valid dimensions are declared on the image (width/height)
- Although `Label` components can be tagged, it's generally not recommended to tag `Label` since the presenting font size and weight often will not match that of the presented view.