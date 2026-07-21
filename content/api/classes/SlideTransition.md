---
title: SlideTransition
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/transition/slide-transition.d.ts:3](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/slide-transition.d.ts#L3)

## Extends

- [`Transition`](Transition.md)

## Constructors

### Constructor

```ts
new SlideTransition(
   direction: string, 
   duration?: number, 
   nativeCurve?: any): SlideTransition;
```

Defined in: [ui/transition/slide-transition.d.ts:4](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/slide-transition.d.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `string` |
| `duration?` | `number` |
| `nativeCurve?` | `any` |

#### Returns

`SlideTransition`

#### Overrides

[`Transition`](Transition.md).[`constructor`](Transition.md#constructor)

## Properties

### id

```ts
id: number;
```

Defined in: [ui/transition/index.d.ts:23](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L23)

#### Inherited from

[`Transition`](Transition.md).[`id`](Transition.md#id)

***

### interactiveController?

```ts
optional interactiveController?: any;
```

Defined in: [ui/transition/index.d.ts:29](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L29)

#### Inherited from

[`Transition`](Transition.md).[`interactiveController`](Transition.md#interactivecontroller)

***

### name?

```ts
optional name?: string;
```

Defined in: [ui/transition/index.d.ts:27](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L27)

(Optional) Provide a unique name to identify this transition

#### Inherited from

[`Transition`](Transition.md).[`name`](Transition.md#name)

***

### presented?

```ts
optional presented?: any;
```

Defined in: [ui/transition/index.d.ts:30](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L30)

#### Inherited from

[`Transition`](Transition.md).[`presented`](Transition.md#presented)

***

### presenting?

```ts
optional presenting?: any;
```

Defined in: [ui/transition/index.d.ts:31](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L31)

#### Inherited from

[`Transition`](Transition.md).[`presenting`](Transition.md#presenting)

***

### sharedElements?

```ts
optional sharedElements?: {
  independent?: SharedElementSettings & {
     isPresented?: boolean;
  }[];
  presented?: SharedElementSettings[];
  presenting?: SharedElementSettings[];
};
```

Defined in: [ui/transition/index.d.ts:32](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L32)

#### independent?

```ts
optional independent?: SharedElementSettings & {
  isPresented?: boolean;
}[];
```

#### presented?

```ts
optional presented?: SharedElementSettings[];
```

#### presenting?

```ts
optional presenting?: SharedElementSettings[];
```

#### Inherited from

[`Transition`](Transition.md).[`sharedElements`](Transition.md#sharedelements)

***

### transitionController?

```ts
optional transitionController?: any;
```

Defined in: [ui/transition/index.d.ts:28](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L28)

#### Inherited from

[`Transition`](Transition.md).[`transitionController`](Transition.md#transitioncontroller)

***

### AndroidTransitionType?

```ts
static optional AndroidTransitionType?: {
  enter?: string;
  exit?: string;
  popEnter?: string;
  popExit?: string;
};
```

Defined in: [ui/transition/index.d.ts:38](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L38)

#### enter?

```ts
optional enter?: string;
```

#### exit?

```ts
optional exit?: string;
```

#### popEnter?

```ts
optional popEnter?: string;
```

#### popExit?

```ts
optional popExit?: string;
```

#### Inherited from

[`Transition`](Transition.md).[`AndroidTransitionType`](Transition.md#androidtransitiontype)

## Methods

### androidFragmentTransactionCallback()?

```ts
optional androidFragmentTransactionCallback(
   fragmentTransaction: any, 
   currentEntry: BackstackEntry, 
   newEntry: BackstackEntry): void;
```

Defined in: [ui/transition/index.d.ts:58](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L58)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fragmentTransaction` | `any` |
| `currentEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |
| `newEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`void`

#### Inherited from

[`Transition`](Transition.md).[`androidFragmentTransactionCallback`](Transition.md#androidfragmenttransactioncallback)

***

### animateIOSTransition()

```ts
animateIOSTransition(
   transitionContext: any, 
   fromViewCtrl: any, 
   toViewCtrl: any, 
   operation: any): void;
```

Defined in: [ui/transition/index.d.ts:43](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transitionContext` | `any` |
| `fromViewCtrl` | `any` |
| `toViewCtrl` | `any` |
| `operation` | `any` |

#### Returns

`void`

#### Inherited from

[`Transition`](Transition.md).[`animateIOSTransition`](Transition.md#animateiostransition)

***

### createAndroidAnimator()

```ts
createAndroidAnimator(transitionType: string): any;
```

Defined in: [ui/transition/index.d.ts:44](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transitionType` | `string` |

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`createAndroidAnimator`](Transition.md#createandroidanimator)

***

### getCurve()

```ts
getCurve(): any;
```

Defined in: [ui/transition/index.d.ts:42](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L42)

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`getCurve`](Transition.md#getcurve)

***

### getDuration()

```ts
getDuration(): number;
```

Defined in: [ui/transition/index.d.ts:40](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L40)

#### Returns

`number`

#### Inherited from

[`Transition`](Transition.md).[`getDuration`](Transition.md#getduration)

***

### iosDismissedController()?

```ts
optional iosDismissedController(dismissed: any): any;
```

Defined in: [ui/transition/index.d.ts:48](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dismissed` | `any` |

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`iosDismissedController`](Transition.md#iosdismissedcontroller)

***

### iosInteractionDismiss()?

```ts
optional iosInteractionDismiss(animator: any): any;
```

Defined in: [ui/transition/index.d.ts:52](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L52)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animator` | `any` |

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`iosInteractionDismiss`](Transition.md#iosinteractiondismiss)

***

### iosInteractionPresented()?

```ts
optional iosInteractionPresented(animator: any): any;
```

Defined in: [ui/transition/index.d.ts:54](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L54)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animator` | `any` |

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`iosInteractionPresented`](Transition.md#iosinteractionpresented)

***

### iosNavigatedController()?

```ts
optional iosNavigatedController(
   navigationController: any, 
   operation: number, 
   fromVC: any, 
   toVC: any): any;
```

Defined in: [ui/transition/index.d.ts:56](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L56)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `navigationController` | `any` |
| `operation` | `number` |
| `fromVC` | `any` |
| `toVC` | `any` |

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`iosNavigatedController`](Transition.md#iosnavigatedcontroller)

***

### iosPresentedController()?

```ts
optional iosPresentedController(
   presented: any, 
   presenting: any, 
   source: any): any;
```

Defined in: [ui/transition/index.d.ts:50](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L50)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `presented` | `any` |
| `presenting` | `any` |
| `source` | `any` |

#### Returns

`any`

#### Inherited from

[`Transition`](Transition.md).[`iosPresentedController`](Transition.md#iospresentedcontroller)

***

### setDuration()

```ts
setDuration(value: number): void;
```

Defined in: [ui/transition/index.d.ts:41](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[`Transition`](Transition.md).[`setDuration`](Transition.md#setduration)

***

### setupInteractiveGesture()?

```ts
optional setupInteractiveGesture(startCallback: () => void, view: View): void;
```

Defined in: [ui/transition/index.d.ts:46](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/index.d.ts#L46)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `startCallback` | () => `void` |
| `view` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

[`Transition`](Transition.md).[`setupInteractiveGesture`](Transition.md#setupinteractivegesture)
