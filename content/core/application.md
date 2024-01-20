---
title: Application
description: Handling application global state
---

The Application class provides the wrapper around [android.app.Application](https://developer.android.com/reference/android/app/Application) for Android and [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication?language=objc) for iOS. With this class you handle the app's lifecycle events, send Broadcasts on Android or add a Notification observer on IOS, etc.

## Use Application class

### Register a broadcast receiver

To register a broadcast receiver, you follow these 3 steps:

1. Import the `Application` class from `@nativescript/core`.

   ```ts
   import { Application, isAndroid } from '@nativescript/core'
   ```

2. Get the wrapper object for [android.app.Application](https://developer.android.com/reference/android/app/Application) instance.
   Use the `android` property to get the wrapper around [android.app.Application](https://developer.android.com/reference/android/app/Application).

   ```ts
   const androidApp: AndroidApplication = Application.android
   ```

3. Call the [registerBroadcastReceiver](#registerbroadcastreceiver) method.
   Call the `registerBroadcastReceiver` method on `androidApp`.

   ```ts
   androidApp.registerBroadcastReceiver()
   ```

For a complete example that shows how to register a broadcast receiver with a custom intent filter, visit the following link:

<!-- Preview: https://stackblitz.com/edit/nativescript-stackblitz-templates-khnhes?file=app/app.ts -->

For system intent filters, see [Standard Broadcast Actions](https://developer.android.com/reference/android/content/Intent#standard-broadcast-actions).

### Unregister a broadcast receiver

To unregister a broadcast receiver, call the [unregisterBroadcastReceiver](#unregisterbroadcastreceiver) on the wrapper around an [android.app.Application](https://developer.android.com/reference/android/app/Application) passing it the intent filter for which to unregister the broacast receiver. The example below unregisters a broadcast receiver for the `android.content.Intent.ACTION_BATTERY_CHANGED` intent filter.

```ts
import { Application, isAndroid } from '@nativescript/core'
if (isAndroid) {
  const androidApp: AndroidApplication = Application.android

  androidApp.unregisterBroadcastReceiver(
    android.content.Intent.ACTION_BATTERY_CHANGED
  )
}
```

### Add a notification observer

To add an iOS notification observer, follow the steps below:

1. Import the `Application` class from `@nativescript/core`.

   ```ts
   import { Application, isIOS } from '@nativescript/core'
   ```

2. Get the wrapper object for [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication?language=objc) instance.

   ```ts
   const iOSApp: iOSApplication = Application.ios
   ```

3. Call the `addNotificationObserver` method.
   Call the `addNotificationObserver` passing it the name of the notification([NSNotificationName](https://developer.apple.com/documentation/foundation/nsnotificationname)) you would like to observe as the first parameter and as a second parameter, a callback function to be called when that notification occurs.

   ```ts
   const observer: any = iOSApp.addNotificationObserver(
     UIDeviceOrientationDidChangeNotification,
     (notification: NSNotification) => {
       //Handle the notification
     }
   )
   ```

Find the complete example [here](https://stackblitz.com/edit/nativescript-stackblitz-templates-khnhes?file=app%2Fapp.ts%3AL14)

### Remove a notification observer

To remove a notification observer, use the `removeNotificationObserver` method on a `Application.ios` reference the observer id, returned by the `addNotificationObserver` as the first argument and the name of the notification to stop observing.

```ts
iOSApp.removeNotificationObserver(
  observer,
  UIDeviceBatteryStateDidChangeNotification
)
```

## Cross platform application events

This class allows you to listen to the following lifecycle events on both platforms.

```ts
Application.on('orientationChanged', (args: ApplicationEventData) => {
  // handle the event
})
```

:::details More events

- `livesync`
- `cssChanged`
- `initRootView`
- `launch`
- `displayed`
- `suspend`
- `resume`
- `exit`
- `lowMemory`
- `uncaughtError`
- `discardedError`
- `orientationChanged`
- `systemAppearanceChanged`
- `fontScaleChanged`

:::

## getResources()

```ts
resources: any = Application.getResources()
```

Gets application-level static resources.

---

## setResources()

```ts
Application.setResources(resources)
```

Sets application-level static resources.

---

## setCssFileName()

```ts
Application.setCssFileName(filePath)
```

Sets css file name for the application.

---

## getCssFileName()

```ts
cssFileName: string = Application.getCssFileName()
```

Gets css file name for the application.

---

## loadAppCss()

```ts
loadedCss: any = Applicatioin.loadAppCss()
```

Loads immediately the app.css. By default the app.css file is loaded shortly after "loaded". For the Android snapshot the CSS can be parsed during the snapshot generation, as the CSS does not depend on runtime APIs, and loadAppCss will be called explicitly.

---

## addCss()

```ts
Application.addCss(cssText, attributeScoped)
```

Adds new values to the application styles.

- `cssText` - A valid CSS styles to be add to the current application styles.
- _Optional_: `attributeScoped` - sets whether the styles are attribute scoped. Adding attribute scoped styles does not perform a full application styling refresh.

---

## Android Reference

### android

```ts
androidApp: AndroidApplication = Application.android
```

The property gives you the `AndroidApplication` object, a Nativescript wrapper, around the native android application instance.

---

### nativeApp

```ts
nativeApp: android.app.Application = androidApp.nativeApp
// or
nativeApp: UIApplication = iOSApp.nativeApp
```

This is a native application reference.

For Android, it is the [android.app.Application](http://developer.android.com/reference/android/app/Application.html) instance keeping track of the global application state. From this object you can get methods such as getFilesDir(), onLowMemory(),etc.

For iOS, it returns the reference to a [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication?language=objc) instance for the application.

---

### foregroundActivity

```ts
foregroundActivity = androidApp.foregroundActivity
```

Gets the currently visible(topmost) [android Activity](http://developer.android.com/reference/android/app/Activity.html).

---

### startActivity

```ts
startActivity = androidApp.startActivity
```

Gets the main (start) Activity for the application.

---

### paused

```ts
isSuspended: boolean = androidApp.paused
```

Returns `true` if the main application activity is not running (suspended), otherwise false is returned.

---

### backgrounded

```ts
isInBackground: boolean = androidApp.backgrounded
```

Returns `true` if the main application activity is in background

---

### registerBroadcastReceiver

```ts
receiver = androidApp.registerBroadcastReceiver(intentFilter, onReceiveCallback)
```

Registers a [BroadcastReceiver](https://developer.android.com/reference/android/content/BroadcastReceiver) to be run in the main activity thread. The receiver will be called with any broadcast Intent that matches the intent filter.

`onReceiveCallback`: a callback function that will be called each time a broadcast is received.

---

### getRegisteredBroadcastReceiver

```ts
androidApp.getRegisteredBroadcastReceiver(intentFilter)
```

Gets a registered BroadcastReceiver for the specified intent filter.

---

### unregisterBroadcastReceiver

```ts
androidApp.unregisterBroadcastReceiver(intentFilter)
```

Unregisters a previously registered BroadcastReceiver for the specified intent filter.

---

### Android Activity lifecycles events

To handle the application lifecycle events for Android, use `on` method of the

```ts
androidApp.on('activityResumed', (args) => {
  //handle the event here
})
```

:::details More Android Activity lifecycles events

- `activityCreated`
- `activityDestroyed`
- `activityStarted`
- `activityPaused`
- `activityStopped`
- `saveActivityState`
- `activityResult`
- `activityBackPressed`
- `activityNewIntent`
- `activityRequestPermissions`

:::

---

## iOS Reference

### ios

```ts
iOSApp = Application.ios
```

The property gives you the `iOSApplication` object, Nativescript wrapper, the around the native iOS application instance.

---

### rootController

```ts
rootController: UIViewController = iOSApp.rootController
```

The root view controller for the iOS application.

---

### window

This property gives the key [window](https://developer.apple.com/documentation/uikit/uiwindow), the container for your app views and one of its roles is to deliver touch events to the views. Views are the user interface items such as button, label or scrollview.

---

### delegate(iOS lifecycles events)

```js
const MyDelegate = (function (_super) {
  __extends(MyDelegate, _super)
  function MyDelegate() {
    _super.apply(this, arguments)
  }
  MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (
    application,
    launchOptions
  ) {
    console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)
    return true
  }
  MyDelegate.prototype.applicationDidBecomeActive = function (application) {
    console.log('applicationDidBecomeActive: ' + application)
  }
  MyDelegate.ObjCProtocols = [UIApplicationDelegate]
  return MyDelegate
})(UIResponder)

Application.ios.delegate = MyDelegate
```

```ts
@NativeClass()
class MyDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate]

  applicationDidFinishLaunchingWithOptions(
    application: UIApplication,
    launchOptions: NSDictionary<string, any>
  ): boolean {
    console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)

    return true
  }

  applicationDidBecomeActive(application: UIApplication): void {
    console.log('applicationDidBecomeActive: ' + application)
  }
}
Application.ios.delegate = MyDelegate
```

The iOS system monitors the different states of your application and emits an event at each state. To handle these lifecycle events, you have to write a class that extends UIResponder and implements `UIApplicationDelegate` classes and set the delegate property to that class. You then overwrite the methods from `UIApplicationDelegate` to handle the events.

For a complete list of the iOS lifecycle events, visit [UIApplicationDelegate](https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc).

---

### orientation

```ts
orientation = androidApp.orientation
// or
orientation = iOSApp.orientation
```

Gets or sets the orientation of the application. <br>Possible values: `portrait`\| `landscape`\| `unknown`

---

### systemAppearance

```ts
systemAppearance = androidApp.systemAppearance
// or
systemAppearance = iOSApp.systemAppearance
```

Returns whether the system appearance is `dark`, `light` or `null`(for iOS <= 11).

---

:::details References

## API References

| Name                                                                             | Type     |
| -------------------------------------------------------------------------------- | -------- |
| [@nativescript/core/application](https://docs.nativescript.org/api/#application) | `Module` |

## Native Component

| Android                                                                                    | iOS                                                                                          |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| [android.app.Application](https://developer.android.com/reference/android/app/Application) | [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication?language=objc) |

:::
