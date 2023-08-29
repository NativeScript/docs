---
title: HtmlView
description: UI component for rendering simple HTML content.
contributors:
  - rigor789
  - Ombuweb
---

`<HtmlView>` is a UI component for rendering simple static HTML content.

See also: [WebView](/ui/web-view).

<DeviceFrame type="ios">
<img src="../screenshots/ios/HtmlView.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../screenshots/android/HtmlView.png"/>
</DeviceFrame>

<<< @/../examples/src/ui/HtmlView/template.xml#example
<<< @/../examples/src/ui/HtmlView/template.ts#example{xml}

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

- Android: [`android.widget.TextView`](https://developer.android.com/reference/android/widget/TextView.html)
- iOS: [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)
