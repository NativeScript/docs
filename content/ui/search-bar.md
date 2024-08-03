---
title: SearchBar
description: UI component for entering search queries.
contributors:
  - rigor789
  - Ombuweb
---

`<SearchBar>` is a UI component that provides a user interface for entering search queries.

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/SearchBar.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/SearchBar.png"/>
</DeviceFrame>

<<< @/../examples/typescript/src/ui/SearchBar/template.xml#example

## Props

### hint

```ts
hint: string
```

<!-- textlint-disable terminology -->

Gets or sets the placeholder text for the input area.

<!-- textlint-enable -->

### text

```ts
text: string
```

Gets or sets the value of the search query.

### textFieldBackgroundColor

```ts
textFieldBackgroundColor: Color
```

Gets or sets the background color of the input area.

See [Color](/api/class/Color).

### textFieldHintColor

```ts
textFieldHintColor: Color
```

<!-- textlint-disable terminology -->

Gets or sets the color of the placeholder text.

<!-- textlint-enable -->

See [Color](/api/class/Color).

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/SearchBar)

## Events

### textChange

```ts
on('textChange', (args: PropertyChangeData) => {
  const searchBar = args.object as SearchBar
  console.log('Search query:', args.value)
})
```

Emitted when the search text is changed.

See [PropertyChangeData](/api/interface/PropertyChangeData).

### submit

```ts
on('submit', (args: EventData) => {
  const searchBar = args.object as SearchBar
  console.log('Search for:', searchBar.text)
})
```

Emitted when the search text is submitted.

### clear

```ts
on('submit', (args: EventData) => {
  const searchBar = args.object as SearchBar
  console.log('SearchBar cleared')
})
```

Emitted when the search input is cleared through the **&cross;** button in the input area.

## Native component

- Android: [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html)
- iOS: [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar)
