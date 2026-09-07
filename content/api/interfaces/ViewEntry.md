---
title: ViewEntry
titleTemplate: :title - API / NativeScript
description: Represents an entry to be used to create a view or load it form file
contributors: false
---

Defined in: [ui/frame/index.d.ts:358](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L358)

Represents an entry to be used to create a view or load it form file

## Extended by

- [`NavigationEntry`](NavigationEntry.md)

## Properties

### create?

```ts
optional create?: () => View;
```

Defined in: [ui/frame/index.d.ts:367](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L367)

A function used to create the View instance. Optional.

#### Returns

[`View`](../classes/View.md)

***

### moduleName?

```ts
optional moduleName?: string;
```

Defined in: [ui/frame/index.d.ts:362](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L362)

The name of the module containing the View instance to load. Optional.
