---
title: ParserEvent
titleTemplate: :title - API / NativeScript
description: Provides information for a parser event.
contributors: false
---

Defined in: xml/index.d.ts:42

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

Defined in: xml/index.d.ts:50

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

Defined in: xml/index.d.ts:78

Returns a JSON object with the attributes of an element in case the eventType is ParserEventType.StartElement.

##### Returns

`Object`

***

### data

#### Get Signature

```ts
get data(): string;
```

Defined in: xml/index.d.ts:82

Returns the relevant data in case the eventType is ParserEventType.Text, ParserEventType.CDATA or ParserEventType.Comment.

##### Returns

`string`

***

### elementName

#### Get Signature

```ts
get elementName(): string;
```

Defined in: xml/index.d.ts:74

Returns the name of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.

##### Returns

`string`

***

### eventType

#### Get Signature

```ts
get eventType(): string;
```

Defined in: xml/index.d.ts:58

Returns the type of the parser event. This is one of the ParserEventType static members.

##### Returns

`string`

***

### namespace

#### Get Signature

```ts
get namespace(): string;
```

Defined in: xml/index.d.ts:70

If namespace processing is enabled, returns the namespace of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.

##### Returns

`string`

***

### position

#### Get Signature

```ts
get position(): Position;
```

Defined in: xml/index.d.ts:62

Get the position in the xml string where the event was generated.

##### Returns

`Position`

***

### prefix

#### Get Signature

```ts
get prefix(): string;
```

Defined in: xml/index.d.ts:66

If namespace processing is enabled, returns the prefix of the element in case the eventType is ParserEventType.StartElement or ParserEventType.EndElement.

##### Returns

`string`

## Methods

### toString()

```ts
toString(): string;
```

Defined in: xml/index.d.ts:54

Returns a JSON string representation of this instance.

#### Returns

`string`
