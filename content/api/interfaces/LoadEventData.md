---
title: LoadEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for the loading events of a WebView.
contributors: false
---

Defined in: [ui/web-view/index.d.ts:127](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/web-view/index.d.ts#L127)

Event data containing information for the loading events of a WebView.

## Extends

- [`EventData`](EventData.md)

## Properties

### error

```ts
error: string;
```

Defined in: [ui/web-view/index.d.ts:141](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/web-view/index.d.ts#L141)

Gets the error (if any).

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

### navigationType

```ts
navigationType: NavigationType;
```

Defined in: [ui/web-view/index.d.ts:136](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/web-view/index.d.ts#L136)

Gets the navigation type of the web-view.

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

### url

```ts
url: string;
```

Defined in: [ui/web-view/index.d.ts:131](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/web-view/index.d.ts#L131)

Gets the url of the web-view.
