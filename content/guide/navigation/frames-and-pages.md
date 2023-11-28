---
title: Navigation using Frames and Pages
description: Navigate between Pages in your app.
---

Navigation in NativeScript is enabled by the `Frame` class.

## Examples

### Navigating to another page

To navigate from one `Page` to another, first obtain the desired [Frame instance](#getting-a-frame-instance).
For simple navigation, call the [navigate](#navigate) method passing along the path of the page to navigate to.

```ts
frame.navigate('~/pages/details/details-page')
```

:::tip Note
For a complete navigation example, have a look at [Setup navigation from home to details component](/tutorials/build-a-master-detail-app-with-plain-typescript#setup-navigation-from-home-to-details-component).
:::

### Getting a Frame instance

The following are some of the ways in which to obtain a Frame instance.

#### Getting the topmost frame

```ts
import { Frame } from '@nativescript/core'

const frame = Frame.topmost()
```

#### Getting the frame from a Page

For example, you can get the current Frame instance from a `tap` event's data as follows:

```ts
onFlickTap(args: EventData): void {
  const button = args.object as Button;
  const frame = button.page.frame;
}
```

#### Getting a frame by id

```ts
import { Frame } from '@nativescript/core'

const frame = Frame.getFrameById('frame-id')
```

### Navigating back

To navigate back to the previous page, use the [goBack](#goback) method of the Frame instance.

```ts
frame.goBack()
```

### Avoid navigating back to the previous page

To avoid navigating to the previous page, set the [clearHistory](#clearhistory) property of the [NavigationEntry](#navigation-entry-interface) object that you pass to the [navigate](#navigate) method to `true`.

```ts
frame.navigate({
  moduleName: 'details/details-page',
  clearHistory: true,
})
```

### Passing data between pages

To pass data to the page you are navigating to, set the value of the [context](#context) property of the NavigationEntry to the data you would like to pass.

```ts
frame.navigate({
  moduleName: 'details/details-page',
  context: { id: 2 },
})
```

To access the passed data, handle the `navigatedTo` event for the `details/details-page` page and access the `context` property on the event's [NavigatedData](https://docs.nativescript.org/api/interface/NavigatedData) object.

```ts
import { NavigatedData } from '@nativescript/core'

export function onNavigatedTo(args: NavigatedData) {
  this.id = args.context.id
  this.notifyPropertyChange('id', args.context.id)
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

## See also

- [UI Components › Frame](/ui/frame)
- [UI Components › Page](/ui/page)
- [API Reference › Frame](/api/class/Frame)
- [API Reference › Page](/api/class/Page)
