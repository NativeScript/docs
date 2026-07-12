---
title: ActionOptions
titleTemplate: :title - API / NativeScript
description: Provides options for the dialog.
contributors: false
---

Defined in: [ui/dialogs/index.d.ts:155](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L155)

Provides options for the dialog.

## Extends

- [`CancelableOptions`](CancelableOptions.md)

## Properties

### actions?

```ts
optional actions?: string[];
```

Defined in: [ui/dialogs/index.d.ts:174](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L174)

Gets or sets the list of available actions.

***

### cancelable?

```ts
optional cancelable?: boolean;
```

Defined in: [ui/dialogs/index.d.ts:144](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L144)

[Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.

#### Inherited from

[`CancelableOptions`](CancelableOptions.md).[`cancelable`](CancelableOptions.md#cancelable)

***

### cancelButtonText?

```ts
optional cancelButtonText?: string;
```

Defined in: [ui/dialogs/index.d.ts:169](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L169)

Gets or sets the Cancel button text.

***

### destructiveActionsIndexes?

```ts
optional destructiveActionsIndexes?: number[];
```

Defined in: [ui/dialogs/index.d.ts:179](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L179)

[iOS only] Gets or sets the indexes of destructive actions.

***

### message?

```ts
optional message?: string;
```

Defined in: [ui/dialogs/index.d.ts:164](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L164)

Gets or sets the dialog message.

***

### theme?

```ts
optional theme?: number;
```

Defined in: [ui/dialogs/index.d.ts:149](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L149)

[Android only] Sets the theme of the Dialog. Usable themes can be found: https://developer.android.com/reference/android/R.style

#### Inherited from

[`CancelableOptions`](CancelableOptions.md).[`theme`](CancelableOptions.md#theme)

***

### title?

```ts
optional title?: string;
```

Defined in: [ui/dialogs/index.d.ts:159](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L159)

Gets or sets the dialog title.
