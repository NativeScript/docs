---
title: Navigation using Modals
description: Navigation using modals - detached from the current backstack.
contributos:
  - Ombuweb
  - rigor789
---

## Showing a modal

A strongly typed, working Typescript application can be [found here](https://stackblitz.com/edit/nativescript-stackblitz-templates-3bvo1g?file=app%2Fdetails-page.ts,app%2Fdetails-page.xml,app%2Fmain-page.ts). To show a modal, call the [showModal](https://docs.nativescript.org/api/class/ViewCommon#showmodal) method on a [View](https://docs.nativescript.org/api/class/View) instance and pass it the path to the modal view file:

```xml
<Button class="-primary -rounded-lg" text="Modal Example" tap="openModal" />
```

**WATCHOUT** - if your modal doesn't appear on button tap, confirm the path in `showModal` since no visual or console indicators exist to tell you an error has occurred unlike [Frame.topMost().navigate()](https://docs.nativescript.org/guide/navigation/frames-and-pages) when a bad path is passed to it. Here's an example with the file name `main-page.ts`.

```ts
import { Button, EventData, Page } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'
import { IDetails, IDetailsOptions } from './details-page'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel()
}

export function openModal(args: EventData) {
  const button = args.object as Button
  const options: IDetailsOptions = {
    context: { name: 'John Doe' },
    closeCallback(args: IDetails | undefined) {
      console.log('Modal returned the following data:', args)
    },
  }
  button.showModal('details-page', options) // WATCHOUT - no error if page doesn't exist and no modal will open
}
```

## Closing a modal

To close a modal, call the `closeModal` method of any `View` from the modal. See the section below on passing data to and from the modal.

```xml
<Button class="-outline -rounded-lg" text="Cancel" tap="onCancel"/>
```

```ts
export function onCancel(args: EventData) {
  const button = args.object as Button
  button.closeModal()
}
```

## Passing data to and from a modal

However, just closing the modal isn't useful beyond cancelling the modal. Modals can be extremely helpful for getting user input. First, you need the full XML page for your new modal with file name `details-page.xml`:

```xml
<Page shownModally="onShownModally" navigatingTo="onNavigatingTo">
  <StackLayout class="p-2">
    <Label class="p-2" text="Modify the field below to see it passed back to caller. Contains input validation too." textWrap="true" />
    <TextField class="p-2" id="name" text="{{ name }}" />
    <Button class="-primary -rounded-lg" text="Update" tap="onUpdate"/>
    <Button class="-outline -rounded-lg" text="Cancel" tap="onCancel"/>
  </StackLayout>
</Page>
```

Next, your code needs to populate a [View Model](https://docs.nativescript.org/guide/data-binding) allowing you to data-bind elements in the XML page. Data-binding means that UI updates in app from the user are magically "bound" in the observable view model without extra code. Functions `onShownModally`, `onUpdate`, and `onCancel` need to be exported so they are accessible as events in the XML page. Here's an example with file name `details-page.ts`. The example also includes input validation using the simple [Dialogs.alert](https://docs.nativescript.org/ui/dialogs#alert) and focus back to the bad field.

```ts
import {
  fromObject,
  Page,
  Button,
  ShownModallyData,
  EventData,
  Observable,
  Dialogs,
  TextField,
ShowModalOptions,
} from '@nativescript/core'

export interface IDetails {
  name: string
}

export interface IDetailsOptions extends ShowModalOptions {
  context: IDetails
}

// abstract class since there should be no constructor to create new instances
export abstract class DetailsContext extends Observable implements IDetails {
  name: string
}

let page: Page
let context: DetailsContext

export function navigatingTo() {
  const msg = 'You should not use this page outside of a modal window.'
  Dialogs
  .alert(msg)
  .then(() => {
      console.error(msg)
  })
}

export function onShownModally(args: ShownModallyData) {
  console.log('Modal displayed')
  page = args.object as Page
  context = fromObject({
    ...args.context,
  }) as DetailsContext
  page.bindingContext = context
}

export function onUpdate(args: EventData) {
  const nameNew = context.name.trim() // Updated from the TextField data-bind
  if (!nameNew) {
    Dialogs.alert('You must enter a value.').then(() => {
      (page.getViewById('name') as TextField).focus()
    })
    return
  }
  console.log('Modal closed, sending data back to caller')
  const button = args.object as Button
  button.closeModal({
    name: nameNew,
  })
}

export function onCancel(args: EventData) {
  console.log('Modal cancelled, no data sent back to caller')
  const button = args.object as Button
  button.closeModal()
}
```

Here's an example console output from the [working application](https://stackblitz.com/edit/nativescript-stackblitz-templates-3bvo1g?file=app%2Fdetails-page.ts,app%2Fdetails-page.xml,app%2Fmain-page.ts):

```
 iPhone  16:59:38 Modal displayed
 iPhone  16:59:39 Modal cancelled, no data sent back to caller
 iPhone  16:59:40 Modal returned the following data: undefined
 iPhone  16:59:43 Modal displayed
 iPhone  16:59:44 Modal closed, sending data back to caller
 iPhone  16:59:45 Modal returned the following data: {
  name: 'John Doe - EDITED'
}
```
