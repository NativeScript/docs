---
title: SegmentedBar
---

<!-- TODO: Add flavors -->

`<SegmentedBar>` is a UI bar component that displays a set of buttons for discrete selection. Can show text or images.

As opposed to [`<TabView>`](#tabview):

- The position of `<SegmentedBar>` is not fixed.
- You can place and style it as needed on the page or inside additional app elements such as hamburger menus.
- You need to handle the content shown after selection separately.

---

<DeviceFrame type="ios">
<img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/SegmentedBar.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/SegmentedBar.png" />
</DeviceFrame>

### Creating a SegmentedBar with `SegmentedBarItem`

<!-- /// flavor plain -->

```xml
<SegmentedBar>
  <SegmentedBarItem title="First" />
  <SegmentedBarItem title="Second" />
  <SegmentedBarItem title="Third" />
</SegmentedBar>
```

<!-- ///

/// flavor angular

```xml
<SegmentedBar>
  <SegmentedBarItem title="First"></SegmentedBarItem>
  <SegmentedBarItem title="Second"></SegmentedBarItem>
  <SegmentedBarItem title="Third"></SegmentedBarItem>
</SegmentedBar>
```

///

/// flavor svelte

```xml
<segmentedBar>
  <segmentedBarItem title="First" />
  <segmentedBarItem title="Second" />
  <segmentedBarItem title="Third" />
</segmentedBar>
```

///

/// flavor react

```tsx
<segmentedBar>
  <segmentedBarItem title="First" />
  <segmentedBarItem title="Second" />
  <segmentedBarItem title="Third" />
</segmentedBar>
```

///

/// flavor vue

```xml
<SegmentedBar>
  <SegmentedBarItem title="First" />
  <SegmentedBarItem title="Second" />
  <SegmentedBarItem title="Third" />
</SegmentedBar>
```

///
-->

### SegmentedBar with `selectedIndex`

To handle a `selectedIndex` change, listen to the `selectedIndexChanged` event.

<!-- /// flavor plain -->

```xml
<SegmentedBar row="0" class="m-5" selectedIndex="{{ sbSelectedIndex }}"
 selectedIndexChanged=" {{ onSelectedIndexChange }} ">
  <SegmentedBar.items>
    <SegmentedBarItem title="Item 1" />
    <SegmentedBarItem title="Item 2" />
    <SegmentedBarItem title="Item 3" />
  </SegmentedBar.items>
</SegmentedBar>
```

```ts
import { Observable } from '@nativescript/core'
export class HelloWorldModel extends Observable {
  sbSelectedIndex = 0

  onSelectedIndexChange(args: SelectedIndexChangedEventData) {
    console.log('new value: ' + args.newIndex, 'old: ' + args.oldIndex)
  }
}
```

<!-- ///

/// flavor angular

```xml
<SegmentedBar
  [items]="mySegmentedBarItems"
  selectedIndex="0"
  (selectedIndexChanged)="onSelectedIndexChanged($event)"
>
</SegmentedBar>
```

```ts
import { Component, ChangeDetectionStrategy } from '@angular/core'
import {
  SegmentedBar,
  SegmentedBarItem,
  SelectedIndexChangedEventData
} from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicSegmentedBarComponent {
  mySegmentedBarItems: Array<SegmentedBarItem> = []

  constructor() {
    for (let i = 1; i < 5; i++) {
      const item = new SegmentedBarItem()
      item.title = 'Item ' + i
      this.mySegmentedBarItems.push(item)
    }
  }

  public onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    const segmentedBar = args.object as SegmentedBar
    const oldIndex = args.oldIndex
    const newIndex = args.newIndex
  }
}
```

///

/// flavor vue

```xml
<SegmentedBar
  :items="listOfItems"
  selectedIndex="0"
  @selectedIndexChanged="onSelectedIndexChange"
/>
```

`<SegmentedBar>` provides two-way data binding using `v-model`.

```xml
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

///

/// flavor svelte

```xml
<segmentedBar selectedIndex="0" on:selectedIndexChanged="{onSelectedIndexChange}" />
```

`<segmentedBar>` can be populated with `{each}` block.

```xml
<segmentedBar>
  {#each listOfItems as item}
  <segmentedBarItem title="{item}" />
  {/each}
</segmentedBar>
```

```js
let listOfItems = ['First', 'Second', 'Third']
```

`<segmentedBar>` provides two-way data binding of `selectedIndex`.

```tsx
<segmentedBar bind:selectedIndex="{selectedItem}" >
```

///

/// flavor react

```tsx
<segmentedBar
  items={listOfItems}
  selectedIndex={0}
  selectedIndexChanged={onSelectedIndexChange}
/>
```

/// -->

## Props

### items

```ts
const segmentedBarItem1 = new SegmentedBarItem()
segmentedBarItem1.title = 'Item 1'

const segmentedBarItem2 = new SegmentedBarItem()
segmentedBarItem2.title = 'Item 2'

//SegmentedBar
const segmentedBar = new SegmentedBar()

segmentedBar.items = [segmentedBarItem1, segmentedBarItem2]
```

An array of items to be displayed in the segmented bar. Represents the button labels or icons of the segmented bar.

---

### selectedIndex

```xml
<SegmentedBar selectedIndex="{{ sbSelectedIndex }}">
```

```ts
export class HelloWorldModel extends Observable {
  sbSelectedIndex = 0
}
```

Gets or sets the index of the selected item.

---

### selectedBackgroundColor

```xml
<SegmentedBar selectedBackgroundColor="red">
</SegmentedBar>
```

Gets or sets the background color of the selected item. To set the background color of the entire bar, use `backgroundColor`.

---

### ...Inherited

For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/segmentedbar).

## Events

### selectedIndexChanged

```xml
<SegmentedBar selectedIndexChanged=" {{ onSelectedIndexChange }} ">
```

```ts
onSelectedIndexChange(args: SelectedIndexChangedEventData) {
    const segmentedBar = args.object as SegmentedBar
}
```

Emitted when the an item on the segmented bar is tapped. See the [SelectedIndexChangedEventData interface](#selectedindexchangedeventdata-interface) for the event data.

---

### SelectedIndexChangedEventData interface

The `SelectedIndexChangedEventData` object provides the following data:
| Name | Type | Description |
|------|------|-------------|
| `oldIndex`| `number`| The old selected index.|
| `newIndex`| `number`| The new selected index.|

## Native component

| Android                                                                                         | iOS                                                                                        |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`android.widget.TabHost`](https://developer.android.com/reference/android/widget/TabHost.html) | [`UISegmentedControl`](https://developer.apple.com/documentation/uikit/uisegmentedcontrol) |
