---
title: ViewEntry
titleTemplate: :title - API / NativeScript
description: Represents an entry to be used to create a view or load it form file
contributors: false
---

Defined in: [ui/frame/index.d.ts:348](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L348)

Represents an entry to be used to create a view or load it form file

## Extended by

- [`NavigationEntry`](NavigationEntry.md)

## Properties

### create?

```ts
optional create?: () => View;
```

Defined in: [ui/frame/index.d.ts:357](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L357)

A function used to create the View instance. Optional.

#### Returns

[`View`](../classes/View.md)

***

### moduleName?

```ts
optional moduleName?: string;
```

Defined in: [ui/frame/index.d.ts:352](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/index.d.ts#L352)

The name of the module containing the View instance to load. Optional.
