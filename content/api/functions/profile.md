---
title: profile
titleTemplate: :title - API / NativeScript
contributors: false
---

## Call Signature

```ts
function profile(name?: string): MethodDecorator;
```

Defined in: profiling/index.d.ts:98

Method decorator factory. It will intercept the method call and start and pause a timer before and after the method call.
Works only if profiling is enabled.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name?` | `string` | Name of the timer which will be used for method calls. If not provided - the name of the method will be used. |

### Returns

`MethodDecorator`

## Call Signature

```ts
function profile<F>(fn: F): F;
```

Defined in: profiling/index.d.ts:105

Function factory. It will intercept the function call and start and pause a timer before and after the function call. Works only if profiling is enabled.
Works only if profiling is enabled.

### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* `Function` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `F` | The function to wrap. Uses the function name to track the times. |

### Returns

`F`

## Call Signature

```ts
function profile<F>(name: string, fn: F): F;
```

Defined in: profiling/index.d.ts:112

Function factory. It will intercept the function call and start and pause a timer before and after the function call. Works only if profiling is enabled.

### Type Parameters

| Type Parameter |
| ------ |
| `F` *extends* `Function` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name used to track calls and times. |
| `fn` | `F` | The function to wrap. |

### Returns

`F`

## Call Signature

```ts
function profile<T>(
   target: Object, 
   propertyKey: string | symbol, 
descriptor: TypedPropertyDescriptor<T>): void | TypedPropertyDescriptor<T>;
```

Defined in: profiling/index.d.ts:117

Method decorator. It will intercept the method calls and start and pause a timer before and after the method call. Works only if profiling is enabled.

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |
| `descriptor` | `TypedPropertyDescriptor`\<`T`\> |

### Returns

`void` \| `TypedPropertyDescriptor`\<`T`\>

## Call Signature

```ts
function profile(): any;
```

Defined in: profiling/index.d.ts:118

Method decorator factory. It will intercept the method call and start and pause a timer before and after the method call.
Works only if profiling is enabled.

### Returns

`any`
