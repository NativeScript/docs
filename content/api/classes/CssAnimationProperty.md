---
title: CssAnimationProperty
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Style`](Style.md) |
| `U` |

## Implements

- `CssAnimationProperty`\<`T`, `U`\>

## Constructors

### Constructor

```ts
new CssAnimationProperty<T, U>(options: CssAnimationPropertyOptions<T, U>): CssAnimationProperty<T, U>;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CssAnimationPropertyOptions`\<`T`, `U`\> |

#### Returns

`CssAnimationProperty`\<`T`, `U`\>

## Properties

### \_valueConverter?

```ts
optional _valueConverter?: (value: string) => any;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`any`

#### Implementation of

```ts
CssAnimationProperty._valueConverter
```

***

### cssLocalName

```ts
readonly cssLocalName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.cssLocalName
```

***

### cssName

```ts
readonly cssName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.cssName
```

***

### defaultValue

```ts
readonly defaultValue: U;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.defaultValue
```

***

### defaultValueKey

```ts
readonly defaultValueKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.defaultValueKey
```

***

### getDefault

```ts
readonly getDefault: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.getDefault
```

***

### isStyleProperty

```ts
isStyleProperty: boolean;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.isStyleProperty
```

***

### key

```ts
readonly key: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.key
```

***

### keyframe

```ts
readonly keyframe: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.keyframe
```

***

### name

```ts
readonly name: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.name
```

***

### register

```ts
readonly register: (cls: {
  prototype: any;
}) => void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cls` | \{ `prototype`: `any`; \} |
| `cls.prototype` | `any` |

#### Returns

`void`

#### Implementation of

```ts
CssAnimationProperty.register
```

***

### setNative

```ts
readonly setNative: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
CssAnimationProperty.setNative
```

## Methods

### \_initDefaultNativeValue()

```ts
_initDefaultNativeValue(target: T): void;
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
CssAnimationProperty._initDefaultNativeValue
```

***

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
CssAnimationProperty.isSet
```

***

### \_getByCssName()

```ts
static _getByCssName(name: string): CssAnimationProperty<any, any>;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`CssAnimationProperty`\<`any`, `any`\>

***

### \_getPropertyNames()

```ts
static _getPropertyNames(): string[];
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Returns

`string`[]
