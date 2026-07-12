---
title: SearchEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for the search text change event.
contributors: false
---

Defined in: ui/list-view/index.d.ts:260

Event data containing information for the search text change event.

## Extends

- [`EventData`](EventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: ui/list-view/index.d.ts:274

Gets the native Android search view. Valid only when running on Android OS.

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

Defined in: ui/list-view/index.d.ts:269

Gets the native [iOS UISearchController](https://developer.apple.com/documentation/uikit/uisearchcontroller) that represents the search controller. Valid only when running on iOS.

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

### text

```ts
text: string;
```

Defined in: ui/list-view/index.d.ts:264

The current search text value.
