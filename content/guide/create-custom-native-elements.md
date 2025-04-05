---
title: Creating Custom Native Elements
description: What to do when built-in elements don't meet your needs? You can create new custom native elements or extend existing ones to enhance behavior for all sorts of cases.
contributors:
  - NathanWalker
---

When working on view markup with NativeScript, a collection of elements you interact with are registered for you like [GridLayout](https://docs.nativescript.org/ui/grid-layout), [Button](https://docs.nativescript.org/ui/button), [Label](https://docs.nativescript.org/ui/label), etc. These are just commonly used elements. 

At anytime, you can create your own, extend others and fully customize views for your needs.

Let's first look at how you would register new elements across all flavors and then we'll discuss how to build one, starting with a simple example of a custom View class:

```ts
import { View } from '@nativescript/core'

export class Checkbox extends View {
  // impl
}
```

## Registering New Elements

<Tabs>
<Tab flavor="typescript">

You could use `Checkbox` within XML markup by providing any namespace prefix and the path to it.

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:custom="./checkbox">
  <StackLayout>
    <custom:Checkbox width="200" height="200" />
  </StackLayout>
</Page>
```

</Tab>
<Tab flavor="angular">

The registration can occur anywhere the view is needed or commonly in `app.component.ts`, the root bootstrap component, making it available for use anywhere in your application.

```ts
import { registerElement } from '@nativescript/angular'
import { Checkbox } from './checkbox'

registerElement('Checkbox', () => Checkbox)
```

You can now use it like anything else:

```html
<StackLayout>
  <Checkbox width="200" height="200" />
</StackLayout>
```

</Tab>
<Tab flavor="svelte">

The registration can be done in the bootsrap file, commonly `app.ts`. With Svelte, we use camelCase on elements where applicable.

```ts
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom'
import { Checkbox } from './checkbox'

registerNativeViewElement('checkbox', () => Checkbox)
```

You can now use it like anything else:

```html
<stackLayout>
  <checkbox width="200" height="200" />
</stackLayout>
```

</Tab>
<Tab flavor="react">

The registration can be done in the bootsrap file, commonly `app.ts`. With React, we use camelCase on elements where applicable.

```ts
import { registerElement } from 'react-nativescript';
import { Checkbox } from './checkbox'

registerElement('checkbox', () => Checkbox)
```

You can now use it like anything else:

```html
<stackLayout>
  <checkbox width="200" height="200" />
</stackLayout>
```

</Tab>
<Tab flavor="solid">

The registration can be done in the bootsrap file, commonly `app.tsx`.

```ts
import { registerElement } from 'dominative';
import { Checkbox } from './checkbox'

registerElement('checkbox', Checkbox);
```

You can now use it like anything else:

```html
<stacklayout>
  <checkbox width="200" height="200" />
</stacklayout>
```

</Tab>
<Tab flavor="vue">

The registration can be done in the bootsrap file, commonly `app.ts`.

```ts
import { registerElement } from 'nativescript-vue';
import { Checkbox } from './checkbox'

registerElement('Checkbox', () => Checkbox);
```

You can now use it like anything else:

```html
<StackLayout>
  <Checkbox width="200" height="200" />
</StackLayout>
```

</Tab>
</Tabs>

## Creating New Views

Creating a new view element for use across anything in NativeScript (Angular, React, Solid, Svelte, TypeScript by itself, Vue, etc) is exactly the same.

### Custom View Anatomy

There's only 2 **fundamental** required aspects to any custom NativeScript view component (with 2 _optional_ additions):

1. Extend any NativeScript View.
2. (**required**) `createNativeView`: Construct and return any platform native view.
3. (*optional*) `initNativeView`: Initialize anything.
4. (*optional*) `disposeNativeView`: Cleanup anything.

Let's look at those within the context of an example:

```ts
// 1. (required) Extend any NativeScript View
export class CustomView extends View { 

  // 2. (required) Construct and return any platform native view
  createNativeView() {
      // return instance of UIView or android.view.View;
  }

  // 3. (optional) initialize anything
  initNativeView() {

  }

  // 4. (optional) cleanup anything
  disposeNativeView() { 

  }
}
```

Let's explain each point respectively.

1. (required) extend any NativeScript View: **any** NativeScript view, for example these are all valid:

```ts
import { ContentView, Label, Button } from '@nativescript/core'

export class CustomView1 extends ContentView {
 // impl
}

export class CustomView2 extends Label {
  // impl
}

export class CustomView3 extends Button {
  // impl
}
```

2. `createNativeView`: Quite literally create and return **any** platform native view, for example these are both valid:

```ts
// iOS
createNativeView() {
  return new WKWebView({
    frame: CGRectZero,
    configuration: configuration,
  });
}
// Android
createNativeView() {
  return new android.webkit.WebView(this._context);
}
```

3. `initNativeView`: Initialize anything you'd like.

4. `disposeNativeView`: Destroy and cleanup anything if needed.

You will find many examples of this pattern throughout @nativescript/core, for example:

- [Button implementation for iOS](https://github.com/NativeScript/NativeScript/blob/96af6fa83e586a1c443c8b179701450d803e12aa/packages/core/ui/button/index.ios.ts#L21)
- [Button implementation for Android](https://github.com/NativeScript/NativeScript/blob/96af6fa83e586a1c443c8b179701450d803e12aa/packages/core/ui/button/index.android.ts#L72)

All NativeScript plugins follow this exact same pattern as well, for example:

- [@nativescript/flutter for iOS](https://github.com/NativeScript/ui-kit/blob/dca883ada479a6d0982abbcb01a51f661d927812/packages/flutter/index.ios.ts#L40)
- [@nativescript/flutter for Android](https://github.com/NativeScript/ui-kit/blob/dca883ada479a6d0982abbcb01a51f661d927812/packages/flutter/index.android.ts#L80)

You can also learn a lot about this with additional details such as using Cocoapods, Gradle and more in [this blog post series](https://blog.nativescript.org/create-a-custom-view-plugin-marquee-label/).

### Implementing within a Project

Implementing custom native elements at any moment within a project starts with creating a folder for your new element followed by the implementation. A common folder organization is as follows:

```bash
./checkbox
  common.ts
  index.android.ts
  index.d.ts
  index.ios.ts
```

This represents a new encapsulated custom native `<Checkbox />` element sharing common code via `common.ts` with each platform implementation represented via it's suffix. The `index.d.ts` is a convenience allowing one to simply import via the folder to register the element anywhere, for example:

```ts
import { Checkbox } from './checkbox'

// register custom element using examples above for the flavor you're using
```

## Customize Existing Elements?

Rather than create a new element from scratch, you may want to customize existing view elements. Learn about how to [extend any element for custom beavhior here](/guide/customizing-view-elements).