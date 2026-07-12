---
title: TouchGestureEventData
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/gestures/index.d.ts:65](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L65)

## Properties

### action

```ts
action: string;
```

Defined in: [ui/gestures/index.d.ts:69](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L69)

***

### android

```ts
android: MotionEvent;
```

Defined in: [ui/gestures/index.d.ts:71](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L71)

***

### eventName

```ts
eventName: string;
```

Defined in: [ui/gestures/index.d.ts:66](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L66)

***

### ios

```ts
ios: any;
```

Defined in: [ui/gestures/index.d.ts:68](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L68)

***

### object

```ts
object: any;
```

Defined in: [ui/gestures/index.d.ts:72](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L72)

***

### type

```ts
type: GestureTypes;
```

Defined in: [ui/gestures/index.d.ts:67](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L67)

***

### view

```ts
view: View;
```

Defined in: [ui/gestures/index.d.ts:70](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L70)

## Methods

### getActivePointers()

```ts
getActivePointers(): Pointer[];
```

Defined in: [ui/gestures/index.d.ts:78](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L78)

#### Returns

`Pointer`[]

***

### getAllPointers()

```ts
getAllPointers(): Pointer[];
```

Defined in: [ui/gestures/index.d.ts:80](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L80)

#### Returns

`Pointer`[]

***

### getPointerCount()

```ts
getPointerCount(): number;
```

Defined in: [ui/gestures/index.d.ts:76](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L76)

#### Returns

`number`

***

### getX()

```ts
getX(): number;
```

Defined in: [ui/gestures/index.d.ts:82](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L82)

#### Returns

`number`

***

### getY()

```ts
getY(): number;
```

Defined in: [ui/gestures/index.d.ts:84](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L84)

#### Returns

`number`

***

### prepare()

```ts
prepare(view: View, e: any): void;
```

Defined in: [ui/gestures/index.d.ts:74](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/gestures/index.d.ts#L74)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](../classes/View.md) |
| `e` | `any` |

#### Returns

`void`
