---
title: Button
---

<!-- TODO: Add flavors -->

`<Button>` is a UI component that displays a button which reacts to a user gesture.

For more information about the available gestures, see [Gestures](/guide/ui/gestures).

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/Button.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Button.png" />
</DeviceFrame>

<!-- /// flavor plain -->

```xml
<Button text="Tap me!" tap="onTap" />
```

```ts
import { Button } from '@nativescript/core'

export function onTap(args) {
  const button = args.object as Button
  // execute your custom logic here...
}
```

<!-- ///

/// flavor angular

```xml
<button text="Tap me!" (tap)="onTap($event)"></button>
```

```ts
import { Button, EventData } from '@nativescript/core'

onTap(args: EventData) {
    const button = args.object as Button
    // execute your custom logic here...
}
```

///

/// flavor vue

```xml
<button text="Button" @tap="onButtonTap" />
```

///

/// flavor svelte

```xml
<button text="Button" on:tap="{onButtonTap}" />
```

///

/// flavor react

```tsx
import { EventData } from '@nativescript/core'
;<button
  text="Button"
  onTap={(args: EventData) => {
    const button = args.object
  }}
/>
```

/// -->

### Styling the button

If you need to style parts of the text, you can use a combination of a `FormattedString` and `Span` elements.

```xml
<button>
  <FormattedString>
    <span text="This text has a " />
    <span text="red " style="color: red" />
    <span text="piece of text. " />
    <span text="Also, this bit is italic, " fontStyle="italic" />
    <span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</button>
```

## Props

### text

```xml
<Button text="Tap me!"/>
```

Sets the label of the button.

---

### textWrap

```xml
<Button text="Tap me!" textWrap="true" />
```

Gets or sets whether the widget wraps the text of the label. Useful for longer labels. Default value is `false`.

---

### isEnabled

```ts
button.isEnabled = false
```

Make the button disabled or enabled. A disabled button is unusable and un-clickable. Default value is `true`.

---

### Inherited

For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/button).

---

## Event(s)

### tap

```xml
<Button text="Tap me!" tap="{{ onTap }}" />
```

```ts
export class HelloWorldModel extends Observable {
  onTap(args: EventData) {}
}
```

Emitted when the button is tapped. Event type is [EventData](https://docs.nativescript.org/api-reference/interfaces/eventdata)

---

## Native component

| Android                                                                                       | iOS                                                                    |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton) |
