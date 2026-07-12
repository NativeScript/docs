---
title: AndroidActivityBackPressedEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity back pressed event.
contributors: false
---

Defined in: application/application-interfaces.d.ts:191

Data for the Android activity back pressed event.

## Extends

- [`AndroidActivityEventData`](AndroidActivityEventData.md)

## Properties

### activity

```ts
activity: AppCompatActivity;
```

Defined in: application/application-interfaces.d.ts:126

The activity.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`activity`](AndroidActivityEventData.md#activity)

***

### cancel

```ts
cancel: boolean;
```

Defined in: application/application-interfaces.d.ts:195

In the event handler, set this value to true if you want to cancel the back navigation and do something else instead.

***

### eventName

```ts
eventName: string;
```

Defined in: application/application-interfaces.d.ts:130

The name of the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`eventName`](AndroidActivityEventData.md#eventname)

***

### object

```ts
object: any;
```

Defined in: application/application-interfaces.d.ts:134

The instance that has raised the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`object`](AndroidActivityEventData.md#object)
