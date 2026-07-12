---
title: prompt
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function prompt(message: string, defaultText?: string): Promise<PromptResult>;
```

Defined in: ui/dialogs/index.d.ts:91

The prompt() method displays a dialog box that prompts the visitor for input.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The text to display in the dialog box. |
| `defaultText?` | `string` | The default text to display in the input box. Optional. |

### Returns

`Promise`\<[`PromptResult`](../interfaces/PromptResult.md)\>

## Call Signature

```ts
function prompt(options: PromptOptions): Promise<PromptResult>;
```

Defined in: ui/dialogs/index.d.ts:97

The prompt() method displays a dialog box that prompts the visitor for input.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`PromptOptions`](../interfaces/PromptOptions.md) | The options for the dialog box. |

### Returns

`Promise`\<[`PromptResult`](../interfaces/PromptResult.md)\>
