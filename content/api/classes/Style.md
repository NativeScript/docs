---
title: Style
titleTemplate: :title - API / NativeScript
description: Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener. Please note that should you be using the `ne...
contributors: false
---

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener.
Please note that should you be using the `new Observable({})` constructor, it is **obsolete** since v3.0,
and you have to migrate to the "data/observable" `fromObject({})` or the `fromObjectRecursive({})` functions.

## Extends

- [`Observable`](Observable.md)

## Constructors

### Constructor

```ts
new Style(ownerView: ViewBase | WeakRef<ViewBase>): Style;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ownerView` | [`ViewBase`](ViewBase.md) \| `WeakRef`\<[`ViewBase`](ViewBase.md)\> |

#### Returns

`Style`

#### Overrides

[`Observable`](Observable.md).[`constructor`](Observable.md#constructor)

## Properties

### accessibilityHidden

```ts
accessibilityHidden: boolean;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessibilityLanguage

```ts
accessibilityLanguage: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessibilityStep

```ts
accessibilityStep: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### accessible

```ts
accessible: boolean;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### alignContent

```ts
alignContent: AlignContent;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### alignItems

```ts
alignItems: AlignItems;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidContentInset

```ts
androidContentInset: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidContentInsetLeft

```ts
androidContentInsetLeft: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidContentInsetRight

```ts
androidContentInsetRight: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidSelectedTabHighlightColor

```ts
androidSelectedTabHighlightColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### androidStatusBarBackground

```ts
androidStatusBarBackground: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### background

```ts
background: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### backgroundColor

```ts
backgroundColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### backgroundInternal

```ts
backgroundInternal: Background;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### backgroundPosition

```ts
backgroundPosition: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### backgroundRepeat

```ts
backgroundRepeat: BackgroundRepeatType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### backgroundSize

```ts
backgroundSize: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderRadius

```ts
borderRadius: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### borderWidth

```ts
borderWidth: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### clipPath

```ts
clipPath: string | ClipPathFunction;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### color

```ts
color: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flex

```ts
flex: Flex;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flexDirection

```ts
flexDirection: FlexDirection;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flexFlow

```ts
flexFlow: 
  | "row nowrap"
  | "row wrap"
  | "row wrap-reverse"
  | "row-reverse nowrap"
  | "row-reverse wrap"
  | "row-reverse wrap-reverse"
  | "column nowrap"
  | "column wrap"
  | "column wrap-reverse"
  | "column-reverse nowrap"
  | "column-reverse wrap"
  | "column-reverse wrap-reverse";
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flexWrap

```ts
flexWrap: FlexWrap;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### font

```ts
font: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### fontFamily

```ts
fontFamily: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### fontInternal

```ts
fontInternal: Font;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### fontScaleInternal

```ts
fontScaleInternal: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

This property ensures inheritance of a11y scale among views.

***

### fontSize

```ts
fontSize: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### fontStyle

```ts
fontStyle: FontStyleType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### fontVariationSettings

```ts
fontVariationSettings: FontVariationSettingsType[];
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### fontWeight

```ts
fontWeight: FontWeightType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### height

```ts
height: PercentLengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### iconFontFamily

```ts
iconFontFamily: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### justifyContent

```ts
justifyContent: JustifyContent;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### letterSpacing

```ts
letterSpacing: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### lineHeight

```ts
lineHeight: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### margin

```ts
margin: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit
  | LengthPercentUnit;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### maxLines

```ts
maxLines: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### opacity

```ts
opacity: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### order

```ts
order: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### padding

```ts
padding: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### paddingBottom

```ts
paddingBottom: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### paddingInternal

```ts
paddingInternal: string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### paddingLeft

```ts
paddingLeft: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### paddingRight

```ts
paddingRight: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### paddingTop

```ts
paddingTop: LengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### perspective

```ts
perspective: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### placeholderColor

```ts
placeholderColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### PropertyBag

```ts
PropertyBag: {
(): {
[property: string]: string;
};
  prototype: {
   [property: string]: string;
  };
};
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Returns

```ts
{
[property: string]: string;
}
```

#### prototype

```ts
prototype: {
[property: string]: string;
};
```

##### Index Signature

```ts
[property: string]: string
```

***

### rotate

```ts
rotate: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### rotateX

```ts
rotateX: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### rotateY

```ts
rotateY: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### scaleX

```ts
scaleX: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### scaleY

```ts
scaleY: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### selectedBackgroundColor

```ts
selectedBackgroundColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### selectedTabTextColor

```ts
selectedTabTextColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### selectedTextColor

```ts
selectedTextColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### separatorColor

```ts
separatorColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### statusBarStyle

```ts
statusBarStyle: "dark" | "light";
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### tabBackgroundColor

```ts
tabBackgroundColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### tabTextColor

```ts
tabTextColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### tabTextFontSize

```ts
tabTextFontSize: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### textAlignment

```ts
textAlignment: TextAlignmentType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### textDecoration

```ts
textDecoration: TextDecorationType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### textOverflow

```ts
textOverflow: TextOverflowType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### textShadow

```ts
textShadow: ShadowCSSValues;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### textStroke

```ts
textStroke: StrokeCSSValues;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### textTransform

```ts
textTransform: TextTransformType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### tintColor

```ts
tintColor: Color;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### translateX

```ts
translateX: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### translateY

```ts
translateY: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### viewRef

```ts
viewRef: WeakRef<ViewBase>;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### whiteSpace

```ts
whiteSpace: WhiteSpaceType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### width

```ts
width: PercentLengthType;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### zIndex

```ts
zIndex: number;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

***

### propertyChangeEvent

```ts
static propertyChangeEvent: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

String value used when hooking to propertyChange event.

#### Ns Event

propertyChange

#### Inherited from

[`Observable`](Observable.md).[`propertyChangeEvent`](Observable.md#propertychangeevent)

## Accessors

### view

#### Get Signature

```ts
get view(): ViewBase;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

##### Returns

[`ViewBase`](ViewBase.md)

## Methods

### \_createPropertyChangeData()

```ts
_createPropertyChangeData(
   propertyName: string, 
   value: any, 
   oldValue?: any): PropertyChangeData;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

This method is intended to be overriden by inheritors to provide additional implementation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propertyName` | `string` |
| `value` | `any` |
| `oldValue?` | `any` |

#### Returns

[`PropertyChangeData`](../interfaces/PropertyChangeData.md)

#### Inherited from

[`Observable`](Observable.md).[`_createPropertyChangeData`](Observable.md#createpropertychangedata)

***

### \_emit()

```ts
_emit(eventName: string): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`_emit`](Observable.md#emit)

***

### addEventListener()

```ts
addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Adds a listener for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event to attach to. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | A function to be called when some of the specified event(s) is raised. |
| `thisArg?` | `any` | An optional parameter which when set will be used as "this" in callback method call. |
| `once?` | `boolean` | An optional parameter which when set will cause the event listener to fire once. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`addEventListener`](Observable.md#addeventlistener)

***

### get()

```ts
get(name: string): any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Gets the value of the specified property.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[`Observable`](Observable.md).[`get`](Observable.md#get)

***

### getCssVariable()

```ts
getCssVariable(varName: string): string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |

#### Returns

`string`

***

### hasListeners()

```ts
hasListeners(eventName: string): boolean;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Checks whether a listener is registered for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event to check for. |

#### Returns

`boolean`

#### Inherited from

[`Observable`](Observable.md).[`hasListeners`](Observable.md#haslisteners)

***

### notify()

```ts
notify<T>(data: T): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Notify this Observable instance with some data. This causes all event
handlers on the Observable instance to be called, as well as any 'global'
event handlers set on the instance's class.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Optional`\<[`EventData`](../interfaces/EventData.md), `"object"`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `T` | an object that satisfies the EventData interface, though with an optional 'object' property. If left undefined, the 'object' property will implicitly be set as this Observable instance. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`notify`](Observable.md#notify)

***

### notifyPropertyChange()

```ts
notifyPropertyChange(
   name: string, 
   value: any, 
   oldValue?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Notifies all the registered listeners for the property change event.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |
| `oldValue?` | `any` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`notifyPropertyChange`](Observable.md#notifypropertychange)

***

### off()

```ts
off(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Removes the listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional specific event listener to remove (if omitted, all event listeners by this name will be removed). |
| `thisArg?` | `any` | An optional parameter which, when set, will be used to refine search of the correct event listener to be removed. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`off`](Observable.md#off)

***

### on()

```ts
on(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Adds a listener for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`on`](Observable.md#on)

***

### once()

```ts
once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Adds a listener for the specified event name, which, once fired, will
remove itself.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`once`](Observable.md#once)

***

### removeEventListener()

```ts
removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Removes listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event to attach to. |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed. |
| `thisArg?` | `any` | An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener. |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`removeEventListener`](Observable.md#removeeventlistener)

***

### removeScopedCssVariable()

```ts
removeScopedCssVariable(varName: string): void;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |

#### Returns

`void`

***

### removeUnscopedCssVariable()

```ts
removeUnscopedCssVariable(varName: string): void;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |

#### Returns

`void`

***

### resetScopedCssVariables()

```ts
resetScopedCssVariables(): void;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Returns

`void`

***

### resetUnscopedCssVariables()

```ts
resetUnscopedCssVariables(): void;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Returns

`void`

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`set`](Observable.md#set)

***

### setProperty()

```ts
setProperty(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value and raises a property change event and a specific change event based on the property name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`Observable`](Observable.md).[`setProperty`](Observable.md#setproperty)

***

### setScopedCssVariable()

```ts
setScopedCssVariable(varName: string, value: string): void;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |
| `value` | `string` |

#### Returns

`void`

***

### setUnscopedCssVariable()

```ts
setUnscopedCssVariable(varName: string, value: string): void;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |
| `value` | `string` |

#### Returns

`void`

***

### toString()

```ts
toString(): string;
```

Defined in: [ui/styling/style/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/styling/style/index.ts)

Returns a string representation of an object.

#### Returns

`string`

***

### ~~addEventListener()~~

```ts
static addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |
| `once?` | `boolean` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`addEventListener`](Observable.md#addeventlistener-1)

***

### ~~off()~~

```ts
static off(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`off`](Observable.md#off-1)

***

### ~~on()~~

```ts
static on(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |
| `once?` | `boolean` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`on`](Observable.md#on-1)

***

### ~~once()~~

```ts
static once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`once`](Observable.md#once-1)

***

### ~~removeEventListener()~~

```ts
static removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/data/observable/index.ts)

Please avoid using the static event-handling APIs as they will be removed
in future.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Deprecated

#### Inherited from

[`Observable`](Observable.md).[`removeEventListener`](Observable.md#removeeventlistener-1)
