---
title: Showing A Modal
---
<!-- TODO: Add Preview -->
<!-- TODO: Add flavours -->

## Showing a modal
To show a modal, call the [showModal](https://docs.nativescript.org/api-reference/classes/view#showmodal) method on a [View](https://docs.nativescript.org/api-reference/classes/view) instance and pass it the path to the modal view file:
```ts
onTap(args: EventData) {
    const btn = args.object as Button
    btn.showModal("pages/details/details-page")
}
```
## Passing data from a modal
To pass data to a modal view, create a [ShowModalOptions](https://docs.nativescript.org/api-reference/interfaces/showmodaloptions) object, set the `context` property to the data and pass the object as a second parameter of the `showModal()` method.
```ts
 const opts: ShowModalOptions = {
      context: {id: 5},
      closeCallback: (args: {username:string, id: number})=>{
        console.log("Modal closed!!", args.username)
      }
    }
  btn.showModal("pages/details/details-page", opts)
```
:::tip Note
The `closeCallback` is a function called when a modal is closed. It receives data passed from the modal. 
:::
To access that data in the modal, you can it add to the ViewModel of the modal view as follows:

```ts
import { fromObject } from "@nativescript/core"
export function onShownModally(args: ShownModallyData) {
    const page = args.object as Page

    const context = fromObject({
        
        onTap(args: EventData){
            console.log(args.eventName)
        },
        ...args.context
    })
    page.bindingContext = context
}
```
Then you can access `id` from xml as follows:
```xml
<Label text="{{ id }}" textWrap="true" />
```
### Closing a modal

To close a modal, call the [closeModal()](https://docs.nativescript.org/api-reference/classes/view#closemodal) method on a [View](https://docs.nativescript.org/api-reference/classes/view) instance, optionally passing it the data you want to pass to the parent page:
```ts
btn.closeModal({username: "John Doe", id: this.id+1})
```
