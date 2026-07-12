---
title: alert
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function alert(message: string | number | boolean): Promise<void>;
```

Defined in: [ui/dialogs/index.d.ts:66](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L66)

The alert() method displays an alert box with a specified message.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` \| `number` \| `boolean` | Specifies the text to display in the alert box. |

### Returns

`Promise`\<`void`\>

## Call Signature

```ts
function alert(options: AlertOptions): Promise<void>;
```

Defined in: [ui/dialogs/index.d.ts:72](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/dialogs/index.d.ts#L72)

The alert() method displays an alert box with a specified message.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`AlertOptions`](../interfaces/AlertOptions.md) | Specifies the options for the alert box. |

### Returns

`Promise`\<`void`\>
