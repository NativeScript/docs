---
title: AndroidActivityRequestPermissionsEventData
titleTemplate: :title - API / NativeScript
description: Data for the Android activity onRequestPermissions callback
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

Data for the Android activity onRequestPermissions callback

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

### grantResults

```ts
grantResults: number[];
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The Granted.

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

### permissions

```ts
permissions: string[];
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The Permissions.

***

### requestCode

```ts
requestCode: number;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/application/application-interfaces.ts)

The request code.
