---
title: RootLayout
---

<!-- TODO: Add Preview -->
<!-- TODO: Add flavors tabs -->

`<RootLayout>` is a layout container designed to be used as the primary root layout container for your app with a built-in API to easily control dynamic view layers. It extends a [GridLayout]() so has all the features of a grid but enhanced with additional apis.

You can use `getRootLayout()` to get a reference to the root layout in your app from anywhere.

## Usage

To use the `RootLayout` element, add it to a HTML file

Then in the ViewModel, get its reference and call the `open()` method on it to open a [View](https://docs.nativescript.org/api-reference/classes/view) instance of interest.

<!-- /// flavor plain -->

```xml
<RootLayout height="100%" width="100%">
  <GridLayout height="100%">
    <Label
      verticalAlignment="center"
      textAlignment="center"
      text="MAIN CONTENT AREA"
    ></label>
  </GridLayout>
</RootLayout>
```

```ts
// Open a dynamic popup
const view = this.getPopup('#EA5936', 110, -30)
getRootLayout()
  .open(view, {
    shadeCover: {
      color: '#000',
      opacity: 0.7,
      tapToClose: true,
    },
    animation: {
      enterFrom: {
        opacity: 0,
        translateY: 500,
        duration: 500,
      },
      exitTo: {
        opacity: 0,
        duration: 300,
      },
    },
  })
  .catch((ex) => console.error(ex))

// Close the dynamic popup
getRootLayout()
  .close(view, {
    opacity: 0,
    translate: { x: 0, y: -500 },
  })
  .catch((ex) => console.error(ex))

function getPopup(color: string, size: number, offset: number): View {
  const layout = new StackLayout()
  layout.height = size
  layout.width = size
  layout.marginTop = offset
  layout.marginLeft = offset
  layout.backgroundColor = color
  layout.borderRadius = 10
  return layout
}
```

<!-- /// flavor vue

### Vue

Convert the Vue component to a View instance as follows:
```ts
const createNativeView = (component: any, props?: any): View => {
    return createApp(component, props).mount().$el.nativeView
}
```

Then pass that view instance to the `open()` method.

```ts
const nsView = createNativeView(Snackbar, props)

const showSnackbar = (props?: any) => {
         const nsView = createNativeView(Snackbar, props)
         getRootLayout()
             .open(nsView, {
                 shadeCover: {
                     color: '#282C34',
                     opacity: 0.7,
                     tapToClose: true,
                 },
                 animation: {
                     enterFrom: {
                         translateY: 250,
                         duration: 1000,
                         curve: DEFAULT_ANIMATION_CURVE,
                     },
                     exitTo: {
                         translateY: 250,
                         duration: 1000,
                         curve: DEFAULT_ANIMATION_CURVE,
                     },
                 },
             }).then((e) => {
             console.log(e)
             setTimeout(() => {
                 getRootLayout().close(nsView)
             }, 4000)
         }).catch((ex: any) => console.error(ex))
     }
```
-->

<!-- /// flavor angular

### Angular
Convert the Angular component to a View instance as follows:

```ts
import { generateNativeScriptView } from '@nativescript/angular';

 function createNativeView(component, input?: any): Promise<View> {
    return new Promise((resolve) => {
      const injector = Injector.create({
        providers: [{ provide: GenericParams, useValue: input }],
        parent: this.injector,
      });
      const cmpRef = generateNativeScriptView(component, {
        injector,
      });
      (<any>cmpRef.firstNativeLikeView).__ngRef = cmpRef.ref;
      resolve(cmpRef.firstNativeLikeView);
    });
  }


  this.createNativeView(SnackbarComponent).then((v) => {
      this._snackbar = v;// View instance
      getRootLayout()
        .open(this._snackbar, ...)

  })
```
-->
<!-- // flovor svelte -->

### Svelte

First, convert a Svelte component to a View instance:

```ts
function createNativeView(component, props?: any) {
  const fragment = createElement('fragment')
  const viewInstance = new component({ target: fragment, props })
  const element = fragment.firstElement() as NativeViewElementNode<View>
  return { element, viewInstance }
}
```

Then, pass the View instance to the `open()` method.

```ts
const nsView = createNativeView(TestComponent).element.nativeView

setTimeout(() => {
  getRootLayout()
    .open(nsView, {
      shadeCover: {
        color: '#000',
        opacity: 0.7,
        tapToClose: true,
      },
      animation: {
        enterFrom: {
          opacity: 0,
          translateY: 500,
          duration: 500,
        },
        exitTo: {
          opacity: 0,
          duration: 300,
        },
      },
    })
    .catch((ex) => console.error(ex))
})
```

### Listening to a view closed event

To handle a closed view event, listen to the view's `unloaded` event.

```ts
view.on(ViewBase.unloadedEvent, () => {
  // Do something
})
```

## API

### RootLayout

| Method                                            | Returns                                                          |
| :------------------------------------------------ | :--------------------------------------------------------------- |
| `open(view: View, options?: RootLayoutOptions)`   | `Promise<void>`                                                  |
| `close(view: View, exitTo?: TransitionAnimation)` | `Promise<void>`                                                  |
| `bringToFront(view: View, animated?: boolean)`    | `Promise<void>`                                                  |
| `closeAll()`                                      | `Promise<void>`                                                  |
| `getShadeCover()`                                 | [View](https://docs.nativescript.org/api-reference/classes/view) |

For inherited See [GridLayout](https://docs.nativescript.org/api-reference/classes/gridlayout).

### getRootLayout()

```ts
 rootLayout: : RootLayout = getRootLayout()
```

Returns the reference to the `RootLayout` in an HTML file

---

### RootLayoutOptions

| Property     | Type                                                               | Description                                                                                                                                   |
| :----------- | :----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `shadeCover` | [ShadeCoverOptions](#shadecoveroptions)                            | _Optional_                                                                                                                                    |
| `animation`  | `{ enterFrom?: TransitionAnimation; exitTo?: TransitionAnimation}` | _Optional_: `enterFrom` is only applied if it's the first one to be opened. <br> `exitFrom` is only applied if it's the last one to be closed |

### ShadeCoverOptions

| Property             | Type                                                               | Description                                                                                                                                   |
| :------------------- | :----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `opacity`            | `number`                                                           | _Optional_                                                                                                                                    |
| `color`              | `string`                                                           | _Optional_                                                                                                                                    |
| `tapToClose`         | `boolean`                                                          | _Optional_                                                                                                                                    |
| `animation`          | `{ enterFrom?: TransitionAnimation; exitTo?: TransitionAnimation}` | _Optional_: `enterFrom` is only applied if it's the first one to be opened. <br> `exitFrom` is only applied if it's the last one to be closed |
| `ignoreShadeRestore` | `boolean`                                                          | _Optional_                                                                                                                                    |

### TransitionAnimation

| Property     | Type                                                                                                     | Description                    |
| :----------- | :------------------------------------------------------------------------------------------------------- | :----------------------------- |
| `translateX` | `number`                                                                                                 | _Optional_                     |
| `translateY` | `number`                                                                                                 | _Optional_                     |
| `scaleX`     | `number`                                                                                                 | _Optional_                     |
| `scaleY`     | `number`                                                                                                 | _Optional_                     |
| `rotate`     | `number`                                                                                                 | _Optional_: in `degrees`       |
| `opacity`    | `number`                                                                                                 | _Optional_                     |
| `duration`   | `number`                                                                                                 | _Optional_ : in `milliseconds` |
| `curve`      | [CoreTypes.AnimationCurve](https://docs.nativescript.org/api-reference/modules/coretypes.animationcurve) | _Optional_                     |

<!-- TODO: Add the below examples to StackBlitz -->

<!-- You can play with [the toolbox app here](https://github.com/NativeScript/NativeScript/tree/master/apps/toolbox/src/pages/root-layout.ts)

You can also find a more [thorough example in this sample repo](https://github.com/williamjuan027/nativescript-rootlayout-demo) -->

<!-- StackBlitz Examples
- Core
- Vue
- Angular
- [Svelte](https://stackblitz.com/edit/nativescript-stackblitz-templates-ve3snd?file=app%2Fcomponents%2FHome.svelte&title=NativeScript%20Starter%20Svelte) -->
