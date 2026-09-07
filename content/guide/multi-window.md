---
title: Multiple Windows
description: Develop with multiple windows on iOS and Android.
contributors:
  - NathanWalker
  - edusperoni
---

NativeScript 9.1 introduces `NativeWindow`, a cross-platform window API. A single JavaScript context can drive several windows: UIScene-backed windows on iOS (iPadOS Split View and Stage Manager, visionOS) and activity-backed windows on Android (split screen, desktop windowing, foldables).

:::tip Why this matters
Apple is moving all iOS apps to the UIScene lifecycle, and iOS 27 makes it mandatory - every app must declare a scene manifest, [even a single-window one](#single-window-apps-and-the-ios-27-requirement). Adopting scenes now makes your app future-proof and unlocks multiple windows on iPadOS and visionOS.
:::

## Concepts

There are two objects to keep apart:

- **Application** - the process and the JavaScript context. There is exactly one, no matter how many windows are open. It is the browser.
- **NativeWindow** - one OS window: a `UIWindowScene` plus its `UIWindow` on iOS, an `Activity` on Android. It is a tab.

Every app registers at least one window - the **primary** window - including apps that never open a second one. Each window carries:

| Property    | Description                                                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | Stable identifier for the lifetime of the JavaScript context. It survives a detach and re-attach, so it correlates a window across an iOS scene reconnect or an Android activity recreation. |
| `role`      | `application`, `embedded`, `carplay` or `externalDisplay`.                                                                                                                                   |
| `state`     | `attached` (connected to a live native surface), `detached` (the surface went away but the window can be reconnected) or `closed`.                                                           |
| `isPrimary` | At most one window is primary at a time. When the primary window closes, another attached window is promoted.                                                                                |
| `rootView`  | The view tree this window hosts.                                                                                                                                                             |

:::tip Two ways to structure a multi-window app
Windows share one JavaScript context, so you decide how much else they share. Either treat every window as a fully separate app - bootstrap it with its own services and state - or bootstrap once and give each window another view tree over shared state, closer to modal navigation.
:::

## Supported platforms

- **iPadOS 13+** - Split View, Slide Over and Stage Manager show windows side by side.
- **visionOS** - multiple windows.
- **iPhone** - runs the UIScene lifecycle, but the system exposes a single window.
- **Android** - `Application.openWindow()` is experimental. Each window is an activity in its own task: on a phone the new window covers the current one and both appear in recents, while split screen, desktop windowing or a foldable shows them side by side.

The per-window APIs and events on this page work everywhere, including single-window apps.

## Enabling multiple windows

### iOS: add the scene manifest

NativeScript switches to the UIScene lifecycle when a scene manifest is present in `App_Resources/iOS/Info.plist`:

```xml
<key>UIApplicationSceneManifest</key>
<dict>
  <key>UIApplicationPreferredDefaultSceneSessionRole</key>
  <string>UIWindowSceneSessionRoleApplication</string>
  <key>UIApplicationSupportsMultipleScenes</key>
  <true/>
</dict>
```

That is the whole manifest. NativeScript installs its scene configuration on your application delegate at runtime, so `UISceneConfigurations` and `UISceneDelegateClassName` no longer have to be declared - apps that still declare them pointing at `SceneDelegate` keep working.

Without the manifest the app runs the pre-scene `UIApplication` lifecycle with a single window, and everything below except opening a second window still applies.

#### Single-window apps and the iOS 27 requirement

iOS 27 makes the UIScene lifecycle mandatory: every app must declare a scene manifest in `App_Resources/iOS/Info.plist`, whether or not it ever opens a second window. If your app stays single-window, declare the same manifest with `UIApplicationSupportsMultipleScenes` set to `false`:

```xml
<key>UIApplicationSceneManifest</key>
<dict>
  <key>UIApplicationPreferredDefaultSceneSessionRole</key>
  <string>UIWindowSceneSessionRoleApplication</string>
  <key>UIApplicationSupportsMultipleScenes</key>
  <false/> <!-- false here for single scene only -->
</dict>
```

The only difference from the multi-window manifest is that one boolean - flip it to `true` whenever you are ready to support multiple windows.

:::tip iPhone and UIScene
Even on iPhone, adding the manifest switches your app to the UIScene lifecycle. Xcode may warn that "UIScene lifecycle will soon be required" - the manifest addresses that.
:::

### Android: allow a second activity instance

`Application.openWindow()` launches your start activity into its own task, so its `launchMode` has to allow a second instance. The app template ships with:

```xml
<activity
	android:name="com.tns.NativeScriptActivity"
	android:launchMode="singleInstancePerTask"
	android:exported="true">
```

`singleTask` (the template default before 9.1) and `singleInstance` hand the launch intent to the existing activity's `onNewIntent` instead of creating a window. `singleInstancePerTask` (API 31+) keeps single-task behavior for launcher and deep-link starts while allowing extra windows; `standard` works too.

:::warning Experimental on Android
`Application.openWindow()` is experimental on Android. Behavior around OEM recents, task management and window restoration after process death still varies by device.
:::

## Providing content for a window

Before 9.1, the first window's UI came from the `launch` event or the application main entry, and a second window had no way to get different content. Those two jobs are now separate:

- **`ready`** fires once per JavaScript context, as soon as the context is initialized. It is never deferred, so it also fires on a background launch that opens no window. Do app-level initialization here.
- **`Application.setWindowContentResolver()`** supplies the UI for each window that needs content.

```ts
import { Application } from '@nativescript/core'
import type { WindowContentRequest } from '@nativescript/core'

Application.on('ready', () => {
  // app-wide initialization - no window exists yet
})

Application.setWindowContentResolver((request: WindowContentRequest) => {
  // Hand the primary window - and anything the system restored on its own -
  // back to the application main entry.
  if (request.isPrimary) {
    return undefined
  }

  switch (request.data?.kind) {
    case 'inspector':
      return 'pages/inspector-page'
    default:
      return createDetailPage(request.window)
  }
})

Application.run({ moduleName: 'app-root' })
```

The resolver receives a `WindowContentRequest`:

| Property                                       | Description                                                                                        |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `window`                                       | The `NativeWindow` that needs content.                                                             |
| `isPrimary`                                    | Whether this is the application's primary window.                                                  |
| `data`                                         | The payload passed to `openWindow()` - `NSUserActivity.userInfo` on iOS, intent extras on Android. |
| `ios.connectionOptions`                        | The scene's `UISceneConnectionOptions`.                                                            |
| `android.intent`, `android.savedInstanceState` | The launch intent and saved state for the activity.                                                |

What you return decides what happens next:

| Return value                         | Result                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------- |
| A `View`                             | Becomes the window content.                                            |
| A `NavigationEntry` or a module name | Built, then used as the window content.                                |
| `null`                               | You take ownership - set the content later with `window.setContent()`. |
| `undefined`                          | Falls back to the application main entry.                              |

Keep the resolver installed for the life of the process: a window that detaches and re-attaches (scene reconnect, activity recreation) asks for its content again, long after the code that installed the resolver may have moved on.

Content can also be set at any time, from anywhere:

```ts
const window = Application.getWindowById(id)
window.setContent(new DetailPage())
```

`setContent()` replaces any content set earlier, tears the previous root view down and raises `contentLoaded`. A view that is already the root of another window is released from that window first - the view itself is left intact.

### Startup order

Bringing a window up follows a fixed order you can rely on:

`ready` → `windowOpen` → the raw platform event (`sceneWillConnect` / `activityCreated`) → content resolution → `contentLoaded` → `activate` and `displayed`.

## Opening and closing windows

```ts
import { Application } from '@nativescript/core'

Application.openWindow({ data: { kind: 'inspector' } })
```

The `data` payload travels to the new window and arrives as `request.data` in the content resolver - serialized into `NSUserActivity.userInfo` on iOS, added as intent extras on Android.

Multi-window is a device capability rather than a platform one: an iPhone and an iPad run the same iOS build, but only one of them can show two scenes. Check before offering the option:

```ts
import { Application, isIOS } from '@nativescript/core'

const canOpenWindows = isIOS
  ? Application.ios.supportsScenes() && Application.ios.supportsMultipleScenes()
  : true
```

Close a window through the window itself:

```ts
window.close()
```

The primary window refuses to close. A window that does close raises `close` exactly once, is dropped from the registry, and then has every listener on it cleared - so handlers registered on a window never outlive it, and a closed window instance must not be reused.

## Working with windows

| API                                | Description                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Application.primaryWindow`        | The primary window.                                                                                                                               |
| `Application.activeWindow`         | The window the user is interacting with - the one that activated most recently and is still attached. Falls back to the primary window.           |
| `Application.getWindows(role?)`    | Windows filtered by role, defaulting to the view-carrying roles `application` and `embedded`. Pass `'all'` to enumerate every registered surface. |
| `Application.getWindowById(id)`    | A registered window by id.                                                                                                                        |
| `Application.openWindow(options?)` | Opens a new window.                                                                                                                               |

To go from a view to the window hosting it, use `getNativeWindow()`. It walks up to the root view - through the presenting view of any modal on the way - so a view re-parented into another window reports the window it moved to:

```ts
import { Frame } from '@nativescript/core'
import type { EventData, View } from '@nativescript/core'

export function onTap(args: EventData) {
  const view = args.object as View

  // Navigate the frame of the window this button lives in, not the app's topmost frame.
  Frame.topmost(view.getNativeWindow()).navigate('pages/details')
}
```

`Frame.topmost()` takes an optional window and defaults to `Application.activeWindow`.

## Window lifecycle events

Subscribe on a `NativeWindow` for events scoped to that one window. The `NativeWindowEvents` constants carry the names:

| Event                       | Raised when                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `attached`                  | A native surface is bound to the window - on the first connect and on every re-attach.                                 |
| `detached`                  | The native surface goes away while the window session stays alive (iOS scene disconnect, Android activity recreation). |
| `activate` / `deactivate`   | The window gains or loses focus.                                                                                       |
| `background` / `foreground` | The window enters the background or comes back to the foreground.                                                      |
| `contentLoaded`             | The root view content is set or changed.                                                                               |
| `displayed`                 | The window content has been displayed for the first time.                                                              |
| `close`                     | The window session ends for good. Fires exactly once.                                                                  |
| `orientationChanged`        | This window's orientation changes.                                                                                     |
| `systemAppearanceChanged`   | This window switches between light and dark.                                                                           |
| `layoutDirectionChanged`    | This window switches between `ltr` and `rtl`.                                                                          |

```ts
import { Application, NativeWindowEvents } from '@nativescript/core'

const window = Application.activeWindow

window.on(NativeWindowEvents.orientationChanged, (args) => {
  console.log(`${args.window.id} is now ${args.newValue}`)
})

// No unsubscribe needed - the framework drops every listener on a window
// right after its `close` event.
```

:::warning detached is not closed
A scene disconnect or an activity recreation raises `detached`, not `close`. The window stays registered, keeps its id and keeps its listeners, and the same instance is handed back when a surface re-attaches. Only tear down per-window state on `close`.
:::

`displayed` currently fires for the primary window only.

## Application-level window events

The `WindowEvents` constants cover the registry as a whole:

```ts
import { Application, WindowEvents } from '@nativescript/core'

Application.on(WindowEvents.windowOpen, (args) => {
  console.log(`opened ${args.window.id}`)
})
Application.on(WindowEvents.windowClose, (args) => {
  console.log(`closed ${args.window.id}`)
})
Application.on(WindowEvents.primaryWindowChanged, (args) => {
  console.log(`${args.window.id} is now primary`)
})
```

Two application events changed meaning when more than one window is involved:

- **`suspend` / `resume`** reflect whole-app state - they are raised once the app itself leaves or returns to the foreground, not when an individual window backgrounds. Use a window's `background` and `foreground` events to track one window.
- **`exit`** is raised on Android when the _last_ window finishes (the process may stay alive); on iOS it still means process termination.

## Per-window orientation, appearance and direction

Two windows can legitimately disagree about all three, so each window reports its own:

```ts
window.orientation() // 'portrait' | 'landscape' | 'unknown'
window.systemAppearance() // 'light' | 'dark' | null
window.layoutDirection() // 'ltr' | 'rtl' | null
```

Values are read from the native surface while the window is attached; a detached window reports the last value it saw. A read that catches a change the platform has not reported yet also raises the matching `*Changed` event, so a change is never swallowed.

The CSS classes follow the same rule. `ns-portrait` / `ns-landscape`, `ns-light` / `ns-dark` and `ns-ltr` / `ns-rtl` are applied to each window's root view and to the modals presented over it, instead of living in the process-wide system class list. `CSSUtils.getRootViewCssClasses()` no longer returns them.

## Reaching the native window

```ts
const uiWindow = window.ios?.uiWindow // UIWindow
const scene = window.ios?.scene // UIWindowScene, absent on the pre-scene lifecycle
const activity = window.android?.activity // AppCompatActivity
```

The platform bridges on `Application` are aggregate APIs: they fire for every window, and `args.window` identifies which one.

```ts
Application.ios.on('sceneWillConnect', (args) => {
  // args.window is the NativeWindow, args.scene the UIWindowScene,
  // args.uiWindow the native UIWindow
})

Application.android.on('activityResult', (args) => {
  // args.window is the NativeWindow the activity belongs to
})
```

Every one of these events is also available on a single `NativeWindow`, which is usually what you want in a multi-window app:

```ts
window.on('activityResult', (args) => {
  /* only this window's results */
})
```

## Advanced: other scene roles on iOS

NativeScript auto-manages scenes with the `UIWindowSceneSessionRoleApplication` role. To handle another role - CarPlay, an external display - return a configuration from `Application.ios.onSceneConfiguration`:

```ts
Application.ios.onSceneConfiguration = (app, session, options) => {
  if (session.role === CPTemplateApplicationSceneSessionRoleApplication) {
    const config = UISceneConfiguration.configurationWithNameSessionRole(
      'CarPlay',
      session.role,
    )
    config.delegateClass = MyCarPlaySceneDelegate
    return config
  }

  // Let NativeScript handle everything else.
  return null
}
```

If your own application delegate implements `applicationConfigurationForConnectingSceneSessionOptions` or `applicationDidDiscardSceneSessions`, NativeScript will not install its defaults over yours - forward to them so window bookkeeping stays correct:

```ts
applicationConfigurationForConnectingSceneSessionOptions(app, session, options) {
  if (session.role === myCustomRole) {
    return myConfig
  }
  return Application.ios.defaultSceneConfiguration(app, session, options)
}
```

## Migrating from NativeScript 9.0

Existing single-window apps keep working without changes. If you used the 9.0 scene APIs, the pattern of listening for `sceneContentSetup` and calling `Application.ios.setWindowRootView()` is replaced by the content resolver and `window.setContent()`, which work the same way on both platforms.

| 9.0                                                                                       | 9.1                                                                                                                              |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `NativeWindow.iosWindow`, and its `window` property                                       | `window.ios?.uiWindow` and `window.ios?.scene`                                                                                   |
| `NativeWindow.androidWindow`                                                              | `window.android?.activity`                                                                                                       |
| `SceneEventData.window` was the native `UIWindow`                                         | `window` is now the `NativeWindow`; the native window moved to `uiWindow`. A `window` payload key always means a `NativeWindow`. |
| `getWindows()` returned every surface                                                     | Role-filtered, defaulting to `application` + `embedded`. Use `getWindows('all')` for every registered surface.                   |
| Android `exit` fired for any finishing activity                                           | Fires only when the last window finishes. iOS `exit` is unchanged.                                                               |
| `suspend` / `resume` tracked the single window                                            | Reflect whole-app state. Use a window's `background` / `foreground` for one window.                                              |
| Scene disconnect and activity recreation destroyed the window                             | They raise `detached`; the window stays registered and its listeners survive.                                                    |
| Listeners on a window outlived it                                                         | A window clears its listeners after `close`. Do not reuse a closed window instance.                                              |
| `CSSUtils.getRootViewCssClasses()` included orientation, appearance and direction classes | These are per-window; read them from the window.                                                                                 |

Deprecated but still working:

| Deprecated                                                                                          | Use instead                                                         |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| The `launch` event                                                                                  | `ready` plus `Application.setWindowContentResolver()`               |
| `SceneEvents.sceneContentSetup`                                                                     | The `windowOpen` event and `window.setContent()`                    |
| `SceneEvents`                                                                                       | `NativeWindowEvents`                                                |
| `Application.ios.shouldDelayLaunchEvent`                                                            | Now a no-op                                                         |
| `Application.orientation()`, `systemAppearance()`, `layoutDirection()`                              | The equivalent method on a window; they delegate to `primaryWindow` |
| `getAllWindows()`, `getAllScenes()`, `getWindowScenes()`, `getPrimaryWindow()`, `getPrimaryScene()` | `Application.getWindows()`, `Application.primaryWindow`             |

The `activity*` and `scene*` bridges on `Application` are **not** deprecated - they are permanent aggregate APIs that fire for every window.

## Troubleshooting

- **"UIScene lifecycle will soon be required" in Xcode** - add the scene manifest to `Info.plist`. iOS 27 makes this mandatory for every app; a single-window app declares it with [`UIApplicationSupportsMultipleScenes` set to `false`](#single-window-apps-and-the-ios-27-requirement).
- **`supportsMultipleScenes()` returns false** - the device allows a single scene at a time. Either it is an iPhone, or `UIApplicationSupportsMultipleScenes` is missing from `Info.plist`. Test on an iPad.
- **`openWindow()` on Android brings the existing window forward instead of opening one** - the start activity's `launchMode` is `singleTask` or `singleInstance`. Switch to `singleInstancePerTask` or `standard`.
- **A second window shows the main entry instead of your UI** - the content resolver returned `undefined`, or the payload you branched on did not arrive. Log `request.data` to check what the platform carried across.
- **`exit` never fires on Android** - a detached window that never re-attaches keeps the registry non-empty and suppresses `exit`. Suppression is intentional for the ordinary recreation case, and there is no clean way to tell a window that is gone for good from one that is about to re-attach.
