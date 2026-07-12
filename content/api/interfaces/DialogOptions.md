---
title: DialogOptions
titleTemplate: :title - API / NativeScript
description: Provides options for the dialog.
contributors: false
---

Defined in: ui/dialogs/index.d.ts:185

Provides options for the dialog.

## Extends

- [`CancelableOptions`](CancelableOptions.md)

## Extended by

- [`AlertOptions`](AlertOptions.md)

## Properties

### cancelable?

```ts
optional cancelable?: boolean;
```

Defined in: ui/dialogs/index.d.ts:144

[Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.

#### Inherited from

[`CancelableOptions`](CancelableOptions.md).[`cancelable`](CancelableOptions.md#cancelable)

***

### message?

```ts
optional message?: string;
```

Defined in: ui/dialogs/index.d.ts:194

Gets or sets the dialog message.

***

### theme?

```ts
optional theme?: number;
```

Defined in: ui/dialogs/index.d.ts:149

[Android only] Sets the theme of the Dialog. Usable themes can be found: https://developer.android.com/reference/android/R.style

#### Inherited from

[`CancelableOptions`](CancelableOptions.md).[`theme`](CancelableOptions.md#theme)

***

### title?

```ts
optional title?: string;
```

Defined in: ui/dialogs/index.d.ts:189

Gets or sets the dialog title.
