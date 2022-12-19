---
title: ListPicker
---

<!-- TODO: Add flavors -->
`<ListPicker>` is a UI component that lets the user select a value from a pre-configured list.


### Creating A Simple ListPicker

<!-- /// flavor plain -->

```xml
<ListPicker items="{{ years }}" loaded="{{ onListPickerLoaded }}" />
```

```ts
import { EventData, Observable, ListPicker, Page } from '@nativescript/core'
export class HelloWorldModel extends Observable{

years = [1980, 1990, 2000, 2010, 2020]

onListPickerLoaded(args) {
  const listPickerComponent = args.object
  listPickerComponent.on('selectedIndexChange', (data: ProperyChangeData) => {
    const picker = data.object as ListPicker
    console.log(`index: ${picker.selectedIndex}; item" ${years[picker.selectedIndex]}`)
  })
}
}
```
<!-- 
///

/// flavor angular

```html
<ListPicker [items]="items" class="picker"> </ListPicker>
```

///

/// flavor vue

```html
<ListPicker
  :items="listOfItems"
  selectedIndex="0"
  @selectedIndexChange="selectedIndexChanged"
/>
```

`<ListPicker>` provides two-way data binding using `v-model`.

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

///

/// flavor svelte

```tsx
<listPicker
  items="{listOfItems}"
  selectedIndex="0"
  on:selectedIndexChange="{selectedIndexChanged}"
/>
```

```js
let listOfItems = ['one', 'two', 'three']
const selectedIndexChanged = e => console.log(e.index)
```

`<ListPicker>` provides two-way data binding for `selectedIndex`.

```tsx
<listPicker items="{listOfItems}" bind:selectedIndex="{selectedItem}" />
```

///

/// flavor react

```tsx
import { EventData, ListPicker } from '@nativescript/core'
;<listPicker
  items={listOfItems}
  selectedIndex={0}
  onSelectedIndexChange={(args: EventData) => {
    const listPicker: ListPicker = args.object as ListPicker
    const index: number = listPicker.selectedIndex
    const item = listPicker.items[index]
  }}
/>
```

/// -->

## Props
### items
```xml
<ListPicker items="{{ years }}" />
```
```ts
export class HelloWorldModel extends Observable {
  years = [1980, 1990, 2000, 2010, 2020]
}
```
Gets or sets the specified items array as options in the list picker.                           

---
### selectedIndex
```ts
listPicker.selectedIndex
//or
listPicker.selectedIndex = 2
```
Gets or sets the index of the currently selected item. 

---
### ...Inherited
For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/listpicker).

## Event(s)
### selectedIndexChange
See [Creating a simple ListPicker](#creating-a-simple-listpicker)
Emitted when the currently selected option (index) changes.


## Native component

| Android                                                                                                   | iOS                                                                            |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html) | [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview) |
