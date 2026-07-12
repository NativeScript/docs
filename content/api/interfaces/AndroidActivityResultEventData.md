---
title: AndroidActivityResultEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity result event.
contributors: false
---

Defined in: application/application-interfaces.d.ts:165

Data for the Android activity result event.

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

### eventName

```ts
eventName: string;
```

Defined in: application/application-interfaces.d.ts:130

The name of the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`eventName`](AndroidActivityEventData.md#eventname)

***

### intent

```ts
intent: Intent;
```

Defined in: application/application-interfaces.d.ts:177

The intent.

***

### object

```ts
object: any;
```

Defined in: application/application-interfaces.d.ts:134

The instance that has raised the event.

#### Inherited from

[`AndroidActivityEventData`](AndroidActivityEventData.md).[`object`](AndroidActivityEventData.md#object)

***

### requestCode

```ts
requestCode: number;
```

Defined in: application/application-interfaces.d.ts:169

The request code.

***

### resultCode

```ts
resultCode: number;
```

Defined in: application/application-interfaces.d.ts:173

The result code.
