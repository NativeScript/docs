---
title: AndroidActivityCallbacks
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/frame/index.d.ts:507](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L507)

## Methods

### getRootView()

```ts
getRootView(): View;
```

Defined in: [ui/frame/index.d.ts:508](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L508)

#### Returns

[`View`](../classes/View.md)

***

### onActivityResult()

```ts
onActivityResult(
   activity: any, 
   requestCode: number, 
   resultCode: number, 
   data: any, 
   superFunc: Function): any;
```

Defined in: [ui/frame/index.d.ts:519](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L519)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `requestCode` | `number` |
| `resultCode` | `number` |
| `data` | `any` |
| `superFunc` | `Function` |

#### Returns

`any`

***

### onBackPressed()

```ts
onBackPressed(activity: any, superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:517](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L517)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onCreate()

```ts
onCreate(
   activity: any, 
   savedInstanceState: any, 
   intent: any, 
   superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:511](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L511)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `savedInstanceState` | `any` |
| `intent` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onDestroy()

```ts
onDestroy(activity: any, superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:516](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L516)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onNewIntent()

```ts
onNewIntent(
   activity: any, 
   intent: any, 
   superSetIntentFunc: Function, 
   superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:520](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L520)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `intent` | `any` |
| `superSetIntentFunc` | `Function` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onPostResume()

```ts
onPostResume(activity: any, superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:515](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L515)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onRequestPermissionsResult()

```ts
onRequestPermissionsResult(
   activity: any, 
   requestCode: number, 
   permissions: string[], 
   grantResults: number[], 
   superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:518](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L518)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `requestCode` | `number` |
| `permissions` | `string`[] |
| `grantResults` | `number`[] |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onSaveInstanceState()

```ts
onSaveInstanceState(
   activity: any, 
   outState: any, 
   superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:512](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L512)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `outState` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onStart()

```ts
onStart(activity: any, superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:513](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L513)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### onStop()

```ts
onStop(activity: any, superFunc: Function): void;
```

Defined in: [ui/frame/index.d.ts:514](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L514)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `superFunc` | `Function` |

#### Returns

`void`

***

### resetActivityContent()

```ts
resetActivityContent(activity: any, view?: View): void;
```

Defined in: [ui/frame/index.d.ts:509](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L509)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |
| `view?` | [`View`](../classes/View.md) |

#### Returns

`void`
