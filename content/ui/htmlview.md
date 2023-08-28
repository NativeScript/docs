---
title: HtmlView
description: UI component for rendering simple HTML content.
contributors:
  - rigor789
  - Ombuweb
---

`<HtmlView>` is a UI component for rendering simple static HTML content.

See also: [WebView](/ui/webview).

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/HtmlView.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/HtmlView.png" />
</DeviceFrame>

```xml
<HtmlView html="{{ htmlString }}" />
```

```html
const htmlString = `
<span>
  <h1><font color="blue">NativeScript HtmlView</font></h1>
</span>
`
```

## Props

### html

```ts
html: string
```

The HTML content to be shown.

### selectable

```ts
selectable: boolean
```

Gets or sets a value indicating whether HtmlView content is selectable.

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/HtmlView).

## Native component

| Android                                                                                           | iOS                                                                        |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview) |
