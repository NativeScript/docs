---
title: TabView
---

`<TabView>` is a navigation component that shows content grouped into tabs and lets users switch between tabs.

---
<div>
<div class="flex flex-wrap p-4 sm:p-8">
<div  class="w-full sm:w-1/2">
 <img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/TabView.png" alt="Android TabView Example"/> 
</div>

<div  class="w-full sm:w-1/2 sm:pl-8">
<img alt="iOS TabView Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/TabView.png" />
</div>
</div>
</div>
### Simple TabView

<!-- /// flavor plain -->

```xml
 <TabView
   selectedIndex="{{ tabSelectedIndex }}" 
   selectedIndexChanged="{{ onSelectedIndexChanged }}" 
   androidTabsPosition="bottom" 
   androidOffscreenTabLimit="0" 
   tabBackgroundColor="#3d5a80" 
   tabTextColor="#fff" 
   selectedTabTextColor="#eae2b7">
    <TabViewItem title="Profile">
      <StackLayout>
        <Label text="Change Tab" class="text-center text-2xl font-bold pt-4" />
        <Label text="{{ tabSelectedIndexResult }}" class="mt-4 text-center" textWrap="true" />
      </StackLayout>
    </TabViewItem>

    <TabViewItem title="Stats">
      <StackLayout>
        <Label text="Change Tab" class="text-center text-2xl font-bold pt-4" />
        <Label text="{{ tabSelectedIndexResult }}" class="mt-4 text-center" textWrap="true" />
      </StackLayout>
    </TabViewItem>

    <TabViewItem title="Settings">
      <StackLayout>
        <Label text="Change Tab" class="text-center text-2xl font-bold pt-4" />
        <Label text="{{ tabSelectedIndexResult }}" class="mt-4 text-center" textWrap="true" />
      </StackLayout>
    </TabViewItem>
  </TabView>
```

```ts
import {
  Observable,
  SelectedIndexChangedEventData
} from '@nativescript/core'

export class HelloWorldModel extends Observable {
  tabSelectedIndex = 0
  tabSelectedIndexResult = 'Profile Tab (tabSelectedIndex = 0 )'

  ....

  onSelectedIndexChanged(args: SelectedIndexChangedEventData){
    if (args.oldIndex !== -1) {
      const newIndex = args.newIndex
      
      if (newIndex === 0) {
        this.set('tabSelectedIndexResult', 'Profile Tab (tabSelectedIndex = 0 )')
      } else if (newIndex === 1) {
        this.set('tabSelectedIndexResult', 'Stats Tab (tabSelectedIndex = 1 )')
      } else if (newIndex === 2) {
        this.set('tabSelectedIndexResult', 'Settings Tab (tabSelectedIndex = 2 )')
      }
     
    }
  }
}
```
<!-- 
///

/// flavor angular

Using a `<TabView>` inside an `Angular` app requires some special attention about how to provide title, iconSource and content (view) of the `TabViewItem`. In a pure NativeScript application TabView has an items property which could be set via XML to an array of `<TabViewItem>`s (basically, an array of objects with title, view and iconSource properties). However, NativeScript-Angular does not support nested properties in its HTML template, so adding `<TabViewItem>` to `<TabView`> is a little bit different. NativeScript-Angular provides a custom Angular directive that simplifies the way native `<TabView>` should be used. The following example shows how to add a `<TabView>` to your page (with some clarifications later):

```html
<TabView selectedIndex="0" (selectedIndexChanged)="onSelectedIndexchanged($event)">
  <StackLayout *tabItem="{title: 'First Tab', iconSource: 'res://icon'}">
    <StackLayout>
      <label
        text="First Tab"
        textWrap="true"
        class="m-15 h2 text-left"
        color="blue"
      ></label>
    </StackLayout>
  </StackLayout>
  <StackLayout *tabItem="{title: 'Second Tab', iconSource: 'res://icon'}">
    <StackLayout>
      <label
        text="Second Tab"
        textWrap="true"
        class="m-15 h2 text-left"
        color="blue"
      ></label>
    </StackLayout>
  </StackLayout>
</TabView>
```

::: warning Note
If you have set the iconSource property on a `<TabViewItem>`, but are not seeing any icons next to the title, this might be because the icon is not present in your `App_Resources` folder. See the Working with Images article for information on how to add and reference your resource images.
:::

///

/// flavor svelte

```tsx
<tabView selectedIndex="{selectedIndex}" on:selectedIndexChange="{indexChange}">
  <tabViewItem title="Tab 1">
    <label text="Content for Tab 1" />
  </tabViewItem>

  <tabViewItem title="Tab 2">
    <label text="Content for Tab 2" />
  </tabViewItem>
</tabView>
```

```js
function indexChange(event) {
  let newIndex = event.value
  console.log('Current tab index: ' + newIndex)
}
```

///

/// flavor vue

```html
<TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
  <TabViewItem title="Tab 1">
    <label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

```js
methods: {
  indexChange: function(args) {
      let newIndex = args.value
      console.log('Current tab index: ' + newIndex)
  }
}
```

///

/// flavor react

```tsx
import { SelectedIndexChangedEventData } from '@nativescript/core'
;<tabView
  selectedIndex={selectedIndex}
  onSelectedIndexChange={(args: SelectedIndexChangedEventData) => {
    const { oldIndex, newIndex } = args
    console.log(`Changed from tab index ${oldIndex} -> ${newIndex}.`)
  }}
>
  <tabViewItem nodeRole="items" title="Tab 1">
    <label text="Content for Tab 1" />
  </tabViewItem>
  <tabViewItem nodeRole="items" title="Tab 2">
    <label text="Content for Tab 2" />
  </tabViewItem>
</tabView>
```

///

::: warning Note
Currently, `TabViewItem` expects a single child element. In most cases, you might want to wrap your content in a layout.
:::

### Example: Adding icons to tabs

/// flavor vue

```html
<TabView :selectedIndex="selectedIndex" iosIconRenderingMode="alwaysOriginal">
  <TabViewItem title="Tab 1" iconSource="~/images/icon.png">
    <label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2" iconSource="~/images/icon.png">
    <label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

///

/// flavor svelte

```tsx
<tabView selectedIndex="{selectedIndex}" iosIconRenderingMode="alwaysOriginal">
  <tabViewItem title="Tab 1" iconSource="~/images/icon.png">
    <label text="Content for Tab 1" />
  </tabViewItem>
  <tabViewItem title="Tab 2" iconSource="~/images/icon.png">
    <label text="Content for Tab 2" />
  </tabViewItem>
</tabView>
```

///

/// flavor react

```tsx
<tabView selectedIndex={selectedIndex} iosIconRenderingMode="alwaysOriginal">
  <tabViewItem nodeRole="items" title="Tab 1" iconSource="~/images/icon.png">
    <label text="Content for Tab 1" />
  </tabViewItem>
  <tabViewItem nodeRole="items" title="Tab 2" iconSource="~/images/icon.png">
    <label text="Content for Tab 2" />
  </tabViewItem>
</tabView>
```

/// -->

<!-- TODO: examples in all flavors -->

::: tip Tip
You can use images for tab icons instead of icon fonts. For more information about how to control the size of icons, see [Working with image from resource folders](https://docs.nativescript.org/ui/image-resources).
:::


### Styling

The `TabView` component has the following unique styling properties:

- [tabTextColor](#tabtextcolor)

- [selectedTabTextColor](#tabtextcolor)

- [tabBackgroundColor](#tabbackgroundcolor)

- [tabTextFontSize](#tabtextfontsize)

- [textTransform](#texttransform)

- [androidSelectedTabHighlightColor](#androidselectedtabhighlightcolor)

## Props
### selectedIndex
```xml
 <TabView selectedIndex="{{ tabSelectedIndex }}" />
```
```ts
selectedIndex = tabView.selectedIndex
```   
Gets or sets the currently selected tab. Default is `0`.

---
### tabTextColor
```xml
<TabView tabTextColor="#fff" />
``` 

Corresponding CSS: `tab-text-color`
```css
.tab-view {
  tab-text-color: #fff;
}
```
Gets or sets the text color of the tabs titles. 

---
### tabTextFontSize
Corresponding CSS: `tab-text-font-size`
```css
.tab-view{
  tab-text-font-size: 24;
}
```
Gets or sets the font size of the tabs titles.

---
### tabBackgroundColor
```xml
<TabView tabBackgroundColor="#3d5a80">
```
Corresponding CSS: `tab-background-color`
```css
.tab-view{
  tab-background-color: #3d5a80;
}
```
Sets the background color of the tabs.

---
### androidSelectedTabHighlightColor
```xml
<TabView androidSelectedTabHighlightColor="#76ABEB">
```
Corresponding CSS: `android-selected-tab-highlight-color`
```css
.tab-view {
  android-selected-tab-highlight-color: #76ABEB;
}
```
(`Android-only`)Sets the underline color of the tabs.

---
### androidTabsPosition
```xml
 <TabView androidTabsPosition="top" >
```
Sets the position of the TabView in Android platform. 

Valid values: `top` or `bottom`. Defaults to `top`.                            

---
### iosIconRenderingMode

Gets or sets the icon rendering mode([UIImage.RenderingMode](https://developer.apple.com/documentation/uikit/uiimage/renderingmode)) on iOS.

Defaults to `automatic`.

Valid values are: `automatic`| `alwaysOriginal`| `alwaysTemplate`

---
### ...Inherited
For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/tabview).

## TabViewItem Props
### title
```xml
 <TabViewItem title="Profile">
```
Gets or sets the title of the tab strip entry.                     

---
### textTransform
```xml
<TabViewItem title="Profile" textTransform="capitalize" />
```
Corresponding CSS: `text-transform` 
```css
.tab-view-item {
  text-transform: capitalize;
}
```
Sets the text transform individually for every `TabViewItem`. See [textTransformType](https://docs.nativescript.org/api-reference/modules/coretypes#texttransformtype) for valid options.

---
### iconSource
```xml
 <TabViewItem title="Profile" 
 iconSource="~/assets/images/cat.jpeg" >
```

Gets or sets the icon source of the tab strip entry. Supports local image paths (`~`), resource images (`res://`) and icon fonts (`font://`).

## Event(s)

### selectedIndexChange
```xml
 <TabView loaded="{{ onTabViewLoaded }}" >
```
```ts
onTabViewLoaded(args: EventData){
    const tabView = args.object as TabView

    tabView.on("selectedIndexChanged",(args: SelectedIndexChangedEventData)=>{
      
    })
  }
```
Raised when the selected index changes.

---
#### SelectedIndexChangedEventData
The `SelectedIndexChangedEventData` object provides the following data:
| Name | Type | Description |
|------|------|-------------|
| `oldIndex`| `number`| The old selected index.|
| `newIndex`| `number`| The new selected index.|


## Native component

| Android                                                                                                               | iOS                                                                                        |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller) |
