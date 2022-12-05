---
title: Navigation
---

Navigation in NativeScript is enabled by the `Frame` class.

## Using Frame

### Navigating to another page
To navigate to a page, first get the instance of the desired Frame instance. Then call the instance's [navigate()](#navigate) method passing it the path of the page to navigate to.
```ts
frame.navigate("~/pages/details/details-page")
```
The following are some of the ways to obtain an intance of the Frame class:

- `Frame.topmost()` returns the top Frame in the frames stack.
```ts
const frame: Frame = Frame.topmost();
```
- `page.frame` via the `frame` property of a [Page]() instance.
You can use the option in a [tap]() event handler, for example:

```ts
onFlickTap(args: EventData): void {
    const btn = args.object as Button;
    const page = btn.page. 
    page.frame.navigate('details/details-page')
  }
```
- `Frame.getFrameById(frame-id)` a frame with a specific id.
```ts
rame.getFrameById("frame-id").navigate('details/details-page')
```

:::tip Note
For a complete real life navigation example, have a look at [Setup navigation from home to details component](/tutorials/build-a-master-detail-app-with-plain-typescript#setup-navigation-from-home-to-details-component)
:::

### Navigating Back
To navigate back to the previous page, use the [goBack()](#goback) method of the Frame instance.
```ts
frame.goBack()
```

### Avoid Navigating Back
To avoid navigating to the previous page, use the [NavigationEntry](#navigation-entry-interface) object and set the [clearHistory](#clearhistory) property to `true`.
```ts
frame.navigate({
    moduleName: "details/details-page",
    clearHistory: true
})
```
### Passing data between pages
To pass data to the page be navigated to, set the value of the [context](#context) property of the NavigationEntry to the data you would like to pass.
```ts
frame.navigate({
    moduleName: "details/details-page",
    context: { id: 2 }
})
```
To access the passed data, handle the `navigatedTo` event for the `details/details-page` page and access the `context` property on the event's NavigatedData object.


### Applying transition to navigation

## Frame API
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

}
```
Gets or sets the default navigation transition for this frame.
---
### actionBarVisibility
```ts
```

---
### navigate()

### goBack()

```ts
frame.goBack(to)
```
Navigates back using the navigation hierarchy (if any). Updates the Frame stack as needed. This method will start from the topmost Frame and will recursively search for an instance that has the canGoBack operation available. 
- _Optional_ `to`: The [backstack entry](#back-stack-entry-interface) to navigate back to.

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
## Navigation Transition Interface

## Navigated Data Interface
### context
### isBackNavigation

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
    context: anything
}
```
An object used to pass data to the page navigated to.

---
### bindingContext
```ts
{
  frame.bindingContext =  {
    id:567
  }
}
```
_Optional_: an object to become the binding context of the page to be navigated to.

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

### Back Stack Entry Interface

