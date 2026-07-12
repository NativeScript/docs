---
title: AndroidActivityResultEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity result event.
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Data for the Android activity result event.

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

### eventName

```ts
eventName: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The name of the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`eventName`](AndroidActivityEventData.md#eventname)

***

### intent

```ts
intent: Intent;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The intent.

***

### object

```ts
object: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The instance that has raised the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`object`](AndroidActivityEventData.md#object)

***

### requestCode

```ts
requestCode: number;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The request code.

***

### resultCode

```ts
resultCode: number;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The result code.
