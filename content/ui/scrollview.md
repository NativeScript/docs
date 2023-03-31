---
title: ScrollView
---

`<ScrollView>` is a UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.

It's important to note that `<ScrollView>` extends [`ContentView`](https://docs.nativescript.org/api-reference/classes/contentview), so it can only have a single child element.

By default, ScrollView scrolls vertically. To scroll horizontally, set the ScrollView's `orientation` property to `horizontal`.

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/ScrollView.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/ScrollView.png" />
</DeviceFrame>

### Creating a Simple ScrollView

<!-- /// flavor plain -->

```xml

<ScrollView scroll="onScroll">
  <GridLayout rows="200 200 200 200 200 200 200 200 200 200">
    <Label row="0" text="Some row content goes here..." />
    <Label row="1" text="Some row content goes here..." />
    <Label row="2" text="Some row content goes here..." />
    <Label row="3" text="Some row content goes here..." />
    <Label row="4" text="Some row content goes here..." />
    <Label row="5" text="Some row content goes here..." />
    <Label row="6" text="Some row content goes here..." />
    <Label row="7" text="Some row content goes here..." />
    <Label row="8" text="Some row content goes here..." />
    <Label row="9" text="Some row content goes here..." />
  </GridLayout>
</ScrollView>
```

```ts
import { Page, ScrollEventData, ScrollView } from '@nativescript/core'

export function onScroll(args: ScrollEventData) {
  const scrollView = args.object as ScrollView

  console.log('scrollX: ' + args.scrollX)
  console.log('scrollY: ' + args.scrollY)
}
```

<!-- ///

/// flavor angular

```xml
<ScrollView (scroll)="onScroll($event)">
  <GridLayout rows="200 200 200 200 200 200 200 200 200 200">
    <Label row="0" text="Some row content goes here..."></label>
    <Label row="1" text="Some row content goes here..."></label>
    <Label row="2" text="Some row content goes here..."></label>
    <Label row="3" text="Some row content goes here..."></label>
    <Label row="4" text="Some row content goes here..."></label>
    <Label row="5" text="Some row content goes here..."></label>
    <Label row="6" text="Some row content goes here..."></label>
    <Label row="7" text="Some row content goes here..."></label>
    <Label row="8" text="Some row content goes here..."></label>
    <Label row="9" text="Some row content goes here..."></label>
  </GridLayout>
</ScrollView>
```

```ts
import { Component } from '@angular/core'
import { ScrollView, ScrollEventData } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './tips-and-tricks.component.html'
})
export class TipsAndTricksComponent {
  onScroll(args: ScrollEventData) {
    const scrollView = args.object as ScrollView

    console.log('scrollX: ' + args.scrollX)
    console.log('scrollY: ' + args.scrollY)
  }
}
```

///

/// flavor vue

```xml
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>
```

///

/// flavor svelte

```xml
<scrollView orientation="horizontal">
  <stackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </stackLayout>
</scrollView>
```

///

/// flavor react

```xml
<scrollView orientation="horizontal">
  <stackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </stackLayout>
</scrollView>
```

///
-->

## Props

### orientation

```xml
 <ScrollView orientation="horizontal">
```

Gets or sets the direction in which the content can be scrolled: `horizontal` or `vertical`. Defaults to `vertical`.

---

### scrollBarIndicatorVisible

```xml
 <ScrollView scrollBarIndicatorVisible="false">
```

Specifies if the scrollbar is visible. Defaults to `true`.

---

### isScrollEnabled

```xml
 <ScrollView isScrollEnabled="false">
```

Gets or sets a value indicating whether scroll is enabled.

---

### verticalOffset

```ts
verticalOffset: number = scrollView.verticalOffset
```

Gets a value that contains the vertical offset of the scrolled content.

---

### horizontalOffset

```ts
horizontalOffset: number = scrollView.horizontalOffset
```

Gets a value that contains the horizontal offset of the scrolled content.

---

### scrollableHeight

```ts
scrollableHeight: number = scrollView.scrollableHeight
```

Gets the maximum value for the [verticalOffset](#verticaloffset).

---

### scrollableWidth

```ts
scrollableWidth: number = scrollView.scrollableWidth
```

Gets the maximum value for the [horizontalOffset](#horizontaloffset).

---

### scrollToVerticalOffset()

```ts
scrollView.scrollToVerticalOffset(value: number, animated: boolean)
```

Scrolls the content to the specified vertical offset position. Set `animated` to `true` for animated scroll, `false` for immediate scroll.

---

### scrollToHorizontalOffset()

```ts
scrollView.scrollToHorizontalOffset(value: number, animated: boolean)
```

Scrolls the content to the specified horizontal offset position. Set `animated` to `true` for animated scroll, `false` for immediate scroll.

---

## Event(s)

### scroll

Emitted when a scroll event occurs. For the event's data, see [ScrollEventData Interface](https://docs.nativescript.org/api-reference/interfaces/scrolleventdata).

---

## Native component

| Android                                                                          | iOS                                                                            |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`android.view`](https://developer.android.com/reference/android/view/View.html) | [`UIScrollView`](https://developer.apple.com/documentation/uikit/uiscrollview) |
