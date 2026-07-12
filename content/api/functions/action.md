---
title: action
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function action(
   message: string, 
   cancelButtonText: string, 
actions: string[]): Promise<string>;
```

Defined in: [ui/dialogs/index.d.ts:129](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L129)

The action() method displays a action box that prompts the visitor to choose some action.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The text to display in the dialog box. |
| `cancelButtonText` | `string` | The text to display in the cancel button. |
| `actions` | `string`[] | List of available actions. |

### Returns

`Promise`\<`string`\>

## Call Signature

```ts
function action(options: ActionOptions): Promise<string>;
```

Defined in: [ui/dialogs/index.d.ts:135](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L135)

The action() method displays a action box that prompts the visitor to choose some action.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`ActionOptions`](../interfaces/ActionOptions.md) | The options for the dialog box. |

### Returns

`Promise`\<`string`\>
