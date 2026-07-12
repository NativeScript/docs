---
title: NavigationData
titleTemplate: :title - API / NativeScript
description: Base event data.
contributors: false
---

Defined in: ui/frame/frame-interfaces.d.ts:79

Base event data.

## Extends

- [`EventData`](EventData.md)

## Properties

### entry?

```ts
optional entry?: BackstackEntry;
```

Defined in: ui/frame/frame-interfaces.d.ts:80

***

### eventName

```ts
eventName: string;
```

Defined in: data/observable/index.d.ts:9

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### fromEntry?

```ts
optional fromEntry?: BackstackEntry;
```

Defined in: ui/frame/frame-interfaces.d.ts:81

***

### isBack?

```ts
optional isBack?: boolean;
```

Defined in: ui/frame/frame-interfaces.d.ts:82

***

### object

```ts
object: Observable;
```

Defined in: data/observable/index.d.ts:13

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)
