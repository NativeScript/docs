---
title: SearchEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for the search text change event.
contributors: false
---

Defined in: [ui/list-view/index.d.ts:260](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/list-view/index.d.ts#L260)

Event data containing information for the search text change event.

## Extends

- [`EventData`](EventData.md)

## Properties

### android?

```ts
optional android?: any;
```

Defined in: [ui/list-view/index.d.ts:274](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/list-view/index.d.ts#L274)

Gets the native Android search view. Valid only when running on Android OS.

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

### ios?

```ts
optional ios?: any;
```

Defined in: [ui/list-view/index.d.ts:269](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/list-view/index.d.ts#L269)

Gets the native [iOS UISearchController](https://developer.apple.com/documentation/uikit/uisearchcontroller) that represents the search controller. Valid only when running on iOS.

***

### object

```ts
object: Observable;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)

***

### text

```ts
text: string;
```

Defined in: [ui/list-view/index.d.ts:264](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/list-view/index.d.ts#L264)

The current search text value.
