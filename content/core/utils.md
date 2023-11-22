---
title: Utils
---

Utils provides convenient utilities covering a broad range of common helpers used in projects from light JavaScript utilities to iOS and Android specific properties and methods.

## Using Utils

### Validating a path for a resource or a local file

To verify if a path is valid resource or local file path, use the [isFileOrResourcePath()](#isfileorresourcepath) method:

```ts
const isPathValid: boolean = Utils.isFileOrResourcePath(
  'https://nativescript.org/'
) //  false

// or

const isPathValid: boolean = Utils.isFileOrResourcePath('res://icon') // true
```

### Check if a URI is a data URI

To check if a specific [URI](https://en.wikipedia.org/wiki/Data_URI_scheme) is a valid data URI, use the [isDataURI()](#isdatauri) method.

```ts
const isDataURI: boolean = Utils.isDataURI(`data:image/png;base64,iVBORw0KGgoAAA
   ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
   //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
   5ErkJggg==`) // true

// or
const isDataURI: boolean = Utils.isDataURI(`base64,iVBORw0KGgoAAA
   ANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
   //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU
   5ErkJggg==`) // false
```

### Opening a url

The [openUrl()](#openurl) method allows you to open a url and returns `true` if a browser tab with the specified url opened successfully or `false` otherwise.

```ts
const didUrlOpen: boolean = Utils.openUrl('https://nativescript.org/')
```

### Escaping regex symbols

To escape regex metacharacters in string, use the [escapeRegexSymbols()](#escaperegexsymbols) method.

```ts
const escapedString: string = Utils.escapeRegexSymbols('$hello') // \$hello
```

### Check if the application is running on a physical device

```ts
const isOnPhysicalDevice: boolean = Utils.isRealDevice()
```

### Checking if a value is a number

To check if a value is a number, use the [isNumber()](#isnumber) method.

```ts
const isANumber: boolean = Utils.isNumber(2) // true
const isNumber: boolean = Utils.isNumber('test') // false
const isNumber: boolean = Utils.isNumber(true) // false
```

### Get a class hierarchy of an object

To list all the classes an object is an instance of, use the [getBaseClasses()](#getbaseclasses) method:

```ts
const labelHierarchy: Array<string> = Utils.getBaseClasses(new Label())
/* [
  Label,
  TextBase,
  TextBaseCommon,
  View,
  ViewCommon,
  ViewBase,
  Observable,
  Object,
] */
```

### Hiding a keyboard

To hide a soft keyboard on the screen, use the [dismissKeyboard()](#dismisskeyboard) method.

```ts
Utils.dismissKeyboard()
```

## Utils API

### MajorVersion

```ts
const majorVersion: number = Utils.ios
```

(`iOS only`) Gets the iOS device major version. For example, for `16.0` ,it returns `16`.

---

### isFileOrResourcePath()

```ts
const isFileOrResourcePath: boolean = Utils.isFileOrResourcePath(path)
```

Returns `true` if the specified path points to a resource or local file.

---

### isDataURI()

```ts
const isDataURI: boolean = Utils.isDataURI(uri)
```

---

### openUrl()

```ts
const isUrlOpened: boolean = Utils.openUrl(url)
```

Opens the passed url using the default application.

---

### escapeRegexSymbols()

```ts
const escapedString: string = Utils.escapeRegexSymbols(string)
```

Escapes special regex characters (`.`, `*`, `^`, `$` and so on) in a string and returns a valid regex.

---

### convertString()

```ts
const toStr: number | boolean = Utils.convertString(value)
```

Converts a string value to a number or boolean. If it can not convert, it returns the passed string.

---

### GC()

```ts
Utils.GC()
```

A utility function that invokes garbage collection on the JavaScript side.

---

### queueMacrotask()

```ts
Utils.queueMacrotask(task: () => void)
```

Queues the passed function to be ran as a macroTask.

---

### queueGC()

```ts
Utils.queueGC(delay, useThrottle)
```

- _Optional_: `delay` time, in milliseconds, to wait before garbage collection starts.
- _Optional_: `useThrottle` If set to `true` throttling is used instead of default debounce strategy.

A utility function that queues a garbage collection. Multiple calls in quick succession are debounced by default and only one gc will be executed after 900ms.

---

### debounce()

```ts
const debouncedFn = Utils.debounce(fn, delay)

debouncedFn()
```

A simple debounce utility.

- `fn` The function to debounce.
- _Optional_:`delay` delays the bouncing, in milliseconds. Defaults to 300ms.

---

### throttle()

```ts
const throttledFn = Utils.throttle(fn, delay)

throttledFn()
```

A simple throttle utility.

- `fn` The function to throttle.
- _Optional_:`delay` delays the throttling, in milliseconds. Defaults to 300ms.

---

### isFontIconURI()

```ts
const isFontIconURI: boolean = Utils.isFontIconURI('font://&#xf51e;')
```

Returns true if the specified URI is a font icon URI.

---

### executeOnMainThread()

```ts
Utils.executeOnMainThread(fn: Function)

```

Checks if the current thread is the main thread. If it is, calls the passed function. Otherwise, it dispatches it to the main thread.

:::warning Important!

This will be made synchronously when invoked from the main thread, or asynchronously if it's not.

:::

---

### executeOnUIThread()

```ts
Utils.executeOnUIThread(fn: Function)
```

Runs the passed function on the UI Thread.

:::warning Important!

Always dispatches asynchronously to the UI thread.

:::

---

### mainThreadify()

```ts
Utils.mainThreadify(fn: Function): (...args: any[])
```

Returns a function wrapper which executes the supplied function on the main thread. The wrapper behaves like the original function and passes all of its arguments BUT discards its return value.

---

### isMainThread()

```ts
const isMainThread: boolean = Utils.isMainThread()
```

Boolean value indicating whether the current thread is the main thread.

---

### dispatchToMainThread()

```ts
Utils.dispatchToMainThread(fn: Function)
```

Dispatches the passed function for execution on the main thread.

---

### releaseNativeObject()

```ts
Utils.releaseNativeObject(object: java.lang.Object | NSObject)
```

Releases the reference to the wrapped native object.

---

### getModuleName()

```ts
const moduleName: string = Utils.getModuleName(path: string)
```

Gets module name from the specified path.

---

### openFile()

```ts
const didFileOpen: boolean = Utils.openFile(filePath, title)
```

Opens the file at the specified `filePath`.
_Optional_: (`Android-only`) `title` is the title of the file viewer.

---

### isRealDevice()

```ts
const isOnPhysicalDevice: boolean = Utils.isRealDevice()
```

Checks whether the application is running on a physical device and not on a simulator/emulator.

---

### getClass()

```ts
const objectClass: string = Utils.getClass(object)
```

Gets the class name of an object.

---

### getBaseClasses()

```ts
const objectParentClasses: Array<string> = Utils.getBaseClasses(object)
```

Returns an entire class inheritance hierarchy for the specified object.

---

### getClassInfo()

```ts
const objectClassInfo: ClassInfo = Utils.getClassInfo(object)
```

Gets the `ClassInfo` for an object. `ClassInfo` object has the following properties:

- `_name`: The name of the class of the object.

---

### isBoolean()

```ts
const isValueBoolean: boolean = Utils.isBoolean(someValue)
```

Checks if the specified value is a valid boolean.

---

### isDefined()

```ts
const isValueDefined: boolean = Utils.isDefined(someValue)
```

Checks if the specified value is not `undefined`.

---

### isUndefined()

```ts
const isUndefined: boolean = Utils.isUndefined(someValue)
```

Checks if a value is `undefined`.

---

### isNullOrUndefined()

```ts
const isNullOrUndefined: boolean = Utils.isNullOrUndefined(someValue)
```

Checks if a value is `null` or `undefined`.

---

### isFunction()

```ts
const isValueAFunction: boolean = Utils.isFunction(someValue)
```

Checks if a value is a function.

---

### isNumber()

```ts
const isNumber: boolean = Utils.isNumber(someValue)
```

Checks if a value is a valid number.

---

### isObject()

```ts
const isObject: boolean = Utils.isObject(someValue)
```

Returns true if a value is an object or array.

---

### isString()

```ts
const isString = (boolean = Utils.isString(someValue))
```

Checks if a value is a string.

---

### toUIString()

```ts
const stringified: string = Utils.toUIString(object)
```

Returns a string representation of an object to be shown in UI.

---

### dataSerialize()

```ts
const serializedData = Utils.dataSerialize(data, wrapPrimitives)
```

Data serialization from JS > Native.

- _Optional_: `data` is the JavaScript data to serialize.
- _Optional_: `wrapPrimitives` is a `boolean` parameter indicating whether to wrap primitive data types.

---

### dataDeserialize()

```ts
const dataDeserialized = Utils.dataDeserialize(nativeData)
```

Data deserialization from Native to JS.

- _Optional_ `nativeData` data to be deserialized.

---

### setInterval()

```ts
const timerID: number = Utils.setInterval((args) => {}, milliseconds, [
  arg1,
  arg2,
])
```

A timer method that allows you to run `callback` every `milliseconds`(milliseconds). It returns an id that is used to [stop](#clearinterval) the timer.

---

### clearInterval()

```ts
Utils.clearInterval(timerID)
```

Stops the interval timer of the provided id.

---

### setTimeout()

```ts
const timerId: number = Utils.setTimeout((args) => {}, milliseconds, [
  arg1,
  arg2,
])
```

A timer method that allows you to wait `milliseconds`(milliseconds) before running the `callback`. It returns an id to be used to [stop](#clearinterval) the timer.

---

### dismissKeyboard()

```ts
Utils.dismissKeyboard()
```

Hides any keyboard on the screen.

---

### getApplication()

```ts
const app: android.app.Application = Utils.android.getApplication()
```

(`Android-only`)Gets the native Android application instance. Also see [native app](/core/application#nativeapp).

---

### getApplicationContext()

```ts
Utils.android.getApplicationContext()
```

(`Android-only`) Gets the Android application [context](https://developer.android.com/reference/android/content/Context).

---

### getInputMethodManager()

```ts
const inputMethodManager: android.view.inputmethod.InputMethodManager =
  Utils.android.getInputMethodManager()
```

(`Android-only`)Gets the native Android [InputMethodManager](https://developer.android.com/reference/android/view/inputmethod/InputMethodManager) instance.

---

### showSoftInput()

```ts
Utils.android.showSoftInput(nativeView)
```

(`Android-only`)Shows a soft keyboard. `nativeView` is an `android.view.View` instance to disable the soft input for.

---

### stringArrayToStringSet()

```ts
const stringSet: java.util.HashSet = Utils.android.collections.stringArrayToStringSet(str: string[])
```

Converts string array into a String [hash set](http://developer.android.com/reference/java/util/HashSet.html).

---

### stringSetToStringArray()

```ts
const stringArray: string[] =
  Utils.android.collections.stringSetToStringArray(stringSet)
```

Converts string hash set into array of strings.

---

### getDrawableId()

```ts
const drawableId: number = Utils.android.resources.getDrawableId(resourceName)
```

Gets the drawable id from a given resource name.

---

### getStringId()

```ts
const stringId: number = Utils.android.resources.getStringId(resourceName)
```

Gets the string id from a given resource name.

---

### getPaletteColor()

```ts
const paletteColor: number = Utils.android.resources.getPaletteColor(
  resourceName,
  Utils.android.getApplicationContext()
)
```

Gets a color from the current theme.

---

### joinPaths()

```ts
const joinedPath: string = Utils.ios.joinPaths('photos', 'cat.png')
```

Joins the passed strings into a path.

---

### getWindow()

```ts
const window: UIWindow = Utils.ios.getWindow()
```

Gets the UIWindow of the app.

---

### copyToClipboard()

```ts
Utils.copyToClipboard(value):
```

Copies the specified value to device clipboard.

---

### setWindowBackgroundColor()

```ts
Utils.ios.setWindowBackgroundColor(someColorString)
```

Sets the window background color of base view of the app. Often this is shown when opening a modal as the view underneath scales down revealing the window color.

---

### getCurrentAppPath()

```ts
const appPath: string = Utils.ios.getCurrentAppPath()
```

Gets the root folder for the current application. Also see [currentApp()](/core/file-system#currentapp)

---

### getVisibleViewController()

```ts
const visibleView: UIViewController = Utils.ios.getVisibleViewController(rootViewController: UIViewController)
```

Gets the currently visible(topmost) UIViewController.`rootViewController` is the root UIViewController instance to start searching from (normally window.rootViewController).

---

### getRootViewController()

```ts
const rootView: UIViewController = Utils.ios.getRootViewController()
```

Gets the root [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller) of the app.

---

### getShadowLayer()

```ts
const shadowLayer: CALayer = Utils.ios.getShadowLayer(nativeView, name, create)
```

---

- `nativeView` is a [UIView](https://developer.apple.com/documentation/uikit/uiview/) instance to find shadow layer with
- _Optional_: `name`(`string`) is the name of the shadow layer if looking for a specific layer.
- _Optional_: `create`(`boolean`) if set to `true`, it indicates that a new layer should be created if no layer is found.

### createUIDocumentInteractionControllerDelegate()

Create a [UIDocumentInteractionControllerDelegate](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontrollerdelegate) implementation for use with [UIDocumentInteractionController](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller)

---

### jsArrayToNSArray()

```ts
const jsArrayToNSArray : NSArray<T> =Utils.ios.collections.jsArrayToNSArray<T>(str: T[])
```

(`iOS only`)Converts JavaScript array with elements of type `T` to [NSArray](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSArray_Class/) of type `T`.

---

### nsArrayToJSArray()

```ts
const nsArrayToJSArray: Array<T> = nsArrayToJSArray<T>(a: NSArray<T>)
```

(`iOS only`)Converts NSArray of elements of a type `T` to an equivalent JavaScript array.

---

## API Reference(s)

- [@nativescript/core/utils](https://docs.nativescript.org/api/namespace/Utils) module
