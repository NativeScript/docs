---
title: ios
titleTemplate: :title - API / NativeScript
description: Utilities related to iOS.
contributors: false
---

```ts
const ios: {
  animateWithSpring: (options?: {
     animateOptions?: UIViewAnimationOptions;
     animations?: () => void;
     completion?: (finished?: boolean) => void;
     delay?: number;
     friction?: number;
     mass?: number;
     tension?: number;
     velocity?: number;
  }) => void;
  applyRotateTransform: (transform: CATransform3D, x: number, y: number, z: number) => CATransform3D;
  collections: {
     jsArrayToNSArray: NSArray<T>;
     nsArrayToJSArray: T[];
  };
  copyLayerProperties: (view: UIView, toView: UIView, customProperties?: {
     layer?: keyof CALayer[];
     view?: keyof UIView[];
  }) => void;
  createUIDocumentInteractionControllerDelegate: () => NSObject;
  getCurrentAppPath: () => string;
  getMainScreen: () => UIScreen;
  getRootViewController: () => UIViewController;
  getVisibleViewController: (rootViewController: UIViewController) => UIViewController;
  getWindow: () => UIWindow;
  isLandscape: () => boolean;
  joinPaths: (...paths: string[]) => string;
  MajorVersion: number;
  printCGRect: (rect: CGRect) => void;
  setWindowBackgroundColor: (value: string) => void;
  snapshotView: (view: UIView, scale: number) => UIImage;
};
```

Defined in: [utils/native-helper.d.ts:177](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/native-helper.d.ts#L177)

Utilities related to iOS.

## Type Declaration

### animateWithSpring

```ts
animateWithSpring: (options?: {
  animateOptions?: UIViewAnimationOptions;
  animations?: () => void;
  completion?: (finished?: boolean) => void;
  delay?: number;
  friction?: number;
  mass?: number;
  tension?: number;
  velocity?: number;
}) => void;
```

Animate views with a configurable spring effect

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `animateOptions?`: `UIViewAnimationOptions`; `animations?`: () => `void`; `completion?`: (`finished?`: `boolean`) => `void`; `delay?`: `number`; `friction?`: `number`; `mass?`: `number`; `tension?`: `number`; `velocity?`: `number`; \} | various animation settings for the spring - tension: number - friction: number - mass: number - delay: number - velocity: number - animateOptions: UIViewAnimationOptions - animations: () =\> void, Callback containing the property changes you want animated - completion: (finished: boolean) =\> void, Callback when animation is finished |
| `options.animateOptions?` | `UIViewAnimationOptions` | - |
| `options.animations?` | () => `void` | - |
| `options.completion?` | (`finished?`: `boolean`) => `void` | - |
| `options.delay?` | `number` | - |
| `options.friction?` | `number` | - |
| `options.mass?` | `number` | - |
| `options.tension?` | `number` | - |
| `options.velocity?` | `number` | - |

#### Returns

`void`

### applyRotateTransform

```ts
applyRotateTransform: (transform: CATransform3D, x: number, y: number, z: number) => CATransform3D;
```

Applies a rotation transform over X,Y and Z axis

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transform` | `CATransform3D` | Applies a rotation transform over X,Y and Z axis |
| `x` | `number` | Rotation over X axis in degrees |
| `y` | `number` | Rotation over Y axis in degrees |
| `z` | `number` | Rotation over Z axis in degrees |

#### Returns

`CATransform3D`

### collections

```ts
collections: {
  jsArrayToNSArray: NSArray<T>;
  nsArrayToJSArray: T[];
};
```

Utilities related to iOS collections.

#### collections.jsArrayToNSArray()

```ts
jsArrayToNSArray<T>(str: T[]): NSArray<T>;
```

Converts JavaScript array to [NSArray](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/Classes/NSArray_Class/).

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `T`[] | JavaScript string array to convert. |

##### Returns

`NSArray`\<`T`\>

#### collections.nsArrayToJSArray()

```ts
nsArrayToJSArray<T>(a: NSArray<T>): T[];
```

Converts NSArray to JavaScript array.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `NSArray`\<`T`\> | NSArray to convert. |

##### Returns

`T`[]

### copyLayerProperties

```ts
copyLayerProperties: (view: UIView, toView: UIView, customProperties?: {
  layer?: keyof CALayer[];
  view?: keyof UIView[];
}) => void;
```

Copy layer properties from one view to another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | `UIView` | a view to copy layer properties to |
| `toView` | `UIView` | a view to copy later properties from |
| `customProperties?` | \{ `layer?`: keyof `CALayer`[]; `view?`: keyof `UIView`[]; \} | - |
| `customProperties.layer?` | keyof `CALayer`[] | - |
| `customProperties.view?` | keyof `UIView`[] | - |

#### Returns

`void`

### createUIDocumentInteractionControllerDelegate

```ts
createUIDocumentInteractionControllerDelegate: () => NSObject;
```

Create a UIDocumentInteractionControllerDelegate implementation for use with UIDocumentInteractionController

#### Returns

`NSObject`

### getCurrentAppPath

```ts
getCurrentAppPath: () => string;
```

Gets the root folder for the current application. This Folder is private for the application and not accessible from Users/External apps.
iOS - this folder is read-only and contains the app and all its resources.

#### Returns

`string`

### getMainScreen

```ts
getMainScreen: () => UIScreen;
```

#### Returns

`UIScreen`

### getRootViewController

```ts
getRootViewController: () => UIViewController;
```

Get the root UIViewController of the app

#### Returns

`UIViewController`

### getVisibleViewController

```ts
getVisibleViewController: (rootViewController: UIViewController) => UIViewController;
```

Gets the currently visible(topmost) UIViewController.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rootViewController` | `UIViewController` | The root UIViewController instance to start searching from (normally window.rootViewController). Returns the visible UIViewController. |

#### Returns

`UIViewController`

### ~~getWindow~~

```ts
getWindow: () => UIWindow;
```

#### Returns

`UIWindow`

application window.

#### Deprecated

Use `Utils.getWindow<UIWindow>()` instead.

### ~~isLandscape~~

```ts
isLandscape: () => boolean;
```

#### Returns

`boolean`

#### Deprecated

use Application.orientation instead

Gets an information about if current mode is Landscape.

### joinPaths

```ts
joinPaths: (...paths: string[]) => string;
```

Joins an array of file paths.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`paths` | `string`[] | An array of paths. Returns the joined path. |

#### Returns

`string`

### ~~MajorVersion~~

```ts
MajorVersion: number;
```

#### Deprecated

use Utils.SDK_VERSION instead which is a float of the \{major\}.\{minor\} verison

### printCGRect

```ts
printCGRect: (rect: CGRect) => void;
```

Debug utility to insert CGRect values into logging output.
Note: when printing a CGRect directly it will print blank so this helps show the values.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rect` | `CGRect` | CGRect |

#### Returns

`void`

### setWindowBackgroundColor

```ts
setWindowBackgroundColor: (value: string) => void;
```

Set the window background color of base view of the app.
Often this is the view shown behind opening a modal, eg: a modal scales down revealing the window color.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | color (hex, rgb, rgba, etc.) |

#### Returns

`void`

### snapshotView

```ts
snapshotView: (view: UIView, scale: number) => UIImage;
```

Take a snapshot of a View on screen.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | `UIView` | view to snapshot |
| `scale` | `number` | screen scale |

#### Returns

`UIImage`
