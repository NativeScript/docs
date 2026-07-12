---
title: ShowModalOptions
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

## Properties

### android?

```ts
optional android?: {
  cancelable?: boolean;
  windowSoftInputMode?: number;
};
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### ~~cancelable?~~

```ts
optional cancelable?: boolean;
```

##### Deprecated

Use ShowModalOptions.cancelable instead.
An optional parameter specifying whether the modal view can be dismissed when not in full-screen mode.

#### windowSoftInputMode?

```ts
optional windowSoftInputMode?: number;
```

An optional parameter specifying the windowSoftInputMode of the dialog window.
For possible values see https://developer.android.com/reference/android/view/WindowManager.LayoutParams#softInputMode

***

### animated?

```ts
optional animated?: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

An optional parameter specifying whether to show the modal view with animation.

***

### cancelable?

```ts
optional cancelable?: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

An optional parameter specifying whether the modal view can be dismissed when not in full-screen mode.

***

### closeCallback

```ts
closeCallback: (...args: any[]) => void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

A function that will be called when the view is closed. Any arguments provided when calling ShownModallyData.closeCallback will be available here.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`void`

***

### context

```ts
context: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Any context you want to pass to the modally shown view. This same context will be available in the arguments of the shownModally event handler.

***

### fullscreen?

```ts
optional fullscreen?: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

An optional parameter specifying whether to show the modal view in full-screen mode.

***

### ios?

```ts
optional ios?: {
  height?: number;
  presentationStyle?: any;
  statusBarStyle?: "dark" | "light";
  width?: number;
};
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

An optional parameter that specify options specific to iOS as an object.

#### height?

```ts
optional height?: number;
```

height of the popup dialog

#### presentationStyle?

```ts
optional presentationStyle?: any;
```

The UIModalPresentationStyle to be used when showing the dialog in iOS .

#### statusBarStyle?

```ts
optional statusBarStyle?: "dark" | "light";
```

The preferred status bar style for the modal view

#### width?

```ts
optional width?: number;
```

width of the popup dialog

***

### stretched?

```ts
optional stretched?: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

An optional parameter specifying whether to stretch the modal view when not in full-screen mode.

***

### transition?

```ts
optional transition?: ModalTransitionType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

An optional custom transition effect
