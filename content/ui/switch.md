---
title: Switch
---
<!-- TODO: Add flvaors& Vue checkedChange event listener-->
`<Switch>` is a UI component that lets users toggle between two states.

The default state is `false` or OFF.

---
### Simple Switch

To be notified when the Switch state changes, listen  for the `checkedChange` event.

<!-- /// flavor plain -->

```xml
<Switch checked="{{ checked }}" loaded="{{ onSwitchLoaded }}" />
```
```ts
export class HelloWorldModel extends Observable {
  checked = true
  constructor() {
    super()
  }

  onSwitchLoaded(args: EventData){
    const switchComponent = args.object as Switch;

    switchComponent.on("checkedChange", (args: PropertyChangeData)=>{

    console.log("checkedChange: ", args.value, "Old: "+args.oldValue)

    })
  }
} 
```

<!-- ///

/// flavor angular

```html
<Switch checked="true" (checkedChange)="onCheckedChange($event)"> </Switch>
```

```ts
import { Component } from '@angular/core'
import { EventData, Switch } from '@nativescript/core'

@Component({
  moduleId: module.id,
  templateUrl: './usage.component.html'
})
export class BasicSwitchComponent {
  onCheckedChange(args: EventData) {
    const sw = args.object as Switch
    const isChecked = sw.checked // boolean
  }
}
```

///

/// flavor vue

```html
<Switch checked="true" @checkedChange="onCheckedChange"/>
```
```ts
onCheckedChange(args: PropertyChangeData) {
      
    console.log(args.value)
}
```
`<Switch>`provides two-way data binding using `v-model`.

```html
<Switch v-model="itemEnabled" />
```

///

/// flavor svelte

```tsx
<switch checked="{true}" on:checkedChange="{onCheckedChange}" />
```

`<switch>`provides two-way data binding for `checked`.

```tsx
<switch bind:checked="{switchEnabled}" />
```

///

/// flavor react

```tsx
<switch checked={true} />
```

/// -->
### Styling Switch
```xml
<Switch checked="true" color="#BFCDAC" backgroundColor="green" offBackgroundColor="#DC493D"/>
```

## Props
### checked
```xml
<Switch checked="true"/>
```
```ts
switchComponent.checked = false
```
Gets or sets the state value of the switch.

---
### offBackgroundColor
```xml
<Switch offBackgroundColor="#DC493D"/>
```
Gets or sets the off-state color.

---
### ...Inherited
For additional inherited properties, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/switch).

## Event(s)

### checkedChange
```ts
onSwitchLoaded(args: EventData){
    const switchComponent = args.object as Switch;

    switchComponent.on("checkedChange", (args: PropertyChangeData)=>{

    console.log("checkedChange: ", args.value, "Old: "+args.oldValue)

    })
}
```
Emitted when the switch state changes. See [PropertyChangeData Interface](https://docs.nativescript.org/api-reference/interfaces/propertychangedata) for the event data.

## Native component

| Android                                                                                       | iOS                                                                    |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch) |
