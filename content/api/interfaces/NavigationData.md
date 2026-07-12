---
title: NavigationData
titleTemplate: :title - API / NativeScript
description: Base event data.
contributors: false
---

Defined in: [ui/frame/frame-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/frame-interfaces.ts)

Base event data.

## Extends

- [`EventData`](EventData.md)

## Properties

### entry?

```ts
optional entry?: BackstackEntry;
```

Defined in: [ui/frame/frame-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/frame-interfaces.ts)

***

### eventName

```ts
eventName: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### fromEntry?

```ts
optional fromEntry?: BackstackEntry;
```

Defined in: [ui/frame/frame-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/frame-interfaces.ts)

***

### isBack?

```ts
optional isBack?: boolean;
```

Defined in: [ui/frame/frame-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/frame/frame-interfaces.ts)

***

### object

```ts
object: Observable;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)
