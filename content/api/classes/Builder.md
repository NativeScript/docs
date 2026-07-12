---
title: Builder
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/builder/index.d.ts:19

## Constructors

### Constructor

```ts
new Builder(): Builder;
```

#### Returns

`Builder`

## Properties

### knownCollections

```ts
static knownCollections: Set<string>;
```

Defined in: ui/builder/index.d.ts:25

***

### knownMultiTemplates

```ts
static knownMultiTemplates: Set<string>;
```

Defined in: ui/builder/index.d.ts:24

***

### knownTemplates

```ts
static knownTemplates: Set<string>;
```

Defined in: ui/builder/index.d.ts:23

UI plugin developers can add to these to define their own custom types if needed

## Methods

### createViewFromEntry()

```ts
static createViewFromEntry(entry: ViewEntry): View;
```

Defined in: ui/builder/index.d.ts:30

Creates view from navigation entry

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `ViewEntry` | NavigationEntry |

#### Returns

[`View`](View.md)

***

### load()

```ts
static load(pathOrOptions: string | LoadOptions, context?: any): View;
```

Defined in: ui/builder/index.d.ts:37

Loads component from module with context

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pathOrOptions` | `string` \| [`LoadOptions`](../interfaces/LoadOptions.md) |
| `context?` | `any` |

#### Returns

[`View`](View.md)

***

### parse()

```ts
static parse(value: string | Template, context?: any): View;
```

Defined in: ui/builder/index.d.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| [`Template`](../interfaces/Template.md) |
| `context?` | `any` |

#### Returns

[`View`](View.md)

***

### parseMultipleTemplates()

```ts
static parseMultipleTemplates(value: string, context: any): KeyedTemplate[];
```

Defined in: ui/builder/index.d.ts:43

Creates an array of KeyedTemplates from string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The xml of the template to be parsed |
| `context` | `any` | - |

#### Returns

[`KeyedTemplate`](../interfaces/KeyedTemplate.md)[]
