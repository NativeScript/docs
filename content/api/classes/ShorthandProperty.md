---
title: ShorthandProperty
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Style`](Style.md) |
| `P` |

## Implements

- `ShorthandProperty`\<`T`, `P`\>

## Constructors

### Constructor

```ts
new ShorthandProperty<T, P>(options: ShorthandPropertyOptions<P>): ShorthandProperty<T, P>;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `ShorthandPropertyOptions`\<`P`\> |

#### Returns

`ShorthandProperty`\<`T`, `P`\>

## Properties

### cssLocalName

```ts
readonly cssLocalName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.cssLocalName
```

***

### cssName

```ts
readonly cssName: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.cssName
```

***

### cssValueDescriptor

```ts
protected readonly cssValueDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.cssValueDescriptor
```

***

### key

```ts
readonly key: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.key
```

***

### localValueDescriptor

```ts
protected readonly localValueDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.localValueDescriptor
```

***

### name

```ts
readonly name: string;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.name
```

***

### propertyBagDescriptor

```ts
protected readonly propertyBagDescriptor: PropertyDescriptor;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.propertyBagDescriptor
```

***

### sourceKey

```ts
readonly sourceKey: symbol;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Implementation of

```ts
ShorthandProperty.sourceKey
```

## Methods

### register()

```ts
register(cls: typeof Style): void;
```

Defined in: [ui/core/properties/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/properties/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cls` | *typeof* [`Style`](Style.md) |

#### Returns

`void`

#### Implementation of

```ts
ShorthandProperty.register
```
