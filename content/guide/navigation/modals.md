---
title: Navigation using Modals
description: Navigation using modals - detached from the current backstack.
contributos:
  - Ombuweb
  - rigor789
  - flipperlite
---

## Showing a modal

To show a modal, call the [showModal](https://docs.nativescript.org/api/class/ViewCommon#showmodal) method on a [View](https://docs.nativescript.org/api/class/View) instance and pass it the path to the modal view file:

<!-- note: we need a "Open In StackBlitz" button, and also put these in an official NativeScript collection to link on the docs. -->
<!-- A strongly typed, working, Typescript application can be [found here](https://stackblitz.com/edit/nativescript-stackblitz-templates-3bvo1g?file=app%2Fdetails-page.ts,app%2Fdetails-page.xml,app%2Fmain-page.ts).  -->

```xml
<Button text="Show a Modal" tap="onShowModal" />
```

```ts
import { EventData, View, ShowModalOptions } from '@nativescript/core'

export function onShowModal(args: EventData) {
  const view = args.object as View
  const options: ShowModalOptions = {
    // ...
  }
  view.showModal('details-page', options)
}
```

:::warning Note
If your modal does not appear when tapping the button, confirm you set the correct path and the modal page exists. `showModal` does not throw an error when the provided path doesn't exist.
:::

## Closing a modal

To close a modal, call the `closeModal` method of any `View` from the modal.

For passing data back to the parent, see [Passing Data](#passing-data).

```xml
<Button text="Close a Modal" tap="onCloseModal"/>
```

```ts
export function onCloseModal(args: EventData) {
  const view = args.object as View
  view.closeModal()
}
```

## Passing data {#passing-data}

Modals are often used for prompting the user for input, this requires passing data between the parent and the modal.

### From parent to modal

To pass data to the modal, provide it in the `context` field of the ShowModalOptions:

```ts
// main-page.ts
import { ShowModalOptions } from '@nativescript/core'

// optionally use strong types
import { ExampleModalContext } from './details-page'

const options: ShowModalOptions = {
  context: {
    name: 'John Doe',
  } as ExampleModalContext,
}

button.showModal('details-page', options)
```

In the modal page, listen to the `shownModally` event to access the `context`:

```xml
<!-- details-page.xml -->
<Page shownModally="onShownModally"/>
```

```ts
// details-page.ts
import { ShownModallyData } from '@nativescript/core'

// optional strong type for the context
export type ExampleModalContext = {
  name: string
}

export function onShownModally(args: ShownModallyData) {
  const context = args.context as ExampleModalContext
  console.log(context.name) // 'John Doe'
}
```

### From modal to parent

When closing a modal, you can optionally pass data back to the parent. To do so, provide a `closeCallback` option in the ShowModalOptions:

```ts
// main-page.ts

import { ShowModalOptions } from '@nativescript/core'

// optionally use strong types
import { ExampleModalContext, ExampleModalResult } from './details-page'

const options: ShowModalOptions = {
  context: {
    name: 'John Doe',
  } as ExampleModalContext,
  closeCallback(result?: ExampleModalResult) {
    if (result) {
      console.log(`Modal returned: ${result.newName}`) // 'Modal returned: Jane Doe'
      return
    }
    console.log('Modal was cancelled.')
  },
}

button.showModal('details-page', options)
```

In the modal page, listen to the `shownModally` event to access the `context`.

::: code-group

```xml [details-page.xml]
<Page shownModally="onShownModally">
  <StackLayout>
    <!-- ... -->
    <TextField text="{{ name }}" />
    <Button text="Change Name" tap="onChangeName"></Button>
    <Button text="Cancel" tap="onCancel"></Button>
  </StackLayout>
</Page>
```

```ts [details-page.ts]
import {
  fromObject,
  Page,
  Button,
  ShownModallyData,
  EventData,
} from '@nativescript/core'

// optional strong type for the context
export type ExampleModalContext = {
  name: string
}

export type ExampleModalResult = {
  newName: string
}

export function onShownModally(args: ShownModallyData) {
  const page = args.object as Page
  const incomingContext = args.context as ExampleModalContext

  const bindingContext = fromObject({
    ...incomingContext,
    onChangeName(args: EventData) {
      const button = args.object as Button
      button.closeModal({
        newName: bindingContext.name, // 'Jane Doe'
      } as ExampleModalResult)
    },
    onCancel(args: EventData) {
      const view = args.object as View
      view.closeModal()
    },
  })
  page.bindingContext = bindingContext
}
```

:::

## Additional Resources

- [NativeScript XML Data Binding](/guide/data-binding)
- [TextField](/ui/text-field)
