---
title: AndroidActivityEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity events.
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

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

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The activity.

***

### eventName

```ts
eventName: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The name of the event.

***

### object

```ts
object: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The instance that has raised the event.

***

### window?

```ts
optional window?: NativeWindow;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The NativeWindow the activity belongs to, when one is registered for it.
