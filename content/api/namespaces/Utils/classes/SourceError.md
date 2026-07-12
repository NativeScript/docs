---
title: SourceError
titleTemplate: :title - API / NativeScript
description: Represents a scope error providing addiot
contributors: false
---

Defined in: utils/debug.d.ts:56

Represents a scope error providing addiot

## Extends

- [`ScopeError`](ScopeError.md)

## Constructors

### Constructor

```ts
new SourceError(
   child: Error, 
   source: Source, 
   message?: string): SourceError;
```

Defined in: utils/debug.d.ts:63

Creates a new SourceError by child error, source and optional message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `child` | `Error` | The child error to extend. |
| `source` | [`Source`](Source.md) | The source where the error occured. |
| `message?` | `string` | Additonal message to prepend along the source location and the child error's message. |

#### Returns

`SourceError`

#### Overrides

[`ScopeError`](ScopeError.md).[`constructor`](ScopeError.md#constructor)
