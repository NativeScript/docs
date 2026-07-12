---
title: confirm
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function confirm(message: string): Promise<boolean>;
```

Defined in: [ui/dialogs/index.d.ts:78](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L78)

The confirm() method displays a dialog box with a specified message.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | Specifies the text to display in the confirm box. |

### Returns

`Promise`\<`boolean`\>

## Call Signature

```ts
function confirm(options: ConfirmOptions): Promise<boolean>;
```

Defined in: [ui/dialogs/index.d.ts:84](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L84)

The confirm() method displays a dialog box with a specified message.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ConfirmOptions`](../interfaces/ConfirmOptions.md) | Specifies the options for the confirm box. |

### Returns

`Promise`\<`boolean`\>
