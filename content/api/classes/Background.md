---
title: Background
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/styling/background-common.d.ts:20

## Constructors

### Constructor

```ts
new Background(): Background;
```

#### Returns

`Background`

## Properties

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: ui/styling/background-common.d.ts:29

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: number;
```

Defined in: ui/styling/background-common.d.ts:37

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: number;
```

Defined in: ui/styling/background-common.d.ts:38

***

### borderBottomWidth

```ts
borderBottomWidth: number;
```

Defined in: ui/styling/background-common.d.ts:33

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: ui/styling/background-common.d.ts:30

***

### borderLeftWidth

```ts
borderLeftWidth: number;
```

Defined in: ui/styling/background-common.d.ts:34

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: ui/styling/background-common.d.ts:28

***

### borderRightWidth

```ts
borderRightWidth: number;
```

Defined in: ui/styling/background-common.d.ts:32

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: ui/styling/background-common.d.ts:27

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: number;
```

Defined in: ui/styling/background-common.d.ts:35

***

### borderTopRightRadius

```ts
borderTopRightRadius: number;
```

Defined in: ui/styling/background-common.d.ts:36

***

### borderTopWidth

```ts
borderTopWidth: number;
```

Defined in: ui/styling/background-common.d.ts:31

***

### boxShadows

```ts
boxShadows: BoxShadow[];
```

Defined in: ui/styling/background-common.d.ts:40

***

### clearFlags

```ts
clearFlags: number;
```

Defined in: ui/styling/background-common.d.ts:41

***

### clipPath

```ts
clipPath: string | ClipPathFunction;
```

Defined in: ui/styling/background-common.d.ts:39

***

### color

```ts
color: Color;
```

Defined in: ui/styling/background-common.d.ts:22

***

### image

```ts
image: string | LinearGradient;
```

Defined in: ui/styling/background-common.d.ts:23

***

### position

```ts
position: string;
```

Defined in: ui/styling/background-common.d.ts:25

***

### repeat

```ts
repeat: BackgroundRepeatType;
```

Defined in: ui/styling/background-common.d.ts:24

***

### size

```ts
size: string;
```

Defined in: ui/styling/background-common.d.ts:26

***

### default

```ts
static default: Background;
```

Defined in: ui/styling/background-common.d.ts:21

## Methods

### getBoxShadows()

```ts
getBoxShadows(): BoxShadow[];
```

Defined in: ui/styling/background-common.d.ts:76

#### Returns

`BoxShadow`[]

***

### getUniformBorderColor()

```ts
getUniformBorderColor(): Color;
```

Defined in: ui/styling/background-common.d.ts:72

#### Returns

[`Color`](Color.md)

***

### getUniformBorderRadius()

```ts
getUniformBorderRadius(): number;
```

Defined in: ui/styling/background-common.d.ts:74

#### Returns

`number`

***

### getUniformBorderWidth()

```ts
getUniformBorderWidth(): number;
```

Defined in: ui/styling/background-common.d.ts:73

#### Returns

`number`

***

### hasBorder()

```ts
hasBorder(): boolean;
```

Defined in: ui/styling/background-common.d.ts:67

#### Returns

`boolean`

***

### hasBorderColor()

```ts
hasBorderColor(): boolean;
```

Defined in: ui/styling/background-common.d.ts:64

#### Returns

`boolean`

***

### hasBorderRadius()

```ts
hasBorderRadius(): boolean;
```

Defined in: ui/styling/background-common.d.ts:66

#### Returns

`boolean`

***

### hasBorderWidth()

```ts
hasBorderWidth(): boolean;
```

Defined in: ui/styling/background-common.d.ts:65

#### Returns

`boolean`

***

### hasBoxShadows()

```ts
hasBoxShadows(): boolean;
```

Defined in: ui/styling/background-common.d.ts:75

#### Returns

`boolean`

***

### hasUniformBorder()

```ts
hasUniformBorder(): boolean;
```

Defined in: ui/styling/background-common.d.ts:71

#### Returns

`boolean`

***

### hasUniformBorderColor()

```ts
hasUniformBorderColor(): boolean;
```

Defined in: ui/styling/background-common.d.ts:68

#### Returns

`boolean`

***

### hasUniformBorderRadius()

```ts
hasUniformBorderRadius(): boolean;
```

Defined in: ui/styling/background-common.d.ts:70

#### Returns

`boolean`

***

### hasUniformBorderWidth()

```ts
hasUniformBorderWidth(): boolean;
```

Defined in: ui/styling/background-common.d.ts:69

#### Returns

`boolean`

***

### isEmpty()

```ts
isEmpty(): boolean;
```

Defined in: ui/styling/background-common.d.ts:62

#### Returns

`boolean`

***

### toString()

```ts
toString(): string;
```

Defined in: ui/styling/background-common.d.ts:77

#### Returns

`string`

***

### withBorderBottomColor()

```ts
withBorderBottomColor(value: Color): Background;
```

Defined in: ui/styling/background-common.d.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

`Background`

***

### withBorderBottomLeftRadius()

```ts
withBorderBottomLeftRadius(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderBottomRightRadius()

```ts
withBorderBottomRightRadius(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderBottomWidth()

```ts
withBorderBottomWidth(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:54

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderLeftColor()

```ts
withBorderLeftColor(value: Color): Background;
```

Defined in: ui/styling/background-common.d.ts:51

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

`Background`

***

### withBorderLeftWidth()

```ts
withBorderLeftWidth(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderRightColor()

```ts
withBorderRightColor(value: Color): Background;
```

Defined in: ui/styling/background-common.d.ts:49

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

`Background`

***

### withBorderRightWidth()

```ts
withBorderRightWidth(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:53

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderTopColor()

```ts
withBorderTopColor(value: Color): Background;
```

Defined in: ui/styling/background-common.d.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

`Background`

***

### withBorderTopLeftRadius()

```ts
withBorderTopLeftRadius(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderTopRightRadius()

```ts
withBorderTopRightRadius(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBorderTopWidth()

```ts
withBorderTopWidth(value: number): Background;
```

Defined in: ui/styling/background-common.d.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`Background`

***

### withBoxShadows()

```ts
withBoxShadows(value: BoxShadow[]): Background;
```

Defined in: ui/styling/background-common.d.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `BoxShadow`[] |

#### Returns

`Background`

***

### withClipPath()

```ts
withClipPath(value: string | ClipPathFunction): Background;
```

Defined in: ui/styling/background-common.d.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `ClipPathFunction` |

#### Returns

`Background`

***

### withColor()

```ts
withColor(value: Color): Background;
```

Defined in: ui/styling/background-common.d.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

`Background`

***

### withImage()

```ts
withImage(value: string | LinearGradient): Background;
```

Defined in: ui/styling/background-common.d.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| [`LinearGradient`](LinearGradient.md) |

#### Returns

`Background`

***

### withPosition()

```ts
withPosition(value: string): Background;
```

Defined in: ui/styling/background-common.d.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`Background`

***

### withRepeat()

```ts
withRepeat(value: BackgroundRepeatType): Background;
```

Defined in: ui/styling/background-common.d.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md) |

#### Returns

`Background`

***

### withSize()

```ts
withSize(value: string): Background;
```

Defined in: ui/styling/background-common.d.ts:47

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`Background`

***

### equals()

```ts
static equals(value1: Background, value2: Background): boolean;
```

Defined in: ui/styling/background-common.d.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value1` | `Background` |
| `value2` | `Background` |

#### Returns

`boolean`
