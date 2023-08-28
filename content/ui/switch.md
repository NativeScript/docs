---
title: Switch
description: UI component for toggling state on or off.
contributors:
  - rigor789
  - Ombuweb
---

`<Switch>` is a UI component that lets users toggle between two states.

<DeviceFrame type="ios">
<img src="../screenshots/ios/Switch.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../screenshots/android/Switch.png"/>
</DeviceFrame>

<<< @/../examples/src/ui/Switch/template.xml#example

## Examples

### Styling a Switch

```xml
<Switch checked="true"
  color="#BFCDAC"
  backgroundColor="green"
  offBackgroundColor="#DC493D"
/>
```

## Props

### checked

```ts
checked: boolean
```

Gets or sets the state switch.

Defaults to `false`.

### offBackgroundColor

```ts
offBackgroundColor: Color
```

Gets or sets the off-state background color.

See [Color](/api/class/Color).

### ...Inherited

For additional inherited properties, refer to the [API Reference](/api/class/Switch).

## Events

### checkedChange

```ts
on('checkedChange', (args: PropertyChangeData) => {
  const switch = args.object as Switch
  console.log('Switch checked:', args.value)
})
```

See [PropertyChangeData](/api/interface/PropertyChangeData).

## Native component

| Android                                                                                       | iOS                                                                    |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch) |
