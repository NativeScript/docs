---
title: CssProperty
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

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

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

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

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### cssName

```ts
readonly cssName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### cssValueDescriptor

```ts
protected readonly cssValueDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### defaultValue

```ts
readonly defaultValue: U;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### defaultValueKey

```ts
readonly defaultValueKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### getDefault

```ts
readonly getDefault: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### isStyleProperty

```ts
isStyleProperty: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### key

```ts
readonly key: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### localValueDescriptor

```ts
protected readonly localValueDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### name

```ts
readonly name: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

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

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

***

### sourceKey

```ts
readonly sourceKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

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
