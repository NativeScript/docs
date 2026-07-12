---
title: login
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function login(
   message: string, 
   userNameHint?: string, 
   passwordHint?: string, 
   userName?: string, 
password?: string): Promise<LoginResult>;
```

Defined in: ui/dialogs/index.d.ts:107

The login() method displays a login dialog box that prompts the visitor for user name and password.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The text to display in the dialog box. |
| `userNameHint?` | `string` | The default text to display as a hint in the username input. Optional. |
| `passwordHint?` | `string` | The default text to display as a hint in the password input. Optional. |
| `userName?` | `string` | The default text to display in the user name input box. Optional. |
| `password?` | `string` | The default text to display in the password input box. Optional. |

### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

## Call Signature

```ts
function login(
   message: string, 
   userNameHint?: string, 
passwordHint?: string): Promise<LoginResult>;
```

Defined in: ui/dialogs/index.d.ts:115

The login() method displays a login dialog box that prompts the visitor for user name and password.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The text to display in the dialog box. |
| `userNameHint?` | `string` | The default text to display as a hint in the username input. Optional. |
| `passwordHint?` | `string` | The default text to display as a hint in the password input. Optional. |

### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

## Call Signature

```ts
function login(options: LoginOptions): Promise<LoginResult>;
```

Defined in: ui/dialogs/index.d.ts:121

The login() method displays a login dialog box that prompts the visitor for user name and password.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`LoginOptions`](../interfaces/LoginOptions.md) | The options for the dialog box. |

### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>
