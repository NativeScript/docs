---
title: Navigation
description: Navigate from screen to screen in your app.
---
<!--TODO: Add Preview -->
<!--TODO: Add flavors -->

Navigation in NativeScript is enabled by the `Frame` class.

## How to use the Frame class

The following sections will show you how to access an instance of the Frame class and use it to navigate between pages in your app.


### Navigating to another page

To navigate from one [Page](/ui/page) to another, you need to first [get the Frame instance](#getting-a-frame-instance) within which you need to navigate. 
Then, for a simple navigation, call the instance's [navigate](#navigate) method on the instance, passing it a string containing the path of the page to navigate to.

```ts
frame.navigate("~/pages/details/details-page")
```

:::tip Note
For a complete navigation example, have a look at [Setup navigation from home to details component](/tutorials/build-a-master-detail-app-with-plain-typescript#setup-navigation-from-home-to-details-component).
:::

### Getting a Frame instance

The following are the ways in which to obtain an instance of the Frame class:

- Calling the static [topmost](#topmost) method on the Frame class.

```ts
const frame: Frame = Frame.topmost();
```
- Via the `frame` property of a [Page](/ui/page) instance.

For example, you can get the current Frame instance from a `tap` event's data as follows:

```ts
onFlickTap(args: EventData): void {
    const btn = args.object as Button;
    const frame = btn.page.frame
  }
```
- Calling the static [getFrameById](#getframebyid) method on the Frame class with the id of the frame instance of interest.

```ts
const frame = Frame.getFrameById("frame-id")
```

### Navigating back

To navigate back to the previous page, use the [goBack](#goback) method of the Frame instance.
```ts
frame.goBack()
```

### Avoid navigating back to the previous page

To avoid navigating to the previous page, set the [clearHistory](#clearhistory) property of the [NavigationEntry](#navigation-entry-interface) object that you pass to the [navigate](#navigate) method  to `true`.

```ts
frame.navigate({
    moduleName: "details/details-page",
    clearHistory: true
})
```
### Passing data between pages

To pass data to the page you are navigating to, set the value of the [context](#context) property of the NavigationEntry to the data you would like to pass.
```ts
frame.navigate({
    moduleName: "details/details-page",
    context: { id: 2 }
})
```

To access the passed data, handle the `navigatedTo` event for the `details/details-page` page and access the `context` property on the event's [NavigatedData](https://docs.nativescript.org/api-reference/interfaces/navigateddata) object.

```ts
import { NavigatedData } from "@nativescript/core"

onNavigatedTo(args: NavigatedData) {
        this.id = args.context.id
        this.notifyPropertyChange("id", args.context.id)
    }
```
### Creating multiple frames

If you need to create multiple frames, you can do so by wrapping them in a container layout. For example if you want to have 2 frames side-by-side, you can wrap them in a GridLayout:

```xml
<GridLayout columns="*, *">
  <Frame col="0" />
  <Frame col="1" />
</GridLayout>
```
## Frame class API

The following are the properties and methods of the Frame class:

### defaultAnimatedNavigation

```ts
Frame.defaultAnimatedNavigation = true
```

Gets or sets if navigation transitions should be animated globally.

---
### defaultTransition
```ts
const defaultTransition: NavigationTransition = {
    curve: CoreTypes.AnimationCurve.easeInOut,
    duration: 500,
    name: "slideRight"
}
Frame.defaultTransition = defaultTransition
//or
const defaultTransition: NavigationTransition = Frame.defaultTransition

```
Gets or sets the default [NavigationTransition](#navigation-transition-interface) for all frames across the app. To set a naviagation transtion for a specific frame instance, use the [transition](#transition) property.

---

### backStack
```ts
const backStack: Array<BackstackEntry> = frame.backStack
```
Gets the back stack for a Frame instance. It is empty if the current page is the app's initial page(eg `main-page`) or if the [clearHistory](#clearhistory) property is set to `true`.

---
### currentPage
```ts
const page: Page = frame.currentPage
```
Gets the Page instance the Frame is currently navigated to.

---
### currentEntry
```ts
const currentEntry: NavigationEntry = frame.currentEntry
```
Gets the NavigationEntry instance the Frame is currently navigated to.

---
### animated
```ts
const animated: boolean = frame.animated.
//or
frame.animated = true
```
Gets or sets if navigation transitions should be animated.

---
### transition
```ts
const transtion: NavigationTransition = frame.transition
//or
frame.transition = {
            curve: CoreTypes.AnimationCurve.easeInOut,
            duration: 500,
            name: "slideRight",
        }
```
Gets or sets the default [navigation transition](#navigation-transition-interface) for this frame.

---
### actionBarVisibility
```ts
frame.actionBarVisibility = "never"
```

It controls the visibility of an actionbar across all the pages in a Frame instance.
Available values:
- `auto`
- `always`
- `never` (hides the action bar for all pages)

---
### navigate()
This method has the following overloads:
- `navigate(pageFileName: string)` - navigates to the page instance in the specified file.
- `navigate(create: () => Page)` - creates a new Page instance using the provided callback and navigates to that instance.

- `navigate(entry: NavigationEntry)` is for a more customized navigation. It allows you to pass data to another page or set transition animation, etc.

### goBack()

```ts
frame.goBack(to)
```
Navigates back using the navigation hierarchy, contained within a Frame stack where the top value is popped.
- _Optional_ `to`: The back stack entry object for where to navigate back to. The object has the following properties:

- `entry`(type: [NavigationEntry](#navigation-entry-interface))
	
- (`resolvedPage`)(type: Page)

---
### getFrameById()
```ts
const frame: Frame = Frame.getFrameById(id: string)
```
Gets a frame with the specified id.

---

### topmost()
```ts
const frame: Frame = Frame.topmost()
```
Gets the topmost frame in the frames stack.

---

### canGoBack()
```ts
const canGoBack: boolean = frame.canGoBack()
```
Checks whether the goBack operation is available.

---
## Navigation Transition Interface
The Navigation Transition interface has the following members:

### name
```ts
{
  name: "slideLeft"
}
```
The type of the transition. Possible values:

- `curl` (same as curlUp) (iOS only)
- `curlUp` (iOS only)
- `curlDown` (iOS only)
- `explode` (Android Lollipop(21) and up only)
- `fade`
- `flip` (same as flipRight)
- `flipRight`
- `flipLeft`
- `slide` (same as slideLeft)
- `slideLeft`
- `slideRight`
- `slideTop`
- `slideBottom`
---

### custom transition
```ts
{
  instance: customTransitionInstance
}
```
This property allows you to define custom transition instance of the [Transition](https://docs.nativescript.org/api-reference/classes/transition) class.

---

### duration
```ts
{
  duration: 500
}
```
The length of the transition in milliseconds

---
### curve
```ts
import { CoreTypes } from "@nativescript/core";

{
  curve: CoreTypes.AnimationCurve.easeInOut,
}
```
A transition animation curve with available values contained in the [AnimationCurve enumeration](https://docs.nativescript.org/api-reference/modules/coretypes.animationcurve).
Alternatively, you can pass an instance of type [UIViewAnimationCurve](https://developer.apple.com/documentation/uikit/uiview/animationcurve) for iOS or [android.animation.TimeInterpolator](https://developer.android.com/reference/android/animation/TimeInterpolator) for Android.

---

## Navigation Entry Interface

### moduleName
```ts
{
    moduleName: "details/details-page"
}
```
The name of the page (a View instance) to navigate to.

---
### create()
```ts
{
    create() {
        const page = new Page()
        const actionBar = new ActionBar()
        actionBar.title = "Test heading"

        const stack = new StackLayout()
        stack.backgroundColor = "#76ABEB"

        page.actionBar = actionBar;
        page.content = stack
        return page
      },
    }
```
Creates a the page(View instance) to be navigated to

---
### context	
```ts
{
    context: any
}
```
An object used to pass data to the page navigated to.

---

### transitionAndroid

_Optional_: Specifies a navigation transition for Android. This property has a higher priority than the [transition](#transition) property.

---
### transitioniOS

_Optional_: Specifies a navigation transition for iOS. This property has a higher priority than the [transition](#transition) property.

---
### backstackVisible
```ts
frame.backstackVisible = true
```	

A boolean value, if set to `true`, it records the navigation in the backstack. If set to `false`, the Page will be displayed but once navigated from it is not possible to navigate back.

---
### clearHistory
```ts
{
    clearHistory: true
}
```
If set to `true`, it clears the navigation history. This very useful when navigating away from a login page.

## API Reference(s)
- [Frame](https://docs.nativescript.org/api-reference/classes/frame) class
## Native Component
- `Android`: [org.nativescript.widgets.ContentLayout](https://github.com/NativeScript/NativeScript/blob/master/packages/ui-mobile-base/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java)
- `iOS`: [UINavigationController](https://developer.apple.com/documentation/uikit/uinavigationcontroller)