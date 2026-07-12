---
title: Transition
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/transition/index.d.ts:22

## Extended by

- [`ModalTransition`](ModalTransition.md)
- [`PageTransition`](PageTransition.md)
- [`FadeTransition`](FadeTransition.md)
- [`SlideTransition`](SlideTransition.md)

## Constructors

### Constructor

```ts
new Transition(duration?: number, nativeCurve?: any): Transition;
```

Defined in: ui/transition/index.d.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration?` | `number` |
| `nativeCurve?` | `any` |

#### Returns

`Transition`

## Properties

### id

```ts
id: number;
```

Defined in: ui/transition/index.d.ts:23

***

### interactiveController?

```ts
optional interactiveController?: any;
```

Defined in: ui/transition/index.d.ts:29

***

### name?

```ts
optional name?: string;
```

Defined in: ui/transition/index.d.ts:27

(Optional) Provide a unique name to identify this transition

***

### presented?

```ts
optional presented?: any;
```

Defined in: ui/transition/index.d.ts:30

***

### presenting?

```ts
optional presenting?: any;
```

Defined in: ui/transition/index.d.ts:31

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

Defined in: ui/transition/index.d.ts:32

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

***

### transitionController?

```ts
optional transitionController?: any;
```

Defined in: ui/transition/index.d.ts:28

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

Defined in: ui/transition/index.d.ts:38

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

## Methods

### androidFragmentTransactionCallback()?

```ts
optional androidFragmentTransactionCallback(
   fragmentTransaction: any, 
   currentEntry: BackstackEntry, 
   newEntry: BackstackEntry): void;
```

Defined in: ui/transition/index.d.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fragmentTransaction` | `any` |
| `currentEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |
| `newEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`void`

***

### animateIOSTransition()

```ts
animateIOSTransition(
   transitionContext: any, 
   fromViewCtrl: any, 
   toViewCtrl: any, 
   operation: any): void;
```

Defined in: ui/transition/index.d.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transitionContext` | `any` |
| `fromViewCtrl` | `any` |
| `toViewCtrl` | `any` |
| `operation` | `any` |

#### Returns

`void`

***

### createAndroidAnimator()

```ts
createAndroidAnimator(transitionType: string): any;
```

Defined in: ui/transition/index.d.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transitionType` | `string` |

#### Returns

`any`

***

### getCurve()

```ts
getCurve(): any;
```

Defined in: ui/transition/index.d.ts:42

#### Returns

`any`

***

### getDuration()

```ts
getDuration(): number;
```

Defined in: ui/transition/index.d.ts:40

#### Returns

`number`

***

### iosDismissedController()?

```ts
optional iosDismissedController(dismissed: any): any;
```

Defined in: ui/transition/index.d.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dismissed` | `any` |

#### Returns

`any`

***

### iosInteractionDismiss()?

```ts
optional iosInteractionDismiss(animator: any): any;
```

Defined in: ui/transition/index.d.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animator` | `any` |

#### Returns

`any`

***

### iosInteractionPresented()?

```ts
optional iosInteractionPresented(animator: any): any;
```

Defined in: ui/transition/index.d.ts:54

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animator` | `any` |

#### Returns

`any`

***

### iosNavigatedController()?

```ts
optional iosNavigatedController(
   navigationController: any, 
   operation: number, 
   fromVC: any, 
   toVC: any): any;
```

Defined in: ui/transition/index.d.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `navigationController` | `any` |
| `operation` | `number` |
| `fromVC` | `any` |
| `toVC` | `any` |

#### Returns

`any`

***

### iosPresentedController()?

```ts
optional iosPresentedController(
   presented: any, 
   presenting: any, 
   source: any): any;
```

Defined in: ui/transition/index.d.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `presented` | `any` |
| `presenting` | `any` |
| `source` | `any` |

#### Returns

`any`

***

### setDuration()

```ts
setDuration(value: number): void;
```

Defined in: ui/transition/index.d.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

### setupInteractiveGesture()?

```ts
optional setupInteractiveGesture(startCallback: () => void, view: View): void;
```

Defined in: ui/transition/index.d.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `startCallback` | () => `void` |
| `view` | [`View`](View.md) |

#### Returns

`void`
