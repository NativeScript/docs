---
title: SceneEvents
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
const SceneEvents: {
  sceneContentSetup: string;
  sceneDidActivate: string;
  sceneDidDisconnect: string;
  sceneDidEnterBackground: string;
  sceneWillConnect: string;
  sceneWillEnterForeground: string;
  sceneWillResignActive: string;
};
```

Defined in: [application/application-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/application/application-common.ts)

## Type Declaration

### ~~sceneContentSetup~~

```ts
sceneContentSetup: string;
```

#### Deprecated

Use the Application 'windowOpen' event and NativeWindow.setContent() instead.

### ~~sceneDidActivate~~

```ts
sceneDidActivate: string;
```

#### Deprecated

Use `NativeWindowEvents.sceneDidActivate` instead.

### ~~sceneDidDisconnect~~

```ts
sceneDidDisconnect: string;
```

#### Deprecated

Use `NativeWindowEvents.sceneDidDisconnect` instead.

### ~~sceneDidEnterBackground~~

```ts
sceneDidEnterBackground: string;
```

#### Deprecated

Use `NativeWindowEvents.sceneDidEnterBackground` instead.

### ~~sceneWillConnect~~

```ts
sceneWillConnect: string;
```

#### Deprecated

Use `NativeWindowEvents.sceneWillConnect` instead.

### ~~sceneWillEnterForeground~~

```ts
sceneWillEnterForeground: string;
```

#### Deprecated

Use `NativeWindowEvents.sceneWillEnterForeground` instead.

### ~~sceneWillResignActive~~

```ts
sceneWillResignActive: string;
```

#### Deprecated

Use `NativeWindowEvents.sceneWillResignActive` instead.

## Deprecated

Use `NativeWindowEvents` from `@nativescript/core/native-window` instead.
