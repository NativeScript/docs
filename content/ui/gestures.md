---
title: Gestures
---
<!-- TODO: SB for gestures -->
<!-- TODO: Add flavor tabs for the gestures -->
Users can interact with UI components using gestures. NativeScript supports the following gestures:

- [tap](#tap-gesture-in-nativescript)
- [doubleTap](#double-tap-event-data)
- [longPress](#long-press-gesture-in-nativescript)
- [swipe](#swipe-gesture-in-nativescript)
- [pan](#pan-gesture-in-nativescript)
- [pinch](#pinch-gesture-in-nativescript)
- [rotation](#rotate-gesture-in-nativescript)
- [touch](#touch-gesture-in-nativescript)

All the gesture events, except the `tap`, provide the following data in common:

| Name | Type | Description |
|------|------|-------------|
| `eventName` | `string` | The name of the event. |
| `object` | `Observable` |  The `Observable` instance that triggered the event. |
| `type` | `GestureTypes` | The type of the gesture |
| `view` | `Partial<View>` | The `Partial<View>` instance that triggered the event. This is the same ui component as return by `object`|
| `ios` | `UIGestureRecognizer `| Gets the underlying native iOS specific [UIGestureRecognizer](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIGestureRecognizer_Class/).|
| `android`| `android.view.GestureDetector`| Gets the underlying native android specific [gesture detector](http://developer.android.com/reference/android/view/GestureDetector.html)|

## Tap gesture

**Action**: Briefly touching a component.

#### Tap gesture event data

The `tap` gesture event only offers the `eventName` and `object` properties.

The [TouchManager](/guide/ui-components/animations-in-nativescript#touchmanager-8-2) API offers cool animations that you can apply for the `tap` gesture.

To handle a `tap` event follow:

<!-- /// flavor plain
```xml
<Label text="Tap here" tap="{{ onTap }}">
```
```ts
import { EventData } from '@nativescript/core'

onTap(args: EventData) {
  console.log("Tap!");
}
```

///

/// flavor angular

```ts
import { EventData } from '@nativescript/core'

onTap(args: EventData) {
  console.log("Tap!");
}
```

```html
<label text="Tap here" (tap)="onTap($event)"></label>
```
/// -->

## Double tap gesture

**Action**: Two taps on a component in a quick succession.

#### Double tap event data

| Name | Type | Description|
|------|------|------------|
| `getPointerCount()`| `number`| Gets the number of pointers in the event.| 
| `getX()`| `number`| Gets the `x` coordinate of the event inside the view that triggered the event.| 
| `getY()`| `number`| Gets the `y` coordinate of the event inside the view that triggered the event.| 

<!-- /// flavor plain

```ts
import { GestureTypes, GestureEventData, Label } from '@nativescript/core'
var label = new Label()
label.on(GestureTypes.doubleTap, (args: GestureEventData) => {
  console.log('Double Tap')
})
```

///

/// flavor angular

```ts
import { GestureEventData } from '@nativescript/core'

onDoubleTap(args: GestureEventData) {
  console.log("DoubleTap!");
}
```

```html
<label text="Double tap here" (doubleTap)="onDoubleTap($event)"></label>
```

///
 -->

 ## Long press gesture

 **Action**: A component is pressed for a few moments.

#### Long press gesture event data

- `state` : The [state](#gesturestatetypes) of the pressing. 

 <!-- /// flavor plain

```xml
<Label text="Long press here" longPress="onLongPress" />
```

```ts
import { GestureEventDataWithState } from '@nativescript/core'

onLongPress(args: GestureEventDataWithState) {
  console.log("LongPress!");
}
```

///

/// flavor angular

```ts
import { GestureEventDataWithState } from '@nativescript/core'

onLongPress(args: GestureEventDataWithState) {
  console.log("LongPress!");
}
```

```html
<label text="Long press here" (longPress)="onLongPress($event)"></label>
```

///
 -->

 ## Swipe gesture

 **Action**: Swiftly sliding a finger across the screen. Swipes are quick and affect the screen even after the finger is lifted off the screen:

<!-- /// flavor plain
```xml
  <Button  text="Swipe me" class="button"  swipe="{{ onSwipe }}"/>

```
 ```ts
 import { SwipeGestureEventData } from '@nativescript/core'

 onSwipe(args: SwipeGestureEventData) {
    console.log("Direction: ", args.direction)
  }
 ``` 

 ///

 /// flavor angular

```ts
import { SwipeGestureEventData } from '@nativescript/core'

onSwipe(args: SwipeGestureEventData) {
  console.log("Swipe Direction: " + args.direction);
}
```

```html
<label text="Swipe here" (swipe)="onSwipe($event)"></label>
```

/// -->

**Possible usage**: Navigate between components in the same hierarchy.

#### Swipe gesture event data

- `direction` : Direction of the swipe gesture.

Available directions:

- `right = 1`,
- `left = 2`,
- `up = 4`,
- `down = 8`,

## Pan gesture

**Action**: A pan gesture occurs when a user presses down a component and immediately start moving it around. Pans are executed more slowly and allow for more precision and the screen stops responding as soon as the finger is lifted off it

#### Pan gesture event data

| Name | Type | Description |
|------|------|-------------|
| `deltaX` | `number` | Distance , in DIPs, moved in the `x` direction from previous position. |
| `deltaY` | `number` | Distance , in DIPs, moved in the `x` direction from previous position.|
| `state` | `GestureStateTypes` | Indicates the state of panning. See [GestureStateTypes](#gesturestatetypes) for available states. |
<!-- TODO: CORRECT `state` values -->

<!-- /// flavor plain

```xml

  <Button  text="TAP" class="button"  pan="{{ onPan }}"/>

```
```ts
import { PanGestureEventData } from '@nativescript/core'

onPan(args: PanGestureEventData) {
  console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
}
```

///

/// flavor angular

```ts
import { PanGestureEventData } from '@nativescript/core'

onPan(args: PanGestureEventData) {
  console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
}
```

```html
<label text="Pan here" (pan)="onPan($event)"></label>
```

///
 -->

## Pinch gesture

**Action**: A user touches a component with two fingers, then moves them towards each other or away from each other.

#### Pinch gesture event data

| Name | Type | Description |
|------|------|-------------|
| `state`|`number`| The state of the `pinch` gesture.|
| `scale`|`number`||
| `getFocusX()`| `number`| |
| `getFocusY()`| `number`| |

<!-- /// flavor plain

```xml
  <Button  text="Pinch here" class="button"  pinch="{{ onPinch }}"/>
  
```
```ts
import { PinchGestureEventData } from '@nativescript/core'

onPinch(args: PinchGestureEventData) {
  console.log("Pinch scale: " + args.scale + " state: " + args.state);
}
```

///

/// flavor angular

```ts
import { PinchGestureEventData } from '@nativescript/core'

onPinch(args: PinchGestureEventData) {
  console.log("Pinch scale: " + args.scale + " state: " + args.state);
}
```

```html
<label text="Pinch here" (pinch)="onPinch($event)"></label>
```

/// -->

Possible usage: Zoom into content or out of content.

## Rotate gesture

**Action**: A user touches a component with two fingers, then rotate them simultaneously left or right.

#### Rotate gesture event data

- `	rotation` (type: `number`): 

<!-- /// flavor plain

```xml
<Label text="Rotate me" rotation="{{ onRotate }}"/>
```

```ts
import { RotationGestureEventData } from '@nativescript/core'

onRotate(args: RotationGestureEventData) {
  console.log("Rotate angle: " + args.rotation + " state: " + args.state);
}
```

///

/// flavor angular

```ts
import { RotationGestureEventData } from '@nativescript/core'

onRotate(args: RotationGestureEventData) {
  console.log("Rotate angle: " + args.rotation + " state: " + args.state);
}
```

```html
<label text="Rotate here" (rotation)="onRotate($event)"></label>
```

/// -->


## Touch gesture

This is a general purpose gesture that is triggered whenever a pointer (usually a finger) has performed a touch action (up, down, move or cancel).
 
#### Touch gesture event data 

| Name | Type | Description|
|------|------|------------|
| `action` | `'up'` \| `'move'` \| `'down'` \| 'cancel'| Gets action of the touch|
| `getActivePointers()`| `Array<Pointer>` | Gets the pointers that triggered the event.<br>**Note**: In Android there is aways only one active pointer. <br> [Pointer] is an object representing a finger (or other object) that is touching the screen.|
| `getAllPointers()` | `Array<Pointer>` | Gets all pointers.|
| `getAX()` | `number` | |
| `getAY()` | `number` | |

<!-- /// flavor plain

```xml
<Label text="Touch here" touch="{{ onTouch }}"/>
```

```ts
import { TouchGestureEventData } from '@nativescript/core'

onTouch(args: TouchGestureEventData) {
  console.log(
    "Touch point: [" + args.getX() + ", " + args.getY() +
    "] activePointers: " + args.getActivePointers().length);
}
```

///

/// flavor angular

```ts
import { TouchGestureEventData } from '@nativescript/core'

onTouch(args: TouchGestureEventData) {
  console.log(
    "Touch point: [" + args.getX() + ", " + args.getY() +
    "] activePointers: " + args.getActivePointers().length);
}
```

```html
<label text="Touch here" (touch)="onTouch($event)"></label>
```

/// -->

## Subscribing to Multiple Gestures

You can handle multiple gestures as follows:

```xml
  <Button  text="TAP" class="button" longPress="{{ onLongPress }}" swipe="{{ onSwipe }}" tap="{{ onTap }}"  doubleTap="{{ onDoubleTap }}"/>
```

## Gesture Manipulations

In some scenarios, you would want to disable the user interaction or to create more complex UI where some gestures are passing through the parents of the actual interactive zone. NativeScript provides some specific properties for handling similar cases as follows:

- `isUserInteractionEnabled` - Gets or sets a boolean value indicating whether the user can interact with the view. Does not affect the appearance of the view. The default value is `true`.

- `isEnabled` - Gets or sets a boolean value indicating whether the view is enabled. Affects the appearance of the view. The default value is `true`.


## GestureStateTypes

- `cancelled = 0`
- `began = 1`
- `changed = 2`
- `ended = 3`

## The Pointer interface

| Name| Type| Description |
|-----|-----|-------------|
| `android` | `any` | The id of the pointer. |
| `ios` | `UITouch` | The `UITouch` object associated to the touch|
| `getX()`| `number`| Gets the X coordinate of the pointer inside the view that triggered the event.|
| `getY()`| `number`| Gets the Y coordinate of the pointer inside the view that triggered the event.|




