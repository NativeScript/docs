---
title: CssProperty
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/core/properties/index.d.ts:43

## Extended by

- [`InheritedCssProperty`](InheritedCssProperty.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Style`](Style.md) |
| `U` |

## Constructors

### Constructor

```ts
new CssProperty<T, U>(options: CssPropertyOptions<T, U>): CssProperty<T, U>;
```

Defined in: ui/core/properties/index.d.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CssPropertyOptions`\<`T`, `U`\> |

#### Returns

`CssProperty`\<`T`, `U`\>

## Properties

### cssLocalName

```ts
readonly cssLocalName: string;
```

Defined in: ui/core/properties/index.d.ts:47

***

### cssName

```ts
readonly cssName: string;
```

Defined in: ui/core/properties/index.d.ts:46

***

### cssValueDescriptor

```ts
protected readonly cssValueDescriptor: PropertyDescriptor;
```

Defined in: ui/core/properties/index.d.ts:48

***

### defaultValue

```ts
readonly defaultValue: U;
```

Defined in: ui/core/properties/index.d.ts:56

***

### defaultValueKey

```ts
readonly defaultValueKey: symbol;
```

Defined in: ui/core/properties/index.d.ts:55

***

### getDefault

```ts
readonly getDefault: symbol;
```

Defined in: ui/core/properties/index.d.ts:52

***

### isStyleProperty

```ts
isStyleProperty: boolean;
```

Defined in: ui/core/properties/index.d.ts:50

***

### key

```ts
readonly key: symbol;
```

Defined in: ui/core/properties/index.d.ts:51

***

### localValueDescriptor

```ts
protected readonly localValueDescriptor: PropertyDescriptor;
```

Defined in: ui/core/properties/index.d.ts:49

***

### name

```ts
readonly name: string;
```

Defined in: ui/core/properties/index.d.ts:45

***

### overrideHandlers

```ts
overrideHandlers: (options: CssPropertyOptions<T, U>) => void;
```

Defined in: ui/core/properties/index.d.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CssPropertyOptions`\<`T`, `U`\> |

#### Returns

`void`

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: ui/core/properties/index.d.ts:53

***

### sourceKey

```ts
readonly sourceKey: symbol;
```

Defined in: ui/core/properties/index.d.ts:54

## Methods

### isSet()

```ts
isSet(instance: T): boolean;
```

Defined in: ui/core/properties/index.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `T` |

#### Returns

`boolean`

***

### register()

```ts
register(cls: {
  prototype: T;
}): void;
```

Defined in: ui/core/properties/index.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cls` | \{ `prototype`: `T`; \} |
| `cls.prototype` | `T` |

#### Returns

`void`
