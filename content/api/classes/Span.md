---
title: Span
titleTemplate: :title - API / NativeScript
description: A class used to create a single part of formatted string with a common text properties.
contributors: false
---

Defined in: ui/text-base/span.d.ts:12

A class used to create a single part of formatted string with a common text properties.

## Ns View

Span

## Extends

- [`ViewBase`](ViewBase.md)

## Constructors

### Constructor

```ts
new Span(): Span;
```

Defined in: ui/core/view-base/index.d.ts:363

#### Returns

`Span`

#### Inherited from

[`ViewBase`](ViewBase.md).[`constructor`](ViewBase.md#constructor)

## Properties

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: ui/core/view-base/index.d.ts:260

#### Inherited from

[`ViewBase`](ViewBase.md).[`_automaticallyAdjustsScrollViewInsets`](ViewBase.md#automaticallyadjustsscrollviewinsets)

***

### \_context

```ts
_context: any;
```

Defined in: ui/core/view-base/index.d.ts:237

#### Inherited from

[`ViewBase`](ViewBase.md).[`_context`](ViewBase.md#context)

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: ui/core/view-base/index.d.ts:239

#### Inherited from

[`ViewBase`](ViewBase.md).[`_cssState`](ViewBase.md#cssstate)

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:168

#### Inherited from

[`ViewBase`](ViewBase.md).[`_defaultPaddingBottom`](ViewBase.md#defaultpaddingbottom)

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:169

#### Inherited from

[`ViewBase`](ViewBase.md).[`_defaultPaddingLeft`](ViewBase.md#defaultpaddingleft)

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: ui/core/view-base/index.d.ts:167

#### Inherited from

[`ViewBase`](ViewBase.md).[`_defaultPaddingRight`](ViewBase.md#defaultpaddingright)

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: ui/core/view-base/index.d.ts:166

#### Inherited from

[`ViewBase`](ViewBase.md).[`_defaultPaddingTop`](ViewBase.md#defaultpaddingtop)

***

### \_domId

```ts
_domId: number;
```

Defined in: ui/core/view-base/index.d.ts:236

#### Inherited from

[`ViewBase`](ViewBase.md).[`_domId`](ViewBase.md#domid)

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: ui/core/view-base/index.d.ts:337

#### Inherited from

[`ViewBase`](ViewBase.md).[`_ignoreFlexMinWidthHeightReset`](ViewBase.md#ignoreflexminwidthheightreset)

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: ui/core/view-base/index.d.ts:238

#### Inherited from

[`ViewBase`](ViewBase.md).[`_isAddedToNativeVisualTree`](ViewBase.md#isaddedtonativevisualtree)

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: ui/core/view-base/index.d.ts:170

#### Inherited from

[`ViewBase`](ViewBase.md).[`_isPaddingRelative`](ViewBase.md#ispaddingrelative)

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: ui/core/view-base/index.d.ts:259

#### Inherited from

[`ViewBase`](ViewBase.md).[`_isStyleScopeHost`](ViewBase.md#isstylescopehost)

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:336

#### Inherited from

[`ViewBase`](ViewBase.md).[`_oldBottom`](ViewBase.md#oldbottom)

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:333

#### Inherited from

[`ViewBase`](ViewBase.md).[`_oldLeft`](ViewBase.md#oldleft)

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: ui/core/view-base/index.d.ts:335

#### Inherited from

[`ViewBase`](ViewBase.md).[`_oldRight`](ViewBase.md#oldright)

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: ui/core/view-base/index.d.ts:334

#### Inherited from

[`ViewBase`](ViewBase.md).[`_oldTop`](ViewBase.md#oldtop)

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: ui/core/view-base/index.d.ts:240

#### Inherited from

[`ViewBase`](ViewBase.md).[`_styleScope`](ViewBase.md#stylescope)

***

### \_suspendNativeUpdatesCount

```ts
_suspendNativeUpdatesCount: number;
```

Defined in: ui/core/view-base/index.d.ts:258

Determines the depth of suspended updates.
When the value is 0 the current property updates are not batched nor scoped and must be immediately applied.
If the value is 1 or greater, the current updates are batched and does not have to provide immediate update.
Do not set this field, the _batchUpdate method is responsible to keep the count up to date,
as well as adding/rmoving the view to/from the visual tree.

#### Inherited from

[`ViewBase`](ViewBase.md).[`_suspendNativeUpdatesCount`](ViewBase.md#suspendnativeupdatescount)

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: ui/core/view-base/index.d.ts:332

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`alignSelf`](ViewBase.md#alignself)

***

### backgroundColor

```ts
backgroundColor: Color;
```

Defined in: ui/text-base/span.d.ts:76

Gets or sets the font background color of the span.

#### Ns Property

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: ui/core/view-base/index.d.ts:186

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`bindingContext`](ViewBase.md#bindingcontext)

***

### className

```ts
className: string;
```

Defined in: ui/core/view-base/index.d.ts:212

Gets or sets the CSS class name for this view.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`className`](ViewBase.md#classname)

***

### col

```ts
col: number;
```

Defined in: ui/core/view-base/index.d.ts:288

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`col`](ViewBase.md#col)

***

### color

```ts
color: Color;
```

Defined in: ui/text-base/span.d.ts:69

Gets or sets the font foreground color of the span.

#### Ns Property

***

### colSpan

```ts
colSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:303

The number of columns for the element to span across.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`colSpan`](ViewBase.md#colspan)

***

### column

```ts
column: number;
```

Defined in: ui/core/view-base/index.d.ts:293

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`column`](ViewBase.md#column)

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:307

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`columnSpan`](ViewBase.md#columnspan)

***

### cssClasses

```ts
readonly cssClasses: Set<string>;
```

Defined in: ui/core/view-base/index.d.ts:361

#### Inherited from

[`ViewBase`](ViewBase.md).[`cssClasses`](ViewBase.md#cssclasses)

***

### cssPseudoClasses

```ts
readonly cssPseudoClasses: Set<string>;
```

Defined in: ui/core/view-base/index.d.ts:362

#### Inherited from

[`ViewBase`](ViewBase.md).[`cssPseudoClasses`](ViewBase.md#csspseudoclasses)

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: ui/core/view-base/index.d.ts:235

Default visual state, defaults to 'normal'

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`defaultVisualState`](ViewBase.md#defaultvisualstate)

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: ui/core/view-base/index.d.ts:277

Dock position of the view within its parent.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`dock`](ViewBase.md#dock)

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: ui/core/view-base/index.d.ts:177

#### Inherited from

[`ViewBase`](ViewBase.md).[`domNode`](ViewBase.md#domnode)

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:348

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveBorderBottomWidth`](ViewBase.md#effectiveborderbottomwidth)

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:349

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveBorderLeftWidth`](ViewBase.md#effectiveborderleftwidth)

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:347

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveBorderRightWidth`](ViewBase.md#effectiveborderrightwidth)

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:346

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveBorderTopWidth`](ViewBase.md#effectivebordertopwidth)

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: ui/core/view-base/index.d.ts:341

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveHeight`](ViewBase.md#effectiveheight)

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:271

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveLeft`](ViewBase.md#effectiveleft)

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:344

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveMarginBottom`](ViewBase.md#effectivemarginbottom)

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:345

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveMarginLeft`](ViewBase.md#effectivemarginleft)

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: ui/core/view-base/index.d.ts:343

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveMarginRight`](ViewBase.md#effectivemarginright)

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: ui/core/view-base/index.d.ts:342

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveMarginTop`](ViewBase.md#effectivemargintop)

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: ui/core/view-base/index.d.ts:339

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveMinHeight`](ViewBase.md#effectiveminheight)

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:338

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveMinWidth`](ViewBase.md#effectiveminwidth)

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: ui/core/view-base/index.d.ts:272

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveTop`](ViewBase.md#effectivetop)

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:340

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectiveWidth`](ViewBase.md#effectivewidth)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: ui/core/view-base/index.d.ts:317

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`flexGrow`](ViewBase.md#flexgrow)

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: ui/core/view-base/index.d.ts:322

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`flexShrink`](ViewBase.md#flexshrink)

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: ui/core/view-base/index.d.ts:327

When true, forces the item to wrap onto a new line.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`flexWrapBefore`](ViewBase.md#flexwrapbefore)

***

### fontFamily

```ts
fontFamily: string;
```

Defined in: ui/text-base/span.d.ts:27

Gets or sets the font family of the span.

#### Ns Property

***

### fontSize

```ts
fontSize: number;
```

Defined in: ui/text-base/span.d.ts:34

Gets or sets the font size of the span.

#### Ns Property

***

### fontStyle

```ts
fontStyle: FontStyleType;
```

Defined in: ui/text-base/span.d.ts:41

Gets or sets the font style of the span.

#### Ns Property

***

### fontVariationSettings

```ts
fontVariationSettings: FontVariationSettingsType[];
```

Defined in: ui/text-base/span.d.ts:55

Gets or sets the font variation settings of the span.

#### Ns Property

***

### fontWeight

```ts
fontWeight: FontWeightType;
```

Defined in: ui/text-base/span.d.ts:48

Gets or sets the font weight of the span.

#### Ns Property

***

### hidden

```ts
hidden: boolean;
```

Defined in: ui/core/view-base/index.d.ts:217

Gets or sets the visual state of the view.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`hidden`](ViewBase.md#hidden)

***

### id

```ts
id: string;
```

Defined in: ui/core/view-base/index.d.ts:206

Gets or sets the id for this view.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`id`](ViewBase.md#id)

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: ui/text-base/span.d.ts:83

Defines whether accessibility font scale should affect font size.

#### Ns Property

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: ui/text-base/span.d.ts:97

Gets or sets the maximum accessibility font scale.

#### Ns Property

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: ui/text-base/span.d.ts:90

Gets or sets the minimum accessibility font scale.

#### Ns Property

***

### isCollapsed

```ts
isCollapsed: any;
```

Defined in: ui/core/view-base/index.d.ts:200

Returns true if visibility is set to 'collapse'.
Default(false) set in prototype
Readonly property

#### Inherited from

[`ViewBase`](ViewBase.md).[`isCollapsed`](ViewBase.md#iscollapsed)

***

### left

```ts
left: LengthType;
```

Defined in: ui/core/view-base/index.d.ts:265

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`left`](ViewBase.md#left)

***

### mIsRootView

```ts
mIsRootView: boolean;
```

Defined in: ui/core/view-base/index.d.ts:515

if _setupAsRootView is called it means it is not supposed to be
added to a parent. However parent can be set before for the purpose
of CSS variables/classes. That variable ensures that _addViewToNativeVisualTree
is not called in _setupAsRootView

#### Inherited from

[`ViewBase`](ViewBase.md).[`mIsRootView`](ViewBase.md#misrootview)

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: ui/core/view-base/index.d.ts:190

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

#### Inherited from

[`ViewBase`](ViewBase.md).[`nativeViewProtected`](ViewBase.md#nativeviewprotected)

***

### order

```ts
order: number;
```

Defined in: ui/core/view-base/index.d.ts:312

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`order`](ViewBase.md#order)

***

### parent

```ts
parent: FormattedString;
```

Defined in: ui/text-base/span.d.ts:20

Gets the parent view. This property is read-only.

#### Overrides

[`ViewBase`](ViewBase.md).[`parent`](ViewBase.md#parent)

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: ui/core/view-base/index.d.ts:178

#### Inherited from

[`ViewBase`](ViewBase.md).[`recycleNativeView`](ViewBase.md#recyclenativeview)

***

### reusable

```ts
reusable: boolean;
```

Defined in: ui/core/view-base/index.d.ts:360

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`reusable`](ViewBase.md#reusable)

***

### row

```ts
row: number;
```

Defined in: ui/core/view-base/index.d.ts:283

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`row`](ViewBase.md#row)

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:298

The number of rows for the element to span across.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`rowSpan`](ViewBase.md#rowspan)

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: ui/core/view-base/index.d.ts:229

Opt out of shared transition under different binding conditions

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`sharedTransitionIgnore`](ViewBase.md#sharedtransitionignore)

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: ui/core/view-base/index.d.ts:223

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`sharedTransitionTag`](ViewBase.md#sharedtransitiontag)

***

### tappable

```ts
readonly tappable: boolean;
```

Defined in: ui/text-base/span.d.ts:111

Gets if the span is tappable or not.

#### Ns Property

***

### text

```ts
text: string;
```

Defined in: ui/text-base/span.d.ts:104

Gets or sets the text for the span.

#### Ns Property

***

### textDecoration

```ts
textDecoration: TextDecorationType;
```

Defined in: ui/text-base/span.d.ts:62

Gets or sets text decorations for the span.

#### Ns Property

***

### top

```ts
top: LengthType;
```

Defined in: ui/core/view-base/index.d.ts:270

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

#### Inherited from

[`ViewBase`](ViewBase.md).[`top`](ViewBase.md#top)

***

### viewController

```ts
viewController: any;
```

Defined in: ui/core/view-base/index.d.ts:182

returns the native UIViewController.

#### Inherited from

[`ViewBase`](ViewBase.md).[`viewController`](ViewBase.md#viewcontroller)

***

### createdEvent

```ts
static createdEvent: string;
```

Defined in: ui/core/view-base/index.d.ts:149

String value used when hooking to creation event

#### Ns Event

created

#### Inherited from

[`ViewBase`](ViewBase.md).[`createdEvent`](ViewBase.md#createdevent)

***

### disposeNativeViewEvent

```ts
static disposeNativeViewEvent: string;
```

Defined in: ui/core/view-base/index.d.ts:155

String value used when hooking to disposeNativeView event

#### Ns Event

disposeNativeView

#### Inherited from

[`ViewBase`](ViewBase.md).[`disposeNativeViewEvent`](ViewBase.md#disposenativeviewevent)

***

### linkTapEvent

```ts
static linkTapEvent: string;
```

Defined in: ui/text-base/span.d.ts:18

String value used when hooking to linkTap event.

#### Ns Event

linkTap

***

### loadedEvent

```ts
static loadedEvent: string;
```

Defined in: ui/core/view-base/index.d.ts:137

String value used when hooking to loaded event.

#### Ns Event

loaded

#### Inherited from

[`ViewBase`](ViewBase.md).[`loadedEvent`](ViewBase.md#loadedevent)

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

[`ViewBase`](ViewBase.md).[`propertyChangeEvent`](ViewBase.md#propertychangeevent)

***

### unloadedEvent

```ts
static unloadedEvent: string;
```

Defined in: ui/core/view-base/index.d.ts:143

String value used when hooking to unloaded event.

#### Ns Event

unloaded

#### Inherited from

[`ViewBase`](ViewBase.md).[`unloadedEvent`](ViewBase.md#unloadedevent)

## Accessors

### android

#### Get Signature

```ts
get android(): any;
```

Defined in: ui/core/view-base/index.d.ts:384

##### Returns

`any`

#### Inherited from

[`ViewBase`](ViewBase.md).[`android`](ViewBase.md#android)

***

### class

#### Get Signature

```ts
get class(): string;
```

Defined in: ui/core/view-base/index.d.ts:387

##### Returns

`string`

#### Set Signature

```ts
set class(v: string): void;
```

Defined in: ui/core/view-base/index.d.ts:388

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`class`](ViewBase.md#class)

***

### effectivePaddingBottom

#### Get Signature

```ts
get effectivePaddingBottom(): number;
```

Defined in: ui/core/view-base/index.d.ts:393

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingBottom(v: number): void;
```

Defined in: ui/core/view-base/index.d.ts:394

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectivePaddingBottom`](ViewBase.md#effectivepaddingbottom)

***

### effectivePaddingLeft

#### Get Signature

```ts
get effectivePaddingLeft(): number;
```

Defined in: ui/core/view-base/index.d.ts:395

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingLeft(v: number): void;
```

Defined in: ui/core/view-base/index.d.ts:396

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectivePaddingLeft`](ViewBase.md#effectivepaddingleft)

***

### effectivePaddingRight

#### Get Signature

```ts
get effectivePaddingRight(): number;
```

Defined in: ui/core/view-base/index.d.ts:391

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingRight(v: number): void;
```

Defined in: ui/core/view-base/index.d.ts:392

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectivePaddingRight`](ViewBase.md#effectivepaddingright)

***

### effectivePaddingTop

#### Get Signature

```ts
get effectivePaddingTop(): number;
```

Defined in: ui/core/view-base/index.d.ts:389

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingTop(v: number): void;
```

Defined in: ui/core/view-base/index.d.ts:390

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`effectivePaddingTop`](ViewBase.md#effectivepaddingtop)

***

### ios

#### Get Signature

```ts
get ios(): any;
```

Defined in: ui/core/view-base/index.d.ts:385

##### Returns

`any`

#### Inherited from

[`ViewBase`](ViewBase.md).[`ios`](ViewBase.md#ios)

***

### isLoaded

#### Get Signature

```ts
get isLoaded(): boolean;
```

Defined in: ui/core/view-base/index.d.ts:386

##### Returns

`boolean`

#### Inherited from

[`ViewBase`](ViewBase.md).[`isLoaded`](ViewBase.md#isloaded)

***

### nativeView

#### Get Signature

```ts
get nativeView(): any;
```

Defined in: ui/core/view-base/index.d.ts:369

##### Returns

`any`

#### Set Signature

```ts
set nativeView(value: any): void;
```

Defined in: ui/core/view-base/index.d.ts:370

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`nativeView`](ViewBase.md#nativeview)

***

### page

#### Get Signature

```ts
get page(): Page;
```

Defined in: ui/core/view-base/index.d.ts:409

Gets owner page. This is a read-only property.

##### Returns

[`Page`](Page.md)

#### Inherited from

[`ViewBase`](ViewBase.md).[`page`](ViewBase.md#page)

***

### parentNode

#### Get Signature

```ts
get parentNode(): ViewBase;
```

Defined in: ui/core/view-base/index.d.ts:367

Gets the template parent or the native parent. Sets the template parent.

##### Returns

[`ViewBase`](ViewBase.md)

#### Set Signature

```ts
set parentNode(node: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:368

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`ViewBase`](ViewBase.md) |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`parentNode`](ViewBase.md#parentnode)

***

### style

#### Get Signature

```ts
get style(): Style;
```

Defined in: ui/core/view-base/index.d.ts:378

Gets the style object associated to this view.

##### Returns

[`Style`](Style.md)

#### Set Signature

```ts
set style(inlineStyle: Style): void;
```

Defined in: ui/core/view-base/index.d.ts:383

##### Ns Property

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `inlineStyle` | [`Style`](Style.md) |

##### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`style`](ViewBase.md#style)

***

### typeName

#### Get Signature

```ts
get typeName(): string;
```

Defined in: ui/core/view-base/index.d.ts:374

Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".

##### Returns

`string`

#### Inherited from

[`ViewBase`](ViewBase.md).[`typeName`](ViewBase.md#typename)

***

### visualState

#### Get Signature

```ts
get visualState(): string;
```

Defined in: ui/core/view-base/index.d.ts:552

##### Deprecated

##### Returns

`string`

#### Inherited from

[`ViewBase`](ViewBase.md).[`visualState`](ViewBase.md#visualstate)

## Methods

### \_addView()

```ts
_addView(view: ViewBase, atIndex?: number): void;
```

Defined in: ui/core/view-base/index.d.ts:463

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_addView`](ViewBase.md#addview)

***

### \_addViewCore()

```ts
_addViewCore(view: ViewBase, atIndex?: number): void;
```

Defined in: ui/core/view-base/index.d.ts:467

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_addViewCore`](ViewBase.md#addviewcore)

***

### \_addViewToNativeVisualTree()

```ts
_addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean;
```

Defined in: ui/core/view-base/index.d.ts:544

Performs the core logic of adding a child view to the native visual tree. Returns true if the view's native representation has been successfully added, false otherwise.
Method is intended to be overridden by inheritors and used as "protected".

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`boolean`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_addViewToNativeVisualTree`](ViewBase.md#addviewtonativevisualtree)

***

### \_addVisualState()

```ts
_addVisualState(state: string): void;
```

Defined in: ui/core/view-base/index.d.ts:553

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_addVisualState`](ViewBase.md#addvisualstate)

***

### ~~\_applyXmlAttribute()~~

```ts
_applyXmlAttribute(attribute: string, value: string): boolean;
```

Defined in: ui/core/view-base/index.d.ts:565

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `attribute` | `string` |
| `value` | `string` |

#### Returns

`boolean`

#### Deprecated

This used to be the way to set attribute values in early \{N\} versions.
Now attributes are expected to be set as plain properties on the view instances.

#### Inherited from

[`ViewBase`](ViewBase.md).[`_applyXmlAttribute`](ViewBase.md#applyxmlattribute)

***

### \_batchUpdate()

```ts
_batchUpdate<T>(callback: () => T): T;
```

Defined in: ui/core/view-base/index.d.ts:425

Allow multiple updates to be performed on the instance at once.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `T` |

#### Returns

`T`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_batchUpdate`](ViewBase.md#batchupdate)

***

### \_childIndexToNativeChildIndex()

```ts
_childIndexToNativeChildIndex(index?: number): number;
```

Defined in: ui/core/view-base/index.d.ts:539

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index?` | `number` |

#### Returns

`number`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_childIndexToNativeChildIndex`](ViewBase.md#childindextonativechildindex)

***

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

[`ViewBase`](ViewBase.md).[`_createPropertyChangeData`](ViewBase.md#createpropertychangedata)

***

### \_dialogClosed()

```ts
_dialogClosed(): void;
```

Defined in: ui/core/view-base/index.d.ts:597

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_dialogClosed`](ViewBase.md#dialogclosed)

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

[`ViewBase`](ViewBase.md).[`_emit`](ViewBase.md#emit)

***

### ~~\_goToVisualState()~~

```ts
_goToVisualState(state: string): void;
```

Defined in: ui/core/view-base/index.d.ts:558

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

#### Returns

`void`

#### Deprecated

Use View._addVisualState() and View._removeVisualState() instead.

#### Inherited from

[`ViewBase`](ViewBase.md).[`_goToVisualState`](ViewBase.md#gotovisualstate)

***

### \_inheritStyles()

```ts
_inheritStyles(view: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:462

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_inheritStyles`](ViewBase.md#inheritstyles)

***

### \_inheritStyleScope()

```ts
_inheritStyleScope(styleScope: StyleScope): void;
```

Defined in: ui/core/view-base/index.d.ts:576

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `styleScope` | `StyleScope` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_inheritStyleScope`](ViewBase.md#inheritstylescope)

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: ui/core/view-base/index.d.ts:418

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_layoutParent`](ViewBase.md#layoutparent)

***

### \_onRootViewReset()

```ts
_onRootViewReset(): void;
```

Defined in: ui/core/view-base/index.d.ts:601

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_onRootViewReset`](ViewBase.md#onrootviewreset)

***

### \_parentChanged()

```ts
_parentChanged(oldParent: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:567

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldParent` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_parentChanged`](ViewBase.md#parentchanged)

***

### \_removeView()

```ts
_removeView(view: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:486

Core logic for removing a child view from this instance. Used by the framework to handle lifecycle events more centralized. Do not use outside the UI Stack implementation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_removeView`](ViewBase.md#removeview)

***

### \_removeViewCore()

```ts
_removeViewCore(view: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:490

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_removeViewCore`](ViewBase.md#removeviewcore)

***

### \_removeViewFromNativeVisualTree()

```ts
_removeViewFromNativeVisualTree(view: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:548

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_removeViewFromNativeVisualTree`](ViewBase.md#removeviewfromnativevisualtree)

***

### \_removeVisualState()

```ts
_removeVisualState(state: string): void;
```

Defined in: ui/core/view-base/index.d.ts:554

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_removeVisualState`](ViewBase.md#removevisualstate)

***

### \_resumeNativeUpdates()

```ts
_resumeNativeUpdates(type: SuspendType): void;
```

Defined in: ui/core/view-base/index.d.ts:421

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SuspendType` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_resumeNativeUpdates`](ViewBase.md#resumenativeupdates)

***

### \_setDefaultPaddings()

```ts
_setDefaultPaddings(insets: any): void;
```

Defined in: ui/core/view-base/index.d.ts:419

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `insets` | `any` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_setDefaultPaddings`](ViewBase.md#setdefaultpaddings)

***

### \_setupAsRootView()

```ts
_setupAsRootView(context: any): void;
```

Defined in: ui/core/view-base/index.d.ts:516

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_setupAsRootView`](ViewBase.md#setupasrootview)

***

### \_setupUI()

```ts
_setupUI(
   context: any, 
   atIndex?: number, 
   parentIsLoaded?: boolean): void;
```

Defined in: ui/core/view-base/index.d.ts:521

Setups the UI for ViewBase and all its children recursively.
This method should *not* be overridden by derived views.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |
| `atIndex?` | `number` |
| `parentIsLoaded?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_setupUI`](ViewBase.md#setupui)

***

### \_shouldDelayLayout()

```ts
_shouldDelayLayout(): boolean;
```

Defined in: ui/core/view-base/index.d.ts:477

When returning true the callLoaded method will be run in setTimeout
Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`boolean`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_shouldDelayLayout`](ViewBase.md#shoulddelaylayout)

***

### \_suspendNativeUpdates()

```ts
_suspendNativeUpdates(type: SuspendType): void;
```

Defined in: ui/core/view-base/index.d.ts:420

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SuspendType` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_suspendNativeUpdates`](ViewBase.md#suspendnativeupdates)

***

### \_tearDownUI()

```ts
_tearDownUI(force?: boolean): void;
```

Defined in: ui/core/view-base/index.d.ts:538

Tears down the UI for ViewBase and all its children recursively.
This method should *not* be overridden by derived views.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`_tearDownUI`](ViewBase.md#teardownui)

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

[`ViewBase`](ViewBase.md).[`addEventListener`](ViewBase.md#addeventlistener)

***

### addPseudoClass()

```ts
protected addPseudoClass(name: string): void;
```

Defined in: ui/core/view-base/index.d.ts:439

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Unstable

A widget can call this method to add a matching css pseudo class.

#### Inherited from

[`ViewBase`](ViewBase.md).[`addPseudoClass`](ViewBase.md#addpseudoclass)

***

### bind()

```ts
bind(options: BindingOptions, source?: Object): void;
```

Defined in: ui/core/view-base/index.d.ts:450

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`BindingOptions`](../interfaces/BindingOptions.md) |
| `source?` | `Object` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`bind`](ViewBase.md#bind)

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:429

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`callLoaded`](ViewBase.md#callloaded)

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:430

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`callUnloaded`](ViewBase.md#callunloaded)

***

### closeModal()

```ts
closeModal(...args: any[]): void;
```

Defined in: ui/core/view-base/index.d.ts:593

Closes the current modal view that this page is showing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`closeModal`](ViewBase.md#closemodal)

***

### createNativeView()

```ts
createNativeView(): Object;
```

Defined in: ui/core/view-base/index.d.ts:495

Creates a native view.
Returns either android.view.View or UIView.

#### Returns

`Object`

#### Inherited from

[`ViewBase`](ViewBase.md).[`createNativeView`](ViewBase.md#createnativeview)

***

### deletePseudoClass()

```ts
protected deletePseudoClass(name: string): void;
```

Defined in: ui/core/view-base/index.d.ts:445

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Unstable

A widget can call this method to discard matching css pseudo class.

#### Inherited from

[`ViewBase`](ViewBase.md).[`deletePseudoClass`](ViewBase.md#deletepseudoclass)

***

### destroyNode()

```ts
destroyNode(forceDestroyChildren?: boolean): void;
```

Defined in: ui/core/view-base/index.d.ts:533

Tears down the UI of a reusable node by making it no longer reusable.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `forceDestroyChildren?` | `boolean` | Force destroy the children (even if they are reusable) |

#### Returns

`void`

#### See

_tearDownUI

#### Inherited from

[`ViewBase`](ViewBase.md).[`destroyNode`](ViewBase.md#destroynode)

***

### disposeNativeView()

```ts
disposeNativeView(): void;
```

Defined in: ui/core/view-base/index.d.ts:499

Clean up references to the native view.

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`disposeNativeView`](ViewBase.md#disposenativeview)

***

### eachChild()

```ts
eachChild(callback: (child: ViewBase) => boolean): void;
```

Defined in: ui/core/view-base/index.d.ts:461

Iterates over children of type ViewBase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`ViewBase`](ViewBase.md)) => `boolean` | Called for each child of type ViewBase. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`eachChild`](ViewBase.md#eachchild)

***

### ensureDomNode()

```ts
ensureDomNode(): void;
```

Defined in: ui/core/view-base/index.d.ts:414

#### Returns

`void`

#### Unstable

Ensures a dom-node for this view.

#### Inherited from

[`ViewBase`](ViewBase.md).[`ensureDomNode`](ViewBase.md#ensuredomnode)

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

[`ViewBase`](ViewBase.md).[`get`](ViewBase.md#get)

***

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: ui/core/view-base/index.d.ts:397

#### Returns

`string`

#### Inherited from

[`ViewBase`](ViewBase.md).[`getEffectivePaddingShorthand`](ViewBase.md#geteffectivepaddingshorthand)

***

### getViewByDomId()

```ts
getViewByDomId<T>(domId: number): T;
```

Defined in: ui/core/view-base/index.d.ts:405

Returns the child view with the specified domId.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ViewBase`](ViewBase.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `domId` | `number` |

#### Returns

`T`

#### Inherited from

[`ViewBase`](ViewBase.md).[`getViewByDomId`](ViewBase.md#getviewbydomid)

***

### getViewById()

```ts
getViewById<T>(id: string): T;
```

Defined in: ui/core/view-base/index.d.ts:401

Returns the child view with the specified id.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ViewBase`](ViewBase.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`T`

#### Inherited from

[`ViewBase`](ViewBase.md).[`getViewById`](ViewBase.md#getviewbyid)

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

[`ViewBase`](ViewBase.md).[`hasListeners`](ViewBase.md#haslisteners)

***

### initNativeView()

```ts
initNativeView(): void;
```

Defined in: ui/core/view-base/index.d.ts:503

Initializes properties/listeners of the native view.

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`initNativeView`](ViewBase.md#initnativeview)

***

### loadView()

```ts
loadView(view: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:472

Load view.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | to load. |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`loadView`](ViewBase.md#loadview)

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

[`ViewBase`](ViewBase.md).[`notify`](ViewBase.md#notify)

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

[`ViewBase`](ViewBase.md).[`notifyPropertyChange`](ViewBase.md#notifypropertychange)

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

[`ViewBase`](ViewBase.md).[`off`](ViewBase.md#off)

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

[`ViewBase`](ViewBase.md).[`on`](ViewBase.md#on)

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

[`ViewBase`](ViewBase.md).[`once`](ViewBase.md#once)

***

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:416

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`onLoaded`](ViewBase.md#onloaded)

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: ui/core/view-base/index.d.ts:568

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`onResumeNativeUpdates`](ViewBase.md#onresumenativeupdates)

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:417

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`onUnloaded`](ViewBase.md#onunloaded)

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

[`ViewBase`](ViewBase.md).[`removeEventListener`](ViewBase.md#removeeventlistener)

***

### requestLayout()

```ts
requestLayout(): void;
```

Defined in: ui/core/view-base/index.d.ts:456

Invalidates the layout of the view and triggers a new layout pass.

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`requestLayout`](ViewBase.md#requestlayout)

***

### resetNativeView()

```ts
resetNativeView(): void;
```

Defined in: ui/core/view-base/index.d.ts:507

Resets properties/listeners set to the native view.

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`resetNativeView`](ViewBase.md#resetnativeview)

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: ui/core/view-base/index.d.ts:415

Updates the specified property with the provided value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`set`](ViewBase.md#set)

***

### setInlineStyle()

```ts
setInlineStyle(style: string): void;
```

Defined in: ui/core/view-base/index.d.ts:566

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | `string` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`setInlineStyle`](ViewBase.md#setinlinestyle)

***

### setNativeView()

```ts
setNativeView(value: any): void;
```

Defined in: ui/core/view-base/index.d.ts:527

Set the nativeView field performing extra checks and updates to the native properties on the new view.
Use in cases where the createNativeView is not suitable.
As an example use in item controls where the native parent view will create the native views for child items.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`setNativeView`](ViewBase.md#setnativeview)

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

[`ViewBase`](ViewBase.md).[`setProperty`](ViewBase.md#setproperty)

***

### showModal()

#### Call Signature

```ts
showModal(view: ViewBase, modalOptions?: ShowModalOptions): ViewBase;
```

Defined in: ui/core/view-base/index.d.ts:582

Shows the view passed as parameter as a modal view.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | View instance to be shown modally. |
| `modalOptions?` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) | A ShowModalOptions instance |

##### Returns

[`ViewBase`](ViewBase.md)

##### Inherited from

[`ViewBase`](ViewBase.md).[`showModal`](ViewBase.md#showmodal)

#### Call Signature

```ts
showModal(moduleName: string, modalOptions?: ShowModalOptions): ViewBase;
```

Defined in: ui/core/view-base/index.d.ts:588

Shows the View contained in moduleName as a modal view.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `string` | The name of the module to load starting from the application root. |
| `modalOptions?` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) | A ShowModalOptions instance |

##### Returns

[`ViewBase`](ViewBase.md)

##### Inherited from

[`ViewBase`](ViewBase.md).[`showModal`](ViewBase.md#showmodal)

***

### toString()

```ts
toString(): string;
```

Defined in: ui/core/view-base/index.d.ts:569

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ViewBase`](ViewBase.md).[`toString`](ViewBase.md#tostring)

***

### unbind()

```ts
unbind(property: string): void;
```

Defined in: ui/core/view-base/index.d.ts:451

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `string` |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`unbind`](ViewBase.md#unbind)

***

### unloadView()

```ts
unloadView(view: ViewBase): void;
```

Defined in: ui/core/view-base/index.d.ts:482

Unload view.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | to unload. |

#### Returns

`void`

#### Inherited from

[`ViewBase`](ViewBase.md).[`unloadView`](ViewBase.md#unloadview)

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

[`ViewBase`](ViewBase.md).[`addEventListener`](ViewBase.md#addeventlistener-1)

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

[`ViewBase`](ViewBase.md).[`off`](ViewBase.md#off-1)

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

[`ViewBase`](ViewBase.md).[`on`](ViewBase.md#on-1)

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

[`ViewBase`](ViewBase.md).[`once`](ViewBase.md#once-1)

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

[`ViewBase`](ViewBase.md).[`removeEventListener`](ViewBase.md#removeeventlistener-1)
