---
title: Label
---

<!-- TODO: Add flavors -->

`<Label>` is a UI component that displays read-only text.

::: warning :orange_circle: Note
This `<Label>` is **not** the same as the HTML `<Label>`.
:::

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/Label.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Label.png" />
</DeviceFrame>

### Simple label

<!-- /// flavor plain -->

```xml
<Label text="Label" />
```

<!--
///

/// flavor angular

```xml
<Label text="Label"></label>
```

///

/// flavor react

```tsx
<Label>Label</label>
```

///

/// flavor vue

```xml
<Label text="Label" />
```

///

/// flavor svelte

```xml
<Label text="Label" />
```

/// -->

### Styling the label

If you need to style parts of the text, you can use a combination of a `FormattedString` and `Span` elements.

<!-- /// flavor plain -->

```xml
<Label textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Label>
```

<!-- ///

/// flavor angular

```xml
<Label textWrap="true">
  <FormattedString>
    <span text="This text has a "></span>
    <span text="red " style="color: red"></span>
    <span text="piece of text. "></span>
    <span text="Also, this bit is italic, " fontStyle="italic"></span>
    <span text="and this bit is bold." fontWeight="bold"></span>
  </FormattedString>
</label>
```

///

/// flavor react

```tsx
import { Color } from '@nativescript/core'
;<Label textWrap={true}>
  <formattedString>
    <span>This text has a </span>
    <span color={new Color('red')}>red </span>
    <span>piece of text. </span>
    <span fontStyle="italic">Also, this bit is italic, </span>
    <span fontWeight="bold">and this bit is bold.</span>
  </formattedString>
</label>
```

///

/// flavor vue

```xml
<Label textWrap="true">
  <FormattedString>
    <span text="This text has a " />
    <span text="red " style="color: red" />
    <span text="piece of text. " />
    <span text="Also, this bit is italic, " fontStyle="italic" />
    <span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</label>
```

///

/// flavor svelte

```xml
<Label textWrap="{true}">
  <formattedString>
    <span text="This text has a " />
    <span text="red " style="color: red" />
    <span text="piece of text. " />
    <span text="Also, this bit is italic, " fontStyle="italic" />
    <span text="and this bit is bold." fontWeight="bold" />
  </formattedString>
</label>
```

/// -->

## Props

### letterSpacing

```xml
<Label text="Hello there!" letterSpacing="1"/>
```

_Type_: `number`

Gets or sets [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) style property.

---

### lineHeight

```xml
<Label text="Hello there!" lineHeight="10"/>
```

_Type_: `number`

Gets or sets [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) style property.

---

### text

```xml
<Label text="Hello there!" />
```

_Type_: `string`
Gets or sets the text displayed or to be displayed by the Label instance.

---

### textAlignment

```xml
<Label text="Hello there!" textAlignment="center" />
```

Gets or sets text-alignment style property. Valid values:
`"initial"` | `"left"` | `"center"` | `"right"`. Defaults to `"left"`

---

### textDecoration

```xml
<Label text="Hello there!" textDecoration="underline" />
```

Gets or sets text decoration style property. See [TextDecorationType](https://docs.nativescript.org/api-reference/modules/coretypes#textdecorationtype) for valid values. Defaults to `"none"`.

---

### textTransform

```xml
<Label text="Hello there!" textTransform="capitalize"/>
```

Gets or sets text transform style property. See [TextTransformType](https://docs.nativescript.org/api-reference/modules/coretypes#texttransformtype) for valid values. Defaults to `"initial"`.

---

### textWrap

```xml
<Label text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." textWrap="true"/>
```

Gets or sets whether the text breaks and renders on the next line if the current runs out of space. Defaults to `false`.

---

### whiteSpace

```xml
<Label text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available." whiteSpace="normal"/>
```

Gets or sets the white space style.
Valid values: `"initial"` | `"normal"` | `"nowrap"`
Defaults to `"initial"`.

---

### ...Inherited

For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/label).

## Event(s)

### textChange

```xml
    <Label text="{{ greeting }}" loaded="{{ onLabelLoaded }}"/>
```

```ts
onLabelLoaded(args: EventData) {
    const label = args.object as Label

    label.on("textChange", (textChangeEvent: PropertyChangeData)=>{

    console.log(textChangeEvent.eventName)
    })
}
```

Emitted when the label text is changed.

---

## Native component

| Android                                                                                           | iOS                                                                  |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UILabel`](https://developer.apple.com/documentation/uikit/uilabel) |
