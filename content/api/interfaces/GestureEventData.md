---
title: GestureEventData
titleTemplate: :title - API / NativeScript
description: Base event data.
contributors: false
---

Defined in: ui/gestures/gestures-types.d.ts:65

Base event data.

## Extends

- [`EventData`](EventData.md)

## Extended by

- [`GestureEventDataWithState`](GestureEventDataWithState.md)
- [`TapGestureEventData`](TapGestureEventData.md)
- [`SwipeGestureEventData`](SwipeGestureEventData.md)

## Properties

### android

```ts
android: any;
```

Defined in: ui/gestures/gestures-types.d.ts:69

***

### eventName

```ts
eventName: string;
```

Defined in: data/observable/index.d.ts:9

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### ios

```ts
ios: any;
```

Defined in: ui/gestures/gestures-types.d.ts:68

***

### object

```ts
object: Observable;
```

Defined in: data/observable/index.d.ts:13

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)

***

### type

```ts
type: GestureTypes;
```

Defined in: ui/gestures/gestures-types.d.ts:66

***

### view

```ts
view: View;
```

Defined in: ui/gestures/gestures-types.d.ts:67
