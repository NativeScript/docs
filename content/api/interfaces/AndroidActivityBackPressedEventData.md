---
title: AndroidActivityBackPressedEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity back pressed event.
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Data for the Android activity back pressed event.

## Extends

- [`AndroidActivityEventData`](AndroidActivityEventData.md)

## Properties

### activity

```ts
activity: AppCompatActivity;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The activity.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`activity`](AndroidActivityEventData.md#activity)

***

### cancel

```ts
cancel: boolean;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

In the event handler, set this value to true if you want to cancel the back navigation and do something else instead.

***

### eventName

```ts
eventName: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The name of the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`eventName`](AndroidActivityEventData.md#eventname)

***

### object

```ts
object: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The instance that has raised the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`object`](AndroidActivityEventData.md#object)
