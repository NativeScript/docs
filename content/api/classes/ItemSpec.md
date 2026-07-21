---
title: ItemSpec
titleTemplate: :title - API / NativeScript
description: Defines row/column specific properties that apply to GridLayout elements.
contributors: false
---

Defined in: [ui/layouts/grid-layout/index.d.ts:8](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L8)

Defines row/column specific properties that apply to GridLayout elements.

## Constructors

### Constructor

```ts
new ItemSpec(): ItemSpec;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:9](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L9)

#### Returns

`ItemSpec`

### Constructor

```ts
new ItemSpec(value: number, type: GridUnitType): ItemSpec;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:10](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L10)

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

Defined in: [ui/layouts/grid-layout/index.d.ts:15](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L15)

Gets the actual length of an ItemSpec.

***

### gridUnitType

```ts
gridUnitType: GridUnitType;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:20](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L20)

Returns unit type of this ItemSpec instance.

***

### isAbsolute

```ts
isAbsolute: boolean;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:26](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L26)

Returns true if this ItemSpec instance holds
an absolute (pixel) value.

***

### isAuto

```ts
isAuto: boolean;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:32](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L32)

Returns true if this GridLength instance is
automatic (not specified).

***

### isStar

```ts
isStar: boolean;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:38](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L38)

Returns true if this ItemSpec instance holds weighted proportion
of available space.

***

### value

```ts
value: number;
```

Defined in: [ui/layouts/grid-layout/index.d.ts:43](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/layouts/grid-layout/index.d.ts#L43)

Returns value part of this ItemSpec instance.
