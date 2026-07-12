---
title: AddChildFromBuilder
titleTemplate: :title - API / NativeScript
description: Defines an interface for adding a child element declared in xml.
contributors: false
---

Defined in: ui/core/view/index.d.ts:1195

Defines an interface for adding a child element declared in xml.

## Methods

### \_addChildFromBuilder()

```ts
_addChildFromBuilder(name: string, value: any): void;
```

Defined in: ui/core/view/index.d.ts:1202

Called for every child element declared in xml.
This method will add a child element (value) to current element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the element. |
| `value` | `any` | Value of the element. |

#### Returns

`void`
