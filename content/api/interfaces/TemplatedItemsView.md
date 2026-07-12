---
title: TemplatedItemsView
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/list-view/index.d.ts:282

## Properties

### items

```ts
items: any[] | ItemsSource;
```

Defined in: ui/list-view/index.d.ts:283

***

### itemTemplate

```ts
itemTemplate: string | Template;
```

Defined in: ui/list-view/index.d.ts:284

***

### itemTemplates?

```ts
optional itemTemplates?: string | KeyedTemplate[];
```

Defined in: ui/list-view/index.d.ts:285

## Methods

### off()

```ts
off(
   event: "itemLoading", 
   callback: (args: EventData) => void, 
   thisArg?: any): void;
```

Defined in: ui/list-view/index.d.ts:288

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"itemLoading"` |
| `callback` | (`args`: [`EventData`](EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

***

### on()

```ts
on(
   event: "itemLoading", 
   callback: (args: ItemEventData) => void, 
   thisArg?: any): void;
```

Defined in: ui/list-view/index.d.ts:287

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"itemLoading"` |
| `callback` | (`args`: [`ItemEventData`](ItemEventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

***

### refresh()

```ts
refresh(): void;
```

Defined in: ui/list-view/index.d.ts:286

#### Returns

`void`
