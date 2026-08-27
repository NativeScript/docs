---
title: TemplatedItemsView
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/list-view/index.d.ts:294](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L294)

## Properties

### items

```ts
items: any[] | ItemsSource;
```

Defined in: [ui/list-view/index.d.ts:295](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L295)

***

### itemTemplate

```ts
itemTemplate: string | Template;
```

Defined in: [ui/list-view/index.d.ts:296](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L296)

***

### itemTemplates?

```ts
optional itemTemplates?: string | KeyedTemplate[];
```

Defined in: [ui/list-view/index.d.ts:297](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L297)

## Methods

### off()

```ts
off(
   event: "itemLoading", 
   callback: (args: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/list-view/index.d.ts:300](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L300)

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

Defined in: [ui/list-view/index.d.ts:299](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L299)

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

Defined in: [ui/list-view/index.d.ts:298](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/list-view/index.d.ts#L298)

#### Returns

`void`
