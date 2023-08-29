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

See [NavigationEntry](/api/interface/NavigationEntry).

### currentPage

```ts
currentPage: Page
```

**Readonly**. The current Page the Frame is navigated to.

See [Page](/ui/Page).

### transition

```ts
transition: NavigationTransition
```

Gets or sets the default navigation transition for this Frame.

See [NavigationTransition](/api/interface/NavigationTransition).

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
naviage(entry: NavigationEntry): void
```

Navigates to a Page.

See [Frame.navigate Reference](/api/class/Frame#navigate), [Page](/ui/page), [NavigationEntry](/api/interface/NavigationEntry).

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

## Native component

- Android: [`org.nativescript.widgets.ContentLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java)
- iOS: [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
