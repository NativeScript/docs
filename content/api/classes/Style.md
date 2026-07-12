---
title: Style
titleTemplate: :title - API / NativeScript
description: Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener. Please note that should you be using the `ne...
contributors: false
---

Defined in: ui/styling/style/index.d.ts:29

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

Defined in: ui/styling/style/index.d.ts:32

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

Defined in: ui/styling/style/index.d.ts:147

***

### accessibilityLanguage

```ts
accessibilityLanguage: string;
```

Defined in: ui/styling/style/index.d.ts:151

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: ui/styling/style/index.d.ts:150

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: ui/styling/style/index.d.ts:152

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: ui/styling/style/index.d.ts:148

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: ui/styling/style/index.d.ts:149

***

### accessibilityStep

```ts
accessibilityStep: number;
```

Defined in: ui/styling/style/index.d.ts:153

***

### accessible

```ts
accessible: boolean;
```

Defined in: ui/styling/style/index.d.ts:146

***

### alignContent

```ts
alignContent: AlignContent;
```

Defined in: ui/styling/style/index.d.ts:138

***

### alignItems

```ts
alignItems: AlignItems;
```

Defined in: ui/styling/style/index.d.ts:137

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: ui/styling/style/index.d.ts:143

***

### androidContentInset

```ts
androidContentInset: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/styling/style/index.d.ts:131

***

### androidContentInsetLeft

```ts
androidContentInsetLeft: LengthType;
```

Defined in: ui/styling/style/index.d.ts:132

***

### androidContentInsetRight

```ts
androidContentInsetRight: LengthType;
```

Defined in: ui/styling/style/index.d.ts:133

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: ui/styling/style/index.d.ts:92

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: ui/styling/style/index.d.ts:91

***

### androidSelectedTabHighlightColor

```ts
androidSelectedTabHighlightColor: Color;
```

Defined in: ui/styling/style/index.d.ts:125

***

### androidStatusBarBackground

```ts
androidStatusBarBackground: Color;
```

Defined in: ui/styling/style/index.d.ts:130

***

### background

```ts
background: string;
```

Defined in: ui/styling/style/index.d.ts:61

***

### backgroundColor

```ts
backgroundColor: Color;
```

Defined in: ui/styling/style/index.d.ts:62

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: ui/styling/style/index.d.ts:63

***

### backgroundInternal

```ts
backgroundInternal: Background;
```

Defined in: ui/styling/style/index.d.ts:47

***

### backgroundPosition

```ts
backgroundPosition: string;
```

Defined in: ui/styling/style/index.d.ts:66

***

### backgroundRepeat

```ts
backgroundRepeat: BackgroundRepeatType;
```

Defined in: ui/styling/style/index.d.ts:64

***

### backgroundSize

```ts
backgroundSize: string;
```

Defined in: ui/styling/style/index.d.ts:65

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: ui/styling/style/index.d.ts:70

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: ui/styling/style/index.d.ts:81

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: ui/styling/style/index.d.ts:80

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: ui/styling/style/index.d.ts:75

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: ui/styling/style/index.d.ts:67

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: ui/styling/style/index.d.ts:71

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: ui/styling/style/index.d.ts:76

***

### borderRadius

```ts
borderRadius: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/styling/style/index.d.ts:77

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: ui/styling/style/index.d.ts:69

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: ui/styling/style/index.d.ts:74

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: ui/styling/style/index.d.ts:68

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: ui/styling/style/index.d.ts:78

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: ui/styling/style/index.d.ts:79

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: ui/styling/style/index.d.ts:73

***

### borderWidth

```ts
borderWidth: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/styling/style/index.d.ts:72

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: ui/styling/style/index.d.ts:82

***

### clipPath

```ts
clipPath: string | ClipPathFunction;
```

Defined in: ui/styling/style/index.d.ts:57

***

### color

```ts
color: Color;
```

Defined in: ui/styling/style/index.d.ts:58

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: ui/styling/style/index.d.ts:83

***

### flex

```ts
flex: Flex;
```

Defined in: ui/styling/style/index.d.ts:145

***

### flexDirection

```ts
flexDirection: FlexDirection;
```

Defined in: ui/styling/style/index.d.ts:134

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

Defined in: ui/styling/style/index.d.ts:144

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: ui/styling/style/index.d.ts:140

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: ui/styling/style/index.d.ts:141

***

### flexWrap

```ts
flexWrap: FlexWrap;
```

Defined in: ui/styling/style/index.d.ts:135

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: ui/styling/style/index.d.ts:142

***

### font

```ts
font: string;
```

Defined in: ui/styling/style/index.d.ts:89

***

### fontFamily

```ts
fontFamily: string;
```

Defined in: ui/styling/style/index.d.ts:85

***

### fontInternal

```ts
fontInternal: Font;
```

Defined in: ui/styling/style/index.d.ts:41

***

### fontScaleInternal

```ts
fontScaleInternal: number;
```

Defined in: ui/styling/style/index.d.ts:46

This property ensures inheritance of a11y scale among views.

***

### fontSize

```ts
fontSize: number;
```

Defined in: ui/styling/style/index.d.ts:84

***

### fontStyle

```ts
fontStyle: FontStyleType;
```

Defined in: ui/styling/style/index.d.ts:86

***

### fontVariationSettings

```ts
fontVariationSettings: FontVariationSettingsType[];
```

Defined in: ui/styling/style/index.d.ts:88

***

### fontWeight

```ts
fontWeight: FontWeightType;
```

Defined in: ui/styling/style/index.d.ts:87

***

### height

```ts
height: PercentLengthType;
```

Defined in: ui/styling/style/index.d.ts:108

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: ui/styling/style/index.d.ts:119

***

### iconFontFamily

```ts
iconFontFamily: string;
```

Defined in: ui/styling/style/index.d.ts:42

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: ui/styling/style/index.d.ts:154

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: ui/styling/style/index.d.ts:156

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: ui/styling/style/index.d.ts:155

***

### justifyContent

```ts
justifyContent: JustifyContent;
```

Defined in: ui/styling/style/index.d.ts:136

***

### letterSpacing

```ts
letterSpacing: number;
```

Defined in: ui/styling/style/index.d.ts:96

***

### lineHeight

```ts
lineHeight: number;
```

Defined in: ui/styling/style/index.d.ts:97

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

Defined in: ui/styling/style/index.d.ts:109

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: ui/styling/style/index.d.ts:113

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: ui/styling/style/index.d.ts:110

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: ui/styling/style/index.d.ts:112

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: ui/styling/style/index.d.ts:111

***

### maxLines

```ts
maxLines: number;
```

Defined in: ui/styling/style/index.d.ts:90

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: ui/styling/style/index.d.ts:106

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: ui/styling/style/index.d.ts:105

***

### opacity

```ts
opacity: number;
```

Defined in: ui/styling/style/index.d.ts:94

***

### order

```ts
order: number;
```

Defined in: ui/styling/style/index.d.ts:139

***

### padding

```ts
padding: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/styling/style/index.d.ts:114

***

### paddingBottom

```ts
paddingBottom: LengthType;
```

Defined in: ui/styling/style/index.d.ts:118

***

### paddingInternal

```ts
paddingInternal: string;
```

Defined in: ui/styling/style/index.d.ts:48

***

### paddingLeft

```ts
paddingLeft: LengthType;
```

Defined in: ui/styling/style/index.d.ts:115

***

### paddingRight

```ts
paddingRight: LengthType;
```

Defined in: ui/styling/style/index.d.ts:117

***

### paddingTop

```ts
paddingTop: LengthType;
```

Defined in: ui/styling/style/index.d.ts:116

***

### perspective

```ts
perspective: number;
```

Defined in: ui/styling/style/index.d.ts:52

***

### placeholderColor

```ts
placeholderColor: Color;
```

Defined in: ui/styling/style/index.d.ts:60

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

Defined in: ui/styling/style/index.d.ts:157

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

Defined in: ui/styling/style/index.d.ts:49

***

### rotateX

```ts
rotateX: number;
```

Defined in: ui/styling/style/index.d.ts:50

***

### rotateY

```ts
rotateY: number;
```

Defined in: ui/styling/style/index.d.ts:51

***

### scaleX

```ts
scaleX: number;
```

Defined in: ui/styling/style/index.d.ts:53

***

### scaleY

```ts
scaleY: number;
```

Defined in: ui/styling/style/index.d.ts:54

***

### selectedBackgroundColor

```ts
selectedBackgroundColor: Color;
```

Defined in: ui/styling/style/index.d.ts:127

***

### selectedTabTextColor

```ts
selectedTabTextColor: Color;
```

Defined in: ui/styling/style/index.d.ts:124

***

### selectedTextColor

```ts
selectedTextColor: Color;
```

Defined in: ui/styling/style/index.d.ts:128

***

### separatorColor

```ts
separatorColor: Color;
```

Defined in: ui/styling/style/index.d.ts:126

***

### statusBarStyle

```ts
statusBarStyle: "dark" | "light";
```

Defined in: ui/styling/style/index.d.ts:129

***

### tabBackgroundColor

```ts
tabBackgroundColor: Color;
```

Defined in: ui/styling/style/index.d.ts:123

***

### tabTextColor

```ts
tabTextColor: Color;
```

Defined in: ui/styling/style/index.d.ts:122

***

### tabTextFontSize

```ts
tabTextFontSize: number;
```

Defined in: ui/styling/style/index.d.ts:121

***

### textAlignment

```ts
textAlignment: TextAlignmentType;
```

Defined in: ui/styling/style/index.d.ts:98

***

### textDecoration

```ts
textDecoration: TextDecorationType;
```

Defined in: ui/styling/style/index.d.ts:99

***

### textOverflow

```ts
textOverflow: TextOverflowType;
```

Defined in: ui/styling/style/index.d.ts:104

***

### textShadow

```ts
textShadow: ShadowCSSValues;
```

Defined in: ui/styling/style/index.d.ts:101

***

### textStroke

```ts
textStroke: StrokeCSSValues;
```

Defined in: ui/styling/style/index.d.ts:102

***

### textTransform

```ts
textTransform: TextTransformType;
```

Defined in: ui/styling/style/index.d.ts:100

***

### tintColor

```ts
tintColor: Color;
```

Defined in: ui/styling/style/index.d.ts:59

***

### translateX

```ts
translateX: number;
```

Defined in: ui/styling/style/index.d.ts:55

***

### translateY

```ts
translateY: number;
```

Defined in: ui/styling/style/index.d.ts:56

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: ui/styling/style/index.d.ts:120

***

### viewRef

```ts
viewRef: WeakRef<ViewBase>;
```

Defined in: ui/styling/style/index.d.ts:165

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: ui/styling/style/index.d.ts:95

***

### whiteSpace

```ts
whiteSpace: WhiteSpaceType;
```

Defined in: ui/styling/style/index.d.ts:103

***

### width

```ts
width: PercentLengthType;
```

Defined in: ui/styling/style/index.d.ts:107

***

### zIndex

```ts
zIndex: number;
```

Defined in: ui/styling/style/index.d.ts:93

***

### propertyChangeEvent

```ts
static propertyChangeEvent: string;
```

Defined in: data/observable/index.d.ts:75

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

Defined in: ui/styling/style/index.d.ts:166

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

Defined in: data/observable/index.d.ts:198

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

Defined in: data/observable/index.d.ts:199

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

Defined in: data/observable/index.d.ts:134

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

Defined in: data/observable/index.d.ts:85

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

Defined in: ui/styling/style/index.d.ts:37

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

Defined in: data/observable/index.d.ts:194

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

Defined in: data/observable/index.d.ts:183

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

Defined in: data/observable/index.d.ts:189

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

Defined in: data/observable/index.d.ts:126

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

Defined in: data/observable/index.d.ts:104

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

Defined in: data/observable/index.d.ts:116

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

Defined in: data/observable/index.d.ts:141

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

Defined in: ui/styling/style/index.d.ts:35

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

Defined in: ui/styling/style/index.d.ts:36

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

Defined in: ui/styling/style/index.d.ts:38

#### Returns

`void`

***

### resetUnscopedCssVariables()

```ts
resetUnscopedCssVariables(): void;
```

Defined in: ui/styling/style/index.d.ts:39

#### Returns

`void`

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: data/observable/index.d.ts:89

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

Defined in: data/observable/index.d.ts:93

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

Defined in: ui/styling/style/index.d.ts:33

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

Defined in: ui/styling/style/index.d.ts:34

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

Defined in: ui/styling/style/index.d.ts:40

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

Defined in: data/observable/index.d.ts:172

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

Defined in: data/observable/index.d.ts:159

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

Defined in: data/observable/index.d.ts:147

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

Defined in: data/observable/index.d.ts:153

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

Defined in: data/observable/index.d.ts:166

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
