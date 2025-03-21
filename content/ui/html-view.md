---
title: HtmlView
description: UI component for rendering simple HTML content.
contributors:
  - rigor789
  - Ombuweb
---

`<HtmlView>` is a UI component for rendering simple static HTML content.

::: tip
For additional features and improved performance, consider using an alternative implementation like the
[@nativescript-community/ui-label](https://github.com/nativescript-community/ui-label) from the community.
:::

See also: [WebView](/ui/web-view).

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/HtmlView.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/HtmlView.png"/>
</DeviceFrame>

<Tabs>
<Tab flavor="typescript">

::: code-group
<<< @/../examples/typescript/src/ui/HtmlView/template.xml#example [XML]
<<< @/../examples/typescript/src/ui/HtmlView/template.ts#example [TypeScript]
:::

</Tab>

<Tab flavor="angular">

::: code-group
<<< @/../examples/angular/src/ui/HtmlView/component.html#example [HTML]
<<< @/../examples/angular/src/ui/HtmlView/component.ts#example [TypeScript]
:::

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/htmlview.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/htmlview.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/HtmlView.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/HtmlView/component.vue#example

</Tab>
</Tabs>

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
