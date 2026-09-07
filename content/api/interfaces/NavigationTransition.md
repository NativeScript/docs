---
title: NavigationTransition
titleTemplate: :title - API / NativeScript
description: Represents an object specifying a page navigation transition.
contributors: false
---

Defined in: [ui/frame/index.d.ts:430](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L430)

Represents an object specifying a page navigation transition.

## Properties

### curve?

```ts
optional curve?: any;
```

Defined in: [ui/frame/index.d.ts:463](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L463)

An optional transition animation curve. Possible values are contained in the [AnimationCurve enumeration](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html).
Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.

***

### duration?

```ts
optional duration?: number;
```

Defined in: [ui/frame/index.d.ts:457](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L457)

The length of the transition in milliseconds. If you do not specify this, the default platform transition duration will be used.

***

### instance?

```ts
optional instance?: Transition;
```

Defined in: [ui/frame/index.d.ts:452](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L452)

An user-defined instance of the "ui/transition".Transition class.

***

### name?

```ts
optional name?: string;
```

Defined in: [ui/frame/index.d.ts:447](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L447)

Can be one of the built-in transitions:
- curl (same as curlUp) (iOS only)
- curlUp (iOS only)
- curlDown (iOS only)
- explode (Android Lollipop(21) and up only)
- fade
- flip (same as flipRight)
- flipRight
- flipLeft
- slide (same as slideLeft)
- slideLeft
- slideRight
- slideTop
- slideBottom
