---
title: WrappedValue
titleTemplate: :title - API / NativeScript
description: Helper class that is used to fire property change even when real object is the same. By default property change will not be fired for a same object. By wrapp...
contributors: false
---

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Helper class that is used to fire property change even when real object is the same.
By default property change will not be fired for a same object.
By wrapping object into a WrappedValue instance `same object restriction` will be passed.

## Constructors

### Constructor

```ts
new WrappedValue(wrapped: any): WrappedValue;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Creates an instance of WrappedValue object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `wrapped` | `any` | the real value which should be wrapped. |

#### Returns

`WrappedValue`

## Properties

### wrapped

```ts
wrapped: any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Property which holds the real value.

## Methods

### unwrap()

```ts
static unwrap(value: any): any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Gets the real value of previously wrappedValue.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `any` | Value that should be unwraped. If there is no wrappedValue property of the value object then value will be returned. |

#### Returns

`any`

***

### wrap()

```ts
static wrap(value: any): any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Returns an instance of WrappedValue. The actual instance is get from a WrappedValues pool.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `any` | Value that should be wrapped. |

#### Returns

`any`
