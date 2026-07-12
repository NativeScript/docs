---
title: alert
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function alert(message: string | number | boolean): Promise<void>;
```

Defined in: ui/dialogs/index.d.ts:66

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

Defined in: ui/dialogs/index.d.ts:72

The alert() method displays an alert box with a specified message.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`AlertOptions`](../interfaces/AlertOptions.md) | Specifies the options for the alert box. |

### Returns

`Promise`\<`void`\>
