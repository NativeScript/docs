---
title: InheritedProperty
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

- `InheritedProperty`\<`T`, `U`\>

## Constructors

### Constructor

```ts
new InheritedProperty<T, U>(options: PropertyOptions<T, U>): InheritedProperty<T, U>;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `PropertyOptions`\<`T`, `U`\> |

#### Returns

`InheritedProperty`\<`T`, `U`\>

#### Overrides

```ts
Property<T, U>.constructor
```

## Properties

### configurable

```ts
configurable: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedProperty.configurable
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
InheritedProperty.defaultValue
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
InheritedProperty.defaultValueKey
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
InheritedProperty.enumerable
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
InheritedProperty.get
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
InheritedProperty.getDefault
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
InheritedProperty.isStyleProperty
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
InheritedProperty.key
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
InheritedProperty.name
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
InheritedProperty.nativeValueChange
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
InheritedProperty.overrideHandlers
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
InheritedProperty.set
```

#### Inherited from

```ts
Property.set
```

***

### setInheritedValue

```ts
readonly setInheritedValue: (value: U) => void;
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
InheritedProperty.setInheritedValue
```

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedProperty.setNative
```

#### Inherited from

```ts
Property.setNative
```

***

### sourceKey

```ts
readonly sourceKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedProperty.sourceKey
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
InheritedProperty.isSet
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
InheritedProperty.register
```

#### Inherited from

```ts
Property.register
```
