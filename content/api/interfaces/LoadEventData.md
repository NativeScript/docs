---
title: LoadEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for the loading events of a WebView.
contributors: false
---

Defined in: ui/web-view/index.d.ts:127

Event data containing information for the loading events of a WebView.

## Extends

- [`EventData`](EventData.md)

## Properties

### error

```ts
error: string;
```

Defined in: ui/web-view/index.d.ts:141

Gets the error (if any).

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

### navigationType

```ts
navigationType: NavigationType;
```

Defined in: ui/web-view/index.d.ts:136

Gets the navigation type of the web-view.

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

### url

```ts
url: string;
```

Defined in: ui/web-view/index.d.ts:131

Gets the url of the web-view.
