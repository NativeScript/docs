---
title: ParserEvent
titleTemplate: :title - API / NativeScript
description: Provides information for a parser event.
contributors: false
---

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Provides information for a parser event.

## Constructors

### Constructor

```ts
new ParserEvent(
   eventType: string, 
   position: Position, 
   prefix?: string, 
   namespace?: string, 
   elementName?: string, 
   attributes?: Object, 
   data?: string): ParserEvent;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventType` | `string` |
| `position` | `Position` |
| `prefix?` | `string` |
| `namespace?` | `string` |
| `elementName?` | `string` |
| `attributes?` | `Object` |
| `data?` | `string` |

#### Returns

`ParserEvent`

## Accessors

### attributes

#### Get Signature

```ts
get attributes(): Object;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Returns a JSON object with the attributes of an element in case the eventType is ParserEventType.StartElement.

##### Returns

`Object`

***

### data

#### Get Signature

```ts
get data(): string;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Returns the relevant data in case the eventType is ParserEventType.Text, ParserEventType.CDATA or ParserEventType.Comment.

##### Returns

`string`

***

### elementName

#### Get Signature

```ts
get elementName(): string;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Returns the name of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.

##### Returns

`string`

***

### eventType

#### Get Signature

```ts
get eventType(): string;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Returns the type of the parser event. This is one of the ParserEventType static members.

##### Returns

`string`

***

### namespace

#### Get Signature

```ts
get namespace(): string;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

If namespace processing is enabled, returns the namespace of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.

##### Returns

`string`

***

### position

#### Get Signature

```ts
get position(): Position;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Get the position in the xml string where the event was generated.

##### Returns

`Position`

***

### prefix

#### Get Signature

```ts
get prefix(): string;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

If namespace processing is enabled, returns the prefix of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.

##### Returns

`string`

## Methods

### toString()

```ts
toString(): string;
```

Defined in: [xml/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/xml/index.ts)

Returns a JSON string representation of this instance.

#### Returns

`string`
