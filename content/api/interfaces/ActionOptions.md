---
title: ActionOptions
titleTemplate: :title - API / NativeScript
description: Provides options for the dialog.
contributors: false
---

Defined in: ui/dialogs/index.d.ts:155

Provides options for the dialog.

## Extends

- [`CancelableOptions`](CancelableOptions.md)

## Properties

### actions?

```ts
optional actions?: string[];
```

Defined in: ui/dialogs/index.d.ts:174

Gets or sets the list of available actions.

***

### cancelable?

```ts
optional cancelable?: boolean;
```

Defined in: ui/dialogs/index.d.ts:144

[Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.

#### Inherited from

[`CancelableOptions`](CancelableOptions.md).[`cancelable`](CancelableOptions.md#cancelable)

***

### cancelButtonText?

```ts
optional cancelButtonText?: string;
```

Defined in: ui/dialogs/index.d.ts:169

Gets or sets the Cancel button text.

***

### destructiveActionsIndexes?

```ts
optional destructiveActionsIndexes?: number[];
```

Defined in: ui/dialogs/index.d.ts:179

[iOS only] Gets or sets the indexes of destructive actions.

***

### message?

```ts
optional message?: string;
```

Defined in: ui/dialogs/index.d.ts:164

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

Defined in: ui/dialogs/index.d.ts:159

Gets or sets the dialog title.
