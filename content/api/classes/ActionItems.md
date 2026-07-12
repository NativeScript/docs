---
title: ActionItems
titleTemplate: :title - API / NativeScript
description: Represents a collection of ActionItems.
contributors: false
---

Defined in: ui/action-bar/index.d.ts:93

Represents a collection of ActionItems.

## Constructors

### Constructor

```ts
new ActionItems(): ActionItems;
```

#### Returns

`ActionItems`

## Methods

### addItem()

```ts
addItem(item: ActionItem): void;
```

Defined in: ui/action-bar/index.d.ts:98

Adds an item to the collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`ActionItem`](ActionItem.md) | the item to be added |

#### Returns

`void`

***

### getItemAt()

```ts
getItemAt(index: number): ActionItem;
```

Defined in: ui/action-bar/index.d.ts:115

Gets an item at a specified index.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The index. |

#### Returns

[`ActionItem`](ActionItem.md)

***

### getItems()

```ts
getItems(): ActionItem[];
```

Defined in: ui/action-bar/index.d.ts:109

Gets an array of the current action items in the collection.

#### Returns

[`ActionItem`](ActionItem.md)[]

***

### removeItem()

```ts
removeItem(item: ActionItem): void;
```

Defined in: ui/action-bar/index.d.ts:104

Removes an item to the collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`ActionItem`](ActionItem.md) | The item to be removed. |

#### Returns

`void`
