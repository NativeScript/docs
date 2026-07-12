---
title: Property
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/core/properties/index.d.ts:13

## Extended by

- [`CoercibleProperty`](CoercibleProperty.md)
- [`InheritedProperty`](InheritedProperty.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ViewBase`](ViewBase.md) |
| `U` |

## Implements

- `TypedPropertyDescriptor`\<`U`\>
- `Property`\<`T`, `U`\>

## Constructors

### Constructor

```ts
new Property<T, U>(options: PropertyOptions<T, U>): Property<T, U>;
```

Defined in: ui/core/properties/index.d.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `PropertyOptions`\<`T`, `U`\> |

#### Returns

`Property`\<`T`, `U`\>

## Properties

### configurable

```ts
configurable: boolean;
```

Defined in: ui/core/properties/index.d.ts:27

#### Implementation of

```ts
TypedPropertyDescriptor.configurable
```

***

### defaultValue

```ts
readonly defaultValue: U;
```

Defined in: ui/core/properties/index.d.ts:20

#### Implementation of

```ts
Property.defaultValue
```

***

### defaultValueKey

```ts
readonly defaultValueKey: symbol;
```

Defined in: ui/core/properties/index.d.ts:19

#### Implementation of

```ts
Property.defaultValueKey
```

***

### enumerable

```ts
enumerable: boolean;
```

Defined in: ui/core/properties/index.d.ts:26

#### Implementation of

```ts
TypedPropertyDescriptor.enumerable
```

***

### get

```ts
get: () => U;
```

Defined in: ui/core/properties/index.d.ts:23

#### Returns

`U`

#### Implementation of

```ts
TypedPropertyDescriptor.get
```

***

### getDefault

```ts
readonly getDefault: symbol;
```

Defined in: ui/core/properties/index.d.ts:17

#### Implementation of

```ts
Property.getDefault
```

***

### isStyleProperty

```ts
isStyleProperty: boolean;
```

Defined in: ui/core/properties/index.d.ts:22

#### Implementation of

```ts
Property.isStyleProperty
```

***

### key

```ts
readonly key: symbol;
```

Defined in: ui/core/properties/index.d.ts:16

#### Implementation of

```ts
Property.key
```

***

### name

```ts
readonly name: string;
```

Defined in: ui/core/properties/index.d.ts:15

#### Implementation of

```ts
Property.name
```

***

### nativeValueChange

```ts
readonly nativeValueChange: (owner: T, value: U) => void;
```

Defined in: ui/core/properties/index.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `T` |
| `value` | `U` |

#### Returns

`void`

#### Implementation of

```ts
Property.nativeValueChange
```

***

### overrideHandlers

```ts
overrideHandlers: (options: PropertyOptions<T, U>) => void;
```

Defined in: ui/core/properties/index.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `PropertyOptions`\<`T`, `U`\> |

#### Returns

`void`

#### Implementation of

```ts
Property.overrideHandlers
```

***

### set

```ts
set: (value: U) => void;
```

Defined in: ui/core/properties/index.d.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `U` |

#### Returns

`void`

#### Implementation of

```ts
TypedPropertyDescriptor.set
```

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: ui/core/properties/index.d.ts:18

#### Implementation of

```ts
Property.setNative
```

## Methods

### isSet()

```ts
isSet(instance: T): boolean;
```

Defined in: ui/core/properties/index.d.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `T` |

#### Returns

`boolean`

#### Implementation of

```ts
Property.isSet
```

***

### register()

```ts
register(cls: {
  prototype: T;
}): void;
```

Defined in: ui/core/properties/index.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cls` | \{ `prototype`: `T`; \} |
| `cls.prototype` | `T` |

#### Returns

`void`

#### Implementation of

```ts
Property.register
```
