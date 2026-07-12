---
title: makeParser
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function makeParser<T>(isValid: (value: any) => boolean, allowNumbers?: boolean): (value: any) => T;
```

Defined in: [core-types/validators.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/core-types/validators.ts)

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
