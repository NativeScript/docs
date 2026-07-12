---
title: AndroidActivityCallbacks
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/frame/index.d.ts:497

## Methods

### getRootView()

```ts
getRootView(): View;
```

Defined in: ui/frame/index.d.ts:498

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

Defined in: ui/frame/index.d.ts:509

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

Defined in: ui/frame/index.d.ts:507

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

Defined in: ui/frame/index.d.ts:501

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

Defined in: ui/frame/index.d.ts:506

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

Defined in: ui/frame/index.d.ts:510

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

Defined in: ui/frame/index.d.ts:505

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

Defined in: ui/frame/index.d.ts:508

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

Defined in: ui/frame/index.d.ts:502

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

Defined in: ui/frame/index.d.ts:503

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

Defined in: ui/frame/index.d.ts:504

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

Defined in: ui/frame/index.d.ts:499

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activity` | `any` |

#### Returns

`void`
