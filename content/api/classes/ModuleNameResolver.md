---
title: ModuleNameResolver
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: module-name-resolver/index.d.ts:4

## Implements

- `ModuleNameResolverType`

## Constructors

### Constructor

```ts
new ModuleNameResolver(context: PlatformContext, moduleListProvider?: ModuleListProvider): ModuleNameResolver;
```

Defined in: module-name-resolver/index.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`PlatformContext`](../interfaces/PlatformContext.md) |
| `moduleListProvider?` | [`ModuleListProvider`](../type-aliases/ModuleListProvider.md) |

#### Returns

`ModuleNameResolver`

## Methods

### clearCache()

```ts
clearCache(): void;
```

Defined in: module-name-resolver/index.d.ts:10

#### Returns

`void`

#### Implementation of

```ts
ModuleNameResolverType.clearCache
```

***

### resolveModuleName()

```ts
resolveModuleName(path: string, ext: string): string;
```

Defined in: module-name-resolver/index.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `ext` | `string` |

#### Returns

`string`

#### Implementation of

```ts
ModuleNameResolverType.resolveModuleName
```
