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
## Utils API

### MajorVersion
```ts
const majorVersion: number = Utils.ios
```

(`iOS only`) Gets the iOS device major version (for 16.0 will return 16).

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
```

---
### GC()
```ts
Utils.GC()
```

A utility function that invokes garbage collection on the JavaScript side.

---
### queueMacrotask()
```ts
```

Queues the passed function to be ran as a macroTask.

---

### queueGC()
### debounce()
### throttle()
### isFontIconURI()
### executeOnMainThread()
### executeOnUIThread()
### mainThreadify()
### isMainThread()
### dispatchToMainThread()
### releaseNativeObject()
### getModuleName()
### openFile()
### isRealDevice()
### getClass()
### getBaseClasses()
### getClassInfo()
### isBoolean()
### isDefined()
### isFunction()
### isNullOrUndefined()
### isNumber()	
### isObject()
### isString()
### isUndefined()
### toUIString()
### verifyCallback()
### dataSerialize()
### dataDeserialize()
### setInterval()
### clearInterval()
### setTimeout()
### getApplication()
```ts
```

---
### getApplicationContext()
```ts
Utils.android.getApplicationContext()
```

(`Android-only`) Utils.android.showSoftInput
---
### getInputMethodManager()
### dismissSoftInput()
```ts
Utils.dismissSoftInput(nativeView)
```
(`Android-only`)Hides the soft input interface, usually a soft keyboard. `nativeView` is an optional `android.view.View` instance to disable the soft input for.

---
### showSoftInput()
```ts
Utils.android.showSoftInput(nativeVie)
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