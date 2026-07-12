---
title: PropertyChangeData
titleTemplate: :title - API / NativeScript
description: Data for the "propertyChange" event.
contributors: false
---

Defined in: data/observable/index.d.ts:21

Data for the "propertyChange" event.

## Extends

- [`EventData`](EventData.md)

## Properties

### eventName

```ts
eventName: string;
```

Defined in: data/observable/index.d.ts:9

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### object

```ts
object: Observable;
```

Defined in: data/observable/index.d.ts:13

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)

***

### oldValue?

```ts
optional oldValue?: any;
```

Defined in: data/observable/index.d.ts:33

The previous value of the property.

***

### propertyName

```ts
propertyName: string;
```

Defined in: data/observable/index.d.ts:25

The name of the property that has changed.

***

### value

```ts
value: any;
```

Defined in: data/observable/index.d.ts:29

The new value of the property.
