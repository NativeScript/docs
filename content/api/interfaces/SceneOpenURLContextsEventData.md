---
title: SceneOpenURLContextsEventData
titleTemplate: :title - API / NativeScript
description: iOS event data for the `sceneOpenURLContexts` event, raised when a scene is asked to open URLs. Replaces the `applicationOpenURLOptions` app delegate callbac...
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

iOS event data for the `sceneOpenURLContexts` event, raised when a scene is asked to open URLs.

Replaces the `applicationOpenURLOptions` app delegate callback, which UIKit no longer
calls once the app adopts scenes. Handlers registered through
`Application.ios.addDelegateHandler('applicationOpenURLOptions', ...)` still run, once per context.

## Extends

- [`SceneEventData`](SceneEventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

Gets the native Android event arguments. Valid only when running on Android.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`android`](SceneEventData.md#android)

***

### connectionOptions?

```ts
optional connectionOptions?: UISceneConnectionOptions;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

Scene connection options (for sceneWillConnect event).

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`connectionOptions`](SceneEventData.md#connectionoptions)

***

### eventName

```ts
eventName: string;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The name of the event.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`eventName`](SceneEventData.md#eventname)

***

### ios?

```ts
optional ios?: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

Gets the native iOS event arguments. Valid only when running on iOS.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`ios`](SceneEventData.md#ios)

***

### object

```ts
object: any;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The instance that has raised the event.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`object`](SceneEventData.md#object)

***

### scene?

```ts
optional scene?: UIWindowScene;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The UIWindowScene instance associated with this event.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`scene`](SceneEventData.md#scene)

***

### uiWindow?

```ts
optional uiWindow?: UIWindow;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The UIWindow associated with this scene (if applicable).

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`uiWindow`](SceneEventData.md#uiwindow)

***

### urlContexts

```ts
urlContexts: NSSet<UIOpenURLContext>;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The URL contexts to open. A single delivery may carry more than one URL.

***

### userInfo?

```ts
optional userInfo?: NSDictionary<any, any>;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

Additional user info from the notification.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`userInfo`](SceneEventData.md#userinfo)

***

### window?

```ts
optional window?: NativeWindow;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The NativeWindow the scene belongs to, when one is registered for it.

#### Inherited from

[`SceneEventData`](SceneEventData.md).[`window`](SceneEventData.md#window)
