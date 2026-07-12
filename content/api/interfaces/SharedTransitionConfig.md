---
title: SharedTransitionConfig
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

## Properties

### interactive?

```ts
optional interactive?: {
  dismiss?: SharedTransitionInteractiveOptions;
};
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Interactive transition settings. (iOS only at the moment)

#### dismiss?

```ts
optional dismiss?: SharedTransitionInteractiveOptions;
```

Whether you want to allow interactive dismissal.
Defaults to using 'pan' gesture for dismissal however you can customize your own.

***

### pageEnd?

```ts
optional pageEnd?: SharedTransitionPageWithDurationProperties;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

View settings applied to the incoming page to end your transition with.

***

### pageOut?

```ts
optional pageOut?: SharedTransitionPageWithDurationProperties;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

View settings applied to the outgoing page in your transition.

***

### pageReturn?

```ts
optional pageReturn?: SharedRect & {
  opacity?: number;
  scale?: {
     x?: number;
     y?: number;
  };
} & {
  sharedTransitionTags?: {
   [key: string]: SharedTransitionTagProperties;
  };
  spring?: SharedSpringProperties;
} & {
  duration?: number;
} & {
  useStartOpacity?: boolean;
};
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

View settings to return to the original page with.

#### Type Declaration

##### opacity?

```ts
optional opacity?: number;
```

##### scale?

```ts
optional scale?: {
  x?: number;
  y?: number;
};
```

###### scale.x?

```ts
optional x?: number;
```

###### scale.y?

```ts
optional y?: number;
```

#### Type Declaration

##### sharedTransitionTags?

```ts
optional sharedTransitionTags?: {
[key: string]: SharedTransitionTagProperties;
};
```

(iOS Only) Allow "independent" elements found only on one of the screens to take part in the animation.
Note: This feature will be brought to Android in a future release.

###### Index Signature

```ts
[key: string]: SharedTransitionTagProperties
```

##### spring?

```ts
optional spring?: SharedSpringProperties;
```

Spring animation settings.
Defaults to 140 tension with 10 friction.

#### Type Declaration

##### duration?

```ts
optional duration?: number;
```

Linear duration in milliseconds
Note: When this is defined, it will override spring options and use only linear animation.

#### Type Declaration

##### useStartOpacity?

```ts
optional useStartOpacity?: boolean;
```

In some cases you may want the returning animation to start with the original opacity,
instead of beginning where it ended up on pageEnd.
Note: you can try enabling this property in cases where your return animation doesn't appear correct.

***

### pageStart?

```ts
optional pageStart?: SharedTransitionPageProperties;
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

View settings applied to the incoming page to start your transition with.
