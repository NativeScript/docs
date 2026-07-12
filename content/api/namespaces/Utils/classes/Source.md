---
title: Source
titleTemplate: :title - API / NativeScript
description: A class encapsulating information for source code origin.
contributors: false
---

Defined in: [utils/debug.d.ts:9](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L9)

A class encapsulating information for source code origin.

## Constructors

### Constructor

```ts
new Source(
   uri: string, 
   line: number, 
   column: number): Source;
```

Defined in: [utils/debug.d.ts:13](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L13)

Creates a new Source instance by given uri, line and column.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uri` | `string` |
| `line` | `number` |
| `column` | `number` |

#### Returns

`Source`

## Properties

### column

```ts
column: number;
```

Defined in: [utils/debug.d.ts:28](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L28)

Gets the position in the source document.

***

### line

```ts
line: number;
```

Defined in: [utils/debug.d.ts:23](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L23)

Gets the line in the source document.

***

### uri

```ts
uri: string;
```

Defined in: [utils/debug.d.ts:18](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L18)

Gets the URI of the source document;

## Methods

### get()

```ts
static get(object: any): Source;
```

Defined in: [utils/debug.d.ts:33](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L33)

Get the source of an object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `any` |

#### Returns

`Source`

***

### set()

```ts
static set(object: any, src: Source): any;
```

Defined in: [utils/debug.d.ts:38](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/utils/debug.d.ts#L38)

Set the source of an object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `any` |
| `src` | `Source` |

#### Returns

`any`
