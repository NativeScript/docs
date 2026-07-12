---
title: SceneEventData
titleTemplate: :title - API / NativeScript
description: iOS Event data containing information for scene lifecycle events (iOS 13+).
contributors: false
---

Defined in: application/application-interfaces.d.ts:203

iOS Event data containing information for scene lifecycle events (iOS 13+).

## Extends

- [`ApplicationEventData`](ApplicationEventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: application/application-interfaces.d.ts:36

Gets the native Android event arguments. Valid only when running on Android.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`android`](ApplicationEventData.md#android)

***

### connectionOptions?

```ts
optional connectionOptions?: UISceneConnectionOptions;
```

Defined in: application/application-interfaces.d.ts:215

Scene connection options (for sceneWillConnect event).

***

### eventName

```ts
eventName: string;
```

Defined in: application/application-interfaces.d.ts:28

The name of the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`eventName`](ApplicationEventData.md#eventname)

***

### ios?

```ts
optional ios?: any;
```

Defined in: application/application-interfaces.d.ts:32

Gets the native iOS event arguments. Valid only when running on iOS.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`ios`](ApplicationEventData.md#ios)

***

### object

```ts
object: any;
```

Defined in: application/application-interfaces.d.ts:40

The instance that has raised the event.

#### Inherited from

[`ApplicationEventData`](ApplicationEventData.md).[`object`](ApplicationEventData.md#object)

***

### scene?

```ts
optional scene?: UIWindowScene;
```

Defined in: application/application-interfaces.d.ts:207

The UIWindowScene instance associated with this event.

***

### userInfo?

```ts
optional userInfo?: NSDictionary<any, any>;
```

Defined in: application/application-interfaces.d.ts:219

Additional user info from the notification.

***

### window?

```ts
optional window?: UIWindow;
```

Defined in: application/application-interfaces.d.ts:211

The UIWindow associated with this scene (if applicable).
