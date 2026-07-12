---
title: ConfirmOptions
titleTemplate: :title - API / NativeScript
description: Provides options for the confirm dialog.
contributors: false
---

Defined in: ui/dialogs/index.d.ts:210

Provides options for the confirm dialog.

## Extends

- [`AlertOptions`](AlertOptions.md)

## Extended by

- [`PromptOptions`](PromptOptions.md)
- [`LoginOptions`](LoginOptions.md)

## Properties

### cancelable?

```ts
optional cancelable?: boolean;
```

Defined in: ui/dialogs/index.d.ts:144

[Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.

#### Inherited from

[`AlertOptions`](AlertOptions.md).[`cancelable`](AlertOptions.md#cancelable)

***

### cancelButtonText?

```ts
optional cancelButtonText?: string;
```

Defined in: ui/dialogs/index.d.ts:214

Gets or sets the Cancel button text.

***

### message?

```ts
optional message?: string;
```

Defined in: ui/dialogs/index.d.ts:194

Gets or sets the dialog message.

#### Inherited from

[`AlertOptions`](AlertOptions.md).[`message`](AlertOptions.md#message)

***

### neutralButtonText?

```ts
optional neutralButtonText?: string;
```

Defined in: ui/dialogs/index.d.ts:219

Gets or sets the neutral button text.

***

### okButtonText?

```ts
optional okButtonText?: string;
```

Defined in: ui/dialogs/index.d.ts:204

Gets or sets the OK button text.

#### Inherited from

[`AlertOptions`](AlertOptions.md).[`okButtonText`](AlertOptions.md#okbuttontext)

***

### theme?

```ts
optional theme?: number;
```

Defined in: ui/dialogs/index.d.ts:149

[Android only] Sets the theme of the Dialog. Usable themes can be found: https://developer.android.com/reference/android/R.style

#### Inherited from

[`AlertOptions`](AlertOptions.md).[`theme`](AlertOptions.md#theme)

***

### title?

```ts
optional title?: string;
```

Defined in: ui/dialogs/index.d.ts:189

Gets or sets the dialog title.

#### Inherited from

[`AlertOptions`](AlertOptions.md).[`title`](AlertOptions.md#title)
