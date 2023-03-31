---
title: SearchBar
---
<!-- TODO: Add flavors -->

`<SearchBar>` is a UI component that provides a user interface for entering search queries and submitting requests to the search provider.

---
<div>
<div class="flex flex-wrap p-4 sm:p-8">
<div  class="w-full sm:w-1/2">
 <img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/SearchBar.png" alt="Android SearchBar Example"/> 
</div>

<div  class="w-full sm:w-1/2 sm:pl-8">
<img alt="iOS SearchBar Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/SearchBar.png" />
</div>
</div>
</div>

<!-- /// flavor plain -->
### A simple SearchBar handling the clear and submit events

```xml
<SearchBar id="searchBar"
     hint="Enter search term here ..." 
     text="{{ searchText }}" clear="{{ onClear }}" 
     submit="{{ onSubmit }}" 
     loaded="{{ onSearchBarLoaded }}"/>
```

```ts
import { Observable, Page, SearchBar } from '@nativescript/core'

export function onNavigatingTo(args) {
  const page = args.object as Page
  const vm = new HelloWorldModel()
  page.bindingContext = vm
}

export class HelloWorldModel extends Observable {
  searchText= ""
  constructor() {
    super()
  }

  onSearchBarLoaded(args: EventData){
    const searchBar = args.object as SearchBar;
    searchBar.on("textChange",(args: PropertyChangeData)=>{

    console.log("Event name: ",args.eventName)
})
  }
onSubmit(args: EventData) {
    const searchBar = args.object as SearchBar
    console.log(`Searching for ${searchBar.text}`)
  }

  onClear(args: EventData) {
    const searchBar = args.object as SearchBar
    console.log(`Clear event raised`)
  }
}
```

<!-- ///

/// flavor angular

```html
<SearchBar
  hint="Enter search term here ..."
  [text]="searchPhrase"
  (textChange)="onTextChanged($event)"
  (clear)="onClear($event)"
  (submit)="onSubmit($event)"
>
</SearchBar>
```

```ts
import { Component } from '@angular/core'
import { SearchBar } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class UsageComponent {
  searchPhrase: string

  onSubmit(args) {
    const searchBar = args.object as SearchBar
    console.log(`Searching for ${searchBar.text}`)
  }

  onTextChanged(args) {
    const searchBar = args.object as SearchBar
    console.log(`Input changed! New value: ${searchBar.text}`)
  }

  onClear(args) {
    const searchBar = args.object as SearchBar
    console.log(`Clear event raised`)
  }
}
```

///

/// flavor vue

```html
<SearchBar
  hint="Search hint"
  :text="searchPhrase"
  @textChange="onTextChanged"
  @submit="onSubmit"
/>
```

`<SearchBar>` provides two-way data binding using `v-model`.

```html
<SearchBar v-model="searchQuery" />
```

///

/// flavor svelte

```tsx
<searchBar
  hint="Search hint"
  text="{searchQuery}"
  on:textChange="{onTextChanged}"
  on:submit="{onSubmit}"
/>
```

`<SearchBar>` provides two-way data binding for `text`.

```html
<searchBar bind:text="{searchQuery}" />
```

///

/// flavor react

```tsx
<searchBar
  hint="Search hint"
  text="searchPhrase"
  onTextChange={onTextChanged}
  onSubmit={onSubmit}
  onClose={onClose}
/>
```

/// -->

## Props

### hint
```xml
<SearchBar hint="Enter search term here ..."  />
```
Gets or sets placeholder text for the input area.

---
### text
```xml
<SearchBar text="{{ searchText }}" />
```
Gets or sets the value of the search query.

---
### textFieldBackgroundColor
```xml
 <SearchBar textFieldBackgroundColor="#76ABEB"/>
```
Gets or sets the background color of the input area.

---
### textFieldHintColor
```xml
 <SearchBar textFieldHintColor="#fff"/>
```
Gets or sets the color of the placeholder text.

---
### ...Inherited
For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/searchbar)

## Event(s)
### textChange
```ts
searchBar.on("textChange", (args: PropertyChangeData) => {

      console.log("Event name: ", args.oldValue)
      
    })
```
Emitted when the search text is changed.

---
### submit
```xml
<SearchBar submit="{{ onSubmit }}" />
```
```ts
export class HelloWorldModel extends Observable {
  onSubmit(args: EventData) {
    const searchBar = args.object as SearchBar
    console.log(`Searching for ${searchBar.text}`)
  }
}
```
Emitted when the search text is submitted.

---
### clear
```xml
<SearchBar clear="{{ onClear }}" />
```
```ts
export class HelloWorldModel extends Observable {

  onClear(args: EventData) {
    const searchBar = args.object as SearchBar
    console.log(`Clear event raised`)
  }
}
```
Emitted when the current search input is cleared through the **X** button in the input area.

---

## Native Component

| Android                                                                                               | iOS                                                                          |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`android.widget.SearchView`](https://developer.android.com/reference/android/widget/SearchView.html) | [`UISearchBar`](https://developer.apple.com/documentation/uikit/uisearchbar) |
