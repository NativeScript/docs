---
title: Multiple Windows
description: Develop with multiple windows on supported devices.
contributors:
  - NathanWalker
---

NativeScript 9 adds first-class support for iOS multi-window (multi-scene) applications by adopting the UIScene lifecycle when enabled. This guide explains how to enable scenes, how NativeScript integrates with them, and how to work with scene-specific APIs and events.

:::tip Why this matters
Apple is moving all iOS apps to the UIScene lifecycle. Enabling scenes now makes your app future‑proof and unlocks multiple windows on iPadOS and visionOS.
:::

## Supported platforms

- iPad running iPadOS 13 or later (multi-window capable)
- visionOS (Vision Pro)
- iPhone: runs with UIScene lifecycle; multiple windows are not exposed to users, but adopting UIScene is recommended

## Prerequisites

- NativeScript 9+
- iOS 13+ runtime
- Xcode/iOS tooling capable of building with UIScene (Xcode 11+)

## Enable scene lifecycle (Info.plist)

NativeScript will automatically switch to UIScene lifecycle when a scene manifest is present in your iOS app `Info.plist`. Add the following keys:

```xml
<key>UIApplicationSceneManifest</key>
<dict>
  <key>UIApplicationPreferredDefaultSceneSessionRole</key>
  <string>UIWindowSceneSessionRoleApplication</string>
  <key>UIApplicationSupportsMultipleScenes</key>
  <true/>
  <key>UISceneConfigurations</key>
  <dict>
    <key>UIWindowSceneSessionRoleApplication</key>
    <array>
      <dict>
        <key>UISceneConfigurationName</key>
        <string>Default Configuration</string>
        <key>UISceneDelegateClassName</key>
        <string>SceneDelegate</string>
      </dict>
    </array>
  </dict>
</dict>
```

When this configuration is detected, NativeScript adopts UIScene; on devices that don’t support scenes, your app continues to behave as a single-window app.

:::note iPhone and UIScene
Even on iPhone, adding the manifest switches your app to UIScene lifecycle. Xcode may show warnings like “UIScene lifecycle will soon be required” — using the manifest addresses this.
:::

## How it works in NativeScript

When the scene manifest is present:

- A `SceneDelegate` (exposed to iOS as `SceneDelegate`) implements `UIWindowSceneDelegate` to integrate scenes with NativeScript’s application runtime.
- A UIWindow is created per `UIWindowScene` and mapped internally, preserving compatibility with traditional app lifecycle APIs.
- NativeScript fires scene-specific events and forwards core application lifecycle events from a primary scene to maintain compatibility with existing code.

### Scene lifecycle events

Use the `SceneEvents` constants to subscribe to scene lifecycle changes:

```ts
export const SceneEvents = {
  sceneWillConnect: 'sceneWillConnect',
  sceneDidActivate: 'sceneDidActivate',
  sceneWillResignActive: 'sceneWillResignActive',
  sceneWillEnterForeground: 'sceneWillEnterForeground',
  sceneDidEnterBackground: 'sceneDidEnterBackground',
  sceneDidDisconnect: 'sceneDidDisconnect',
  sceneContentSetup: 'sceneContentSetup',
};
```

Event payloads include scene and window references:

```ts
/** iOS event data for UIScene lifecycle (iOS 13+). */
export interface SceneEventData extends ApplicationEventData {
  /** The UIWindowScene instance associated with this event. */
  scene?: UIWindowScene;
  /** The UIWindow for this scene (if applicable). */
  window?: UIWindow;
  /** Scene connection options (for sceneWillConnect). */
  connectionOptions?: UISceneConnectionOptions;
  /** Additional user info from the notification. */
  userInfo?: NSDictionary<any, any>;
}
```

### iOSApplication scene APIs

When UIScene is active, `Application.ios` exposes helpers for inspecting and controlling scenes and windows:

- `supportsScenes(): boolean` — iOS supports UIScene (iOS 13+)
- `supportsMultipleScenes(): boolean` — app can present multiple scenes/windows (iPadOS; typically false on iPhone and some simulators)
- `getAllWindows(): UIWindow[]` — all app windows across scenes
- `getAllScenes(): UIScene[]` — all attached scenes
- `getWindowScenes(): UIWindowScene[]` — filtered to window scenes
- `getPrimaryWindow(): UIWindow | undefined` — the primary window (for compatibility)
- `getPrimaryScene(): UIWindowScene | undefined` — the primary scene
- `isUsingSceneLifecycle(): boolean` — whether UIScene lifecycle is active
- `setWindowRootView(window: UIWindow, view: View): void` — set NativeScript root view for a given scene’s window

## Usage

### Listen to scene events

```ts
import { Application, SceneEvents } from '@nativescript/core';

Application.on(SceneEvents.sceneWillConnect, (args) => {
  console.log('Scene connecting:', args.scene);
  console.log('Window:', args.window);
  console.log('Connection options:', args.connectionOptions);
});

Application.on(SceneEvents.sceneDidActivate, (args) => {
  console.log('Scene active:', args.scene);
});

Application.on(SceneEvents.sceneWillResignActive, (args) => {
  console.log('Scene will resign active:', args.scene);
});

Application.on(SceneEvents.sceneWillEnterForeground, (args) => {
  console.log('Scene will enter foreground:', args.scene);
});

Application.on(SceneEvents.sceneDidEnterBackground, (args) => {
  console.log('Scene entered background:', args.scene);
});

Application.on(SceneEvents.sceneDidDisconnect, (args) => {
  console.log('Scene disconnected:', args.scene);
});

Application.on(SceneEvents.sceneContentSetup, (args) => {
  // Create and attach NativeScript View content for the new scene here
  // See "Provide scene-specific UI" section below
  setupSceneContent(args);
});
```

### Inspect and manage windows

```ts
import { Application } from '@nativescript/core';

if (Application.ios.supportsScenes()) {
  const windows = Application.ios.getAllWindows();
  const scenes = Application.ios.getWindowScenes();
  const primaryWindow = Application.ios.getPrimaryWindow();

  console.log(`App has ${windows.length} windows`);
  console.log(`App has ${scenes.length} scenes`);
  console.log('Primary window:', primaryWindow);

  if (Application.ios.isUsingSceneLifecycle()) {
    console.log('Using UIScene lifecycle');
  }
} else {
  console.log('Single-window app lifecycle in effect');
}
```

### Provide scene-specific UI

```ts
import { Application, Page, Utils } from '@nativescript/core';

function createPageForScene(scene: UIWindowScene, window: UIWindow): Page {
  // Construct any NativeScript view hierarchy here
  const page = new Page();
  // ... add content
  return page;
}

export function setupSceneContent(args: SceneEventData) {
  // Optionally distinguish scenes by an id when opening a new window
  // (e.g., via NSUserActivity userInfo)
  let nsViewId: string | undefined;
  if (args.connectionOptions?.userActivities?.count > 0) {
    const activity = args.connectionOptions.userActivities.allObjects.objectAtIndex(0) as NSUserActivity;
    nsViewId = Utils.dataDeserialize(activity.userInfo).id;
  }

  let page: Page;
  switch (nsViewId) {
    case 'newSceneBasic':
      page = createPageForScene(args.scene, args.window);
      break;
    case 'newSceneAlt':
      page = createPageForScene(args.scene, args.window); // replace with alt page
      break;
    default:
      page = createPageForScene(args.scene, args.window);
  }

  Application.ios.setWindowRootView(args.window, page);
}
```

## Custom SceneDelegate (advanced)

NativeScript ships a default `SceneDelegate` that integrates UIScene with the runtime and event system. If your application needs custom scene delegate behavior, you can provide your own implementation named `SceneDelegate` in your app and wire additional logic. Ensure that you continue to create a `UIWindow` per `UIWindowScene` and set the NativeScript root view to keep app behavior consistent. Most apps should prefer the default delegate.

## Compatibility and behavior

- Backwards compatibility: on devices or builds without a scene manifest, the traditional single-window lifecycle is used and existing apps continue to work unchanged.
- Primary scene: for compatibility, NativeScript forwards core app lifecycle events (e.g., didBecomeActive) from the primary scene.
- Multiple scenes: `supportsMultipleScenes()` is typically only true on physical iPadOS devices; it may return false on iPhone and some simulators.

## Migration guidance

Existing apps do not need to change code to adopt UIScene. To enable multi-window capabilities and Scene events:

1. Add the scene manifest to `Info.plist` (see above).
2. Listen to `SceneEvents` to tailor behavior per window.
1. If you open additional windows, set their root views with `Application.ios.setWindowRootView` during `sceneContentSetup`.

## Troubleshooting

- “UIScene lifecycle will soon be required” in Xcode: add the scene manifest to `Info.plist` to adopt UIScene.
- No multiple windows on iPhone: expected; iPhone uses UIScene lifecycle but doesn’t expose multi-window UX to users.
- `supportsMultipleScenes()` returns false on simulator: test on a physical iPad where multi-window is supported.

## Summary

With UIScene enabled, NativeScript gives you:

- Scene-aware events for window lifecycle handling
- APIs to inspect scenes and windows and set scene-specific root views
- Backwards-compatible behavior for apps that haven’t yet adopted scenes

Use the examples above as a starting point to build multi-window workflows on iPadOS and visionOS while keeping your app ready for the future UIScene requirement on iOS.

