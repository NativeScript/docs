---
title: NativeWindowEvents
titleTemplate: :title - API / NativeScript
description: Events emitted by a NativeWindow instance.
contributors: false
---

```ts
const NativeWindowEvents: {
  activate: "activate";
  activityBackPressed: "activityBackPressed";
  activityCreated: "activityCreated";
  activityDestroyed: "activityDestroyed";
  activityNewIntent: "activityNewIntent";
  activityPaused: "activityPaused";
  activityRequestPermissions: "activityRequestPermissions";
  activityResult: "activityResult";
  activityResumed: "activityResumed";
  activityStarted: "activityStarted";
  activityStopped: "activityStopped";
  attached: "attached";
  background: "background";
  close: "close";
  contentLoaded: "contentLoaded";
  deactivate: "deactivate";
  detached: "detached";
  displayed: "displayed";
  foreground: "foreground";
  layoutDirectionChanged: "layoutDirectionChanged";
  orientationChanged: "orientationChanged";
  saveActivityState: "saveActivityState";
  sceneContinueUserActivity: "sceneContinueUserActivity";
  sceneDidActivate: "sceneDidActivate";
  sceneDidDisconnect: "sceneDidDisconnect";
  sceneDidEnterBackground: "sceneDidEnterBackground";
  sceneOpenURLContexts: "sceneOpenURLContexts";
  scenePerformActionForShortcutItem: "scenePerformActionForShortcutItem";
  sceneWillConnect: "sceneWillConnect";
  sceneWillEnterForeground: "sceneWillEnterForeground";
  sceneWillResignActive: "sceneWillResignActive";
  systemAppearanceChanged: "systemAppearanceChanged";
};
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Events emitted by a NativeWindow instance.

## Type Declaration

### activate

```ts
readonly activate: "activate";
```

Fired when the window becomes the active/focused window.

### activityBackPressed

```ts
readonly activityBackPressed: "activityBackPressed";
```

Fired when the back button is pressed (Android only).

### activityCreated

```ts
readonly activityCreated: "activityCreated";
```

Fired when the activity is created (Android only).

### activityDestroyed

```ts
readonly activityDestroyed: "activityDestroyed";
```

Fired when the activity is destroyed (Android only).

### activityNewIntent

```ts
readonly activityNewIntent: "activityNewIntent";
```

Fired when the activity receives a new intent (Android only).

### activityPaused

```ts
readonly activityPaused: "activityPaused";
```

Fired when the activity is paused (Android only).

### activityRequestPermissions

```ts
readonly activityRequestPermissions: "activityRequestPermissions";
```

Fired when permission results are received (Android only).

### activityResult

```ts
readonly activityResult: "activityResult";
```

Fired when the activity receives a result (Android only).

### activityResumed

```ts
readonly activityResumed: "activityResumed";
```

Fired when the activity is resumed (Android only).

### activityStarted

```ts
readonly activityStarted: "activityStarted";
```

Fired when the activity is started (Android only).

### activityStopped

```ts
readonly activityStopped: "activityStopped";
```

Fired when the activity is stopped (Android only).

### attached

```ts
readonly attached: "attached";
```

Fired when a native surface is bound to the window, both on first connect and on every re-attach.

### background

```ts
readonly background: "background";
```

Fired when the window enters the background.

### close

```ts
readonly close: "close";
```

Fired when the window session ends for good. Fires at most once per window;
every listener on the window is dropped right after it is dispatched.

### contentLoaded

```ts
readonly contentLoaded: "contentLoaded";
```

Fired when the root view content is set or changed.

### deactivate

```ts
readonly deactivate: "deactivate";
```

Fired when the window loses focus.

### detached

```ts
readonly detached: "detached";
```

Fired when the native surface goes away while the window session stays alive
(iOS scene disconnect, Android activity recreation). The window stays registered
and keeps its listeners, so the same instance is reused when `attached` fires again.

### displayed

```ts
readonly displayed: "displayed";
```

Fired after the window content has been displayed for the first time.

### foreground

```ts
readonly foreground: "foreground";
```

Fired when the window enters the foreground.

### layoutDirectionChanged

```ts
readonly layoutDirectionChanged: "layoutDirectionChanged";
```

Fired when the layout direction of this window changes between ltr and rtl.

### orientationChanged

```ts
readonly orientationChanged: "orientationChanged";
```

Fired when the orientation of this window changes.

### saveActivityState

```ts
readonly saveActivityState: "saveActivityState";
```

Fired when the activity state is being saved (Android only).

### sceneContinueUserActivity

```ts
readonly sceneContinueUserActivity: "sceneContinueUserActivity";
```

Fired when the scene is asked to continue a handoff/universal link activity (iOS only).

### sceneDidActivate

```ts
readonly sceneDidActivate: "sceneDidActivate";
```

Fired when the scene becomes active (iOS only).

### sceneDidDisconnect

```ts
readonly sceneDidDisconnect: "sceneDidDisconnect";
```

Fired when the scene has disconnected (iOS only).

### sceneDidEnterBackground

```ts
readonly sceneDidEnterBackground: "sceneDidEnterBackground";
```

Fired when the scene has entered the background (iOS only).

### sceneOpenURLContexts

```ts
readonly sceneOpenURLContexts: "sceneOpenURLContexts";
```

Fired when the scene is asked to open one or more URLs (iOS only).

### scenePerformActionForShortcutItem

```ts
readonly scenePerformActionForShortcutItem: "scenePerformActionForShortcutItem";
```

Fired when a home screen quick action is directed at the scene (iOS only).

### sceneWillConnect

```ts
readonly sceneWillConnect: "sceneWillConnect";
```

Fired when the scene is about to connect (iOS only).

### sceneWillEnterForeground

```ts
readonly sceneWillEnterForeground: "sceneWillEnterForeground";
```

Fired when the scene is about to enter the foreground (iOS only).

### sceneWillResignActive

```ts
readonly sceneWillResignActive: "sceneWillResignActive";
```

Fired when the scene is about to resign active state (iOS only).

### systemAppearanceChanged

```ts
readonly systemAppearanceChanged: "systemAppearanceChanged";
```

Fired when the system appearance of this window changes between light and dark.
