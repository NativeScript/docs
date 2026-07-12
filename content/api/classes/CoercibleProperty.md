---
title: CoercibleProperty
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

## Extends

- [`Property`](Property.md)\<`T`, `U`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ViewBase`](ViewBase.md) |
| `U` |

## Implements

- `CoercibleProperty`\<`T`, `U`\>

## Constructors

### Constructor

```ts
new CoercibleProperty<T, U>(options: CoerciblePropertyOptions<T, U>): CoercibleProperty<T, U>;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CoerciblePropertyOptions`\<`T`, `U`\> |

#### Returns

`CoercibleProperty`\<`T`, `U`\>

#### Overrides

```ts
Property<T, U>.constructor
```

## Properties

### coerce

```ts
readonly coerce: (target: T) => void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `T` |

#### Returns

`void`

#### Implementation of

```ts
CoercibleProperty.coerce
```

***

### configurable

```ts
configurable: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.configurable
```

#### Inherited from

```ts
Property.configurable
```

***

### defaultValue

```ts
readonly defaultValue: U;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.defaultValue
```

#### Inherited from

```ts
Property.defaultValue
```

***

### defaultValueKey

```ts
readonly defaultValueKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.defaultValueKey
```

#### Inherited from

```ts
Property.defaultValueKey
```

***

### enumerable

```ts
enumerable: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.enumerable
```

#### Inherited from

```ts
Property.enumerable
```

***

### get

```ts
get: () => U;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Returns

`U`

#### Implementation of

```ts
CoercibleProperty.get
```

#### Inherited from

```ts
Property.get
```

***

### getDefault

```ts
readonly getDefault: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.getDefault
```

#### Inherited from

```ts
Property.getDefault
```

***

### isStyleProperty

```ts
isStyleProperty: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.isStyleProperty
```

#### Inherited from

```ts
Property.isStyleProperty
```

***

### key

```ts
readonly key: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.key
```

#### Inherited from

```ts
Property.key
```

***

### name

```ts
readonly name: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.name
```

#### Inherited from

```ts
Property.name
```

***

### nativeValueChange

```ts
readonly nativeValueChange: (owner: T, value: U) => void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | `T` |
| `value` | `U` |

#### Returns

`void`

#### Implementation of

```ts
CoercibleProperty.nativeValueChange
```

#### Inherited from

```ts
Property.nativeValueChange
```

***

### overrideHandlers

```ts
overrideHandlers: (options: PropertyOptions<T, U>) => void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `PropertyOptions`\<`T`, `U`\> |

#### Returns

`void`

#### Implementation of

```ts
CoercibleProperty.overrideHandlers
```

#### Inherited from

```ts
Property.overrideHandlers
```

***

### set

```ts
set: (value: U) => void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `U` |

#### Returns

`void`

#### Implementation of

```ts
CoercibleProperty.set
```

#### Inherited from

```ts
Property.set
```

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CoercibleProperty.setNative
```

#### Inherited from

```ts
Property.setNative
```

## Methods

### isSet()

```ts
isSet(instance: T): boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `T` |

#### Returns

`boolean`

#### Implementation of

```ts
CoercibleProperty.isSet
```

#### Inherited from

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

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cls` | \{ `prototype`: `T`; \} |
| `cls.prototype` | `T` |

#### Returns

`void`

#### Implementation of

```ts
CoercibleProperty.register
```

#### Inherited from

```ts
Property.register
```
