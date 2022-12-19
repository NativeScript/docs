---
title: Page
---
<!-- TODO: Add flavors -->

`<Page>` is a UI component that represents an application screen. NativeScript apps typically consist of one or more `<Page>` that wrap content such as an [`<ActionBar>`](#actionbar) and other UI widgets.
`<Page>` provides navigation events such as `navigatedTo`. See [events](#events) for more.

### Creating a Page

<!-- /// flavor svelte

```html
<page>
  <actionBar title="My App" />
  <gridLayout>
    <label text="My Content" />
  </gridLayout>
</page>
```

///

/// flavor vue

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <label text="My Content" />
  </GridLayout>
</Page>
```

///

/// flavor react

```tsx
<page>
  <actionBar title="My App" />
  <gridLayout>
    <label>My Content</label>
  </gridLayout>
</page>
```

### The special case of the ActionBar child

It doesn't matter whether the `<actionBar>` is a first child, last child, or middle child of `<page>`.
React NativeScript will automatically detect it using an `child instanceof Page` check, and set it as the `ActionBar` for the Page.

:::tip Note
You can skip this check by explicitly setting `<actionBar nodeRole="actionBar">`, but it's not a major performance concern.
:::
Any non-ActionBar child will be handled as the content view. Page only supports a single child, so if you want to insert multiple children on the Page (which is normally the case!), you should use a LayoutBase such as GridLayout to enscapsulate them.

:::tip Out of interest
You'd expect to be able to set ActionBar as the content view by specifying `<actionBar nodeRole="content">`, but it's not supported in NativeScript Core, so React NativeScript doesn't support it either!
:::

///

/// flavor plain -->

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <label text="My Content" />
  </GridLayout>
</Page>
```

<!-- /// -->

### Getting current page reference
NativeScript provides various ways to access the current Page instance.

#### Via Page Eventes
```ts
// loaded event
onPageLoaded(args: LoadEventData) {
    const page = args.object;
}

// navigatedTo event
export function onNavigatedTo(args) {
    const page = args.object;
}
```

#### Via the page property of a View instance
```ts
onTap(args: EventData) {
    const btn = args.object as Button
    const page: Page = btn.page;
}
```
#### Via the currentPage property of a Frame instance
```ts
const currentPage: Page = Frame.topmost().currentPage
```
See [Getting a Frame instance](/guide/ui/navigation#getting-a-frame-instance) for more ways to get a Frame instance.

### Using the `loaded` event for triggering UI changes

A typical scenario is performing UI changes after the page is loaded. The recommended way to do it is by using the `loaded` event, triggered by NativeScript when the page is fully loaded:

<!-- /// flavor plain -->

```xml
<Page
  loaded="onPageLoaded"
  navigatedFrom="onNavigatedFrom"
  navigatedTo="onNavigatedTo"
  navigatingFrom="onNavigatingFrom"
  navigatingTo="onNavigatingTo"
  unloaded="onUnloaded"
  layoutChanged="onLayoutChanged"
>
  <Page.actionBar>
    <ActionBar title="Page Creation" />
  </Page.actionBar>
  <!-- Each page can have only a single root view -->
  <StackLayout>
    <!-- content here -->
    <Label text="Hello, world!" />
  </StackLayout>
</Page>
```

```ts
import { EventData, Page } from '@nativescript/core'

export function onPageLoaded(args: EventData): void {
  console.log('Page Loaded')
  const page = args.object as Page
}
export function onLayoutChanged(args: EventData) {
  console.log(args.eventName)
  console.log(args.object)
}

export function onNavigatedTo(args: NavigatedData) {
  console.log(args.eventName)
  console.log(args.object)
  console.log(args.context)
  console.log(args.isBackNavigation)
}

export function onNavigatingFrom(args: NavigatedData) {
  console.log(args.eventName)
  console.log(args.object)
  console.log(args.context)
  console.log(args.isBackNavigation)
}

export function onUnloaded(args: EventData) {
  console.log(args.eventName)
  console.log(args.object)
}

export function onNavigatedFrom(args: NavigatedData) {
  console.log(args.eventName)
  console.log(args.object)
  console.log(args.context)
  console.log(args.isBackNavigation)
}
```

<!-- ///

/// flavor vue

```html
<Page @loaded="greet">
  <ActionBar title="My App" />
  <GridLayout>
    <label text="My Content" />
  </GridLayout>
</Page>
```

```js
export default {
  methods: {
    greet() {
      alert('Hello!').then(() => {
        console.log('Dialog closed')
      })
    }
  }
}
```

::: warning Note
Developers coming from a web background would usually reach for the `mounted` lifecycle hook Vue provides, however in NativeScript the application, and certain elements might not yet be loaded when the `mounted` hook is executed, thus certain actions such as alerts, dialogs, navigation etc. are not possible inside the `mounted` hook. To work around this limitation, the `loaded` event may be used, which only fires after the application is ready. In this case, we are using the `loaded` event of the [`<Page>`](#page) element, but this event is available for all NativeScript elements.
:::

/// -->

<!-- TODO: examples in all flavors -->

## Props
### actionBar
```ts
actionBar: ActionBar = page.actionBar
```
Gets the ActionBar for this page.

---
### actionBarHidden
```xml
<Page actionBarHidden="true">
```
```ts
page.actionBarHidden = true
```
Shows or hides the `<ActionBar>` for the page. Defaults to `false`.          

---
### frame
```ts
frame: Frame = page.frame
```
The Frame instance containing the page.

---
### navigationContext 
```ts
navigationContext = page.navigationContext
```
A property that is used to pass data to another page. 

---
### backgroundSpanUnderStatusBar
Gets or sets whether the background of the page spans under the status bar. Defaults to `false`.

---
### androidStatusBarBackground
```xml
<Page androidStatusBarBackground="blue">
 ```
(`Android-only`) Gets or sets the color of the status bar on Android devices.                                            

---
### enableSwipeBackNavigation
```xml
<Page enableSwipeBackNavigation="false">
```
```ts
page.enableSwipeBackNavigation = false
```
(`iOS-only`) Gets or sets whether the page can be swiped back on iOS. Defaults to `true`. 

---
### statusBarStyle
Gets or sets the style of the status bar. 
```xml
<Page statusBarStyle="light">
 ```
 ```ts
 page.statusBarStyle = "light"
 ```
Valid values:`light`or `dark`. 

---
### ...Inherited
For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/page).

---
## Events

### loaded
Emitted after the page has been loaded.

---
### navigatedFrom
Emitted after the app has navigated away from the current page.

---
### navigatedTo
Emitted after the app has navigated to the current page.

---
### navigatingFrom
Emitted before the app has navigated away from the current page.

---
### navigatingTo
Emitted before the app has navigated to the current page. 

---

::: warning Note
The events loaded, unloaded and layoutChanged are UI component lifecycles events and are universal for all classes that extend the View class (including Page). They can be used with all NativeScript elements (e.g. layouts, buttons, UI plugins, etc.).
:::

## Native component

| Android                                                                                                                                                                                          | iOS                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/NativeScript/blob/master/packages/ui-mobile-base/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller) |
