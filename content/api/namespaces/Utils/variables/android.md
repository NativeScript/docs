---
title: android
titleTemplate: :title - API / NativeScript
description: Utilities related to Android.
contributors: false
---

```ts
const android: {
  collections: {
     stringArrayToStringSet: HashSet<string>;
     stringSetToStringArray: string[];
  };
  dismissSoftInput: (nativeView?: android.view.View) => void;
  getApplication: () => android.app.Application;
  getApplicationContext: () => android.content.Context;
  getCurrentActivity: () => androidx.appcompat.app.AppCompatActivity | android.app.Activity | null;
  getInputMethodManager: () => android.view.inputmethod.InputMethodManager;
  getPackageName: () => string;
  getResources: () => android.content.res.Resources;
  getWindow: () => android.view.Window;
  resources: {
     getDrawableId: (name: any) => number;
     getId: (name: string) => number;
     getPaletteColor: (name: string, context: android.content.Context) => number;
     getResource: (name: string, type?: string) => number;
     getStringId: (name: any) => number;
  };
  showSoftInput: (nativeView: android.view.View) => void;
  enableEdgeToEdge: void;
  getIgnoreEdgeToEdgeOnOlderDevices: boolean;
  setDarkModeHandler: void;
  setIgnoreEdgeToEdgeOnOlderDevices: void;
  setNavigationBarColor: void;
  setStatusBarColor: void;
};
```

Defined in: utils/native-helper.d.ts:26

Utilities related to Android.

## Type Declaration

### collections

```ts
collections: {
  stringArrayToStringSet: HashSet<string>;
  stringSetToStringArray: string[];
};
```

Utilities related to Android collections.

#### collections.stringArrayToStringSet()

```ts
stringArrayToStringSet(str: string[]): HashSet<string>;
```

Converts string array into a String [hash set](http://developer.android.com/reference/java/util/HashSet.html).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string`[] | An array of strings to convert. |

##### Returns

`HashSet`\<`string`\>

#### collections.stringSetToStringArray()

```ts
stringSetToStringArray(stringSet: any): string[];
```

Converts string hash set into array of strings.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `stringSet` | `any` | A string hash set to convert. |

##### Returns

`string`[]

### dismissSoftInput

```ts
dismissSoftInput: (nativeView?: android.view.View) => void;
```

Hides the soft input method, usually a soft keyboard.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nativeView?` | `android.view.View` |

#### Returns

`void`

### getApplication

```ts
getApplication: () => android.app.Application;
```

Gets the native Android application instance.

#### Returns

`android.app.Application`

### getApplicationContext

```ts
getApplicationContext: () => android.content.Context;
```

Gets the Android application context.

#### Returns

`android.content.Context`

### getCurrentActivity

```ts
getCurrentActivity: () => androidx.appcompat.app.AppCompatActivity | android.app.Activity | null;
```

Get the current native Android activity.

#### Returns

`androidx.appcompat.app.AppCompatActivity` \| `android.app.Activity` \| `null`

### getInputMethodManager

```ts
getInputMethodManager: () => android.view.inputmethod.InputMethodManager;
```

Gets the native Android input method manager.

#### Returns

`android.view.inputmethod.InputMethodManager`

### getPackageName

```ts
getPackageName: () => string;
```

#### Returns

`string`

### getResources

```ts
getResources: () => android.content.res.Resources;
```

Gets the native Android application resources.

#### Returns

`android.content.res.Resources`

### ~~getWindow~~

```ts
getWindow: () => android.view.Window;
```

#### Returns

`android.view.Window`

application window.

#### Deprecated

Use `Utils.getWindow<android.view.Window>()` instead.

### resources

```ts
resources: {
  getDrawableId: (name: any) => number;
  getId: (name: string) => number;
  getPaletteColor: (name: string, context: android.content.Context) => number;
  getResource: (name: string, type?: string) => number;
  getStringId: (name: any) => number;
};
```

Utilities related to Android resources.

#### resources.getDrawableId

```ts
getDrawableId: (name: any) => number;
```

Gets the drawable id from a given name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `any` | Name of the resource. |

##### Returns

`number`

#### resources.getId

```ts
getId: (name: string) => number;
```

Gets the id from a given name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the resource. |

##### Returns

`number`

#### resources.getPaletteColor

```ts
getPaletteColor: (name: string, context: android.content.Context) => number;
```

Gets a color from the current theme.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the color resource. |
| `context` | `android.content.Context` | Context to resolve the color. |

##### Returns

`number`

#### resources.getResource

```ts
getResource: (name: string, type?: string) => number;
```

Gets the id from a given name with optional type.
This sets an explicit package name.
https://developer.android.com/reference/android/content/res/Resources#getIdentifier(java.lang.String,%20java.lang.String,%20java.lang.String)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the resource. |
| `type?` | `string` | (Optional) type |

##### Returns

`number`

#### resources.getStringId

```ts
getStringId: (name: any) => number;
```

Gets the string id from a given name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `any` | Name of the resource. |

##### Returns

`number`

### showSoftInput

```ts
showSoftInput: (nativeView: android.view.View) => void;
```

Shows the soft input method, usually a soft keyboard.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nativeView` | `android.view.View` |

#### Returns

`void`

### enableEdgeToEdge()

#### Call Signature

```ts
enableEdgeToEdge(activityOrWindow: ComponentActivity, options?: {
  handleDarkMode?: (bar: "status" | "navigation", resources: android.content.res.Resources) => boolean;
  navigationBarDarkColor?: Color;
  navigationBarLightColor?: Color;
  statusBarDarkColor?: Color;
  statusBarLightColor?: Color;
}): void;
```

Enables edge-to-edge navigation for the provided activity.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `activityOrWindow` | `ComponentActivity` | - |
| `options?` | \{ `handleDarkMode?`: (`bar`: `"status"` \| `"navigation"`, `resources`: `android.content.res.Resources`) => `boolean`; `navigationBarDarkColor?`: `Color`; `navigationBarLightColor?`: `Color`; `statusBarDarkColor?`: `Color`; `statusBarLightColor?`: `Color`; \} | Optional configuration for status and navigation bar colors. |
| `options.handleDarkMode?` | (`bar`: `"status"` \| `"navigation"`, `resources`: `android.content.res.Resources`) => `boolean` | - |
| `options.navigationBarDarkColor?` | `Color` | - |
| `options.navigationBarLightColor?` | `Color` | - |
| `options.statusBarDarkColor?` | `Color` | - |
| `options.statusBarLightColor?` | `Color` | - |

##### Returns

`void`

#### Call Signature

```ts
enableEdgeToEdge(
   activity: ComponentActivity, 
   window: Window, 
   options?: {
  handleDarkMode?: (bar: "status" | "navigation", resources: android.content.res.Resources) => boolean;
  navigationBarDarkColor?: Color;
  navigationBarLightColor?: Color;
  statusBarDarkColor?: Color;
  statusBarLightColor?: Color;
}): void;
```

Enables edge-to-edge navigation for the provided Window.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `activity` | `ComponentActivity` | The activity to enable edge-to-edge navigation for. |
| `window` | `Window` | - |
| `options?` | \{ `handleDarkMode?`: (`bar`: `"status"` \| `"navigation"`, `resources`: `android.content.res.Resources`) => `boolean`; `navigationBarDarkColor?`: `Color`; `navigationBarLightColor?`: `Color`; `statusBarDarkColor?`: `Color`; `statusBarLightColor?`: `Color`; \} | Optional configuration for status and navigation bar colors. |
| `options.handleDarkMode?` | (`bar`: `"status"` \| `"navigation"`, `resources`: `android.content.res.Resources`) => `boolean` | - |
| `options.navigationBarDarkColor?` | `Color` | - |
| `options.navigationBarLightColor?` | `Color` | - |
| `options.statusBarDarkColor?` | `Color` | - |
| `options.statusBarLightColor?` | `Color` | - |

##### Returns

`void`

### getIgnoreEdgeToEdgeOnOlderDevices()

```ts
getIgnoreEdgeToEdgeOnOlderDevices(): boolean;
```

Gets whether edge-to-edge is ignored on older devices (API 34 an older).

#### Returns

`boolean`

### setDarkModeHandler()

```ts
setDarkModeHandler(options?: {
  activity?: androidx.appcompat.app.AppCompatActivity;
  handler: (bar: "status" | "navigation", resources: android.content.res.Resources) => boolean;
}): void;
```

Sets the dark mode handler for the application.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `activity?`: `androidx.appcompat.app.AppCompatActivity`; `handler`: (`bar`: `"status"` \| `"navigation"`, `resources`: `android.content.res.Resources`) => `boolean`; \} | Options to set dark mode handler. |
| `options.activity?` | `androidx.appcompat.app.AppCompatActivity` | - |
| `options.handler?` | (`bar`: `"status"` \| `"navigation"`, `resources`: `android.content.res.Resources`) => `boolean` | - |

#### Returns

`void`

### setIgnoreEdgeToEdgeOnOlderDevices()

```ts
setIgnoreEdgeToEdgeOnOlderDevices(value: boolean): void;
```

Sets whether to ignore edge-to-edge on older devices (API 34 an older).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`void`

### setNavigationBarColor()

```ts
setNavigationBarColor(options?: {
  activity?: androidx.appcompat.app.AppCompatActivity;
  darkColor?: Color;
  lightColor?: Color;
}): void;
```

Sets the navigation bar color for the application.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `activity?`: `androidx.appcompat.app.AppCompatActivity`; `darkColor?`: `Color`; `lightColor?`: `Color`; \} | Options to set navigation bar color. |
| `options.activity?` | `androidx.appcompat.app.AppCompatActivity` | - |
| `options.darkColor?` | `Color` | - |
| `options.lightColor?` | `Color` | - |

#### Returns

`void`

### setStatusBarColor()

```ts
setStatusBarColor(options?: {
  activity?: androidx.appcompat.app.AppCompatActivity;
  darkColor?: Color;
  lightColor?: Color;
}): void;
```

Sets the status bar color for the application.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `activity?`: `androidx.appcompat.app.AppCompatActivity`; `darkColor?`: `Color`; `lightColor?`: `Color`; \} | Options to set status bar color. |
| `options.activity?` | `androidx.appcompat.app.AppCompatActivity` | - |
| `options.darkColor?` | `Color` | - |
| `options.lightColor?` | `Color` | - |

#### Returns

`void`
