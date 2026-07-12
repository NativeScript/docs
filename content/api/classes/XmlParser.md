---
title: XmlParser
titleTemplate: :title - API / NativeScript
description: A simple non-validating SAX parser based on https://github.com/vflash/easysax version 0.1.14
contributors: false
---

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

A simple non-validating SAX parser based on https://github.com/vflash/easysax version 0.1.14

## Constructors

### Constructor

```ts
new XmlParser(
   onEvent: (event: ParserEvent) => void, 
   onError?: (error: Error, position: Position) => void, 
   processNamespaces?: boolean): XmlParser;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Creates a new instance of the XmlParser class.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onEvent` | (`event`: [`ParserEvent`](ParserEvent.md)) => `void` | The callback to execute when a parser event occurs. The 'event' parameter contains information about the event. |
| `onError?` | (`error`: `Error`, `position`: `Position`) => `void` | The callback to execute when a parser error occurs. The 'error' parameter contains the error. |
| `processNamespaces?` | `boolean` | Specifies whether namespaces should be processed. |

#### Returns

`XmlParser`

## Accessors

### angularSyntax

#### Get Signature

```ts
get angularSyntax(): boolean;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

##### Returns

`boolean`

#### Set Signature

```ts
set angularSyntax(value: boolean): void;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

## Methods

### parse()

```ts
parse(xmlString: string): void;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Parses the supplied xml string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xmlString` | `string` | The string containing the xml to parse. |

#### Returns

`void`
