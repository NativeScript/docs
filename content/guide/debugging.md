---
title: Debugging
contributors:
  - Ombuweb
  - rigor789
---

There are multiple ways to debug issues in your apps, starting with the simplest form using `console.logs`. For more complex issues, you may need to use an actual debugger, like Chrome DevTools, XCode developer tools and instruments or the Android Studio developer tools.

## Console

The quickest way to inspect state is to log values to the console. NativeScript supports console methods like `log`, `info`, `warn`, `error`, `trace`, `dir`, `time` and `timeEnd`.

The `time(label: string)` method starts a new timer and is very useful to measure how long something took. To stop the timer, call `timeEnd` with the same label, and the execution time will be printed to the console.

```ts
console.log('General message')
console.info('Informational message')
console.warn('Warning')
console.error('Error')

// also prints a stack trace to the current line
console.trace('Trace message')

// prints all members of someVariable
console.dir(someVariable)

// starts a timer
console.time('myLabel')
await someLongTask()
// ends a timer and prints elapsed time
console.timeEnd('myLabel')
```

**Additional Resources:**

- [MDN Console documentation](https://developer.mozilla.org/en-US/docs/Web/API/console)

## Debugging with Chrome DevTools

To start a Chrome debugging session, run your app in debug mode:

```cli
ns debug android|ios
```

The `ns debug` command builds and deploys the app on a connected device or emulator, in case you have multiple devices available you will need to pick one from a list, or pass in the `--device <id>` from `ns devices`.

Once the app starts, a URL is printed to the console

```cli{5-6}
Setting up debugger proxy...
Press Ctrl + C to terminate, or disconnect.

Opened localhost 41000
To start debugging, open the following URL in Chrome:
devtools://devtools/bundled/inspector.html?ws=localhost:41000
```

Visit the printed URL (**devtools://devtools/bundled/inspector.html?ws=localhost:41000**) in Google Chrome to attach to the debugger session.

You can customize the `ns debug` command using any of the following options:

- `--debug-brk` - stops execution at the first JavaScript line until either the debugger frontend connects or a 30 seconds timeout elapses.
- `--start` - attaches the debug tools to an already deployed and running app.
- `--emulator` - specifies that you want to debug the app in an emulator.
- `--timeout` - number of seconds that the NativeScript CLI will wait for the debugger to boot. Default is 90 seconds.
- `--no-watch` - changes in your code will not be livesynced.
- `--clean` - forces rebuilding the native application.

If you are new to JavaScript debugging, we recommend reading the following resources from **Chrome Developers** to get familiar with the basics:

- [Debugging JavaScript](https://developer.chrome.com/docs/devtools/javascript/)

### Supported Chrome DevTools features

| DevTools Feature           | Android                        | iOS                            |
| -------------------------- | ------------------------------ | ------------------------------ |
| Debugger                   | :white_check_mark:             | :white_check_mark:             |
| Console                    | :white_check_mark:             | :white_check_mark:             |
| Resources (source files)   | :white_check_mark:             | :white_check_mark:             |
| Network                    | :white_check_mark:             | :white_check_mark:             |
| Elements (DOM)             | :white_check_mark: (view only) | :white_check_mark: (view only) |
| Elements (Styles)          | :orange_circle: computed only  | :orange_circle: computed only  |
| Memory Profiling           | :white_check_mark:             | :white_check_mark:             |
| Timeline and CPU Profiling | :white_check_mark:             | :white_check_mark:             |

## Debugging with VSCode

VSCode uses the same protocol as the Chrome DevTools, in order to start a debugging session in VSCode you need to install the [NativeScript extension for VS Code](https://marketplace.visualstudio.com/items?itemName=NativeScript.nativescript).

::: warning Note
The VSCode extension for NativeScript is currently outdated and may not work. We are planning on revamping the project and bring it up-to-date with all the latest features soon.
:::

## Debugging with XCode

If you need to debug parts of the native stack instead of the JavaScript part of your app, you can use the XCode debugger as well as all the XCode Instruments to find issues in your app such as memory leaks, hangs, CPU heavy tasks and more.

To start, prepare the iOS app:

```cli
ns prepare ios
```

This compiles your app source, creates the `platforms/ios` folder (if it doesn't exist yet). You can pass any of the flags you would normally pass to `ns run`.

Next, open the `platforms/ios/<project-name>.xcworkspace` in XCode, either through the XCode browse menu, or from the command line:

```cli
open platforms/ios/<project-name>.xcworkspace
```

Select a target device or simulator, and then run the app via the "Play" button. Navigate to the native code in the XCode project, and place breakpoints, when the app hits those it will pause execution and you will be able to step through the native code.

If a crash occurs, the XCode debugger will stop the execution and print a thread dump and a location where the app is crashing. In many cases the stack will point to symbol identifiers like `0x1088f3960` which usually means the source code is not availble for the offending code (could be an external pre-compiled library). If the crash occurs in the NativeScript runtime itself, you can attach the runtime source to be able to see the exact line that is crashing, and also place breakpoints and step throuhg the runtime code with your application. A detailed guide can be found in the [NativeScript iOS Runtime Readme](https://github.com/NativeScript/ns-v8ios-runtime#attaching-the-runtime-to-a-nativescript-app).

Since NativeScript utilises a standard XCode project structure, you can do everything you would typically do with a pure iOS application:

- debug view hiearchy
- memory dumps/graphs
- XCode Instruments: leaks, cpu profiling, hangs and more
- ...and more

**Additional Resources:**

- [Apple XCode: Debugging iOS apps](https://developer.apple.com/documentation/xcode/diagnosing-and-resolving-bugs-in-your-running-app?language=objc)
- [Apple XCode: Setting breakpoints](https://developer.apple.com/documentation/xcode/setting-breakpoints-to-pause-your-running-app?language=objc)
- [Attaching the NativeScript runtime to an app](https://github.com/NativeScript/ns-v8ios-runtime#attaching-the-runtime-to-a-nativescript-app)

## Debugging with Android Studio

If you need to debug parts of the native stack instead of the JavaScript part of your app, you can use Android Studio to find issues in your app.

To start, prepare the Android app:

```cli
ns prepare android
```

This compiles your app source, creates the `platforms/android` folder (if it doesn't exist yet). You can pass any of the flags you would normally pass to `ns run`.

Next, open the `platforms/android` folder in Android Studio, through the Android Studio browse menu.

:::tip Tip
If you [set up the `studio` command line launcher](https://stackoverflow.com/a/48266060/2270725), you can quickly open the NativeScript project from the command line with

```cli
studio platforms/android
```

:::

Since NativeScript follows a standard gradle/android application structure, you can do everything you would typically do with a pure Android application:

- debug view hieararchy
- memory dumps/graphs
- cpu profiling
- ...and more

**Additional Resources:**

- [Android Studio: Layout Inspector](https://developer.android.com/studio/debug/layout-inspector)
- [Android Studio: view Logcat logs](https://developer.android.com/studio/debug/am-logcat)
- [Androud Studio: Debug your app](https://developer.android.com/studio/debug#startdebug)
