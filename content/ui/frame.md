---
title: Frame
description: UI component for displaying and navigating between Pages.
contributors:
  - rigor789
---

`<Frame>` is a UI component used to display and navigate between [Pages](/ui/page). A NativeScript app can have multiple Frames, or none - most apps will have at least a single Frame often set as the the root view (or inside a [RootLayout](/ui/root-layout)).

## Examples

### A single root Frame

This example shows a single root frame that navigates to the `main-page` by default, and allows the user to navigate further within this frame (spanning the full-screen).

```xml
<!-- app-root -->
<Frame defaultPage="main-page"/>
```

### A global menu bar and a Frame

This example shows an always visible menu bar stacked above a Frame that allows the user to navigate further.

```xml
<GridLayout rows="auto, *">
  <Label row="0" text="Example Menu Bar"/>
  <ContentView row="1">
    <Frame defaultPage="mainPage"/>
  </ContentView>
</GridLayout>
```

::: info Note
We have wrapped the Frame inside a ContentView because on iOS a frame always spans the full height of it's parent container, so we wouldn't be able to resize it without the additional ContentView.
:::

### Multiple root Frames

This pseudo example shows two Frames side-by-side, the frame on the left represents a list of conversations, and the Frame on the right represents the details of the currently selected conversation.

The idea of using a Frame on the left is to allow navigating to a different Page while keeping the conversation-details open on the right.

```xml
<GridLayout columns="300, *">
  <ContentView col="0">
    <Frame defaultPage="conversation-list" />
  </ContentView>
  <ContentView col="1">
    <Frame defaultPage="conversation-details" />
  </ContentView>
</GridLayout>
```

::: info Note
This is a simplified example to convey the possibilities, in a real app implementation there would be nuances specific to the app.
:::

## Props

### actionBarVisibility

```ts
actionBarVisibility: 'auto' | 'always' | 'never'
```

Used to control the visibility the Navigation Bar in iOS and the ActionBar in Android for all Pages within this Frame.

### animated

```ts
animated: boolean
```

Gets or sets if navigation transitions within this Frame should be animated.

### backStack

```ts
backStack: BackstackEntry[]
```

**Readonly** list of backstack entries.

See [BackstackEntry](/api/interface/BackstackEntry).

### currentEntry

```ts
currentEntry: NavigationEntry
```

**Readonly**. The current NavigationEntry the Frame is navigated to.

See [NavigationEntry](#navigation-entry).

### currentPage

```ts
currentPage: Page
```

**Readonly**. The current Page the Frame is navigated to.

See [Page](/ui/page).

### transition

```ts
transition: NavigationTransition
```

Gets or sets the default navigation transition for this Frame.

See [NavigationTransition](#navigation-transition).

### defaultAnimatedNavigation

```ts
defaultAnimatedNavigation: boolean
```

**Static**. Gets or sets if navigation transitions should be animated globally.

### defaultTransition

```ts
defaultTransition: NavigationTransition
```

**Static**. Gets or sets the default NavigationTransition for all frames across the app.

See [NavigationTransition](/api/interface/NavigationTransition).

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/Frame).

## Methods

### canGoBack()

```ts
canGoBack(): boolean
```

Returns wether or not this Frame can navigate back (there are entries in the backstack).

### goBack()

```ts
goBack(to?: BackstackEntry): void
```

Navigates to the previous entry (or `to`) in the backstack.

See [BackstackEntry](/api/interface/BackstackEntry).

### navigate()

```ts
navigate(pageModuleName: string): void
// or
navigate(create: () => Page): void
// or
navigate(entry: NavigationEntry): void
```

Navigates to a Page.

See [Frame.navigate Reference](/api/class/Frame#navigate), [Page](/ui/page), [NavigationEntry](#navigation-entry).

### getFrameById()

```ts
getFrameById(id: string): Frame
```

**Static**. Returns a Frame by it's `id` if found.

See [Frame](/ui/frame).

### topmost()

```ts
topmost(): Frame
```

**Static**. Returns the topmost frame.

See [Frame](/ui/frame).

## Events

### navigatingTo

```ts
on('navigatingTo', (args: NavigationData) => {
  const frame = args.object as Frame
  const entry = args.entry as BackstackEntry
  const page = entry.resolvedPage as Page
})
```

Emitted when the Frame is navigating to a new Page.

### navigatedTo

```ts
on('navigatedTo', (args: NavigationData) => {
  const frame = args.object as Frame
  const entry = args.entry as BackstackEntry
  const page = entry.resolvedPage as Page
})
```

Emitted when the Frame has navigated to a new Page.

## NavigationTransition Interface {#navigation-transition}

See [NavigationTransition API Reference](/api/interface/NavigationTransition).

### name {#transition-name}

```ts
name: string
```

A named transition name. Available transitions:

- `curl` (same as `curlUp`) (**iOS only**)
- `curlUp` (**iOS only**)
- `curlDown` (**iOS only**)
- `explode` (**Android only**)
- `fade`
- `flip` (same as `flipRight`)
- `flipRight`
- `flipLeft`
- `slide` (same as `slideLeft`)
- `slideLeft`
- `slideRight`
- `slideTop`
- `slideBottom`

### instance

```ts
instance: Transition
```

This property allows you to define a custom transition instance

See [Transition](/api/class/Transition).

### duration

```ts
duration: number
```

The duration of the transition in milliseconds

### curve

```ts
curve: CoreTypes.AnimationCurve
```

Sets the transition animation curve.

Alternatively, you can pass an instance of type [UIViewAnimationCurve](https://developer.apple.com/documentation/uikit/uiview/animationcurve) for iOS or [android.animation.TimeInterpolator](https://developer.android.com/reference/android/animation/TimeInterpolator) for Android.

See [CoreTypes.AnimationCurve](/api/namespace/CoreTypes-AnimationCurve).

## NavigationEntry Interface {#navigation-entry}

See [NavigationEntry API Reference](/api/interface/NavigationEntry).

### moduleName

```ts
moduleName: string
```

The name of the Page module to navigate to (eg. `pages/details-page` given a `pages/details-page.xml` exists).

### create()

```ts
create: () => View
```

A function called to create the Page (View instance) to be navigated to.

::: details Example

```ts
function create() {
  const page = new Page()
  const actionBar = new ActionBar()
  actionBar.title = 'Example Page'
  page.actionBar = actionBar

  const stackLayout = new StackLayout()
  stackLayout.backgroundColor = '#65adf1'
  page.content = stackLayout

  return page
}
```

:::

### context

```ts
context: any
```

An object used to pass data to the navigated to Page.

### transition {#navigation-entry-transition}

```ts
transition: string | NavigationTransition
```

The [transition name](#transition-name), or a NavigationTransition to use when navigating.

See [NavigationTransition](#navigation-transition).

### transitionAndroid

```ts
transitionAndroid: string | NavigationTransition
```

Overrides the [transition](#navigation-entry-transition) property when navigating on Android.

See [NavigationTransition](#navigation-transition).

### transitioniOS

```ts
transitioniOS: string | NavigationTransition
```

Overrides the [transition](#navigation-entry-transition) property when navigating on iOS.

See [NavigationTransition](#navigation-transition).

### backstackVisible

```ts
backstackVisible: boolean
```

If set to `true`, it records the navigation in the backstack.

If set to `false`, it navigates without affecting the backstack. Once navigated away from the Page, it will get disposed and the user can't navigate back to it (via the back button).

### clearHistory

```ts
clearHistory: boolean
```

If set to `true`, it clears the navigation history backstack.

## Native component

- Android: [`org.nativescript.widgets.ContentLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java)
- iOS: [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
