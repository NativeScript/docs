---
title: AndroidActivityEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity events.
contributors: false
---

Defined in: application/application-interfaces.d.ts:122

Data for the Android activity events.

## Extended by

- [`AndroidActivityBundleEventData`](AndroidActivityBundleEventData.md)
- [`AndroidActivityRequestPermissionsEventData`](AndroidActivityRequestPermissionsEventData.md)
- [`AndroidActivityResultEventData`](AndroidActivityResultEventData.md)
- [`AndroidActivityNewIntentEventData`](AndroidActivityNewIntentEventData.md)
- [`AndroidActivityBackPressedEventData`](AndroidActivityBackPressedEventData.md)

## Properties

### activity

```ts
activity: AppCompatActivity;
```

Defined in: application/application-interfaces.d.ts:126

The activity.

***

### eventName

```ts
eventName: string;
```

Defined in: application/application-interfaces.d.ts:130

The name of the event.

***

### object

```ts
object: any;
```

Defined in: application/application-interfaces.d.ts:134

The instance that has raised the event.
