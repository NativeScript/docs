---
title: RootLayout
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/layouts/root-layout/index.d.ts:7

## Ns View

RootLayout

## Extends

- [`GridLayout`](GridLayout.md)

## Constructors

### Constructor

```ts
new RootLayout(): RootLayout;
```

Defined in: ui/core/view-base/index.d.ts:363

#### Returns

`RootLayout`

#### Inherited from

[`GridLayout`](GridLayout.md).[`constructor`](GridLayout.md#constructor)

## Properties

### \_androidContentDescriptionUpdated?

```ts
optional _androidContentDescriptionUpdated?: boolean;
```

Defined in: ui/core/view/index.d.ts:348

Internal use only. This is used to limit the number of updates to android.view.View.setContentDescription()

#### Inherited from

[`GridLayout`](GridLayout.md).[`_androidContentDescriptionUpdated`](GridLayout.md#androidcontentdescriptionupdated)

***

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: ui/core/view-base/index.d.ts:260

#### Inherited from

[`GridLayout`](GridLayout.md).[`_automaticallyAdjustsScrollViewInsets`](GridLayout.md#automaticallyadjustsscrollviewinsets)

***

### \_closeModalCallback

```ts
protected _closeModalCallback: Function;
```

Defined in: ui/core/view/view-common.d.ts:57

#### Inherited from

[`GridLayout`](GridLayout.md).[`_closeModalCallback`](GridLayout.md#closemodalcallback)

***

### \_context

```ts
_context: any;
```

Defined in: ui/core/view-base/index.d.ts:237

#### Inherited from

[`GridLayout`](GridLayout.md).[`_context`](GridLayout.md#context)

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: ui/core/view-base/index.d.ts:239

#### Inherited from

[`GridLayout`](GridLayout.md).[`_cssState`](GridLayout.md#cssstate)

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:168

#### Inherited from

[`GridLayout`](GridLayout.md).[`_defaultPaddingBottom`](GridLayout.md#defaultpaddingbottom)

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:169

#### Inherited from

[`GridLayout`](GridLayout.md).[`_defaultPaddingLeft`](GridLayout.md#defaultpaddingleft)

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: ui/core/view-base/index.d.ts:167

#### Inherited from

[`GridLayout`](GridLayout.md).[`_defaultPaddingRight`](GridLayout.md#defaultpaddingright)

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: ui/core/view-base/index.d.ts:166

#### Inherited from

[`GridLayout`](GridLayout.md).[`_defaultPaddingTop`](GridLayout.md#defaultpaddingtop)

***

### \_domId

```ts
_domId: number;
```

Defined in: ui/core/view-base/index.d.ts:236

#### Inherited from

[`GridLayout`](GridLayout.md).[`_domId`](GridLayout.md#domid)

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: ui/core/view-base/index.d.ts:337

#### Inherited from

[`GridLayout`](GridLayout.md).[`_ignoreFlexMinWidthHeightReset`](GridLayout.md#ignoreflexminwidthheightreset)

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: ui/core/view-base/index.d.ts:238

#### Inherited from

[`GridLayout`](GridLayout.md).[`_isAddedToNativeVisualTree`](GridLayout.md#isaddedtonativevisualtree)

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: ui/core/view-base/index.d.ts:170

#### Inherited from

[`GridLayout`](GridLayout.md).[`_isPaddingRelative`](GridLayout.md#ispaddingrelative)

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: ui/core/view-base/index.d.ts:259

#### Inherited from

[`GridLayout`](GridLayout.md).[`_isStyleScopeHost`](GridLayout.md#isstylescopehost)

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:336

#### Inherited from

[`GridLayout`](GridLayout.md).[`_oldBottom`](GridLayout.md#oldbottom)

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:333

#### Inherited from

[`GridLayout`](GridLayout.md).[`_oldLeft`](GridLayout.md#oldleft)

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: ui/core/view-base/index.d.ts:335

#### Inherited from

[`GridLayout`](GridLayout.md).[`_oldRight`](GridLayout.md#oldright)

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: ui/core/view-base/index.d.ts:334

#### Inherited from

[`GridLayout`](GridLayout.md).[`_oldTop`](GridLayout.md#oldtop)

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: ui/core/view-base/index.d.ts:240

#### Inherited from

[`GridLayout`](GridLayout.md).[`_styleScope`](GridLayout.md#stylescope)

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

[`GridLayout`](GridLayout.md).[`_suspendNativeUpdatesCount`](GridLayout.md#suspendnativeupdatescount)

***

### accessibilityHidden

```ts
accessibilityHidden: boolean;
```

Defined in: ui/core/view/index.d.ts:250

Hide the view and its children from the a11y service

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityHidden`](GridLayout.md#accessibilityhidden)

***

### accessibilityHint

```ts
accessibilityHint: string;
```

Defined in: ui/core/view/index.d.ts:295

A hint describes the elements behavior. Example: 'Tap change playback speed'

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityHint`](GridLayout.md#accessibilityhint)

***

### accessibilityIdentifier

```ts
accessibilityIdentifier: string;
```

Defined in: ui/core/view/index.d.ts:259

The view's unique accessibilityIdentifier.

This is used for automated testing.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityIdentifier`](GridLayout.md#accessibilityidentifier)

***

### accessibilityIgnoresInvertColors

```ts
accessibilityIgnoresInvertColors: boolean;
```

Defined in: ui/core/view/index.d.ts:322

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityIgnoresInvertColors`](GridLayout.md#accessibilityignoresinvertcolors)

***

### accessibilityLabel

```ts
accessibilityLabel: string;
```

Defined in: ui/core/view/index.d.ts:281

Short description of the element, ideally one word.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityLabel`](GridLayout.md#accessibilitylabel)

***

### accessibilityLanguage

```ts
accessibilityLanguage: string;
```

Defined in: ui/core/view/index.d.ts:310

Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityLanguage`](GridLayout.md#accessibilitylanguage)

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: ui/core/view/index.d.ts:302

When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityLiveRegion`](GridLayout.md#accessibilityliveregion)

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: ui/core/view/index.d.ts:317

This view starts a media session. Equivalent to trait = startsMedia

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityMediaSession`](GridLayout.md#accessibilitymediasession)

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: ui/core/view/index.d.ts:266

Which role should this view be treated by the a11y service?

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityRole`](GridLayout.md#accessibilityrole)

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: ui/core/view/index.d.ts:274

Which state should this view be treated as by the a11y service?

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityState`](GridLayout.md#accessibilitystate)

***

### accessibilityValue

```ts
accessibilityValue: string;
```

Defined in: ui/core/view/index.d.ts:288

Current value of the element in a localized string.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityValue`](GridLayout.md#accessibilityvalue)

***

### accessible

```ts
accessible: boolean;
```

Defined in: ui/core/view/index.d.ts:243

If `true` the element is an accessibility element and all the children will be treated as a single selectable component.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessible`](GridLayout.md#accessible)

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: ui/core/view-base/index.d.ts:332

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`alignSelf`](GridLayout.md#alignself)

***

### android

```ts
android: any;
```

Defined in: ui/core/view/index.d.ts:111

Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.

#### Inherited from

[`GridLayout`](GridLayout.md).[`android`](GridLayout.md#android)

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: ui/core/view/index.d.ts:368

Gets or sets the dynamic elevation offset of the android view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`androidDynamicElevationOffset`](GridLayout.md#androiddynamicelevationoffset)

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: ui/core/view/index.d.ts:361

Gets or sets the elevation of the android view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`androidElevation`](GridLayout.md#androidelevation)

***

### androidOverflowEdge

```ts
androidOverflowEdge: AndroidOverflow;
```

Defined in: ui/core/view/view-common.d.ts:43

#### Inherited from

[`GridLayout`](GridLayout.md).[`androidOverflowEdge`](GridLayout.md#androidoverflowedge)

***

### automationText

```ts
automationText: string;
```

Defined in: ui/core/view/index.d.ts:354

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`automationText`](GridLayout.md#automationtext)

***

### background

```ts
background: string;
```

Defined in: ui/core/view/index.d.ts:375

Gets or sets the background style property.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`background`](GridLayout.md#background)

***

### backgroundColor

```ts
backgroundColor: string | Color;
```

Defined in: ui/core/view/index.d.ts:382

Gets or sets the background color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`backgroundColor`](GridLayout.md#backgroundcolor)

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: ui/core/view/index.d.ts:389

Gets or sets the background image of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`backgroundImage`](GridLayout.md#backgroundimage)

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: ui/core/view/index.d.ts:124

Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`bindingContext`](GridLayout.md#bindingcontext)

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: ui/core/view/index.d.ts:152

Gets or sets the bottom border color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderBottomColor`](GridLayout.md#borderbottomcolor)

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:229

Gets or sets the bottom left border radius of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderBottomLeftRadius`](GridLayout.md#borderbottomleftradius)

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:222

Gets or sets the bottom right border radius of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderBottomRightRadius`](GridLayout.md#borderbottomrightradius)

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:187

Gets or sets the bottom border width of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderBottomWidth`](GridLayout.md#borderbottomwidth)

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: ui/core/view/index.d.ts:131

Gets or sets the border color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderColor`](GridLayout.md#bordercolor)

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: ui/core/view/index.d.ts:159

Gets or sets the left border color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderLeftColor`](GridLayout.md#borderleftcolor)

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:194

Gets or sets the left border width of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderLeftWidth`](GridLayout.md#borderleftwidth)

***

### borderRadius

```ts
borderRadius: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/core/view/index.d.ts:201

Gets or sets the border radius of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderRadius`](GridLayout.md#borderradius)

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: ui/core/view/index.d.ts:145

Gets or sets the right border color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderRightColor`](GridLayout.md#borderrightcolor)

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:180

Gets or sets the right border width of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderRightWidth`](GridLayout.md#borderrightwidth)

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: ui/core/view/index.d.ts:138

Gets or sets the top border color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderTopColor`](GridLayout.md#bordertopcolor)

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:208

Gets or sets the top left border radius of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderTopLeftRadius`](GridLayout.md#bordertopleftradius)

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:215

Gets or sets the top right border radius of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderTopRightRadius`](GridLayout.md#bordertoprightradius)

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:173

Gets or sets the top border width of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderTopWidth`](GridLayout.md#bordertopwidth)

***

### borderWidth

```ts
borderWidth: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/core/view/index.d.ts:166

Gets or sets the border width of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`borderWidth`](GridLayout.md#borderwidth)

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: ui/core/view/index.d.ts:396

Gets or sets the box shadow of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`boxShadow`](GridLayout.md#boxshadow)

***

### className

```ts
className: string;
```

Defined in: ui/core/view-base/index.d.ts:212

Gets or sets the CSS class name for this view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`className`](GridLayout.md#classname)

***

### clipToBounds

```ts
clipToBounds: boolean;
```

Defined in: ui/layouts/layout-base.d.ts:106

Gets or sets a value indicating whether to clip the content of this layout.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`clipToBounds`](GridLayout.md#cliptobounds)

***

### col

```ts
col: number;
```

Defined in: ui/core/view-base/index.d.ts:288

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`col`](GridLayout.md#col)

***

### color

```ts
color: Color;
```

Defined in: ui/core/view/index.d.ts:236

Gets or sets the color of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`color`](GridLayout.md#color)

***

### colSpan

```ts
colSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:303

The number of columns for the element to span across.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`colSpan`](GridLayout.md#colspan)

***

### column

```ts
column: number;
```

Defined in: ui/core/view-base/index.d.ts:293

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`column`](GridLayout.md#column)

***

### columns

```ts
columns: string;
```

Defined in: ui/layouts/grid-layout/index.d.ts:67

A string value representing column widths delimited with commas.

Valid values: an absolute number, auto, or *:

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`columns`](GridLayout.md#columns)

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:307

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`columnSpan`](GridLayout.md#columnspan)

***

### cssClasses

```ts
cssClasses: Set<string>;
```

Defined in: ui/core/view/index.d.ts:685

#### Inherited from

[`GridLayout`](GridLayout.md).[`cssClasses`](GridLayout.md#cssclasses)

***

### cssPseudoClasses

```ts
cssPseudoClasses: Set<string>;
```

Defined in: ui/core/view/index.d.ts:686

#### Inherited from

[`GridLayout`](GridLayout.md).[`cssPseudoClasses`](GridLayout.md#csspseudoclasses)

***

### cssType

```ts
cssType: string;
```

Defined in: ui/core/view/index.d.ts:667

Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.

#### Inherited from

[`GridLayout`](GridLayout.md).[`cssType`](GridLayout.md#csstype)

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: ui/core/view-base/index.d.ts:235

Default visual state, defaults to 'normal'

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`defaultVisualState`](GridLayout.md#defaultvisualstate)

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: ui/core/view/index.d.ts:403

Gets or sets the layout direction of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`direction`](GridLayout.md#direction)

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: ui/core/view-base/index.d.ts:277

Dock position of the view within its parent.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`dock`](GridLayout.md#dock)

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: ui/core/view-base/index.d.ts:177

#### Inherited from

[`GridLayout`](GridLayout.md).[`domNode`](GridLayout.md#domnode)

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:348

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveBorderBottomWidth`](GridLayout.md#effectiveborderbottomwidth)

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:349

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveBorderLeftWidth`](GridLayout.md#effectiveborderleftwidth)

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:347

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveBorderRightWidth`](GridLayout.md#effectiveborderrightwidth)

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:346

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveBorderTopWidth`](GridLayout.md#effectivebordertopwidth)

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: ui/core/view-base/index.d.ts:341

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveHeight`](GridLayout.md#effectiveheight)

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:271

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveLeft`](GridLayout.md#effectiveleft)

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:344

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveMarginBottom`](GridLayout.md#effectivemarginbottom)

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:345

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveMarginLeft`](GridLayout.md#effectivemarginleft)

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: ui/core/view-base/index.d.ts:343

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveMarginRight`](GridLayout.md#effectivemarginright)

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: ui/core/view-base/index.d.ts:342

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveMarginTop`](GridLayout.md#effectivemargintop)

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: ui/core/view-base/index.d.ts:339

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveMinHeight`](GridLayout.md#effectiveminheight)

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:338

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveMinWidth`](GridLayout.md#effectiveminwidth)

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: ui/core/view-base/index.d.ts:272

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveTop`](GridLayout.md#effectivetop)

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:340

#### Inherited from

[`GridLayout`](GridLayout.md).[`effectiveWidth`](GridLayout.md#effectivewidth)

***

### flex

```ts
flex: Flex;
```

Defined in: ui/core/view/index.d.ts:578

The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`flex`](GridLayout.md#flex)

***

### flexFlow

```ts
flexFlow: FlexFlow;
```

Defined in: ui/core/view/index.d.ts:573

The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`flexFlow`](GridLayout.md#flexflow)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: ui/core/view-base/index.d.ts:317

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`flexGrow`](GridLayout.md#flexgrow)

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: ui/core/view-base/index.d.ts:322

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`flexShrink`](GridLayout.md#flexshrink)

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: ui/core/view-base/index.d.ts:327

When true, forces the item to wrap onto a new line.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`flexWrapBefore`](GridLayout.md#flexwrapbefore)

***

### height

```ts
height: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:431

Gets or sets the desired height of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`height`](GridLayout.md#height)

***

### hidden

```ts
hidden: boolean;
```

Defined in: ui/core/view-base/index.d.ts:217

Gets or sets the visual state of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`hidden`](GridLayout.md#hidden)

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: ui/core/view/index.d.ts:473

Gets or sets the alignment of this view within its parent along the Horizontal axis.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`horizontalAlignment`](GridLayout.md#horizontalalignment)

***

### id

```ts
id: string;
```

Defined in: ui/core/view-base/index.d.ts:206

Gets or sets the id for this view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`id`](GridLayout.md#id)

***

### ignoreTouchAnimation

```ts
ignoreTouchAnimation: boolean;
```

Defined in: ui/core/view/index.d.ts:647

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`ignoreTouchAnimation`](GridLayout.md#ignoretouchanimation)

***

### ios

```ts
ios: any;
```

Defined in: ui/core/view/index.d.ts:117

Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.

#### Inherited from

[`GridLayout`](GridLayout.md).[`ios`](GridLayout.md#ios)

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: ui/core/view/index.d.ts:329

Defines whether accessibility font scale should affect font size.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosAccessibilityAdjustsFontSize`](GridLayout.md#iosaccessibilityadjustsfontsize)

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: ui/core/view/index.d.ts:343

Gets or sets the maximum accessibility font scale.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosAccessibilityMaxFontScale`](GridLayout.md#iosaccessibilitymaxfontscale)

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: ui/core/view/index.d.ts:336

Gets or sets the minimum accessibility font scale.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosAccessibilityMinFontScale`](GridLayout.md#iosaccessibilityminfontscale)

***

### iosGlassEffect

```ts
iosGlassEffect: GlassEffectType;
```

Defined in: ui/core/view/index.d.ts:634

Set the iOS liquid glass effect style on the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosGlassEffect`](GridLayout.md#iosglasseffect)

***

### iosIgnoreSafeArea

```ts
iosIgnoreSafeArea: boolean;
```

Defined in: ui/core/view/index.d.ts:613

Gets or sets a value indicating whether the the view should totally ignore safe areas computation. This property is iOS specific. Default value: false

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosIgnoreSafeArea`](GridLayout.md#iosignoresafearea)

***

### iosOverflowSafeArea

```ts
iosOverflowSafeArea: boolean;
```

Defined in: ui/core/view/index.d.ts:1130

Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosOverflowSafeArea`](GridLayout.md#iosoverflowsafearea)

***

### iosOverflowSafeAreaEnabled

```ts
iosOverflowSafeAreaEnabled: boolean;
```

Defined in: ui/core/view/index.d.ts:606

Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`iosOverflowSafeAreaEnabled`](GridLayout.md#iosoverflowsafeareaenabled)

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

[`GridLayout`](GridLayout.md).[`isCollapsed`](GridLayout.md#iscollapsed)

***

### isEnabled

```ts
isEnabled: boolean;
```

Defined in: ui/core/view/index.d.ts:585

Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`isEnabled`](GridLayout.md#isenabled)

***

### isLayoutValid

```ts
isLayoutValid: boolean;
```

Defined in: ui/core/view/index.d.ts:656

Gets if layout is valid. This is a read-only property.

#### Inherited from

[`GridLayout`](GridLayout.md).[`isLayoutValid`](GridLayout.md#islayoutvalid)

***

### isPassThroughParentEnabled

```ts
isPassThroughParentEnabled: boolean;
```

Defined in: ui/layouts/layout-base.d.ts:115

Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`isPassThroughParentEnabled`](GridLayout.md#ispassthroughparentenabled)

***

### isUserInteractionEnabled

```ts
isUserInteractionEnabled: boolean;
```

Defined in: ui/core/view/index.d.ts:592

Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`isUserInteractionEnabled`](GridLayout.md#isuserinteractionenabled)

***

### left

```ts
left: LengthType;
```

Defined in: ui/core/view-base/index.d.ts:265

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`left`](GridLayout.md#left)

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

Defined in: ui/core/view/index.d.ts:438

Gets or sets margin style property.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`margin`](GridLayout.md#margin)

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:466

Specifies extra space on the bottom side of this view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`marginBottom`](GridLayout.md#marginbottom)

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:445

Specifies extra space on the left side of this view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`marginLeft`](GridLayout.md#marginleft)

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:459

Specifies extra space on the right side of this view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`marginRight`](GridLayout.md#marginright)

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:452

Specifies extra space on the top side of this view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`marginTop`](GridLayout.md#margintop)

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: ui/core/view/index.d.ts:417

Gets or sets the minimum height the view may grow to.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`minHeight`](GridLayout.md#minheight)

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:410

Gets or sets the minimum width the view may grow to.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`minWidth`](GridLayout.md#minwidth)

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

[`GridLayout`](GridLayout.md).[`mIsRootView`](GridLayout.md#misrootview)

***

### modal

```ts
modal: View;
```

Defined in: ui/core/view/index.d.ts:848

Returns the current modal view that this page is showing (is parent of), if any.

#### Inherited from

[`GridLayout`](GridLayout.md).[`modal`](GridLayout.md#modal)

***

### nativeBackgroundState?

```ts
optional nativeBackgroundState?: "unset" | "invalid" | "drawn";
```

Defined in: ui/core/view/index.d.ts:661

Native background states. This is a read-only property.

#### Inherited from

[`GridLayout`](GridLayout.md).[`nativeBackgroundState`](GridLayout.md#nativebackgroundstate)

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: ui/core/view-base/index.d.ts:190

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

#### Inherited from

[`GridLayout`](GridLayout.md).[`nativeViewProtected`](GridLayout.md#nativeviewprotected)

***

### opacity

```ts
opacity: number;
```

Defined in: ui/core/view/index.d.ts:494

Gets or sets the opacity style property.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`opacity`](GridLayout.md#opacity)

***

### order

```ts
order: number;
```

Defined in: ui/core/view-base/index.d.ts:312

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`order`](GridLayout.md#order)

***

### originX

```ts
originX: number;
```

Defined in: ui/core/view/index.d.ts:560

Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`originX`](GridLayout.md#originx)

***

### originY

```ts
originY: number;
```

Defined in: ui/core/view/index.d.ts:567

Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`originY`](GridLayout.md#originy)

***

### padding

```ts
padding: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: ui/layouts/layout-base.d.ts:71

Gets or sets padding style property.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`padding`](GridLayout.md#padding)

***

### paddingBottom

```ts
paddingBottom: LengthType;
```

Defined in: ui/layouts/layout-base.d.ts:78

Specify the bottom padding of this layout.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`paddingBottom`](GridLayout.md#paddingbottom)

***

### paddingLeft

```ts
paddingLeft: LengthType;
```

Defined in: ui/layouts/layout-base.d.ts:85

Specify the left padding of this layout.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`paddingLeft`](GridLayout.md#paddingleft)

***

### paddingRight

```ts
paddingRight: LengthType;
```

Defined in: ui/layouts/layout-base.d.ts:92

Specify the right padding of this layout.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`paddingRight`](GridLayout.md#paddingright)

***

### paddingTop

```ts
paddingTop: LengthType;
```

Defined in: ui/layouts/layout-base.d.ts:99

Specify the top padding of this layout.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`paddingTop`](GridLayout.md#paddingtop)

***

### parent

```ts
parent: ViewBase;
```

Defined in: ui/core/view-base/index.d.ts:194

Gets the parent view. This property is read-only.

#### Inherited from

[`GridLayout`](GridLayout.md).[`parent`](GridLayout.md#parent)

***

### perspective

```ts
perspective: number;
```

Defined in: ui/core/view/index.d.ts:523

Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`perspective`](GridLayout.md#perspective)

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: ui/core/view-base/index.d.ts:178

#### Inherited from

[`GridLayout`](GridLayout.md).[`recycleNativeView`](GridLayout.md#recyclenativeview)

***

### reusable

```ts
reusable: boolean;
```

Defined in: ui/core/view-base/index.d.ts:360

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`reusable`](GridLayout.md#reusable)

***

### rotate

```ts
rotate: number;
```

Defined in: ui/core/view/index.d.ts:501

Gets or sets the rotate affine transform of the view along the Z axis.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`rotate`](GridLayout.md#rotate)

***

### rotateX

```ts
rotateX: number;
```

Defined in: ui/core/view/index.d.ts:508

Gets or sets the rotate affine transform of the view along the X axis.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`rotateX`](GridLayout.md#rotatex)

***

### rotateY

```ts
rotateY: number;
```

Defined in: ui/core/view/index.d.ts:515

Gets or sets the rotate affine transform of the view along the Y axis.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`rotateY`](GridLayout.md#rotatey)

***

### row

```ts
row: number;
```

Defined in: ui/core/view-base/index.d.ts:283

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`row`](GridLayout.md#row)

***

### rows

```ts
rows: string;
```

Defined in: ui/layouts/grid-layout/index.d.ts:59

A string value representing row heights delimited with commas.

Valid values: an absolute number, auto, or *:

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`rows`](GridLayout.md#rows)

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:298

The number of rows for the element to span across.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`rowSpan`](GridLayout.md#rowspan)

***

### scaleX

```ts
scaleX: number;
```

Defined in: ui/core/view/index.d.ts:544

Gets or sets the scaleX affine transform of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`scaleX`](GridLayout.md#scalex)

***

### scaleY

```ts
scaleY: number;
```

Defined in: ui/core/view/index.d.ts:551

Gets or sets the scaleY affine transform of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`scaleY`](GridLayout.md#scaley)

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: ui/core/view-base/index.d.ts:229

Opt out of shared transition under different binding conditions

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`sharedTransitionIgnore`](GridLayout.md#sharedtransitionignore)

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: ui/core/view-base/index.d.ts:223

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`sharedTransitionTag`](GridLayout.md#sharedtransitiontag)

***

### statusBarStyle

```ts
statusBarStyle: "dark" | "light";
```

Defined in: ui/core/view/index.d.ts:683

Gets or sets the status bar style for this view.
Platform Notes:
  - Android: When using this property throughout navigations, ensure starting views have it set as well. Ensures it will reset on back navigation.
  - iOS: You must remove Info.plist key `UIViewControllerBasedStatusBarAppearance`
It defaults to true when not present: https://developer.apple.com/documentation/bundleresources/information-property-list/uiviewcontrollerbasedstatusbarappearance
Or you can explicitly set it to true:
\<key\>UIViewControllerBasedStatusBarAppearance\</key\>
\<true/\>

False value will make this property have no effect.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`statusBarStyle`](GridLayout.md#statusbarstyle)

***

### testID

```ts
testID: string;
```

Defined in: ui/core/view/index.d.ts:639

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`testID`](GridLayout.md#testid)

***

### top

```ts
top: LengthType;
```

Defined in: ui/core/view-base/index.d.ts:270

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`top`](GridLayout.md#top)

***

### touchAnimation

```ts
touchAnimation: 
  | boolean
  | TouchAnimationOptions;
```

Defined in: ui/core/view/index.d.ts:643

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`touchAnimation`](GridLayout.md#touchanimation)

***

### touchDelay

```ts
touchDelay: number;
```

Defined in: ui/core/view/index.d.ts:651

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`touchDelay`](GridLayout.md#touchdelay)

***

### transitionId

```ts
transitionId: number;
```

Defined in: ui/core/view/view-common.d.ts:65

Active transition instance id for tracking state

#### Inherited from

[`GridLayout`](GridLayout.md).[`transitionId`](GridLayout.md#transitionid)

***

### translateX

```ts
translateX: number;
```

Defined in: ui/core/view/index.d.ts:530

Gets or sets the translateX affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`translateX`](GridLayout.md#translatex)

***

### translateY

```ts
translateY: number;
```

Defined in: ui/core/view/index.d.ts:537

Gets or sets the translateY affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`translateY`](GridLayout.md#translatey)

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: ui/core/view/index.d.ts:480

Gets or sets the alignment of this view within its parent along the Vertical axis.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`verticalAlignment`](GridLayout.md#verticalalignment)

***

### viewController

```ts
viewController: any;
```

Defined in: ui/core/view-base/index.d.ts:182

returns the native UIViewController.

#### Inherited from

[`GridLayout`](GridLayout.md).[`viewController`](GridLayout.md#viewcontroller)

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: ui/core/view/index.d.ts:487

Gets or sets the visibility of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`visibility`](GridLayout.md#visibility)

***

### visionHoverStyle

```ts
visionHoverStyle: string | VisionHoverOptions;
```

Defined in: ui/core/view/index.d.ts:627

visionOS only

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`visionHoverStyle`](GridLayout.md#visionhoverstyle)

***

### visionIgnoreHoverStyle

```ts
visionIgnoreHoverStyle: boolean;
```

Defined in: ui/core/view/index.d.ts:620

visionOS only

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`visionIgnoreHoverStyle`](GridLayout.md#visionignorehoverstyle)

***

### width

```ts
width: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:424

Gets or sets the desired width of the view.

#### Ns Property

#### Inherited from

[`GridLayout`](GridLayout.md).[`width`](GridLayout.md#width)

***

### accessibilityBlurEvent

```ts
static accessibilityBlurEvent: string;
```

Defined in: ui/core/view/index.d.ts:79

String value used when hooking to accessibilityBlur event.

#### Ns Event

accessibilityBlur

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityBlurEvent`](GridLayout.md#accessibilityblurevent)

***

### accessibilityFocusChangedEvent

```ts
static accessibilityFocusChangedEvent: string;
```

Defined in: ui/core/view/index.d.ts:93

String value used when hooking to accessibilityFocusChanged event.

#### Ns Event

accessibilityFocusChanged

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityFocusChangedEvent`](GridLayout.md#accessibilityfocuschangedevent)

***

### accessibilityFocusEvent

```ts
static accessibilityFocusEvent: string;
```

Defined in: ui/core/view/index.d.ts:86

String value used when hooking to accessibilityFocus event.

#### Ns Event

accessibilityFocus

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityFocusEvent`](GridLayout.md#accessibilityfocusevent)

***

### accessibilityPerformEscapeEvent

```ts
static accessibilityPerformEscapeEvent: string;
```

Defined in: ui/core/view/view-common.d.ts:29

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityPerformEscapeEvent`](GridLayout.md#accessibilityperformescapeevent)

***

### androidOverflowInsetEvent

```ts
static androidOverflowInsetEvent: string;
```

Defined in: ui/core/view/index.d.ts:100

String value used when hooking to androidOverflowInset event.

#### Ns Event

androidOverflowInset

#### Inherited from

[`GridLayout`](GridLayout.md).[`androidOverflowInsetEvent`](GridLayout.md#androidoverflowinsetevent)

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

[`GridLayout`](GridLayout.md).[`createdEvent`](GridLayout.md#createdevent)

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

[`GridLayout`](GridLayout.md).[`disposeNativeViewEvent`](GridLayout.md#disposenativeviewevent)

***

### layoutChangedEvent

```ts
static layoutChangedEvent: string;
```

Defined in: ui/core/view/index.d.ts:59

String value used when hooking to layoutChanged event.

#### Ns Event

layoutChanged

#### Inherited from

[`GridLayout`](GridLayout.md).[`layoutChangedEvent`](GridLayout.md#layoutchangedevent)

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

[`GridLayout`](GridLayout.md).[`loadedEvent`](GridLayout.md#loadedevent)

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

[`GridLayout`](GridLayout.md).[`propertyChangeEvent`](GridLayout.md#propertychangeevent)

***

### showingModallyEvent

```ts
static showingModallyEvent: string;
```

Defined in: ui/core/view/index.d.ts:65

String value used when hooking to showingModally event.

#### Ns Event

showingModally

#### Inherited from

[`GridLayout`](GridLayout.md).[`showingModallyEvent`](GridLayout.md#showingmodallyevent)

***

### shownModallyEvent

```ts
static shownModallyEvent: string;
```

Defined in: ui/core/view/index.d.ts:72

String value used when hooking to shownModally event.

#### Ns Event

shownModally

#### Inherited from

[`GridLayout`](GridLayout.md).[`shownModallyEvent`](GridLayout.md#shownmodallyevent)

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

[`GridLayout`](GridLayout.md).[`unloadedEvent`](GridLayout.md#unloadedevent)

## Accessors

### backgroundPosition

#### Get Signature

```ts
get backgroundPosition(): string;
```

Defined in: ui/core/view/view-common.d.ts:150

##### Returns

`string`

#### Set Signature

```ts
set backgroundPosition(value: string): void;
```

Defined in: ui/core/view/view-common.d.ts:151

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`backgroundPosition`](GridLayout.md#backgroundposition)

***

### backgroundRepeat

#### Get Signature

```ts
get backgroundRepeat(): BackgroundRepeatType;
```

Defined in: ui/core/view/view-common.d.ts:152

##### Returns

[`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md)

#### Set Signature

```ts
set backgroundRepeat(value: BackgroundRepeatType): void;
```

Defined in: ui/core/view/view-common.d.ts:153

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md) |

##### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`backgroundRepeat`](GridLayout.md#backgroundrepeat)

***

### backgroundSize

#### Get Signature

```ts
get backgroundSize(): string;
```

Defined in: ui/core/view/view-common.d.ts:148

##### Returns

`string`

#### Set Signature

```ts
set backgroundSize(value: string): void;
```

Defined in: ui/core/view/view-common.d.ts:149

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`backgroundSize`](GridLayout.md#backgroundsize)

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

[`GridLayout`](GridLayout.md).[`class`](GridLayout.md#class)

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

[`GridLayout`](GridLayout.md).[`effectivePaddingBottom`](GridLayout.md#effectivepaddingbottom)

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

[`GridLayout`](GridLayout.md).[`effectivePaddingLeft`](GridLayout.md#effectivepaddingleft)

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

[`GridLayout`](GridLayout.md).[`effectivePaddingRight`](GridLayout.md#effectivepaddingright)

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

[`GridLayout`](GridLayout.md).[`effectivePaddingTop`](GridLayout.md#effectivepaddingtop)

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

[`GridLayout`](GridLayout.md).[`isLoaded`](GridLayout.md#isloaded)

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

[`GridLayout`](GridLayout.md).[`nativeView`](GridLayout.md#nativeview)

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

[`GridLayout`](GridLayout.md).[`page`](GridLayout.md#page)

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

[`GridLayout`](GridLayout.md).[`parentNode`](GridLayout.md#parentnode)

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

[`GridLayout`](GridLayout.md).[`style`](GridLayout.md#style)

***

### textTransform

#### Get Signature

```ts
get textTransform(): TextTransformType;
```

Defined in: ui/core/view/view-common.d.ts:192

##### Returns

[`TextTransformType`](../namespaces/CoreTypes/type-aliases/TextTransformType.md)

#### Set Signature

```ts
set textTransform(value: TextTransformType): void;
```

Defined in: ui/core/view/view-common.d.ts:193

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`TextTransformType`](../namespaces/CoreTypes/type-aliases/TextTransformType.md) |

##### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`textTransform`](GridLayout.md#texttransform)

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

[`GridLayout`](GridLayout.md).[`typeName`](GridLayout.md#typename)

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

[`GridLayout`](GridLayout.md).[`visualState`](GridLayout.md#visualstate)

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

[`GridLayout`](GridLayout.md).[`_addView`](GridLayout.md#addview)

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

[`GridLayout`](GridLayout.md).[`_addViewCore`](GridLayout.md#addviewcore)

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

[`GridLayout`](GridLayout.md).[`_addViewToNativeVisualTree`](GridLayout.md#addviewtonativevisualtree)

***

### \_applyGlassEffect()

```ts
protected _applyGlassEffect(value: GlassEffectType, options: {
  effectType: "glass" | "container";
  onCreate?: (effectView: UIVisualEffectView, effect: UIVisualEffect) => void;
  onUpdate?: (effectView: UIVisualEffectView, effect: UIVisualEffect, duration: number) => void;
  targetView?: UIVisualEffectView;
  toGlassStyleFn?: (variant?: GlassEffectVariant) => number;
}): any;
```

Defined in: ui/core/view/view-common.d.ts:303

Shared helper method for applying glass effects to views.
This method can be used by View and its subclasses (LiquidGlass, LiquidGlassContainer, etc.)
iOS only at the moment but could be applied to others once supported in other platforms.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`GlassEffectType`](../type-aliases/GlassEffectType.md) | The glass effect configuration |
| `options` | \{ `effectType`: `"glass"` \| `"container"`; `onCreate?`: (`effectView`: `UIVisualEffectView`, `effect`: `UIVisualEffect`) => `void`; `onUpdate?`: (`effectView`: `UIVisualEffectView`, `effect`: `UIVisualEffect`, `duration`: `number`) => `void`; `targetView?`: `UIVisualEffectView`; `toGlassStyleFn?`: (`variant?`: [`GlassEffectVariant`](../type-aliases/GlassEffectVariant.md)) => `number`; \} | Configuration options for different glass effect behaviors |
| `options.effectType` | `"glass"` \| `"container"` | Type of effect to create: 'glass' | 'container' |
| `options.onCreate?` | (`effectView`: `UIVisualEffectView`, `effect`: `UIVisualEffect`) => `void` | Callback when a new effect view is created (for initial setup) |
| `options.onUpdate?` | (`effectView`: `UIVisualEffectView`, `effect`: `UIVisualEffect`, `duration`: `number`) => `void` | Callback when an existing effect view is updated |
| `options.targetView?` | `UIVisualEffectView` | The UIVisualEffectView to apply the effect to (if updating existing view) |
| `options.toGlassStyleFn?` | (`variant?`: [`GlassEffectVariant`](../type-aliases/GlassEffectVariant.md)) => `number` | Custom function to convert variant to UIGlassEffectStyle |

#### Returns

`any`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_applyGlassEffect`](GridLayout.md#applyglasseffect)

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

[`GridLayout`](GridLayout.md).[`_applyXmlAttribute`](GridLayout.md#applyxmlattribute)

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

[`GridLayout`](GridLayout.md).[`_batchUpdate`](GridLayout.md#batchupdate)

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

[`GridLayout`](GridLayout.md).[`_childIndexToNativeChildIndex`](GridLayout.md#childindextonativechildindex)

***

### \_closeAllModalViewsInternal()

```ts
_closeAllModalViewsInternal(): boolean;
```

Defined in: ui/core/view/index.d.ts:924

Internal method:
Closes all modal views. Should be used by plugins like `nativescript-angular` which implement their own `modal views` service.

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_closeAllModalViewsInternal`](GridLayout.md#closeallmodalviewsinternal)

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

[`GridLayout`](GridLayout.md).[`_createPropertyChangeData`](GridLayout.md#createpropertychangedata)

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

[`GridLayout`](GridLayout.md).[`_dialogClosed`](GridLayout.md#dialogclosed)

***

### \_eachLayoutView()

```ts
_eachLayoutView(callback: (View: any) => void): void;
```

Defined in: ui/core/view/index.d.ts:932

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`View`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_eachLayoutView`](GridLayout.md#eachlayoutview)

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

[`GridLayout`](GridLayout.md).[`_emit`](GridLayout.md#emit)

***

### \_getNativeViewsCount()

```ts
_getNativeViewsCount(): number;
```

Defined in: ui/core/view/index.d.ts:918

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_getNativeViewsCount`](GridLayout.md#getnativeviewscount)

***

### \_getRootModalViews()

```ts
_getRootModalViews(): ViewBase[];
```

Defined in: ui/core/view/index.d.ts:930

Internal method:
Gets all modal views of the current view.

#### Returns

[`ViewBase`](ViewBase.md)[]

#### Inherited from

[`GridLayout`](GridLayout.md).[`_getRootModalViews`](GridLayout.md#getrootmodalviews)

***

### \_getValue()

```ts
_getValue(property: any): never;
```

Defined in: ui/core/view/index.d.ts:1113

__Obsolete:__ There is a new property system that does not rely on _getValue.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `any` |

#### Returns

`never`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_getValue`](GridLayout.md#getvalue)

***

### \_handleLivesync()

```ts
_handleLivesync(context?: {
  path: string;
  type: string;
}): boolean;
```

Defined in: ui/core/view/index.d.ts:1084

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context?` | \{ `path`: `string`; `type`: `string`; \} |
| `context.path?` | `string` |
| `context.type?` | `string` |

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_handleLivesync`](GridLayout.md#handlelivesync)

***

### \_hasAncestorView()

```ts
_hasAncestorView(ancestorView: View): boolean;
```

Defined in: ui/core/view/index.d.ts:1107

Checks whether the current view has specific view for an ancestor.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ancestorView` | [`View`](View.md) |

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_hasAncestorView`](GridLayout.md#hasancestorview)

***

### \_hideNativeModalView()

```ts
protected _hideNativeModalView(parent: ViewCommon, whenClosedCallback: () => void): void;
```

Defined in: ui/core/view/view-common.d.ts:100

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `ViewCommon` |
| `whenClosedCallback` | () => `void` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_hideNativeModalView`](GridLayout.md#hidenativemodalview)

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

[`GridLayout`](GridLayout.md).[`_inheritStyles`](GridLayout.md#inheritstyles)

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

[`GridLayout`](GridLayout.md).[`_inheritStyleScope`](GridLayout.md#inheritstylescope)

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: ui/core/view-base/index.d.ts:418

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_layoutParent`](GridLayout.md#layoutparent)

***

### \_observe()

```ts
protected _observe(
   type: GestureTypes, 
   callback: (args: GestureEventData) => void, 
   thisArg?: any): void;
```

Defined in: ui/core/view/view-common.d.ts:89

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) |
| `callback` | (`args`: [`GestureEventData`](../interfaces/GestureEventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_observe`](GridLayout.md#observe)

***

### \_onAttachedToWindow()

```ts
_onAttachedToWindow(): void;
```

Defined in: ui/core/view/index.d.ts:1097

Called in android when native view is attached to window.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_onAttachedToWindow`](GridLayout.md#onattachedtowindow)

***

### \_onDetachedFromWindow()

```ts
_onDetachedFromWindow(): void;
```

Defined in: ui/core/view/index.d.ts:1102

Called in android when native view is dettached from window.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_onDetachedFromWindow`](GridLayout.md#ondetachedfromwindow)

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

[`GridLayout`](GridLayout.md).[`_onRootViewReset`](GridLayout.md#onrootviewreset)

***

### \_onSizeChanged()?

```ts
optional _onSizeChanged(): void;
```

Defined in: ui/core/view/index.d.ts:937

iOS Only Internal method used to update various view details like background rerendering, border, etc.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_onSizeChanged`](GridLayout.md#onsizechanged)

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

[`GridLayout`](GridLayout.md).[`_parentChanged`](GridLayout.md#parentchanged)

***

### \_raiseLayoutChangedEvent()

```ts
protected _raiseLayoutChangedEvent(): void;
```

Defined in: ui/core/view/view-common.d.ts:101

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_raiseLayoutChangedEvent`](GridLayout.md#raiselayoutchangedevent)

***

### \_raiseShowingModallyEvent()

```ts
protected _raiseShowingModallyEvent(): void;
```

Defined in: ui/core/view/view-common.d.ts:103

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_raiseShowingModallyEvent`](GridLayout.md#raiseshowingmodallyevent)

***

### \_raiseShownModallyEvent()

```ts
protected _raiseShownModallyEvent(): void;
```

Defined in: ui/core/view/view-common.d.ts:102

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_raiseShownModallyEvent`](GridLayout.md#raiseshownmodallyevent)

***

### \_registerLayoutChild()

```ts
_registerLayoutChild(child: View): void;
```

Defined in: ui/layouts/layout-base.d.ts:53

INTERNAL. Used by the layout system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `child` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_registerLayoutChild`](GridLayout.md#registerlayoutchild)

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

[`GridLayout`](GridLayout.md).[`_removeView`](GridLayout.md#removeview)

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

[`GridLayout`](GridLayout.md).[`_removeViewCore`](GridLayout.md#removeviewcore)

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

[`GridLayout`](GridLayout.md).[`_removeViewFromNativeVisualTree`](GridLayout.md#removeviewfromnativevisualtree)

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

[`GridLayout`](GridLayout.md).[`_resumeNativeUpdates`](GridLayout.md#resumenativeupdates)

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

[`GridLayout`](GridLayout.md).[`_setDefaultPaddings`](GridLayout.md#setdefaultpaddings)

***

### \_setupAsRootView()

```ts
_setupAsRootView(context: any): void;
```

Defined in: ui/core/view/view-common.d.ts:88

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_setupAsRootView`](GridLayout.md#setupasrootview)

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

[`GridLayout`](GridLayout.md).[`_setupUI`](GridLayout.md#setupui)

***

### \_setValue()

```ts
_setValue(property: any, value: any): never;
```

Defined in: ui/core/view/index.d.ts:1118

__Obsolete:__ There is a new property system that does not rely on _setValue.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `any` |
| `value` | `any` |

#### Returns

`never`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_setValue`](GridLayout.md#setvalue)

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

[`GridLayout`](GridLayout.md).[`_shouldDelayLayout`](GridLayout.md#shoulddelaylayout)

***

### \_showNativeModalView()

```ts
protected _showNativeModalView(parent: ViewCommon, options: ShowModalOptions): void;
```

Defined in: ui/core/view/view-common.d.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `ViewCommon` |
| `options` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_showNativeModalView`](GridLayout.md#shownativemodalview)

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

[`GridLayout`](GridLayout.md).[`_suspendNativeUpdates`](GridLayout.md#suspendnativeupdates)

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

[`GridLayout`](GridLayout.md).[`_tearDownUI`](GridLayout.md#teardownui)

***

### \_unregisterLayoutChild()

```ts
_unregisterLayoutChild(child: View): void;
```

Defined in: ui/layouts/layout-base.d.ts:58

INTERNAL. Used by the layout system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `child` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_unregisterLayoutChild`](GridLayout.md#unregisterlayoutchild)

***

### \_updateStyleScope()

```ts
_updateStyleScope(
   cssFileName?: string, 
   cssString?: string, 
   css?: string): void;
```

Defined in: ui/core/view/index.d.ts:1092

Updates styleScope or create new styleScope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cssFileName?` | `string` | - |
| `cssString?` | `string` | - |
| `css?` | `string` | - |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`_updateStyleScope`](GridLayout.md#updatestylescope)

***

### accessibilityAnnouncement()

```ts
accessibilityAnnouncement(msg?: string): void;
```

Defined in: ui/core/view/index.d.ts:972

Make an announcement to the screen reader.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg?` | `string` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityAnnouncement`](GridLayout.md#accessibilityannouncement)

***

### accessibilityScreenChanged()

```ts
accessibilityScreenChanged(): void;
```

Defined in: ui/core/view/index.d.ts:977

Announce screen changed

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`accessibilityScreenChanged`](GridLayout.md#accessibilityscreenchanged)

***

### addChild()

```ts
addChild(view: View): void;
```

Defined in: ui/layouts/layout-base.d.ts:30

Adds the view to children array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`View`](View.md) | The view to be added to the end of the children array. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`addChild`](GridLayout.md#addchild)

***

### addChildAtCell()

```ts
addChildAtCell(
   view: View, 
   row: number, 
   column: number, 
   rowSpan?: number, 
   columnSpan?: number): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:122

Adds a child at specific cell in GridLayout. Optional rowSpan and columnSpan attributes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `row` | `number` |
| `column` | `number` |
| `rowSpan?` | `number` |
| `columnSpan?` | `number` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`addChildAtCell`](GridLayout.md#addchildatcell)

***

### addColumn()

```ts
addColumn(itemSpec: ItemSpec): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:112

Adds a column specification to a GridLayout.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemSpec` | [`ItemSpec`](ItemSpec.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`addColumn`](GridLayout.md#addcolumn)

***

### addEventListener()

```ts
addEventListener(
   eventNames: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: ui/core/view/view-common.d.ts:91

Adds a listener for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `string` | - |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | A function to be called when some of the specified event(s) is raised. |
| `thisArg?` | `any` | An optional parameter which when set will be used as "this" in callback method call. |
| `once?` | `boolean` | An optional parameter which when set will cause the event listener to fire once. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`addEventListener`](GridLayout.md#addeventlistener)

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

[`GridLayout`](GridLayout.md).[`addPseudoClass`](GridLayout.md#addpseudoclass)

***

### addRow()

```ts
addRow(itemSpec: ItemSpec): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:117

Adds a row specification to a GridLayout.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemSpec` | [`ItemSpec`](ItemSpec.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`addRow`](GridLayout.md#addrow)

***

### animate()

```ts
animate(options: AnimationDefinition): AnimationPromise;
```

Defined in: ui/core/view/index.d.ts:853

Animates one or more properties of the view based on the supplied options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AnimationDefinition` |

#### Returns

[`AnimationPromise`](../type-aliases/AnimationPromise.md)

#### Inherited from

[`GridLayout`](GridLayout.md).[`animate`](GridLayout.md#animate)

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

[`GridLayout`](GridLayout.md).[`bind`](GridLayout.md#bind)

***

### bringToFront()

```ts
bringToFront(view: View, animated?: boolean): Promise<void>;
```

Defined in: ui/layouts/root-layout/index.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `animated?` | `boolean` |

#### Returns

`Promise`\<`void`\>

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:429

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`callLoaded`](GridLayout.md#callloaded)

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:430

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`callUnloaded`](GridLayout.md#callunloaded)

***

### close()

```ts
close(view: View, exitTo?: TransitionAnimation): Promise<void>;
```

Defined in: ui/layouts/root-layout/index.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `exitTo?` | `TransitionAnimation` |

#### Returns

`Promise`\<`void`\>

***

### closeAll()

```ts
closeAll(): Promise<void[]>;
```

Defined in: ui/layouts/root-layout/index.d.ts:12

#### Returns

`Promise`\<`void`[]\>

***

### closeModal()

```ts
closeModal(...args: any[]): void;
```

Defined in: ui/core/view/view-common.d.ts:97

Closes the current modal view that this page is showing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`closeModal`](GridLayout.md#closemodal)

***

### closeShadeCover()

```ts
closeShadeCover(shadeCoverOptions?: ShadeCoverOptions): Promise<void>;
```

Defined in: ui/layouts/root-layout/index.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shadeCoverOptions` | [`ShadeCoverOptions`](../interfaces/ShadeCoverOptions.md) |

#### Returns

`Promise`\<`void`\>

***

### createAnimation()

```ts
createAnimation(options: AnimationDefinition): Animation;
```

Defined in: ui/core/view/index.d.ts:858

Creates an Animation object based on the supplied options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AnimationDefinition` |

#### Returns

[`Animation`](Animation.md)

#### Inherited from

[`GridLayout`](GridLayout.md).[`createAnimation`](GridLayout.md#createanimation)

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

[`GridLayout`](GridLayout.md).[`createNativeView`](GridLayout.md#createnativeview)

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

[`GridLayout`](GridLayout.md).[`deletePseudoClass`](GridLayout.md#deletepseudoclass)

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

[`GridLayout`](GridLayout.md).[`destroyNode`](GridLayout.md#destroynode)

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

[`GridLayout`](GridLayout.md).[`disposeNativeView`](GridLayout.md#disposenativeview)

***

### eachChild()

```ts
eachChild(callback: (child: ViewBase) => boolean): void;
```

Defined in: ui/core/view/view-common.d.ts:265

Iterates over children of type ViewBase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`ViewBase`](ViewBase.md)) => `boolean` | Called for each child of type ViewBase. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`eachChild`](GridLayout.md#eachchild)

***

### eachChildView()

```ts
eachChildView(callback: (view: View) => boolean): void;
```

Defined in: ui/core/view/index.d.ts:953

Iterates over children of type View.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`view`: [`View`](View.md)) => `boolean` | Called for each child of type View. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`eachChildView`](GridLayout.md#eachchildview)

***

### eachLayoutChild()

```ts
eachLayoutChild(callback: (child: View, isLast: boolean) => void): void;
```

Defined in: ui/layouts/layout-base.d.ts:64

Calls the callback for each child that should be laid out.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`View`](View.md), `isLast`: `boolean`) => `void` | The callback |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`eachLayoutChild`](GridLayout.md#eachlayoutchild)

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

[`GridLayout`](GridLayout.md).[`ensureDomNode`](GridLayout.md#ensuredomnode)

***

### focus()

```ts
focus(): boolean;
```

Defined in: ui/core/view/index.d.ts:787

Tries to focus the view.
Returns a value indicating whether this view or one of its descendants actually took focus.

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`focus`](GridLayout.md#focus)

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

[`GridLayout`](GridLayout.md).[`get`](GridLayout.md#get)

***

### getActualSize()

```ts
getActualSize(): Size;
```

Defined in: ui/core/view/index.d.ts:883

Returns the actual size of the view in device-independent pixels.

#### Returns

[`Size`](../interfaces/Size.md)

#### Inherited from

[`GridLayout`](GridLayout.md).[`getActualSize`](GridLayout.md#getactualsize)

***

### getChildAt()

```ts
getChildAt(index: number): View;
```

Defined in: ui/layouts/layout-base.d.ts:18

Returns the view at the specified position.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The position at which to get the child from. |

#### Returns

[`View`](View.md)

#### Inherited from

[`GridLayout`](GridLayout.md).[`getChildAt`](GridLayout.md#getchildat)

***

### getChildIndex()

```ts
getChildIndex(child: View): number;
```

Defined in: ui/layouts/layout-base.d.ts:24

Returns the position of the child view

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `child` | [`View`](View.md) | The child view that we are looking for. |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getChildIndex`](GridLayout.md#getchildindex)

***

### getChildrenCount()

```ts
getChildrenCount(): number;
```

Defined in: ui/layouts/layout-base.d.ts:12

Returns the number of children in this Layout.

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getChildrenCount`](GridLayout.md#getchildrencount)

***

### getClosestWindow()

```ts
getClosestWindow(): Window;
```

Defined in: ui/core/view/view-common.d.ts:231

(Android only) Gets closest window parent considering modals.

#### Returns

`Window`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getClosestWindow`](GridLayout.md#getclosestwindow)

***

### getColumns()

```ts
getColumns(): ItemSpec[];
```

Defined in: ui/layouts/grid-layout/index.d.ts:147

Gets array of column specifications defined on this instance of GridLayout.

#### Returns

[`ItemSpec`](ItemSpec.md)[]

#### Inherited from

[`GridLayout`](GridLayout.md).[`getColumns`](GridLayout.md#getcolumns)

***

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: ui/core/view-base/index.d.ts:397

#### Returns

`string`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getEffectivePaddingShorthand`](GridLayout.md#geteffectivepaddingshorthand)

***

### getGestureObservers()

```ts
getGestureObservers(type: GestureTypes): GesturesObserver[];
```

Defined in: ui/core/view/index.d.ts:789

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) |

#### Returns

[`GesturesObserver`](GesturesObserver.md)[]

#### Inherited from

[`GridLayout`](GridLayout.md).[`getGestureObservers`](GridLayout.md#getgestureobservers)

***

### getLocationInWindow()

```ts
getLocationInWindow(): Point;
```

Defined in: ui/core/view/index.d.ts:868

Returns the location of this view in the window coordinate system.

#### Returns

`Point`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getLocationInWindow`](GridLayout.md#getlocationinwindow)

***

### getLocationOnScreen()

```ts
getLocationOnScreen(): Point;
```

Defined in: ui/core/view/index.d.ts:873

Returns the location of this view in the screen coordinate system.

#### Returns

`Point`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getLocationOnScreen`](GridLayout.md#getlocationonscreen)

***

### getLocationRelativeTo()

```ts
getLocationRelativeTo(otherView: View): Point;
```

Defined in: ui/core/view/index.d.ts:878

Returns the location of this view in the otherView's coordinate system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherView` | [`View`](View.md) |

#### Returns

`Point`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getLocationRelativeTo`](GridLayout.md#getlocationrelativeto)

***

### getMeasuredHeight()

```ts
getMeasuredHeight(): number;
```

Defined in: ui/core/view/index.d.ts:715

Returns the raw height component.

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getMeasuredHeight`](GridLayout.md#getmeasuredheight)

***

### getMeasuredState()

```ts
getMeasuredState(): number;
```

Defined in: ui/core/view/index.d.ts:717

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getMeasuredState`](GridLayout.md#getmeasuredstate)

***

### getMeasuredWidth()

```ts
getMeasuredWidth(): number;
```

Defined in: ui/core/view/index.d.ts:710

Returns the raw width component.

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getMeasuredWidth`](GridLayout.md#getmeasuredwidth)

***

### getRows()

```ts
getRows(): ItemSpec[];
```

Defined in: ui/layouts/grid-layout/index.d.ts:152

Gets array of row specifications defined on this instance of GridLayout.

#### Returns

[`ItemSpec`](ItemSpec.md)[]

#### Inherited from

[`GridLayout`](GridLayout.md).[`getRows`](GridLayout.md#getrows)

***

### getSafeAreaInsets()

```ts
getSafeAreaInsets(): Position;
```

Defined in: ui/core/view/index.d.ts:863

Returns the iOS safe area insets of this view.

#### Returns

`Position`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getSafeAreaInsets`](GridLayout.md#getsafeareainsets)

***

### getShadeCover()

```ts
getShadeCover(): View;
```

Defined in: ui/layouts/root-layout/index.d.ts:13

#### Returns

[`View`](View.md)

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

[`GridLayout`](GridLayout.md).[`getViewByDomId`](GridLayout.md#getviewbydomid)

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

[`GridLayout`](GridLayout.md).[`getViewById`](GridLayout.md#getviewbyid)

***

### hasGestureObservers()?

```ts
optional hasGestureObservers(): boolean;
```

Defined in: ui/core/view/index.d.ts:942

Android only check if gesture observers are attached

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`hasGestureObservers`](GridLayout.md#hasgestureobservers)

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

[`GridLayout`](GridLayout.md).[`hasListeners`](GridLayout.md#haslisteners)

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

[`GridLayout`](GridLayout.md).[`initNativeView`](GridLayout.md#initnativeview)

***

### insertChild()

```ts
insertChild(child: View, atIndex: number): boolean;
```

Defined in: ui/layouts/layout-base.d.ts:37

Inserts the view to children array at the specified index.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `child` | [`View`](View.md) | - |
| `atIndex` | `number` | The insertion index. |

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`insertChild`](GridLayout.md#insertchild)

***

### layout()

```ts
layout(
   left: number, 
   top: number, 
   right: number, 
   bottom: number, 
   setFrame?: boolean): void;
```

Defined in: ui/core/view/index.d.ts:705

Assign a size and position to a view and all of its descendants
This is the second phase of the layout mechanism. (The first is measuring). In this phase, each parent calls layout on all of its children to position them. This is typically done using the child measurements that were stored in the measure pass().
Derived classes should not override this method. Derived classes with children should override onLayout. In that method, they should call layout on each of their children.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `left` | `number` |
| `top` | `number` |
| `right` | `number` |
| `bottom` | `number` |
| `setFrame?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`layout`](GridLayout.md#layout)

***

### layoutNativeView()

```ts
layoutNativeView(
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: ui/core/view/index.d.ts:750

Called from onLayout when native view position is about to be changed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `left` | `number` | Left position, relative to parent |
| `top` | `number` | Top position, relative to parent |
| `right` | `number` | Right position, relative to parent |
| `bottom` | `number` | Bottom position, relative to parent |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`layoutNativeView`](GridLayout.md#layoutnativeview)

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

[`GridLayout`](GridLayout.md).[`loadView`](GridLayout.md#loadview)

***

### measure()

```ts
measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
```

Defined in: ui/core/view/index.d.ts:694

This is called to find out how big a view should be. The parent supplies constraint information in the width and height parameters.
The actual measurement work of a view is performed in onMeasure(int, int), called by this method. Therefore, only onMeasure(int, int) can and must be overridden by subclasses.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `widthMeasureSpec` | `number` | Horizontal space requirements as imposed by the parent |
| `heightMeasureSpec` | `number` | Vertical space requirements as imposed by the parent |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`measure`](GridLayout.md#measure)

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

[`GridLayout`](GridLayout.md).[`notify`](GridLayout.md#notify)

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

[`GridLayout`](GridLayout.md).[`notifyPropertyChange`](GridLayout.md#notifypropertychange)

***

### off()

```ts
off(
   eventName: string, 
   callback?: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:800

Removes the listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback?` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional specific event listener to remove (if omitted, all event listeners by this name will be removed). |
| `thisArg?` | `any` | An optional parameter which, when set, will be used to refine search of the correct event listener to be removed. |

#### Returns

`any`

#### Inherited from

[`GridLayout`](GridLayout.md).[`off`](GridLayout.md#off)

***

### on()

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:812

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`any`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

#### Call Signature

```ts
on(
   event: "loaded", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:817

Raised when a loaded event occurs.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"loaded"` |
| `callback` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`any`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

#### Call Signature

```ts
on(
   event: "unloaded", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:822

Raised when an unloaded event occurs.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"unloaded"` |
| `callback` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`any`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

#### Call Signature

```ts
on(
   event: "androidBackPressed", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:828

Raised when a back button is pressed.
This event is raised only for android.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"androidBackPressed"` |
| `callback` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`any`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

#### Call Signature

```ts
on(
   event: "showingModally", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): void;
```

Defined in: ui/core/view/index.d.ts:833

Raised before the view is shown as a modal dialog.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"showingModally"` |
| `callback` | (`args`: [`ShownModallyData`](../interfaces/ShownModallyData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

#### Call Signature

```ts
on(
   event: "shownModally", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:838

Raised after the view is shown as a modal dialog.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"shownModally"` |
| `callback` | (`args`: [`ShownModallyData`](../interfaces/ShownModallyData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`any`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

#### Call Signature

```ts
on(
   event: "androidOverflowInset", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): any;
```

Defined in: ui/core/view/index.d.ts:843

Raised after the view is shown as a modal dialog.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"androidOverflowInset"` |
| `callback` | (`args`: [`ShownModallyData`](../interfaces/ShownModallyData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`any`

##### Inherited from

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on)

***

### onBackPressed()

```ts
onBackPressed(): boolean;
```

Defined in: ui/core/view/index.d.ts:888

Derived classes can override this method to handle Android back button press.

#### Returns

`boolean`

#### Inherited from

[`GridLayout`](GridLayout.md).[`onBackPressed`](GridLayout.md#onbackpressed)

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

[`GridLayout`](GridLayout.md).[`once`](GridLayout.md#once)

***

### onLayout()

```ts
onLayout(
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: ui/core/view/index.d.ts:734

Called from layout when this view should assign a size and position to each of its children. Derived classes with children should override this method and call layout on each of their children.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `left` | `number` | Left position, relative to parent |
| `top` | `number` | Top position, relative to parent |
| `right` | `number` | Right position, relative to parent |
| `bottom` | `number` | Bottom position, relative to parent |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`onLayout`](GridLayout.md#onlayout)

***

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: ui/core/view/view-common.d.ts:83

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`onLoaded`](GridLayout.md#onloaded)

***

### onMeasure()

```ts
onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
```

Defined in: ui/core/view/index.d.ts:725

Measure the view and its content to determine the measured width and the measured height. This method is invoked by measure(int, int) and should be overriden by subclasses to provide accurate and efficient measurement of their contents.
When overriding this method, you must call setMeasuredDimension(int, int) to store the measured width and height of this view. Failure to do so will trigger an exception, thrown by measure(int, int).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `widthMeasureSpec` | `number` | horizontal space requirements as imposed by the parent. The requirements are encoded with View.MeasureSpec. |
| `heightMeasureSpec` | `number` | vertical space requirements as imposed by the parent. The requirements are encoded with View.MeasureSpec. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`onMeasure`](GridLayout.md#onmeasure)

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: ui/core/view-base/index.d.ts:568

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`onResumeNativeUpdates`](GridLayout.md#onresumenativeupdates)

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:417

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`onUnloaded`](GridLayout.md#onunloaded)

***

### open()

```ts
open(view: View, options?: RootLayoutOptions): Promise<void>;
```

Defined in: ui/layouts/root-layout/index.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `options` | [`RootLayoutOptions`](../interfaces/RootLayoutOptions.md) |

#### Returns

`Promise`\<`void`\>

***

### openShadeCover()

```ts
openShadeCover(options?: ShadeCoverOptions): Promise<void>;
```

Defined in: ui/layouts/root-layout/index.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ShadeCoverOptions`](../interfaces/ShadeCoverOptions.md) |

#### Returns

`Promise`\<`void`\>

***

### removeChild()

```ts
removeChild(view: View): void;
```

Defined in: ui/layouts/layout-base.d.ts:43

Removes the specified view from the children array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`View`](View.md) | The view to remove from the children array. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeChild`](GridLayout.md#removechild)

***

### removeChildren()

```ts
removeChildren(): void;
```

Defined in: ui/layouts/layout-base.d.ts:48

Removes all views in this layout.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeChildren`](GridLayout.md#removechildren)

***

### removeColumn()

```ts
removeColumn(itemSpec: ItemSpec): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:127

Removes a column specification from a GridLayout.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemSpec` | [`ItemSpec`](ItemSpec.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeColumn`](GridLayout.md#removecolumn)

***

### removeColumns()

```ts
removeColumns(): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:132

Removes all column specifications from a GridLayout.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeColumns`](GridLayout.md#removecolumns)

***

### removeEventListener()

```ts
removeEventListener(
   eventNames: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: ui/core/view/view-common.d.ts:92

Removes listener(s) for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventNames` | `string` | - |
| `callback?` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed. |
| `thisArg?` | `any` | An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeEventListener`](GridLayout.md#removeeventlistener)

***

### removeRow()

```ts
removeRow(itemSpec: ItemSpec): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:137

Removes a row specification from a GridLayout.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemSpec` | [`ItemSpec`](ItemSpec.md) |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeRow`](GridLayout.md#removerow)

***

### removeRows()

```ts
removeRows(): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:142

Removes all row specifications from a GridLayout.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`removeRows`](GridLayout.md#removerows)

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

[`GridLayout`](GridLayout.md).[`requestLayout`](GridLayout.md#requestlayout)

***

### resetNativeView()

```ts
resetNativeView(): void;
```

Defined in: ui/core/view/view-common.d.ts:278

Resets properties/listeners set to the native view.

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`resetNativeView`](GridLayout.md#resetnativeview)

***

### sendAccessibilityEvent()

```ts
sendAccessibilityEvent(options: AccessibilityEventOptions): void;
```

Defined in: ui/core/view/index.d.ts:967

Send accessibility event

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AccessibilityEventOptions` |

#### Returns

`void`

#### Params

options AccessibilityEventOptions
androidAccessibilityEvent: AndroidAccessibilityEvent;
iosNotificationType: IOSPostAccessibilityNotificationType;
message: string;

iOS Notes:
 type = 'announcement' will announce `args` via VoiceOver. If no args element will be announced instead.
 type = 'layout' used when the layout of a screen changes.
 type = 'screen' large change made to the screen.

#### Inherited from

[`GridLayout`](GridLayout.md).[`sendAccessibilityEvent`](GridLayout.md#sendaccessibilityevent)

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

[`GridLayout`](GridLayout.md).[`set`](GridLayout.md#set)

***

### setAccessibilityIdentifier()

```ts
setAccessibilityIdentifier(view: any, value: string): void;
```

Defined in: ui/core/view/view-common.d.ts:313

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `any` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setAccessibilityIdentifier`](GridLayout.md#setaccessibilityidentifier)

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

[`GridLayout`](GridLayout.md).[`setInlineStyle`](GridLayout.md#setinlinestyle)

***

### setMeasuredDimension()

```ts
setMeasuredDimension(measuredWidth: number, measuredHeight: number): void;
```

Defined in: ui/core/view/index.d.ts:741

This method must be called by onMeasure(int, int) to store the measured width and measured height. Failing to do so will trigger an exception at measurement time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `measuredWidth` | `number` | The measured width of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL. |
| `measuredHeight` | `number` | The measured height of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL. |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setMeasuredDimension`](GridLayout.md#setmeasureddimension)

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

[`GridLayout`](GridLayout.md).[`setNativeView`](GridLayout.md#setnativeview)

***

### setOnTouchListener()?

```ts
optional setOnTouchListener(): void;
```

Defined in: ui/core/view/index.d.ts:947

Android only to set the touch listener

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setOnTouchListener`](GridLayout.md#setontouchlistener)

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

[`GridLayout`](GridLayout.md).[`setProperty`](GridLayout.md#setproperty)

***

### showModal()

```ts
showModal(...args: any[]): View;
```

Defined in: ui/core/view/view-common.d.ts:96

Shows the view passed as parameter as a modal view.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

[`View`](View.md)

#### Inherited from

[`GridLayout`](GridLayout.md).[`showModal`](GridLayout.md#showmodal)

***

### topmost()

```ts
topmost(): View;
```

Defined in: ui/layouts/root-layout/index.d.ts:10

#### Returns

[`View`](View.md)

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

[`GridLayout`](GridLayout.md).[`toString`](GridLayout.md#tostring)

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

[`GridLayout`](GridLayout.md).[`unbind`](GridLayout.md#unbind)

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

[`GridLayout`](GridLayout.md).[`unloadView`](GridLayout.md#unloadview)

***

### updateStatusBarStyle()

```ts
updateStatusBarStyle(value: "dark" | "light"): void;
```

Defined in: ui/core/view/view-common.d.ts:237

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"dark"` \| `"light"` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`updateStatusBarStyle`](GridLayout.md#updatestatusbarstyle)

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

[`GridLayout`](GridLayout.md).[`addEventListener`](GridLayout.md#addeventlistener-1)

***

### combineMeasuredStates()

```ts
static combineMeasuredStates(curState: number, newState: any): number;
```

Defined in: ui/core/view/index.d.ts:781

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `curState` | `number` |
| `newState` | `any` |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`combineMeasuredStates`](GridLayout.md#combinemeasuredstates)

***

### getColumn()

```ts
static getColumn(view: View): number;
```

Defined in: ui/layouts/grid-layout/index.d.ts:72

Gets the value of the Column attached property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getColumn`](GridLayout.md#getcolumn)

***

### getColumnSpan()

```ts
static getColumnSpan(view: View): number;
```

Defined in: ui/layouts/grid-layout/index.d.ts:82

Gets the value of the ColumnSpan attached property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getColumnSpan`](GridLayout.md#getcolumnspan)

***

### getRow()

```ts
static getRow(view: View): number;
```

Defined in: ui/layouts/grid-layout/index.d.ts:92

Gets the value of the Row attached property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getRow`](GridLayout.md#getrow)

***

### getRowSpan()

```ts
static getRowSpan(view: View): number;
```

Defined in: ui/layouts/grid-layout/index.d.ts:102

Gets the value of the RowSpan attached property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`getRowSpan`](GridLayout.md#getrowspan)

***

### layoutChild()

```ts
static layoutChild(
   parent: View, 
   child: View, 
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: ui/core/view/index.d.ts:769

Layout a child by taking into account its margins, horizontal and vertical alignments and a given bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parent` | [`View`](View.md) | This parameter is not used. You can pass null. |
| `child` | [`View`](View.md) | - |
| `left` | `number` | Left position, relative to parent |
| `top` | `number` | Top position, relative to parent |
| `right` | `number` | Right position, relative to parent |
| `bottom` | `number` | Bottom position, relative to parent |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`layoutChild`](GridLayout.md#layoutchild)

***

### measureChild()

```ts
static measureChild(
   parent: View, 
   child: View, 
   widthMeasureSpec: number, 
   heightMeasureSpec: number): {
  measuredHeight: number;
  measuredWidth: number;
};
```

Defined in: ui/core/view/index.d.ts:759

Measure a child by taking into account its margins and a given measureSpecs.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parent` | [`View`](View.md) | This parameter is not used. You can pass null. |
| `child` | [`View`](View.md) | The view to be measured. |
| `widthMeasureSpec` | `number` | - |
| `heightMeasureSpec` | `number` | - |

#### Returns

```ts
{
  measuredHeight: number;
  measuredWidth: number;
}
```

##### measuredHeight

```ts
measuredHeight: number;
```

##### measuredWidth

```ts
measuredWidth: number;
```

#### Inherited from

[`GridLayout`](GridLayout.md).[`measureChild`](GridLayout.md#measurechild)

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

[`GridLayout`](GridLayout.md).[`off`](GridLayout.md#off-1)

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

[`GridLayout`](GridLayout.md).[`on`](GridLayout.md#on-1)

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

[`GridLayout`](GridLayout.md).[`once`](GridLayout.md#once-1)

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

[`GridLayout`](GridLayout.md).[`removeEventListener`](GridLayout.md#removeeventlistener-1)

***

### resolveSizeAndState()

```ts
static resolveSizeAndState(
   size: number, 
   specSize: number, 
   specMode: number, 
   childMeasuredState: number): number;
```

Defined in: ui/core/view/index.d.ts:779

Utility to reconcile a desired size and state, with constraints imposed
by a MeasureSpec.  Will take the desired size, unless a different size
is imposed by the constraints.  The returned value is a compound integer,
with the resolved size in the MEASURED_SIZE_MASK bits and
optionally the bit MEASURED_STATE_TOO_SMALL set if the resulting
size is smaller than the size the view wants to be.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `size` | `number` |
| `specSize` | `number` |
| `specMode` | `number` |
| `childMeasuredState` | `number` |

#### Returns

`number`

#### Inherited from

[`GridLayout`](GridLayout.md).[`resolveSizeAndState`](GridLayout.md#resolvesizeandstate)

***

### setColumn()

```ts
static setColumn(view: View, value: number): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:77

Sets the value of the Column attached property to a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setColumn`](GridLayout.md#setcolumn)

***

### setColumnSpan()

```ts
static setColumnSpan(view: View, value: number): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:87

Sets the value of the ColumnSpan attached property to a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setColumnSpan`](GridLayout.md#setcolumnspan)

***

### setRow()

```ts
static setRow(view: View, value: number): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:97

Sets the value of the Row attached property to a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setRow`](GridLayout.md#setrow)

***

### setRowSpan()

```ts
static setRowSpan(view: View, value: number): void;
```

Defined in: ui/layouts/grid-layout/index.d.ts:107

Sets the value of the RowSpan attached property to a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[`GridLayout`](GridLayout.md).[`setRowSpan`](GridLayout.md#setrowspan)
