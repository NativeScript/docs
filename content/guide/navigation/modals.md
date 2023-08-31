---
title: Navigation using Modals
description: Navigation using modals - detached from the current backstack.
contributos:
  - Ombuweb
  - rigor789
---

## Showing a modal

To show a modal, call the [showModal](https://docs.nativescript.org/api-reference/classes/view#showmodal) method on a [View](https://docs.nativescript.org/api-reference/classes/view) instance and pass it the path to the modal view file:

```xml
<Button text="View details" tap="onTap" />
```

```ts
onTap(args: EventData) {
  const button = args.object as Button
  button.showModal("details-page")
}
```

## Closing a modal

To close a modal, call the `closeModal` method of any `View` from the modal. Optionally pass it data you want to access in the parent page:

```xml
<Button text="Close" tap="onTap" />
```

```ts
onTap(args: EventData) {
  const button = args.object as Button
  button.closeModal({
    name: 'John Doe - EDITED',
  })
}
```

## Passing data to and from a modal

Passing data can be done by passing a `context` in the `showModal` options parameter.

```ts
const options: ShowModalOptions = {
  context: { name: 'John Doe' },
  closeCallback(args: { name: string }) {
    console.log('Modal closed', args.name)
  },
}
// ...
button.showModal('details-page', options)
```

To access the data in the modal, handle the `shownModally` event, and access it via `args.context`.

```xml
<Page shownModally="onShownModally">
  <StackLayout>
    <TextField text="{{ name }}" />
    <Button text="Close" tap="onClose"/>
  </StackLayout>
</Page>
```

```ts
import {
  fromObject,
  Page,
  Button,
  ShownModallyData,
  EventData,
} from '@nativescript/core'

export function onShownModally(args: ShownModallyData) {
  const page = args.object as Page
  const context = fromObject({
    ...args.context,
    onClose(args: EventData) {
      const button = args.object as Button
      button.closeModal({
        name: context.name, // 'John Doe - EDITED'
      })
    },
  })
  page.bindingContext = context
}
```
