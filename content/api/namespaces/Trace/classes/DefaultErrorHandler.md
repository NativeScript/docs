---
title: DefaultErrorHandler
titleTemplate: :title - API / NativeScript
description: An interface used to for handling trace error
contributors: false
---

Defined in: [trace/index.d.ts:134](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/trace/index.d.ts#L134)

An interface used to for handling trace error

## Implements

- [`TraceErrorHandler`](../../../../interfaces/TraceErrorHandler.md)

## Constructors

### Constructor

```ts
new DefaultErrorHandler(): DefaultErrorHandler;
```

#### Returns

`DefaultErrorHandler`

## Methods

### handlerError()

```ts
handlerError(error: any): void;
```

Defined in: [trace/index.d.ts:135](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/trace/index.d.ts#L135)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `any` |

#### Returns

`void`

#### Implementation of

[`TraceErrorHandler`](../../../../interfaces/TraceErrorHandler.md).[`handlerError`](../../../../interfaces/TraceErrorHandler.md#handlererror)
