---
title: LaunchEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for launch event.
contributors: false
---

Defined in: application/application-interfaces.d.ts:45

Event data containing information for launch event.

## Extends

- [`EventData`](EventData.md)

## Properties

### android?

```ts
optional android?: Intent;
```

Defined in: application/application-interfaces.d.ts:53

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

### ios?

```ts
optional ios?: any;
```

Defined in: application/application-interfaces.d.ts:54

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

### root?

```ts
optional root?: View;
```

Defined in: application/application-interfaces.d.ts:51

The root view for this Window on iOS or Activity for Android.
If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
If explicitly set to null, there will be no root view.

***

### savedInstanceState?

```ts
optional savedInstanceState?: any;
```

Defined in: application/application-interfaces.d.ts:52
