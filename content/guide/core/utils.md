---
title: Utils
---

The Utils object offers utilities properties and methods.

## Using Utils

### Validating a path for a resource or a local file

To verify if a path is valid resource or local file path, use the [isFileOrResourcePath()](#isfileorresourcepath) method:

```ts

const isPathValid: boolean = Utils.isFileOrResourcePath('https://thiscatdoesnotexist.com/') //  false

// or

const isPathValid: boolean = Utils.isFileOrResourcePath('res://icon') // true
```

### Check if a URI is a data URI

To check if a specific [URI](https://en.wikipedia.org/wiki/Data_URI_scheme) is a valid data URI, use the [isDataURI()](#isdatauri).

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
const didUrlOpen: boolean = Utils.openUrl('https://thiscatdoesnotexist.com/')

```

### Escaping regex symbols
To escape regex metacharacters in string, use the [escapeRegexSymbols](#escaperegexsymbols)
```ts
    const escapedString: string = Utils.escapeRegexSymbols('$hello') // \$hello
```
### Check if the application is running on a physical device

```ts
const isOnPhysicalDevice: boolean = Utils.isRealDevice()
```

### Checking if a value is a number
To check if a value is a number, use the [isNumber()](#isnumber).

```ts
const isANumber: boolean = Utils.isNumber(2) // true
const isNumber: boolean = Utils.isNumber("test") // false
const isNumber: boolean = Utils.isNumber(true) // false
```

### Get a class hierarchy of an object 
To get list all the classes an object is an instance of, use the [getBaseClasses()](#getbaseclasses) method:

```ts
const labelHierarchy: Array<string> = Utils.getBaseClasses(new Label());
  /*[
    Label, 
    TextBase,
    TextBaseCommon,
    View, 
    ViewCommon, 
    ViewBase, 
    Observable, 
    Object]*
    /
```

### Hiding a keyboard

To hide a soft keyboard on the screen, use the [dismissKeyboard()](#dismisskeyboard)

```ts
Utils.dismissKeyboard()
```

## Utils API

### MajorVersion
```ts
const majorVersion: number = Utils.ios
```

(`iOS only`) Gets the iOS device major version. For example, for 16.0 ,it returns 16.

---

### isFileOrResourcePath()
```ts
const isFileOrResourcePath: boolean = Utils.isFileOrResourcePath(path)
```
Returns `true` if the specified path points to a resource or local file.

----

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

Escapes special regex characters (`.`, `*`, `^`, `$` and so on) in string and return a valid regex from it.

---
### convertString()
```ts
const toStr: number | boolean  = Utils.convertString(value)
```

Converts a string value to number or boolean. If it can not convert, it returns the passed string.

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
 const debouncedFn =Utils.debounce(fn,delay)

    debouncedFn()
```

A simple debounce utility.
- `fn` The function to debounce.
- _Optional_:`delay` delays the bouncing, in milliseconds. Defaults to 300ms.
---
### throttle()
```ts
 const throttledFn =Utils.throttle(fn,delay)

throttledFn()
```

A simple throttle utility.
- `fn` The function to throttle.
- _Optional_:`delay` delays the throttling, in milliseconds. Defaults to 300ms.

---
### isFontIconURI()
### executeOnMainThread()
### executeOnUIThread()
### mainThreadify()
```ts
Utils.mainThreadify(func: Function): (...args: any[])
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
Utils.dispatchToMainThread(func: Function)
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
Opens the file at specified `filePath`. 
_Optional_: (`Android-only`) `title` is the title of the file viewer.

---
### isRealDevice()
```ts
const isOnPhysicalDevice: boolean = Utils.isRealDevice()
```
Checks whether the application is running on a physical device and not on simulator/emulator.

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

Checks if the specified value not `undefined`.

---
### isUndefined()
```ts
const isUndefined: boolean = Utils.isUndefined(someValue)
```
---
### isNullOrUndefined()
```ts
const isNullOrUndefined: boolean = Utils.isNullOrUndefined(someValue)
```

---
### isFunction()
```ts
const isValueAFunction: boolean = Utils.isFunction(someValue)
```
Checks if a value is a function.

---

### isNumber()	
```ts
const isNumber: boolean = Utils.isNumber()
```
---
### isObject()
```ts
const isObject: boolean = Utils.isObject(someValue)
```
---
### isString()
```ts
const isString = boolean = Utils.isString(someValue)
```
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
const timerID: number = Utils.setInterval((args)=>{

}, milliseconds,[arg1, arg2])
```
A timer method that allows you to run `callback` every `milliseconds`(milliseconds). It returns returns an id that is used to [stop](#clearinterval) the timer.

---
### clearInterval()
```ts
Utils.clearInterval(timerID)
```
Stops the interval timer for the provided id.

---
### setTimeout()
```ts
const timerId: number = Utils.setTimeout((args)=>{
}, milliseconds,[arg1, arg2])
```

A timer method that allows you to wait `milliseconds`(milliseconds) before running `callback`. It returns an id to be used to [stop](#clearinterval) the timer.

---

### dismissKeyboard()
```ts
Utils.dismissKeyboard()
```
Hides any keyboard on the screen. See also 

---
### getApplication()

```ts
const app: android.app.Application = Utils.android.getApplication()
```
(`Android-only`)Gets the native Android application instance. Also see [native app](/guide/core/application#nativeapp)

---
### getApplicationContext()
```ts
Utils.android.getApplicationContext()
```

(`Android-only`) Gets the Android application [context](https://developer.android.com/reference/android/content/Context)

---
### getInputMethodManager()

```ts
const inputMethodManager: android.view.inputmethod.InputMethodManager  = Utils.android.getInputMethodManager()
```

Gets the native Android [InputMethodManager](https://developer.android.com/reference/android/view/inputmethod/InputMethodManager)
instance.

---
### showSoftInput()
```ts
Utils.android.showSoftInput(nativeView)
```

(`Android-only`)Shows the soft input interface, usually a soft keyboard. `nativeView` is an `android.view.View` instance to disable the soft input for.

---
### stringArrayToStringSet()
### stringSetToStringArray()
### getDrawableId()
### getDrawableId()
### getStringId()
### getId()
### getPaletteColor()
### joinPaths()
### getCurrentAppPath()
### getVisibleViewController()
### getShadowLayer()
### createUIDocumentInteractionControllerDelegate()
### jsArrayToNSArray()
### nsArrayToJSArray()

## API Reference(s)

- [@nativescript/core/utils](https://docs.nativescript.org/api-reference/modules#utils) module