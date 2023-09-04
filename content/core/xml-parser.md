---
title: XmlParser
---

The XMLParser provides the ability to parse and extract data from XML documents.

## Using XmlParser

To parse an xml document, first institiate the class with the [ParserEvent](#parserevent) handler.

```ts
const xmlParser = new XmlParser(this.onEventCallback);

onEventCallback(event: ParserEvent) {
    switch (event.eventType) {

      case ParserEventType.StartElement:

        if (event.attributes) {
          for (const attributeName in event.attributes) {
            if (event.attributes.hasOwnProperty(attributeName)) {
              console.log({
                eventType: event.eventType,
                elementName: event.elementName,
                attributeName: attributeName,
                result: event.attributes[attributeName],
                significantText: null,
              });
            }
          }
        } else {
          console.log({
            eventType: event.eventType,
            elementName: event.elementName,
            attributeName: null,
            result: null,
            significantText: null,
          });
        }
        break;
      case ParserEventType.EndElement:

        console.log({
          eventType: event.eventType,
          elementName: event.elementName,
          attributeName: null,
          result: null,
          significantText: null,
        });
        break;

      case ParserEventType.Text:
        const significantText = event.data.trim();

        if (significantText !== '') {
          console.log({
            eventType: event.eventType,
            elementName: null,
            attributeName: null,
            result: null,
            significantText: significantText,
          });
        }
        break;
      default:
        break;
    }
  }
```

Then call the [parse](#parse) method on the instance passing it the data to be parsed.

```ts
xmlParser.parse(`
  <Document>
    <First attr1=\ "attribute1\" attr2=\ "attribute2\">I am first</First>
    <Second>I am second</Second>
    <Third>
      <FirstChild attr3=\ "attribute3\"></FirstChild>
    </Third>
  </Document>
`)
```

## XmlParser API

### constructor

```ts
const xmlParser = new XmlParser(onEvent: (event: ParserEvent) => void, onError?: (error: Error, position: Position) => void, processNamespaces?: boolean, angularSyntax?: boolean)

```

Creates a new instance of the XmlParser class.

- `onEvent` is the callback to execute when a parser event occurs.

- _Optional_: `onError` is the callback to execute when a parser error occurs. The `error` parameter contains the error and the `position` represents the position of the parsing error.
- _Optional_: `processNamespaces` specifies whether namespaces should be processed.

---

### parse()

```ts
xmlParser.parse(xmlString: string)
```

Parses the supplied xml string.

---

### ParserEvent

The parser event data object has the following properties.

#### eventType

```ts
const eventType: ParserEventType = event.eventType
```

Returns the type of the parser event. See [ParserEventType](#parsereventtype)

---

#### position

```ts
const position: Position = event.position
```

Returns the position (column number and line number) in the xml string where the event was generated.

---

#### prefix

```ts
const prefix: Position = event.prefix
```

If [namespace processing is enabled](#constructor), returns the prefix of the element if the eventType is `ParserEventType.StartElement` or `ParserEventType.EndElement`.

---

#### namespace

```ts

```

If [namespace processing is enabled](#constructor), returns the namespace of the element if the eventType is `ParserEventType.StartElement` or `ParserEventType.EndElement`.

---

#### elementName

Returns the name of the element if the eventType is `ParserEventType.StartElement` or `ParserEventType.EndElement`.

---

#### attributes

Returns a JSON object with the attributes of an element if the eventType is `ParserEventType.StartElement`.

---

#### data

Returns the relevant data if the eventType is `ParserEventType.Text`, `ParserEventType.CDATA` or `ParserEventType.Comment`.

---

#### toString()

Returns a JSON string representation of this instance.

---

### ParserEventType

The following are the available parser event types:

#### StartElement

Specifies the StartElement event type.

---

#### EndElement

Specifies the EndElement event type.

---

#### ParserEventType.Text

Specifies the Text event type.

---

#### ParserEventType.CDATA

Specifies the [CDATA](https://en.wikipedia.org/wiki/CDATA) event type.

---

#### ParserEventType.Comment

Specifies the Comment event type.
