---
title: ScenePerformActionForShortcutItemEventData
titleTemplate: :title - API / NativeScript
description: iOS event data for the `scenePerformActionForShortcutItem` event, raised when a home screen quick action targets a scene. Replaces the `applicationPerformAct...
contributors: false
---

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

iOS event data for the `scenePerformActionForShortcutItem` event, raised when a home
screen quick action targets a scene.

Replaces the `applicationPerformActionForShortcutItemCompletionHandler` app delegate
callback, which UIKit no longer calls once the app adopts scenes.

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

### completionHandler

```ts
completionHandler: (handled: boolean) => void;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

Reports back to iOS whether the action was handled. Only the first call is delivered;
later ones are ignored.

Unless a legacy `applicationPerformActionForShortcutItemCompletionHandler` handler is
registered — in which case that handler owns the result — the action is reported as
unhandled as soon as the listeners return, so a listener that wants to report otherwise
must call this before returning.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handled` | `boolean` |

#### Returns

`void`

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

### shortcutItem

```ts
shortcutItem: UIApplicationShortcutItem;
```

Defined in: [application/application-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-interfaces.ts)

The quick action the user selected.

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
