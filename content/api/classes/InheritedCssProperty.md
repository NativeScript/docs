---
title: InheritedCssProperty
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

## Extends

- [`CssProperty`](CssProperty.md)\<`T`, `U`\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Style`](Style.md) |
| `U` |

## Implements

- `InheritedCssProperty`\<`T`, `U`\>

## Constructors

### Constructor

```ts
new InheritedCssProperty<T, U>(options: CssPropertyOptions<T, U>): InheritedCssProperty<T, U>;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CssPropertyOptions`\<`T`, `U`\> |

#### Returns

`InheritedCssProperty`\<`T`, `U`\>

#### Overrides

```ts
CssProperty<T, U>.constructor
```

## Properties

### cssLocalName

```ts
readonly cssLocalName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.cssLocalName
```

#### Inherited from

```ts
CssProperty.cssLocalName
```

***

### cssName

```ts
readonly cssName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.cssName
```

#### Inherited from

```ts
CssProperty.cssName
```

***

### cssValueDescriptor

```ts
protected readonly cssValueDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.cssValueDescriptor
```

#### Inherited from

```ts
CssProperty.cssValueDescriptor
```

***

### defaultValue

```ts
readonly defaultValue: U;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.defaultValue
```

#### Inherited from

```ts
CssProperty.defaultValue
```

***

### defaultValueKey

```ts
readonly defaultValueKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.defaultValueKey
```

#### Inherited from

```ts
CssProperty.defaultValueKey
```

***

### getDefault

```ts
readonly getDefault: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.getDefault
```

#### Inherited from

```ts
CssProperty.getDefault
```

***

### isStyleProperty

```ts
isStyleProperty: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.isStyleProperty
```

#### Inherited from

```ts
CssProperty.isStyleProperty
```

***

### key

```ts
readonly key: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.key
```

#### Inherited from

```ts
CssProperty.key
```

***

### localValueDescriptor

```ts
protected readonly localValueDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.localValueDescriptor
```

#### Inherited from

```ts
CssProperty.localValueDescriptor
```

***

### name

```ts
readonly name: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.name
```

#### Inherited from

```ts
CssProperty.name
```

***

### overrideHandlers

```ts
overrideHandlers: (options: CssPropertyOptions<T, U>) => void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CssPropertyOptions`\<`T`, `U`\> |

#### Returns

`void`

#### Implementation of

```ts
InheritedCssProperty.overrideHandlers
```

#### Inherited from

```ts
CssProperty.overrideHandlers
```

***

### setInheritedValue

```ts
setInheritedValue: (value: U) => void;
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
InheritedCssProperty.setInheritedValue
```

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.setNative
```

#### Inherited from

```ts
CssProperty.setNative
```

***

### sourceKey

```ts
readonly sourceKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
InheritedCssProperty.sourceKey
```

#### Inherited from

```ts
CssProperty.sourceKey
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
InheritedCssProperty.isSet
```

#### Inherited from

```ts
CssProperty.isSet
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
InheritedCssProperty.register
```

#### Inherited from

```ts
CssProperty.register
```
