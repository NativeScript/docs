---
title: AndroidActivityCallbacks
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/frame/index.d.ts:497](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L497)

## Methods

### getRootView()

```ts
getRootView(): View;
```

Defined in: [ui/frame/index.d.ts:498](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L498)

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

Defined in: [ui/frame/index.d.ts:509](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L509)

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

Defined in: [ui/frame/index.d.ts:507](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L507)

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

Defined in: [ui/frame/index.d.ts:501](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L501)

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

Defined in: [ui/frame/index.d.ts:506](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L506)

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

Defined in: [ui/frame/index.d.ts:510](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L510)

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

Defined in: [ui/frame/index.d.ts:505](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L505)

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

Defined in: [ui/frame/index.d.ts:508](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L508)

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

Defined in: [ui/frame/index.d.ts:502](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L502)

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

Defined in: [ui/frame/index.d.ts:503](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L503)

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

Defined in: [ui/frame/index.d.ts:504](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L504)

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
resetActivityContent(activity: any): void;
```

Defined in: [ui/frame/index.d.ts:499](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L499)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |

#### Returns

`void`
