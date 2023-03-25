---
title: Shared Element Transitions 8.5+
description: Shared Element Transitions allow you to auto animate shared elements from one screen to the next allowing you to deliver smooth navigational experiences.
---

When looking for ways to elevate user experience of your apps, Shared Element Transitions can help create associated movement of visuals throughout your app. They can even be used to create morphing effects between one component to another.

::: info Note
The iOS platform has supported "Shared Element Transitions" via "tagging" of UIViews alongside the introduction of [UIViewControllerAnimatedTransitioning](UIViewControllerAnimatedTransitioning) protocol long time ago starting in iOS 7.

The Android platform has supported "Shared Element Transitions" through Fragments as early as API Level 21 (Android 5) via the [setSharedElementEnterTransition](https://developer.android.com/reference/android/app/Fragment#setSharedElementEnterTransition(android.transition.Transition)) and related APIs.

NativeScript has allowed developers to use "Shared Element Transitions" for several years through these natural APIs.
:::

Starting with @nativescript/core 8.5, you can now enable them easier for both iOS and Android.

Inspired by [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions/), you can declare `sharedTransitionTag` attributes on components across different pages alongside a custom `SharedTransition` to create engaging visual effects.

<img src="/assets/images/transitions/ns-shared-element-transitions.gif"  width="360" height="360">


## Usage

Working with Shared Element Transitions involves 2 steps.

|       | iOS      | Android |
| ----------- | ----------- | ----------- |
| Page Navigation      | ✅       | ✅        |
| Modals   | ✅    | *Planned for 8.6*        |


### 1. Declare sharedTransitionTag

You can declare any View component with the `sharedTransitionTag` attribute containing a unique value on any given Page:

#### Page A

```html
<Image sharedTransitionTag="hero"/>
```

On the page you are navigating to, you can declare the same `sharedTransitionTag` on a View component which has an associated visual you'd like animated to:

#### Page B

```html
<Image sharedTransitionTag="hero"/>
```

### 2. Define your SharedTransition

Use `SharedTransition` with various configuration options to define your transition.

```ts
import { SharedTransition, PageTransition } from '@nativescript/core';

page.frame.navigate({
  moduleName: `views/detail`,
  transition: SharedTransition.custom(new PageTransition()),
});
```

Or when opening a modal (*iOS only at the moment*):

```ts
import { SharedTransition, ModalTransition } from '@nativescript/core';

page.showModal('views/modal', {
  transition: SharedTransition.custom(new ModalTransition()),
  closeCallback(args) {
    // modal closed
  },
});
```

## Understanding

`SharedTransition` contains a number of advanced options. To provide flexible page and modal transition handling out of the box, @nativescript/core provides `PageTransition` and `ModalTransition` preconfigured for a wide majority of popular use cases.

Each transition engages in this sequence:
1. Finds Views with matching `sharedTransitionTag` values between starting and ending screens.
2. Consider custom configuration options provided through `SharedTransition.custom` to apply to the `pageStart`, `pageEnd`, and `pageReturn` characteristics.
3. When the transition begins, the `sharedTransitionTag` matches will animate between their starting and ending locations between both screens. The outgoing/incoming pages as a whole will animate based on the configuration options provided with the `SharedTransition` API.

You can create dynamic bindings of `sharedTransitionTag` values between screens and even declare `sharedTransitionIgnore` as a *boolean* to conditionally opt that view in/out under different dynamic conditions.

## API

### SharedTransition

Used to configure Shared Element Transitions.

#### custom

```ts
static custom(transition: Transition, options?: SharedTransitionConfig): { instance: Transition }
```

Define which `Transition` you'd like to use with an optional custom configuration. Returns the configured instance for use in the visual transition and sets it up for internal state tracking.

- `SharedTransitionConfig`: Various options to configure your transition.
  - `pageStart`: View settings to **start** your transition with.
  - `pageEnd`: View settings to **end** your transition with.
  - `pageReturn`: View settings to **return** to the original page with.
  - `interactive`: Interactive options (*iOS only - Android planned for 8.6*)
    - `dismiss`: Dismissal options
      - `finishThreshold`: When the pan exceeds this percentage and you let go, finish the transition.
      - `percentFormula`: Create your own percent formula used for determing the interactive value.

#### events

```ts
static events(): Observable
```

Listen to various shared element transition events.

- `SharedTransition.startedEvent`: When the transition starts.
- `SharedTransition.finishedEvent`: When the transition finishes.
- `SharedTransition.interactiveCancelledEvent`: When the interactive transition cancels.
- `SharedTransition.interactiveUpdateEvent`: When the interactive transition updates with the percent value.

For example:

```ts
SharedTransition.events().on(SharedTransition.finishedEvent, (data) => {
  // data.id = transition instance id
  // data.type = 'page' | 'modal'
  // data.action = detailed action if present (eg: 'interactiveFinish')
  // data.percent = with interaction options enabled, receive the percent of interaction from start to finish
})
```

#### getSharedElements

```ts
static getSharedElements(fromPage: View, toPage: View): {
  sharedElements: Array<View>;
  presented: Array<View>;
  presenting: Array<View>;
}
```

Used internally with each transition however also a useful public utility which will take any 2 views and return shared elements between them as well as *all* declared `sharedTransitionTag` elements (*even when not shared*) between both screens.

#### getState

```ts
static getState(id: number): SharedTransitionState
```

Get the current state for any transition.

#### updateState

```ts
static updateState(id: number, state: SharedTransitionState): void
```

Used internally to update the state as transitions change. Provided in case, for whatever reason, you needed to update the internal state.

#### finishState

```ts
static finishState(id: number): void
```

Used internally to finish the state after a transition has completed. Provided in case, for whatever reason, you needed to finish the state early.

## Notes

- All `sharedTransitionTag`'s must be unique on each given page. Duplicate values for any given `sharedTransitionTag` will result in unexpected behavior.
- When declaring images with `sharedTransitionTag`, ensure that valid dimensions are declared on the image (width/height).
- Although `Label` components can be tagged, it's generally not recommended to tag `Label` since the presenting font size and weight often will not match that of the presented view.
- For iOS, interactive dismissal will work well when all sharedTransitionTag's match between both screens. If there are "independent" sharedTransitionTag's declared on only one or the other screens will interfere with interactive dismissal options.
- Android needs matching `sharedTransitionTag`'s between screens to behave properly, however iOS supports some advanced abilities to allow "independently" tagged elements which are not shared between screens to participate in animations. See `SharedTransitionPageProperties` optional 
- Android supports page navigation at the moment but will support modal transitions in the future, however iOS supports both right now.

## Troubleshooting

- It's easy to accidentally provide mis-matching `sharedTransitionTag` values between two different screens. Always check for matching tags when encountering issues with Shared Element Transitions.
- Try to avoid using `sharedTransitionTag` on `Label`'s since they usually won't exhibit expected behavior.