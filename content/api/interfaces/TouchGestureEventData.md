---
title: TouchGestureEventData
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/gestures/index.d.ts:65

## Properties

### action

```ts
action: string;
```

Defined in: ui/gestures/index.d.ts:69

***

### android

```ts
android: MotionEvent;
```

Defined in: ui/gestures/index.d.ts:71

***

### eventName

```ts
eventName: string;
```

Defined in: ui/gestures/index.d.ts:66

***

### ios

```ts
ios: any;
```

Defined in: ui/gestures/index.d.ts:68

***

### object

```ts
object: any;
```

Defined in: ui/gestures/index.d.ts:72

***

### type

```ts
type: GestureTypes;
```

Defined in: ui/gestures/index.d.ts:67

***

### view

```ts
view: View;
```

Defined in: ui/gestures/index.d.ts:70

## Methods

### getActivePointers()

```ts
getActivePointers(): Pointer[];
```

Defined in: ui/gestures/index.d.ts:78

#### Returns

`Pointer`[]

***

### getAllPointers()

```ts
getAllPointers(): Pointer[];
```

Defined in: ui/gestures/index.d.ts:80

#### Returns

`Pointer`[]

***

### getPointerCount()

```ts
getPointerCount(): number;
```

Defined in: ui/gestures/index.d.ts:76

#### Returns

`number`

***

### getX()

```ts
getX(): number;
```

Defined in: ui/gestures/index.d.ts:82

#### Returns

`number`

***

### getY()

```ts
getY(): number;
```

Defined in: ui/gestures/index.d.ts:84

#### Returns

`number`

***

### prepare()

```ts
prepare(view: View, e: any): void;
```

Defined in: ui/gestures/index.d.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](../classes/View.md) |
| `e` | `any` |

#### Returns

`void`
