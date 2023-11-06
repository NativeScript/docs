---
title: Shared Element Transitions
description: Shared Element Transitions allow you to auto animate shared elements from one page to the next allowing you to deliver smooth navigational experiences.
contributors:
  - NathanWalker
  - rigor789
---

::: tip API Availabilty

The Shared Element Transition API is available in `@nativescript/core` version `8.5.0` or newer.

:::

When looking for ways to elevate user experience of your apps, Shared Element Transitions can help create associated movement of visuals throughout your app. They can even be used to create morphing effects between one component to another.

In essence you can declare `sharedTransitionTag` attributes on components across different pages, and pass in a custom `SharedTransition` to create engaging visual effects.

<DeviceFrame type="window" :buttons="false" title="Shared Element Transition Example">
<img src="/assets/images/guide/shared-element-transitions.gif">
</DeviceFrame>

| Shared Element Transition Type | iOS                | Android            |
| ------------------------------ | ------------------ | ------------------ |
| Page Navigation                | :white_check_mark: | :white_check_mark: |
| Modal Navigation               | :white_check_mark: | _Unavailable_      |

## Using Shared Element Transitions

Working with Shared Element Transitions requires views to be tagged on both "ends" of the transition and the [`SharedTransition`](#sharedtransition) class to configure it.

### Tagging views to share

You can tag any View component with the `sharedTransitionTag` attribute containing a **unique value** on any given Page.

#### Page A

Tag a view on the page you are **navigating from**

```xml
<!-- Page A content -->
<Image sharedTransitionTag="hero" />
```

#### Page B

Tag a view on the page you are **navigating to** with the same matching `sharedTransitionTag`. Once the transition starts, the view will transition from the starting state as presented on **Page A** to the target state as presented on **Page B**.

```xml
<!-- Page B content -->
<Image sharedTransitionTag="hero" />
```

### Using the default SharedTransition

You can customize the transition in various ways using the `SharedTransition.custom()` API.

For example, set up a shared element Page transition using the default values:

```ts
import { SharedTransition, PageTransition } from '@nativescript/core'

page.frame.navigate({
  moduleName: `views/detail`,
  transition: SharedTransition.custom(new PageTransition()),
})
```

Or when opening a modal (_iOS only_):

```ts
import { SharedTransition, ModalTransition } from '@nativescript/core'

page.showModal('views/modal', {
  transition: SharedTransition.custom(new ModalTransition()),
  closeCallback(args) {
    // ... modal closed
  },
})
```

### Independent shared elements

In some cases you might not have an element present on both "ends", or need to animate additional elements during the transition. That's what "independent" shared elements solve.

Consider the following example:

```ts
SharedTransition.custom(new PageTransition(), {
  pageEnd: {
    opacity: 1,
    sharedTransitionTags: {
      spaceman: {
        opacity: 0,
        y: 20,
        scale: {
          x: 6,
          y: 6,
        },
      },
      title: {
        opacity: 0,
        x: -200,
      },
    },
  },
  // ...
})
```

The view tagged as `spaceman` will move 20<abbr title="Device Independent Pixels">dips</abbr> down and scale up 6x on both x and y axis.

The view tagged as `title` will fade out and move left by 200<abbr title="Device Independent Pixels">dips</abbr>.

#### Notes

- Independent shared elements are only supported on iOS at the moment.
- Using "independent" elements with interactive transitions is not recommended (and will likely lead to unexpected behavior).

## How Shared Element Transitions work

To provide flexible page and modal transition handling out of the box, `@nativescript/core` provides a `PageTransition` and a `ModalTransition` preconfigured for a wide majority of popular use cases, however `SharedTransition` contains a number of advanced options to custimize the default behavior.

A Shared Element Transition engages in this sequence:

1. Find Views with matching `sharedTransitionTag` values between starting and ending pages.
2. When the transition begins, views tagged with `sharedTransitionTag` that are found on both pages will animate between their starting and ending states.
3. Simultaneously, the incoming page will animate from the state provided in `pageStart` to the state provided in `pageEnd` in the configuration.
4. On back navigation, the outgoing page will animate from it's current state to the state provided through `pageReturn`.

The `sharedTransitionTag` value can be dynamically bound for more unique possibilities.

The `sharedTransitionIgnore` can be used to opt views in and out of the shared transition.

## Attributes

### sharedTransitionTag

```xml
<View sharedTransitionTag="hero" />
```

A string value used to identify views eligible for a shared element transition.

:::warning Important!

All tags must be unique on each given page. Duplicate values may result in unexpected behavior.

:::

#### Notes:

- When declaring images with `sharedTransitionTag`, ensure that valid dimensions are declared on the image (width/height).
- Although `Label` components can be tagged, it's generally not recommended since the text size and styling might differ between the two states.

### sharedTransitionIgnore

```xml
<View sharedTransitionIgnore="{{ someCondition }}" />
```

A boolean value indicating whether or not a view should be ignored during a shared element transition.

::: info Note

This attribute is most commonly used with a dynamic binding as otherwise it wouldn't be any different than not tagging a view in the first place.

:::

## API

### SharedTransition

A class exposing various `static` methods used to configure Shared Element Transitions.

### custom

```ts
SharedTransition.custom(
  transition: Transition,
  options?: SharedTransitionConfig
)
```

The primary API for setting up a Shared Element Transition. The returned object can be passed directly as the `transition` to the core page and modal navigation APIs.

The first parameter will usually be a `PageTransition` or a `ModalTransition` depending on the navigation type. The second, optional parameter allows configuring various aspects of the transition. The function returns the configured transition instance for use in the visual transition and sets it up for internal state tracking.

```ts
interface SharedTransitionConfig {
  /**
   * State applied to the incoming page transition on start
   */
  pageStart?: SharedTransitionPageProperties
  /**
   * State that the incoming page transitions to.
   */
  pageEnd?: SharedTransitionPageProperties
  /**
   * State that the outgoing page transitions to.
   * (from it's current state)
   */
  pageReturn?: SharedTransitionPageProperties & {
    /**
     * In some cases you may want the returning animation to start with the original opacity,
     * instead of beginning where it ended up on pageEnd.
     * Note: you can try enabling this property in cases where your return animation doesn't appear correct.
     */
    useStartOpacity?: boolean;
  };

  /** @ios - only supported on iOS */
  interactive?: {
    dismiss?: {
      /**
       * A threshold (percentage) that if exceeded by the pan gesture
       * will finish the transition once the touch is released.
       *
       * Default: 0.5
       */
      finishThreshold?: number
      /**
       * You can create your own percent formula used for determing
       * the interactive value. By default, we handle this with the
       * following formula:
       *
       *   eventData.deltaX / (eventData.ios.view.bounds.size.width / 2)
       *
       * @param eventData PanGestureEventData
       * @returns The percentage value to be used as the finish/cancel threshold
       */
      percentFormula?: (eventData: PanGestureEventData) => number
    }
  }
}

interface SharedProperties {
  x?: number
  y?: number
  width?: number
  height?: number
  opacity?: number
  scale?: {
    x?: number
    y?: number
  }
}

interface SharedTransitionTagProperties = SharedProperties & {
  /**
   * (iOS only) The visual stacking order where 0 is at the bottom.
   * Shared elements are stacked one on top of the other during each transition.
   * By default they are not ordered in any particular fashion.
   */
  zIndex?: number;
  /**
   * (iOS only) Collection of properties to match and animate on each shared element.
   *
   * Defaults to: {
   *   view: ['backgroundColor'],
   *   layer: ['cornerRadius', 'borderWidth', 'borderColor']
   * }
   *
   * Tip: Using an empty array, [], for view or layer will avoid copying any properties if desired.
   */
  propertiesToMatch?: {
    /**
     * View related properties
     */
    view?: Array<string>;
    /**
     * specific CALayer related properties
     */
    layer?: Array<string>;
  };
  /**
   * (iOS only) Ability to modify other visuals while handling the transition.
   * Callback will be fired before the shared element is positioned and added to the transition.
   * For example: scroll a CollectionView based on the element's position
   */
  callback?: (view: View, action: SharedTransitionEventAction) => Promise<void>;
};

type SharedTransitionPageProperties = SharedProperties & {
  /**
   * @ios - only supported on iOS
   * Allow "independent" elements found only on one of the
   * pages to take part in the animation.
   */
  sharedTransitionTags?: Record<string, SharedTransitionTagProperties>
  /**
   * Spring animation settings.
   * Defaults:
   *  tension: 140
   *  friction: 10
   */
  spring?: {
    tension?: number
    friction?: number
    mass?: number
    delay?: number
    velocity?: number
    /** @ios - UIViewAnimationOptions */
    animateOptions?: any
  }
}
```

### events

```ts
SharedTransition.events(): Observable
```

Exposes an Ovservable for listening to various shared element transition events.

#### `SharedTransition.startedEvent`

Emitted when the transition starts.

#### `SharedTransition.finishedEvent`

Emitted when the transition finishes.

#### `SharedTransition.interactiveCancelledEvent`

Emitted when the interactive transition cancels.

#### `SharedTransition.interactiveUpdateEvent`

Emitted when the interactive transition updates with the percent value.

```ts
interface SharedTransitionEventData {
  id: number // transition instance id
  type: 'page' | 'modal'
  action?: 'present' | 'dismiss' | 'interactiveStart' | 'interactiveFinish'
  percent?: number
}
```

For example:

```ts
SharedTransition.events().on(
  SharedTransition.finishedEvent,
  (data: SharedTransitionEventData) => {
    //
  }
)
```

### getSharedElements

```ts
SharedTransition.getSharedElements(fromPage: View, toPage: View): {
  sharedElements: Array<View>
  presented: Array<View>
  presenting: Array<View>
}
```

Primarily used internally by the `PageTransition` and `ModalTransition`.

Can also be used as a utility to get shared elements between two views, as well as get a list of _all_ declared `sharedTransitionTag` elements (_even when not shared between the two views_).

### getState

```ts
SharedTransition.getState(id: number): SharedTransitionState
```

Get the current state of a transition by id.

```ts
interface SharedTransitionState extends SharedTransitionConfig {
  /**
   * @internal the preconfigured transition instance
   */
  instance?: Transition
  /**
   * the Page which will start the transition.
   */
  page?: ViewBase
  activeType?: SharedTransitionAnimationType
  toPage?: ViewBase
  /**
   * Whether interactive transition has began.
   */
  interactiveBegan?: boolean
  /**
   * Whether interactive transition was cancelled.
   */
  interactiveCancelled?: boolean
}
```

```ts
enum SharedTransitionAnimationType {
  present,
  dismiss,
}
```

### updateState

```ts
SharedTransition.updateState(id: number, state: SharedTransitionState): void
```

Used internally to update the state as transitions progress. Provided in case, (for whatever reason) you needed to update the internal state.

### finishState

```ts
SharedTransition.finishState(id: number): void
```

Used internally to finish the state after a transition has completed. Provided in case, (for whatever reason) you needed to finish the state early.

## Troubleshooting

- It's common to accidentally provide mismatching `sharedTransitionTag` values between two different pages. Always check for matching tags when encountering issues with Shared Element Transitions.
- Try avoiding `sharedTransitionTag` on Labels since they usually won't exhibit expected behavior.

## Acknowledgements

The API for the Shared Element Transitions was inspired by [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions/).
