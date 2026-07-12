---
title: Utils
titleTemplate: :title - API / NativeScript
contributors: false
---

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [layout](namespaces/layout/index.md) | Utility module related to layout. |

## Classes

| Class | Description |
| ------ | ------ |
| [ClassInfo](classes/ClassInfo.md) | A Class holding information about a class |
| [ScopeError](classes/ScopeError.md) | An Error class that provides additional context to an error. |
| [Source](classes/Source.md) | A class encapsulating information for source code origin. |
| [SourceError](classes/SourceError.md) | Represents a scope error providing addiot |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [NativeWindow](type-aliases/NativeWindow.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [~~ad~~](variables/ad.md) | - |
| [android](variables/android.md) | Utilities related to Android. |
| [CORE\_ANIMATION\_DEFAULTS](variables/CORE_ANIMATION_DEFAULTS.md) | Default animation values used throughout core |
| [debug](variables/debug.md) | A runtime option indicating whether the build has debugging enabled. |
| [FILE\_PREFIX](variables/FILE_PREFIX.md) | - |
| [FONT\_PREFIX](variables/FONT_PREFIX.md) | - |
| [ios](variables/ios.md) | Utilities related to iOS. |
| [~~iOSNativeHelper~~](variables/iOSNativeHelper.md) | - |
| [RESOURCE\_PREFIX](variables/RESOURCE_PREFIX.md) | - |
| [SDK\_VERSION](variables/SDK_VERSION.md) | - |
| [SYSTEM\_PREFIX](variables/SYSTEM_PREFIX.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [clearInterval](functions/clearInterval.md) | Clears repeated function which was set up by calling setInterval(). |
| [clearTimeout](functions/clearTimeout.md) | Clears the delay set by a call to the setTimeout function. |
| [convertString](functions/convertString.md) | Converts string value to number or boolean. |
| [copyToClipboard](functions/copyToClipboard.md) | Copy value to device clipboard. |
| [dataDeserialize](functions/dataDeserialize.md) | Data deserialization from Native > JS |
| [dataSerialize](functions/dataSerialize.md) | Data serialization from JS > Native |
| [debounce](functions/debounce.md) | Creates a debounced function that delays invoking the provided function until after a specified delay |
| [dismissKeyboard](functions/dismissKeyboard.md) | Dismiss any keyboard visible on the screen. |
| [dismissSoftInput](functions/dismissSoftInput.md) | Hides the soft input method, usually a soft keyboard. |
| [dispatchToMainThread](functions/dispatchToMainThread.md) | Dispatches the passed function for execution on the main thread |
| [dispatchToUIThread](functions/dispatchToUIThread.md) | Dispatches the passed function for execution on the UI thread |
| [eliminateDuplicates](functions/eliminateDuplicates.md) | Removes duplicate elements from array. |
| [escapeRegexSymbols](functions/escapeRegexSymbols.md) | Escapes special regex symbols (., *, ^, $ and so on) in string in order to create a valid regex from it. |
| [executeOnMainThread](functions/executeOnMainThread.md) | Checks if the current thread is the main thread. Directly calls the passed function if it is, or dispatches it to the main thread otherwise. |
| [executeOnUIThread](functions/executeOnUIThread.md) | Runs the passed function on the UI Thread. |
| [GC](functions/GC.md) | An utility function that invokes garbage collection on the JavaScript side. |
| [getBaseClasses](functions/getBaseClasses.md) | A function that gets the entire class hierarchy of an object. |
| [getClass](functions/getClass.md) | A function that gets the class name of an object. |
| [getClassInfo](functions/getClassInfo.md) | A function that gets the ClassInfo for an object. |
| [getDurationWithDampingFromSpring](functions/getDurationWithDampingFromSpring.md) | Get a duration with damping value from various spring related settings. Helpful when needing to convert spring settings to isolated duration value. |
| [getFileExtension](functions/getFileExtension.md) | Get file extension from file path |
| [getModuleName](functions/getModuleName.md) | Gets module name from path. |
| [getWindow](functions/getWindow.md) | Get the UIWindow or android.view.Window of the app |
| [hasDuplicates](functions/hasDuplicates.md) | Checks if array has any duplicate elements. |
| [isBoolean](functions/isBoolean.md) | A function that checks if something is a valid boolean. |
| [isDataURI](functions/isDataURI.md) | Returns true if the specified URI is data URI (http://en.wikipedia.org/wiki/Data_URI_scheme). |
| [isDefined](functions/isDefined.md) | A function that checks if something is defined (not undefined). |
| [isEmoji](functions/isEmoji.md) | - |
| [isFileOrResourcePath](functions/isFileOrResourcePath.md) | Returns true if the specified path points to a resource or local file. |
| [isFontIconURI](functions/isFontIconURI.md) | Returns true if the specified URI is a font icon URI like "fontIcon://&#xf1e0". |
| [isFunction](functions/isFunction.md) | A function that checks if something is a function. |
| [isMainThread](functions/isMainThread.md) | - |
| [isNullOrUndefined](functions/isNullOrUndefined.md) | A function that checks if something is not defined (null or undefined). |
| [isNumber](functions/isNumber.md) | A function that checks if something is a valid number. |
| [isObject](functions/isObject.md) | A function that checks if something is an object. |
| [isRealDevice](functions/isRealDevice.md) | Checks whether the application is running on real device and not on simulator/emulator. |
| [isString](functions/isString.md) | A function that checks if something is a valid string. |
| [isSystemURI](functions/isSystemURI.md) | Returns true if the specified URI is a system URI like "sys://...". |
| [isUndefined](functions/isUndefined.md) | A function that checks if something is "undefined". |
| [mainThreadify](functions/mainThreadify.md) | Returns a function wrapper which executes the supplied function on the main thread. The wrapper behaves like the original function and passes all of its arguments BUT discards its return value. |
| [merge](functions/merge.md) | - |
| [mergeSort](functions/mergeSort.md) | Sorts an array by using merge sort algorithm (which ensures stable sort since the built-in Array.sort() does not promise a stable sort). |
| [numberHasDecimals](functions/numberHasDecimals.md) | Checks if the number has decimals |
| [numberIs64Bit](functions/numberIs64Bit.md) | Checks if the number is 64 bit |
| [openFile](functions/openFile.md) | Opens file. |
| [openUrl](functions/openUrl.md) | Opens url. |
| [openUrlAsync](functions/openUrlAsync.md) | Opens url asynchronously. |
| [queueGC](functions/queueGC.md) | An utility function that queues a garbage collection, multiple calls in quick succession are debounced by default and only one gc will be executed after 900ms. |
| [queueMacrotask](functions/queueMacrotask.md) | Queues the passed function to be ran in a macroTask |
| [releaseNativeObject](functions/releaseNativeObject.md) | Releases the reference to the wrapped native object |
| [sanitizeModuleName](functions/sanitizeModuleName.md) | Helps sanitize a module name if it is prefixed with '~/', '~' or '/' |
| [setInterval](functions/setInterval.md) | Calls a function repeatedly with a delay between each call. |
| [setTimeout](functions/setTimeout.md) | Calls a function after a specified delay. |
| [supportsGlass](functions/supportsGlass.md) | - |
| [throttle](functions/throttle.md) | Creates a throttled function that only invokes the provided function at most once per specified delay |
| [toUIString](functions/toUIString.md) | Returns a string representation of an object to be shown in UI. |
| [verifyCallback](functions/verifyCallback.md) | A function that checks if something is a valid function. |
