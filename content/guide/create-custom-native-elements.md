---
title: Creating Custom Native Elements
description: What to do when built-in elements don't meet your needs?
contributors:
  - NathanWalker
---

When working with view markup in NativeScript, you interact with a set of pre-registered elements, such as [`GridLayout`](https://docs.nativescript.org/ui/grid-layout), [`Button`](https://docs.nativescript.org/ui/button), and [`Label`](https://docs.nativescript.org/ui/label). These are commonly referred to as **"view components."**

You can also create custom native elements or extend existing ones to add specialized functionality to your application.

This guide demonstrates how to:

- Register custom view elements across all NativeScript flavors.
- Implement a simple custom view component, starting from a basic class definition:

```ts
import { View } from '@nativescript/core'

export class Checkbox extends View {
  // implementation details
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
import { registerElement } from 'react-nativescript'
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
import { registerElement } from 'dominative'
import { Checkbox } from './checkbox'

registerElement('checkbox', Checkbox)
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
import { registerElement } from 'nativescript-vue'
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
</Tabs>

## Creating Custom View Components

The process for creating new NativeScript view components is consistent across Angular, React, Solid, Svelte, TypeScript, and Vue.

### Anatomy of a Custom View

Every custom NativeScript view must have:

- (**required**) A class extending any NativeScript View.
- (**required**) `createNativeView`: Construct and return a platform-native view. _Note: It's only required if you want to override what's being returned from the extended class._
- (_optional_) `initNativeView`: Perform initialization after creation.
- (_optional_) `disposeNativeView`: Cleanup resources when removed.

Example:

```ts
import { View } from '@nativescript/core'

export class CustomView extends View {
  createNativeView() {
    // return UIView or android.view.View instance
  }

  initNativeView() {
    // initialization code
  }

  disposeNativeView() {
    // cleanup code
  }
}
```

#### Extending Existing Views

You can extend **any** existing NativeScript view, for example:

```ts
import { ContentView, Label, Button } from '@nativescript/core'

export class CustomView1 extends ContentView {}
export class CustomView2 extends Label {}
export class CustomView3 extends Button {}
```

#### `createNativeView` Examples

This method must return an instance of the native view:

```ts
// iOS
createNativeView() {
  return new WKWebView({ frame: CGRectZero, configuration });
}

// Android
createNativeView() {
  return new android.webkit.WebView(this._context);
}
```

#### Initialization and Cleanup

- `initNativeView`: Perform setup after the view has been created.
- `disposeNativeView`: Free resources as needed.

Explore more examples within NativeScript core and plugins:

- [Button implementation (iOS)](https://github.com/NativeScript/NativeScript/blob/96af6fa83e586a1c443c8b179701450d803e12aa/packages/core/ui/button/index.ios.ts#L21)
- [Button implementation (Android)](https://github.com/NativeScript/NativeScript/blob/96af6fa83e586a1c443c8b179701450d803e12aa/packages/core/ui/button/index.android.ts#L72)
- [Custom Flutter view example (iOS)](https://github.com/NativeScript/ui-kit/blob/dca883ada479a6d0982abbcb01a51f661d927812/packages/flutter/index.ios.ts#L40)
- [Custom Flutter view example (Android)](https://github.com/NativeScript/ui-kit/blob/dca883ada479a6d0982abbcb01a51f661d927812/packages/flutter/index.android.ts#L80)

For additional details on advanced topics like using Cocoapods or Gradle, refer to [this blog series](https://blog.nativescript.org/create-a-custom-view-plugin-marquee-label/).

## Project Structure for Custom Views

Create a dedicated folder for your component, such as:

```bash
./checkbox
  common.ts
  index.android.ts
  index.ios.ts
  index.d.ts
```

This structure encapsulates platform-specific implementations and shared logic, simplifying imports and registration:

```ts
import { Checkbox } from './checkbox'
```

## Real-World Example: Custom Checkbox

Let's create a `<Checkbox>` component that behaves consistently on iOS and Android like this:

<iframe style="width: 100%; min-height: 200px; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/08uip43irOM" title="Creating custom elements with NativeScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

See the full working example on StackBlitz: https://stackblitz.com/edit/nativescript-create-custom-elements-checkbox?file=src%2Fapp%2Fcheckbox%2Fcommon.ts

In NativeScript, creating custom UI components can be straightforward and powerful. In this guide, you'll learn how to build a simple, reusable Checkbox component using only built-in modules from `@nativescript/core`. We'll leverage a combination of `GridLayout`, `Label`, and Material Design icons.

### Step-by-Step Guide

#### 1. Extend `GridLayout`

The base structure of our Checkbox will utilize `GridLayout`, which serves as a container for the checkbox icon:

```typescript
import { GridLayout } from '@nativescript/core'

export class CheckboxCommon extends GridLayout {}
```

#### 2. Initialize Checkbox with a Font Icon

Next, we'll add a Label to serve as our checkbox icon, using Material Design icons for the visual representation.

```typescript
import { GridLayout, Label, Color } from '@nativescript/core'

export class CheckboxCommon extends GridLayout {
  checked = false
  defaultColor = new Color('#dddddd')
  selectionColor = new Color('#4CAF50')

  private _iconLabel: Label
  private _circleIcon = String.fromCharCode(0xf764)
  private _checkmarkIcon = String.fromCharCode(0xf5e0)

  constructor() {
    super()

    this.horizontalAlignment = 'center'
    this.verticalAlignment = 'middle'

    this._iconLabel = new Label()
    this._iconLabel.text = this._circleIcon
    this._iconLabel.className = 'mat'
    this._iconLabel.color = this.defaultColor
    this._iconLabel.horizontalAlignment = 'center'
    this._iconLabel.verticalAlignment = 'middle'

    this.addChild(this._iconLabel)
  }
}
```

Include Material Design Icons in your project by adding this CSS class in your `app.css`:

```css
.mat {
  font-family: 'Material Design Icons', 'MaterialDesignIcons';
  font-weight: 400;
}
```

Ensure you've added the MaterialDesignIcons font file to your app's `fonts` directory.

---

#### 3. Implementing Animation

To enhance user interaction, add a simple scaling animation when toggling the checkbox state:

```typescript
import { CoreTypes } from '@nativescript/core'

export class CheckboxCommon extends GridLayout {
  // existing properties and constructor...

  private _animateCheckmark() {
    if (!this.checked) {
      this._iconLabel.color = this.defaultColor
    }

    this._iconLabel
      .animate({
        scale: { x: 0.5, y: 0.5 },
        duration: 200,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .then(() => {
        this._iconLabel.text = this.checked
          ? this._checkmarkIcon
          : this._circleIcon

        if (this.checked) {
          this._iconLabel.color = this.selectionColor
        }

        this._iconLabel.animate({
          scale: { x: 1, y: 1 },
          duration: 200,
          curve: CoreTypes.AnimationCurve.easeInOut,
        })
      })
  }
}
```

---

#### 4. Defining Customizable Properties

NativeScript's `Property` system allows you to easily expose customizable attributes:

```typescript
const sizeProperty = new Property<CheckboxCommon, number>({
  name: 'size',
  defaultValue: 24,
  affectsLayout: __APPLE__,
})

const checkedProperty = new Property<CheckboxCommon, boolean>({
  name: 'checked',
  defaultValue: false,
  valueConverter: booleanConverter,
})

const defaultColorProperty = new Property<CheckboxCommon, Color>({
  name: 'defaultColor',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v),
})

const selectionColorProperty = new Property<CheckboxCommon, Color>({
  name: 'selectionColor',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v),
})
```

These properties automatically handle conversions, such as strings to colors or booleans.

---

#### 5. Connecting Properties to Native Views

Link these properties to your checkbox component:

```typescript
export class CheckboxCommon extends GridLayout {
  // existing implementation...

  [sizeProperty.setNative](value: number) {
    this._iconLabel.fontSize = value
  }

  [checkedProperty.setNative](value: boolean) {
    this.checked = value
    if (this.isLoaded) {
      this._animateCheckmark()
    }
  }

  [defaultColorProperty.setNative](value: Color) {
    this.defaultColor = value
    if (this._iconLabel) {
      this._iconLabel.color = this.defaultColor
    }
  }

  [selectionColorProperty.setNative](value: Color) {
    this.selectionColor = value
  }
}

// Register properties
sizeProperty.register(CheckboxCommon)
checkedProperty.register(CheckboxCommon)
defaultColorProperty.register(CheckboxCommon)
selectionColorProperty.register(CheckboxCommon)
```

---

### Complete Example and Testing

Explore and interact with the complete example directly:

- **Full Implementation:** [Common Checkbox Component](https://stackblitz.com/edit/nativescript-create-custom-elements-checkbox?file=src%2Fapp%2Fcheckbox%2Fcommon.ts)
- **Element Registration:** [Checkbox Registration](https://stackblitz.com/edit/nativescript-create-custom-elements-checkbox?file=src%2Fapp%2Fapp.component.ts%3AL5)

---

### Summary

Creating custom components in NativeScript allows you to:

- Build complex components from simple elements
- Utilize powerful styling and animations
- Easily manage and expose customizable properties

Whether creating fully native views or hybrid custom components, NativeScript provides flexibility and efficiency to meet your application's needs.

## Customize Existing Elements?

Rather than create new elements from scratch, you may want to just adjust existing view elements. Learn about how to [extend any element for custom behavior here](/guide/customizing-view-elements).
