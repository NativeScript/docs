---
title: Button
description: A basic native button that reacts to user gestures.
contributors:
  - rigor789
  - Ombuweb
---

`<Button>` is a UI component that displays a button which reacts to user gestures.

For more information about the available gestures, see [Gestures](/guide/ui/gestures).

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/Button.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/Button.png" />
</DeviceFrame>

```xml
<Button text="Button" />
```

## Examples

### Formatting text inside a button

If you need to style parts of the text, you can use a combination of a `FormattedString` and `Span` elements.

```xml
<Button>
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Button>
```

## Props

### text

```ts
text: string
```

Sets the text shown in the button.

### textWrap

```ts
textWrap: boolean
```

Gets or sets whether the button should wrap longer text to new lines.

Default value is `false`.

### isEnabled

```ts
isEnabled: boolean
```

Allows disabling the button. A disabled button does not react to user gestures.

Default value is `true`.

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/Button).

## Events

### tap

```ts
on('tap', (args: TapGestureEventData) => {
  const button = args.object as Button
  console.log(`The button has been tapped!`)
})
```

Emitted when the button is tapped

See [TapGestureEventData](/api/interface/TapGestureEventData).

## Native component

| Android                                                                                       | iOS                                                                    |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton) |
