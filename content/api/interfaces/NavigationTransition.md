---
title: NavigationTransition
titleTemplate: :title - API / NativeScript
description: Represents an object specifying a page navigation transition.
contributors: false
---

Defined in: ui/frame/index.d.ts:420

Represents an object specifying a page navigation transition.

## Properties

### curve?

```ts
optional curve?: any;
```

Defined in: ui/frame/index.d.ts:453

An optional transition animation curve. Possible values are contained in the [AnimationCurve enumeration](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html).
Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.

***

### duration?

```ts
optional duration?: number;
```

Defined in: ui/frame/index.d.ts:447

The length of the transition in milliseconds. If you do not specify this, the default platform transition duration will be used.

***

### instance?

```ts
optional instance?: Transition;
```

Defined in: ui/frame/index.d.ts:442

An user-defined instance of the "ui/transition".Transition class.

***

### name?

```ts
optional name?: string;
```

Defined in: ui/frame/index.d.ts:437

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
