---
title: Accessibility (a11y)
---

In NativeScript, there are two primary ways to enable first class a11y support in your apps:

1. View attribute: `accessible="true"`

```html
<label text="{N}" accessible="true"></label>
```

2. CSS property: `a11y-enabled: true`

This option allows you to reuse CSS classes to enable a11y features.

```css
.a11y {
  a11y-enabled: true;
}
```

```html
<label text="{N}" class="a11y"></label>
```

Both options provide the flexibility desired when needing to enable a11y properly for your app.

::: warning Note
By default, all touchable elements are accessible as expected. (ie, `Button`, `Slider` etc.)
:::

## Properties

Various properties exist to further control a11y.

### accessibilityLabel

It's recommended to always use an `accessibilityLabel` when marking a view as `accessible`. VoiceOver usage on the device will speak this value so the user knows what element has been selected.

```html
<label
  text="{N}"
  class="a11y"
  accessibilityLabel="The NativeScript logo in textual form"
></label>
```

### accessibilityHint

Provide additional help so users understand what will happen when they perform an action on the accessible element.

```html
<button
  text="Submit"
  class="a11y"
  accessibilityLabel="Button to submit the form"
  accessibilityHint="Submit this form"
></button>
```

### iosAccessibilityAdjustsFontSize (iOS only)

Enable this to allow device font scale affect view font-size. Android has this feature enabled by default.

### iosAccessibilityMinFontScale (iOS only)

Sets the minimum accessibility font scale.

### iosAccessibilityMaxFontScale (iOS only)

Sets the maximum accessibility font scale.

### accessibilityIgnoresInvertColors (iOS only)

When screen colors invert with accessibility, you often don't want views such as photos to be inverted. You can set this to ignore the inversion.

### accessibilityLiveRegion (Android only)

When components dynamically change, we want TalkBack to alert the end user.

- `AccessibilityLiveRegion.None`: Should not announce changes to this view.
- `AccessibilityLiveRegion.Polite`: Should announce changes to this view.
- `AccessibilityLiveRegion.Assertive`: Should interrupt ongoing speech to immediately announce changes to this view.

```html
<Switch checked="true" class="a11y" checkedChange="{{checkedChange}}" />
<TextView
  hint="TextView"
  text="{{switchCheckedText}}"
  accessibilityLiveRegion="{{AccessibilityLiveRegions.Assertive}}"
/>
```

In the above example, method `checkedChange` changes the `switchCheckedText` variable. As soon as an end user taps the `Switch`, TalkBack reads text in the Text view because of its `AccessibilityLiveRegions.Assertive` property.

### accessibilityRole

Communicates the purpose of an element to the user.

It can be set to one of the following:

- `AccessibilityRole.Adjustable` Element that can be "adjusted" (e.g. a slider).
- `AccessibilityRole.Button` Element that should be treated as a button.
- `AccessibilityRole.Checkbox` Element that represents a checkbox which can be checked or unchecked.
- `AccessibilityRole.Header` Eement that acts as a header for a section.
- `AccessibilityRole.Image` Element that should be treated as an image.
- `AccessibilityRole.ImageButton` Element that should be treated as a button and is also an image.
- `AccessibilityRole.KeyboardKey` Element that acts as a keyboard key.
- `AccessibilityRole.Link` Element that should be treated as a link.
- `AccessibilityRole.None` Element has no role.
- `AccessibilityRole.PlaysSound` Element that plays its own sound when activated.
- `AccessibilityRole.ProgressBar` Element that indicates progress of a task.
- `AccessibilityRole.RadioButton` Element is a radio button.
- `AccessibilityRole.Search` Element should be treated as a search field.
- `AccessibilityRole.SpinButton` Element that behaves like a SpinButton.
- `AccessibilityRole.StartsMediaSession` Element starts a media session when it is activated.
- `AccessibilityRole.StaticText` Element that should be treated as static text that cannot change.
- `AccessibilityRole.Summary` Element that provides summary information when the application starts.
- `AccessibilityRole.Switch` Element that behaves like a switch.

### accessibilityState

Current state of an element.

It can be set to one of the following:

- `AccessibilityState.Selected` Element is currently selected.
- `AccessibilityState.Checked` Element is currently checked.
- `AccessibilityState.Unchecked` Element is currently unchecked.
- `AccessibilityState.Disabled` Element is currently disabled.

### accessibilityValue

Current value of an element.

### accessibilityElementsHidden

Whether elements contained within this accessibility element are hidden.

<!--
### Coming soon

`onAccessibilityEscape`, `onMagicTap` (iOS only).
-->

## Debugging Accessibility

The following are the platforms tools for debugging accessibility in your app:

- iOS: [Accessibility Inspect](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html)
- Android: [Test your app's accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing)
