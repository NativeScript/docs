---
title: ModuleNameResolver
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [module-name-resolver/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/module-name-resolver/index.ts)

## Implements

- `ModuleNameResolverType`

## Constructors

### Constructor

```ts
new ModuleNameResolver(context: PlatformContext, moduleListProvider?: ModuleListProvider): ModuleNameResolver;
```

Defined in: [module-name-resolver/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/module-name-resolver/index.ts)

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

Defined in: [module-name-resolver/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/module-name-resolver/index.ts)

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

Defined in: [module-name-resolver/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/module-name-resolver/index.ts)

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
