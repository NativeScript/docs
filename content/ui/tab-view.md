---
title: TabView
description: UI component for grouping content into tabs and letting users switch between them.
contributors:
  - rigor789
  - Ombuweb
  - NathanWalker
---

`<TabView>` is a UI component that shows content grouped into tabs and lets users switch between them.

As of NativeScript 9, on **iOS 26+**, TabView now supports:
- an **optional bottom accessory view** (`iosBottomAccessory`) that sits just above the tab bar and participates in layout, and
- a **configurable tab bar minimize behavior** (`iosTabBarMinimizeBehavior`) so you can control how/when the tab bar hides when scrolling.

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/TabView.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/TabView.png"/>
</DeviceFrame>

<Tabs>
<Tab flavor="typescript">

<<< @/../examples/typescript/src/ui/TabView/template.xml#example

</Tab>
<Tab flavor="angular">

<<< @/../examples/angular/src/ui/TabView/component.html#example

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/tabview.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/tabview.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/TabView.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/TabView/component.vue#example

</Tab>
</Tabs>

## Props

### selectedIndex

```ts
selectedIndex: number
```

Gets or sets the currently selected tab.

Defaults to `0`.

### tabTextColor

```xml
tabTextColor: Color
```

Gets or sets the text color of the tab titles.

::: info Corresponding CSS property:

```css
.tab-view {
  tab-text-color: #fff;
}
```

:::

See [Color](/api/class/Color).

### tabTextFontSize

```ts
tabTextFontSize: number
```

Gets or sets the font size of the tab titles.

::: info Corresponding CSS property:

```css
.tab-view {
  tab-text-font-size: 24;
}
```

:::

### tabBackgroundColor

```ts
tabBackgroundColor: Color
```

Sets the background color of the tabs.

::: info Corresponding CSS property:

```css
.tab-view {
  tab-background-color: #3d5a80;
}
```

:::

See [Color](/api/class/Color).

### androidSelectedTabHighlightColor

```ts
androidSelectedTabHighlightColor: Color
```

Sets the underline color of the tabs. **Android only.**

::: info Corresponding CSS property:

```css
.tab-view {
   android-selected-tab-highlight-color: #3d5a80;
}
```

:::

See [Color](/api/class/Color).

### androidTabsPosition

```ts
androidTabsPosition: 'top' | 'bottom'
```

Sets the position of the tabs. **Android only.**

Defaults to `top`.

### iosIconRenderingMode

```ts
iosIconRenderingMode: 'automatic' | 'alwaysOriginal' | 'alwaysTemplate'
```

Gets or sets the icon rendering mode on iOS. **iOS only.**

Defaults to `automatic`.

See [UIImage.RenderingMode](https://developer.apple.com/documentation/uikit/uiimage/renderingmode).

### iosBottomAccessory

Adds a [bottom accessory view](https://developer.apple.com/documentation/uikit/uitabbarcontroller/bottomaccessory) above the tab bar on iOS 26+.

```ts
iosBottomAccessory: View // iOS 26+ only
```

Assigns a bottom accessory view that is rendered *above* the iOS tab bar, inside the TabView's layout. This is useful for mini players, status bars, or context-sensitive actions that should stay attached to the tab bar. On platforms below iOS 26 this property is ignored.

Notes:
- Give it an explicit `height` or style it with CSS so the TabView can measure it.
- It participates in layout pass fixes added in this release so it will resize alongside safe areas.
- On Android this is ignored.

### iosTabBarMinimizeBehavior

```ts
iosTabBarMinimizeBehavior:
  | 'automatic'
  | 'never'
  | 'onScrollDown'
  | 'onScrollUp'
```

Controls how the iOS tab bar minimizes/hides in response to scrolling. This mirrors the iOS 26 tab bar behavior on `UITabBarController`.

- `automatic` – system chooses; good default.
- `never` – keep the tab bar always visible.
- `onScrollDown` – hide the tab bar when scrolling down.
- `onScrollUp` – show the tab bar when scrolling up.

Ignored on iOS < 26 and on Android.

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/TabView).

## TabViewItem Props

### title

```ts
title: string
```

Gets or sets the title of the tab strip entry.

### textTransform

```ts
textTransform: TextTransformType // "initial" | "none" | "capitalize" | "uppercase" | "lowercase"
```

Gets or sets the text transform.

See [TextTransformType](/api/namespace/CoreTypes#texttransformtype).

Defaults to `initial`.

### iconSource

```ts
iconSource: string
```

Gets or sets the icon source of the tab strip entry.

Supported paths are `font://`, `res://`, `sys://` (iOS only), or an absolute path (eg. `~/assets/image.png`).

See [`Image`](/ui/image) for details on the different paths.

## Events

### selectedIndexChange

```ts
on('selectedIndexChanged', (args: EventData) => {
  const tabView = args.object as TabView
  console.log('TabView selectedIndex:', tabView.selectedIndex)
})
```

Emitted when the selected tab changes.

## Platform specific notes

### iOS 26+ bottom accessory

On iOS 26+ you can attach any NativeScript view as a bottom accessory, such as a mini player, quick actions, or a context bar. On earlier iOS versions and on Android this is ignored safely.

```xml
<TabView
  id="mainTabs"
  selectedIndex="0"
  iosTabBarMinimizeBehavior="automatic"
  iosBottomAccessory="
    <StackLayout
      height='44'
      backgroundColor='#1c1c1e'
      orientation='horizontal'
      horizontalAlignment='stretch'>
      <Label text='Now playing…' color='white' verticalAlignment='center' marginLeft='12' />
    </StackLayout>
    ">
  <TabViewItem title="Library">
    <Label text="Your library" />
  </TabViewItem>
  <TabViewItem title="Search">
    <Label text="Search" />
  </TabViewItem>
</TabView>
```

You can also set the accessory from code if you need to build it dynamically:

```ts
const tabView = page.getViewById('mainTabs') as TabView
const accessory = new StackLayout()
accessory.height = 44
accessory.backgroundColor = '#1c1c1e'
tabView.iosBottomAccessory = accessory
```

## Native component

- Android: [`androidx.viewpager.widget.ViewPager`](https://developer.android.com/reference/androidx/viewpager/widget/ViewPager)
- iOS: [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
