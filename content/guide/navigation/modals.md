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

<Tabs>
<Tab flavor="typescript">

::: code-group

```xml [main-page.xml]
<Button text="Show a Modal" tap="onShowModal" />
```

```ts [main-page.ts]
import { EventData, View, ShowModalOptions } from '@nativescript/core'

export function onShowModal(args: EventData) {
  const view = args.object as View
  const options: ShowModalOptions = {
    // ...
  }
  view.showModal('details-page', options)
}
```

:::

</Tab>

<Tab flavor="angular">

```ts
import { Component, inject } from '@angular/core'
import {
  NativeDialog,
  NATIVE_DIALOG_DATA,
  DialogRef,
} from '@nativescript/angular'

@Component({
  standalone: true,
  template: `<Button text="Open Modal" (tap)="open()" />`,
})
export class MyComponent {
  dialog = inject(NativeDialog)

  open() {
    this.dialog.open(ModalComponent, {
      data: {
        name: 'Hello!',
      },
    })
  }
}

@Component({
  standalone: true,
  template: `<Label [text]="data?.name"></Label>`,
})
export class ModalComponent {
  dialogRef = inject(DialogRef)
  data = inject(NATIVE_DIALOG_DATA) as { name?: string }

  constructor() {
    console.log(this.data?.name) // Hello!
  }

  close() {
    this.dialogRef.close()
  }
}
```

</Tab>

<Tab flavor="vue">

```ts
import { $showModal } from 'nativescript-vue'
import Detail from './Detail.vue'

$showModal(Detail, {
  props: { name: 'Hello!' },
  closeCallback(result) {
    console.log('Modal result:', result)
  },
})
```

```xml
<!-- Detail.vue -->
<Button @tap="$modal.close('done')" text="Close" />
```

See the full Vue modal guide: https://nativescript-vue.org/docs/essentials/routing#showing-a-modal

</Tab>

<Tab flavor="svelte">

```ts
import ModalPage from './ModalPage.svelte'
import { showModal, closeModal } from 'svelte-native'

async function openModal() {
  const result = await showModal({
    page: ModalPage,
    props: { name: 'Hello!' },
  })
  console.log('Modal result:', result)
}

function close() {
  closeModal('done')
}
```

See the full Svelte modal guide: https://svelte.nativescript.org/docs#showmodal

</Tab>

<Tab flavor="solid">

```ts
import { Frame, Page, ShowModalOptions, View } from '@nativescript/core'
import { render } from '@nativescript-community/solid-js'
import type { JSX } from 'solid-js'

type ModalResult = { ok: boolean; value?: string }

function openSolidModal(
  launcher: View,
  Modal: (props: { close: (r?: ModalResult) => void }) => JSX.Element,
) {
  return new Promise<ModalResult | undefined>((resolve) => {
    const modalPage = new Page()

    const dispose = render(() => {
      const close = (result?: ModalResult) => modalPage.closeModal(result)
      return (
        <stacklayout padding="16">
          <Modal close={close} />
        </stacklayout>
      )
    }, modalPage as any)

    const options: ShowModalOptions = {
      context: {},
      fullscreen: true,
      closeCallback: (result?: ModalResult) => {
        dispose?.()
        resolve(result)
      },
    }

    launcher.showModal(modalPage, options)
  })
}

async function onOpen() {
  const launcher = Frame.topmost().currentPage
  const result = await openSolidModal(launcher, ({ close }) => (
    <>
      <label text="Hello from a Solid modal!" />
      <button text="OK" on:tap={() => close({ ok: true, value: 'done' })} />
      <button text="Cancel" on:tap={() => close({ ok: false })} />
    </>
  ))

  console.log('Modal result:', result)
}
```

</Tab>

<Tab flavor="react">

```ts
import { StackLayout, AbsoluteLayout } from '@nativescript/core'
import * as React from 'react'
import * as RNS from 'react-nativescript'

const portalRoot = new RNS.NSVRoot()

function openModal(
  containerRef: React.RefObject<any>,
  portalRef: React.RefObject<any>,
) {
  const containerView = containerRef.current?.nativeView as StackLayout
  const portalView = portalRef.current?.nativeView as AbsoluteLayout

  containerView.showModal(portalView, {
    context: { name: 'Hello!' },
    closeCallback: (result) => console.log('Modal result:', result),
  })
}
```

See the full React NativeScript modal guide: https://react-nativescript.netlify.app/docs/core-concepts/modals

</Tab>
</Tabs>

:::warning Note
If your modal does not appear when tapping the button, confirm you set the correct path and the modal page exists. `showModal` does not throw an error when the provided path doesn't exist.
:::

## Closing a modal

To close a modal, call the `closeModal` method of any `View` from the modal.

For passing data back to the parent, see [Passing Data](#passing-data).

<Tabs>
<Tab flavor="typescript">

::: code-group

```xml
<Button text="Close a Modal" tap="onCloseModal"/>
```

```ts
export function onCloseModal(args: EventData) {
  const view = args.object as View
  view.closeModal()
}
```

:::

</Tab>

<Tab flavor="angular">

```ts
import { Component, inject } from '@angular/core'
import { DialogRef } from '@nativescript/angular'

@Component({})
export class ModalComponent {
  dialogRef = inject(DialogRef)

  close() {
    this.dialogRef.close()
  }
}
```

</Tab>

<Tab flavor="vue">

```xml
<!-- inside Detail.vue -->
<Button @tap="$modal.close()" text="Close" />
```

</Tab>

<Tab flavor="svelte">

```ts
import { closeModal } from 'svelte-native'

function close() {
  closeModal()
}
```

</Tab>

<Tab flavor="solid">

```ts
function Modal(props: { close: () => void }) {
  return <button text="Close" on:tap={props.close} />
}
```

</Tab>

<Tab flavor="react">

```ts
function handleCloseModal() {
  const portalView = portalRef.current?.nativeView
  portalView.closeModal()
}
```

</Tab>
</Tabs>

## Passing data {#passing-data}

Modals are often used for prompting the user for input, this requires passing data between the parent and the modal.

### From parent to modal

To pass data to the modal in core TypeScript, provide it in the `context` field of `ShowModalOptions`.
In Angular, pass data in the `data` option of `NativeDialog.open(...)`.

<Tabs>
<Tab flavor="typescript">

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

</Tab>

<Tab flavor="angular">

```ts
const ref = this.dialog.open(ModalComponent, {
  data: {
    name: 'Hello!',
  },
})
```

```ts
import { Component, inject } from '@angular/core'
import { NATIVE_DIALOG_DATA } from '@nativescript/angular'

@Component({})
export class ModalComponent {
  data = inject(NATIVE_DIALOG_DATA) as { name?: string }

  constructor() {
    console.log(this.data?.name) // Hello!
  }
}
```

</Tab>

<Tab flavor="vue">

```ts
import { $showModal } from 'nativescript-vue'
import Detail from './Detail.vue'

$showModal(Detail, {
  props: {
    name: 'Hello!',
  },
})
```

</Tab>

<Tab flavor="svelte">

```ts
import ModalPage from './ModalPage.svelte'
import { showModal } from 'svelte-native'

showModal({
  page: ModalPage,
  props: {
    name: 'Hello!',
  },
})
```

</Tab>

<Tab flavor="solid">

```ts
const result = await openSolidModal(launcher, ({ close }) => (
  <MyModal name="Hello!" close={close} />
))
```

</Tab>

<Tab flavor="react">

```ts
containerView.showModal(portalView, {
  context: {
    name: 'Hello!',
  },
})
```

</Tab>
</Tabs>

In the core TypeScript modal page, listen to the `shownModally` event to access the `context`:

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

When closing a modal, you can optionally pass data back to the parent.
In core TypeScript, use `closeCallback` in `ShowModalOptions`.
In Angular, subscribe to `ref.afterClosed()` and close with `dialogRef.close(data)`.

<Tabs>
<Tab flavor="typescript">

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

</Tab>

<Tab flavor="angular">

```ts
const ref = this.dialog.open(ModalComponent, {
  data: {
    name: 'Hello!',
  },
})

ref.afterClosed().subscribe((data) => {
  console.log(data) // Hello!
})
```

```ts
import { Component, inject } from '@angular/core'
import { DialogRef } from '@nativescript/angular'

@Component({})
export class ModalComponent {
  dialogRef = inject(DialogRef)

  closeWithData() {
    this.dialogRef.close('Hello!')
  }
}
```

</Tab>

<Tab flavor="vue">

```ts
import { $showModal } from 'nativescript-vue'
import Detail from './Detail.vue'

$showModal(Detail, {
  props: { name: 'Hello!' },
  closeCallback(result) {
    console.log(result) // Hello!
  },
})
```

```xml
<!-- inside Detail.vue -->
<Button @tap="$modal.close('Hello!')" text="Close" />
```

</Tab>

<Tab flavor="svelte">

```ts
import ModalPage from './ModalPage.svelte'
import { showModal } from 'svelte-native'

const result = await showModal({
  page: ModalPage,
  props: { name: 'Hello!' },
})

console.log(result) // Hello!
```

```ts
import { closeModal } from 'svelte-native'

closeModal('Hello!')
```

</Tab>

<Tab flavor="solid">

```ts
const result = await openSolidModal(launcher, ({ close }) => (
  <>
    <button text="Close" on:tap={() => close({ ok: true, value: 'Hello!' })} />
  </>
))

console.log(result?.value) // Hello!
```

</Tab>

<Tab flavor="react">

```ts
containerView.showModal(portalView, {
  context: {},
  closeCallback: (result) => {
    console.log(result) // Hello!
  },
})
```

```ts
portalView.closeModal('Hello!')
```

</Tab>
</Tabs>

In the core TypeScript modal page, listen to the `shownModally` event to access the `context`.

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
  View,
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
