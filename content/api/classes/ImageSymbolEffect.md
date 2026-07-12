---
title: ImageSymbolEffect
titleTemplate: :title - API / NativeScript
description: "iOS only Symbol effects: https://developer.apple.com/documentation/symbols?language=objc"
contributors: false
---

Defined in: ui/image/symbol-effects.d.ts:7

iOS only
Symbol effects: https://developer.apple.com/documentation/symbols?language=objc

## Constructors

### Constructor

```ts
new ImageSymbolEffect(symbol: NSSymbolEffect): ImageSymbolEffect;
```

Defined in: ui/image/symbol-effects.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `symbol` | `NSSymbolEffect` |

#### Returns

`ImageSymbolEffect`

## Properties

### completion?

```ts
optional completion?: (context: UISymbolEffectCompletionContext) => void;
```

Defined in: ui/image/symbol-effects.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `UISymbolEffectCompletionContext` |

#### Returns

`void`

***

### effect?

```ts
optional effect?: NSSymbolEffect;
```

Defined in: ui/image/symbol-effects.d.ts:8

***

### options?

```ts
optional options?: NSSymbolEffectOptions;
```

Defined in: ui/image/symbol-effects.d.ts:9

## Methods

### fromSymbol()

```ts
static fromSymbol(symbol: string): ImageSymbolEffect;
```

Defined in: ui/image/symbol-effects.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `symbol` | `string` |

#### Returns

`ImageSymbolEffect`
