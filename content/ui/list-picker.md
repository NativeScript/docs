---
title: ListPicker
description: UI component for selecting a value from a list.
contributors:
  - rigor789
  - Ombuweb
---

`<ListPicker>` is a UI component that lets the user select a value from a pre-configured list.

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/ListPicker.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/ListPicker.png"/>
</DeviceFrame>

<Tabs>
<Tab flavor="typescript">

::: code-group
<<< @/../examples/typescript/src/ui/ListPicker/template.xml#example [XML]
<<< @/../examples/typescript/src/ui/ListPicker/template.ts#example [TypeScript]
:::

</Tab>

<Tab flavor="angular">

::: code-group
<<< @/../examples/angular/src/ui/ListPicker/component.html#example [HTML]
<<< @/../examples/angular/src/ui/ListPicker/component.ts#example [TypeScript]
:::

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/listpicker.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/listpicker.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/ListPicker.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/ListPicker/component.vue#example

</Tab>
</Tabs>

## Props

### items

```ts
items: Array<string | number>
```

Gets or sets the items of the ListPicker.

### selectedIndex

```ts
selectedIndex: number
```

Gets or sets the index of the currently selected item.

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/ListPicker).

## Events

### selectedIndexChange

```ts
on('selectedIndexChange', (args: PropertyChangeData) => {
  const picker = args.object as ListPicker
  console.log('selectedIndex changed to', args.value)
  // or picker.selectedIndex
})
```

Emitted when the currently selected item (index) changes.

## Native component

- Android: [`android.widget.NumberPicker`](https://developer.android.com/reference/android/widget/NumberPicker.html)
- iOS: [`UIPickerView`](https://developer.apple.com/documentation/uikit/uipickerview)
