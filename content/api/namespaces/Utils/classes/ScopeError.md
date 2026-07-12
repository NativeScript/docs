---
title: ScopeError
titleTemplate: :title - API / NativeScript
description: An Error class that provides additional context to an error.
contributors: false
---

Defined in: [utils/debug.d.ts:44](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L44)

An Error class that provides additional context to an error.

## Extends

- `Error`

## Extended by

- [`SourceError`](SourceError.md)

## Constructors

### Constructor

```ts
new ScopeError(child: Error, message?: string): ScopeError;
```

Defined in: [utils/debug.d.ts:50](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L50)

Creates a new ScopeError providing addtional context to the child error.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `child` | `Error` | The child error to extend. |
| `message?` | `string` | Additional message to prepend to the child error. |

#### Returns

`ScopeError`

#### Overrides

```ts
Error.constructor
```
