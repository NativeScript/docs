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
To avoid navigating to the previous page, set the (#goback) method of the Frame instance.
```ts
frame.goBack()
```
### Passing data between pages
To pass data, pass a 


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

Gets or sets the default [NavigationTransition](#navigation-transition-interface) for all frames across the app.

---

### backStack
```ts
```

---
### currentPage
```ts
```

---
### currentEntry
```ts
```

---
### animated
```ts
```

---
### transition
```ts
```

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
    context
}
```
An object use to pass data to the page navigated to.

---
### Back Stack Entry Interface

### bindingContext
```ts
```
_Optional_: an object to become the binding context of the page to be navigated to.

---
### animated
```ts
```

to navigate to the new Page using animated transitions, false otherwise.

---
### transition	
```ts
```

Specifies an optional navigation transition for all platforms. If not specified, the default platform transition will be used.

---
### transitionAndroid
```ts
```
Specifies an optional navigation transition for Android. If not specified, the default platform transition will be used.

---
### transitioniOS
```ts
```
NavigationTransition	Specifies an optional navigation transition for iOS. If not specified, the default platform transition will be used.

---
### backstackVisible
```ts
```	

to record the navigation in the backstack, false otherwise. If the parameter is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.

---
### clearHistory
```ts
{
    clearHistory: true
}
```
If set to `true`, it clears the navigation history. This very useful when navigating away from a login page.