---
title: Application
description: Application global state handling
---

The Application module provides abstraction over the platform-specific application implementations. It lets you handle the app's lifecycle events, send Broadcasts on Android or add a Notification observer on IOS, etc.

## Using Application

### Registering a broadcast receiver

The following is an example of how to register a broadcast receiver in Android 

<!-- TODO: add a Preview -->

### Unregistering a broadcast receiver

```ts
androidApp.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
```

### Adding a notification observer

To add an iOS notification observer, use the `addNotificationObserver` method:

```ts
const observer: any = iOSApp.addNotificationObserver(
  UIDeviceOrientationDidChangeNotification, 
  (notification: NSNotification) => {
    //Handle the notification
  }
)
```

### Removing a notification observer

To remove a notification observer, use the ``
```ts
iOSApp.removeNotificationObserver(observer, UIDeviceBatteryStateDidChangeNotification)
```


## Application API

### android

```ts
const androidApp: AndroidApplication = Application.android
```

The property gives you the `AndroidApplication` object, a Nativescript wrapper, around the native android application instance.

---

### nativeApp


```ts
const nativeApp: android.app.Application = androidApp.nativeApp

// or 

const nativeApp: UIApplication = iOSApp.nativeApp
```

This is a native application reference. 

For Android, it is the [android.app.Application](http://developer.android.com/reference/android/app/Application.html) instance keeping track of the global application state. From this object you can get methods such as getFilesDir(), onLowMemory(),etc.


For iOS, it returns the reference to a [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication?language=objc) instance for the application.

---

### foregroundActivity

```ts
const foregroundActivity = androidApp.foregroundActivity
```

Gets the currently active (loaded) [android Activity](http://developer.android.com/reference/android/app/Activity.html). This property is automatically updated upon Activity events.

---

### startActivity

```ts
const startActivity = androidApp.startActivity
```

Gets the main (start) Activity for the application.

---

### paused

```ts
const isSuspended: boolean = androidApp.paused
```

Returns `true` if the main application activity is not running (suspended), otherwise false is returned.

---

### backgrounded

```ts
const isInBackground: boolean = androidApp.backgrounded
```

Returns `true` if the main application activity is in background

---

### registerBroadcastReceiver

```ts
const receiver = androidApp.registerBroadcastReceiver(intentFilter, onReceiveCallback)
```

Registers a [BroadcastReceiver](https://developer.android.com/reference/android/content/BroadcastReceiver)to be run in the main activity thread. The receiver will be called with any broadcast Intent that matches the intent filter.

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
androidApp.on('activityResumed', args => {
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

### ios

```ts
const iOSApp = Application.ios
```

The property gives you the `iOSApplication` object, Nativescript wrapper, the around the native iOS application instance.

---

### rootController

```ts
const rootController: UIViewController = iOSApp.rootController
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
const orientation = androidApp.orientation
// or
const orientation = iOSApp.orientation
```

Gets or sets the orientation of the application. <br>Possible values: `portrait`\| `landscape`\| `unknown`

---

### systemAppearance

```ts
const systemAppearance = androidApp.systemAppearance
// or
const systemAppearance = iOSApp.systemAppearance
```

Returns whether the system appearance is `dark`, `light` or `null`(for iOS <= 11).

---

### NativeScript application events

```ts
Application.on('orientationChanged', (args: ApplicationEventData) => {
  // handle the event
})
```

:::details More events

- `livesync`
- `cssChanged`
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

:::details References

## API References

| Name                                                                                              | Type     |
| ------------------------------------------------------------------------------------------------- | -------- |
| [@nativescript/core/application](https://docs.nativescript.org/api-reference/modules#application) | `Module` |

## Native Component

| Android                                                                                    | iOS                                                                                          |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| [android.app.Application](https://developer.android.com/reference/android/app/Application) | [UIApplication](https://developer.apple.com/documentation/uikit/uiapplication?language=objc) |

:::