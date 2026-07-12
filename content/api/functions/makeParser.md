---
title: makeParser
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function makeParser<T>(isValid: (value: any) => boolean, allowNumbers?: boolean): (value: any) => T;
```

Defined in: core-types/validators.d.ts:2

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `isValid` | (`value`: `any`) => `boolean` |
| `allowNumbers?` | `boolean` |

## Returns

(`value`: `any`) => `T`
