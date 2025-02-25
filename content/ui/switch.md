---
title: Switch
description: UI component for toggling state on or off.
contributors:
  - rigor789
  - Ombuweb
---

`<Switch>` is a UI component that lets users toggle between two states.

<DeviceFrame type="ios">
<img src="../assets/images/screenshots/ios/Switch.png"/>
</DeviceFrame>
<DeviceFrame type="android">
<img src="../assets/images/screenshots/android/Switch.png"/>
</DeviceFrame>

<Tabs>
<Tab flavor="typescript">

<<< @/../examples/typescript/src/ui/Switch/template.xml#example

</Tab>
<Tab flavor="angular">

<<< @/../examples/angular/src/ui/Switch/component.html#example

</Tab>
<Tab flavor="react">

<<< @/../examples/react/src/components/ui/switch.tsx#example

</Tab>
<Tab flavor="solid">

<<< @/../examples/solid/src/ui/switch.tsx#example

</Tab>
<Tab flavor="svelte">

<<< @/../examples/svelte/app/components/ui/Switch.svelte#example

</Tab>
<Tab flavor="vue">

<<< @/../examples/vue/src/ui/Switch/component.vue#example

</Tab>
</Tabs>

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

- Android: [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html)
- iOS: [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)
