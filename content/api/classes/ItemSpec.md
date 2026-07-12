---
title: ItemSpec
titleTemplate: :title - API / NativeScript
description: Defines row/column specific properties that apply to GridLayout elements.
contributors: false
---

Defined in: ui/layouts/grid-layout/index.d.ts:8

Defines row/column specific properties that apply to GridLayout elements.

## Constructors

### Constructor

```ts
new ItemSpec(): ItemSpec;
```

Defined in: ui/layouts/grid-layout/index.d.ts:9

#### Returns

`ItemSpec`

### Constructor

```ts
new ItemSpec(value: number, type: GridUnitType): ItemSpec;
```

Defined in: ui/layouts/grid-layout/index.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `type` | [`GridUnitType`](../type-aliases/GridUnitType.md) |

#### Returns

`ItemSpec`

## Properties

### actualLength

```ts
actualLength: number;
```

Defined in: ui/layouts/grid-layout/index.d.ts:15

Gets the actual length of an ItemSpec.

***

### gridUnitType

```ts
gridUnitType: GridUnitType;
```

Defined in: ui/layouts/grid-layout/index.d.ts:20

Returns unit type of this ItemSpec instance.

***

### isAbsolute

```ts
isAbsolute: boolean;
```

Defined in: ui/layouts/grid-layout/index.d.ts:26

Returns true if this ItemSpec instance holds
an absolute (pixel) value.

***

### isAuto

```ts
isAuto: boolean;
```

Defined in: ui/layouts/grid-layout/index.d.ts:32

Returns true if this GridLength instance is
automatic (not specified).

***

### isStar

```ts
isStar: boolean;
```

Defined in: ui/layouts/grid-layout/index.d.ts:38

Returns true if this ItemSpec instance holds weighted proportion
of available space.

***

### value

```ts
value: number;
```

Defined in: ui/layouts/grid-layout/index.d.ts:43

Returns value part of this ItemSpec instance.
