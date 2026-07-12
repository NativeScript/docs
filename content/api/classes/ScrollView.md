---
title: ScrollView
titleTemplate: :title - API / NativeScript
description: Represents a scrollable area that can have content that is larger than its bounds.
contributors: false
---

Defined in: ui/scroll-view/index.d.ts:11

Represents a scrollable area that can have content that is larger than its bounds.

## Ns View

ScrollView

## Extends

- [`ContentView`](ContentView.md)

## Constructors

### Constructor

```ts
new ScrollView(): ScrollView;
```

Defined in: ui/core/view-base/index.d.ts:363

#### Returns

`ScrollView`

#### Inherited from

[`ContentView`](ContentView.md).[`constructor`](ContentView.md#constructor)

## Properties

### \_androidContentDescriptionUpdated?

```ts
optional _androidContentDescriptionUpdated?: boolean;
```

Defined in: ui/core/view/index.d.ts:348

Internal use only. This is used to limit the number of updates to android.view.View.setContentDescription()

#### Inherited from

[`ContentView`](ContentView.md).[`_androidContentDescriptionUpdated`](ContentView.md#androidcontentdescriptionupdated)

***

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: ui/core/view-base/index.d.ts:260

#### Inherited from

[`ContentView`](ContentView.md).[`_automaticallyAdjustsScrollViewInsets`](ContentView.md#automaticallyadjustsscrollviewinsets)

***

### \_closeModalCallback

```ts
protected _closeModalCallback: Function;
```

Defined in: ui/core/view/view-common.d.ts:57

#### Inherited from

[`ContentView`](ContentView.md).[`_closeModalCallback`](ContentView.md#closemodalcallback)

***

### \_context

```ts
_context: any;
```

Defined in: ui/core/view-base/index.d.ts:237

#### Inherited from

[`ContentView`](ContentView.md).[`_context`](ContentView.md#context)

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: ui/core/view-base/index.d.ts:239

#### Inherited from

[`ContentView`](ContentView.md).[`_cssState`](ContentView.md#cssstate)

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:168

#### Inherited from

[`ContentView`](ContentView.md).[`_defaultPaddingBottom`](ContentView.md#defaultpaddingbottom)

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:169

#### Inherited from

[`ContentView`](ContentView.md).[`_defaultPaddingLeft`](ContentView.md#defaultpaddingleft)

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: ui/core/view-base/index.d.ts:167

#### Inherited from

[`ContentView`](ContentView.md).[`_defaultPaddingRight`](ContentView.md#defaultpaddingright)

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: ui/core/view-base/index.d.ts:166

#### Inherited from

[`ContentView`](ContentView.md).[`_defaultPaddingTop`](ContentView.md#defaultpaddingtop)

***

### \_domId

```ts
_domId: number;
```

Defined in: ui/core/view-base/index.d.ts:236

#### Inherited from

[`ContentView`](ContentView.md).[`_domId`](ContentView.md#domid)

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: ui/core/view-base/index.d.ts:337

#### Inherited from

[`ContentView`](ContentView.md).[`_ignoreFlexMinWidthHeightReset`](ContentView.md#ignoreflexminwidthheightreset)

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: ui/core/view-base/index.d.ts:238

#### Inherited from

[`ContentView`](ContentView.md).[`_isAddedToNativeVisualTree`](ContentView.md#isaddedtonativevisualtree)

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: ui/core/view-base/index.d.ts:170

#### Inherited from

[`ContentView`](ContentView.md).[`_isPaddingRelative`](ContentView.md#ispaddingrelative)

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: ui/core/view-base/index.d.ts:259

#### Inherited from

[`ContentView`](ContentView.md).[`_isStyleScopeHost`](ContentView.md#isstylescopehost)

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:336

#### Inherited from

[`ContentView`](ContentView.md).[`_oldBottom`](ContentView.md#oldbottom)

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:333

#### Inherited from

[`ContentView`](ContentView.md).[`_oldLeft`](ContentView.md#oldleft)

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: ui/core/view-base/index.d.ts:335

#### Inherited from

[`ContentView`](ContentView.md).[`_oldRight`](ContentView.md#oldright)

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: ui/core/view-base/index.d.ts:334

#### Inherited from

[`ContentView`](ContentView.md).[`_oldTop`](ContentView.md#oldtop)

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: ui/core/view-base/index.d.ts:240

#### Inherited from

[`ContentView`](ContentView.md).[`_styleScope`](ContentView.md#stylescope)

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

[`ContentView`](ContentView.md).[`_suspendNativeUpdatesCount`](ContentView.md#suspendnativeupdatescount)

***

### accessibilityHidden

```ts
accessibilityHidden: boolean;
```

Defined in: ui/core/view/index.d.ts:250

Hide the view and its children from the a11y service

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityHidden`](ContentView.md#accessibilityhidden)

***

### accessibilityHint

```ts
accessibilityHint: string;
```

Defined in: ui/core/view/index.d.ts:295

A hint describes the elements behavior. Example: 'Tap change playback speed'

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityHint`](ContentView.md#accessibilityhint)

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

[`ContentView`](ContentView.md).[`accessibilityIdentifier`](ContentView.md#accessibilityidentifier)

***

### accessibilityIgnoresInvertColors

```ts
accessibilityIgnoresInvertColors: boolean;
```

Defined in: ui/core/view/index.d.ts:322

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityIgnoresInvertColors`](ContentView.md#accessibilityignoresinvertcolors)

***

### accessibilityLabel

```ts
accessibilityLabel: string;
```

Defined in: ui/core/view/index.d.ts:281

Short description of the element, ideally one word.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityLabel`](ContentView.md#accessibilitylabel)

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

[`ContentView`](ContentView.md).[`accessibilityLanguage`](ContentView.md#accessibilitylanguage)

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: ui/core/view/index.d.ts:302

When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityLiveRegion`](ContentView.md#accessibilityliveregion)

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: ui/core/view/index.d.ts:317

This view starts a media session. Equivalent to trait = startsMedia

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityMediaSession`](ContentView.md#accessibilitymediasession)

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: ui/core/view/index.d.ts:266

Which role should this view be treated by the a11y service?

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityRole`](ContentView.md#accessibilityrole)

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: ui/core/view/index.d.ts:274

Which state should this view be treated as by the a11y service?

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityState`](ContentView.md#accessibilitystate)

***

### accessibilityValue

```ts
accessibilityValue: string;
```

Defined in: ui/core/view/index.d.ts:288

Current value of the element in a localized string.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityValue`](ContentView.md#accessibilityvalue)

***

### accessible

```ts
accessible: boolean;
```

Defined in: ui/core/view/index.d.ts:243

If `true` the element is an accessibility element and all the children will be treated as a single selectable component.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`accessible`](ContentView.md#accessible)

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: ui/core/view-base/index.d.ts:332

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`alignSelf`](ContentView.md#alignself)

***

### android

```ts
android: any;
```

Defined in: ui/core/view/index.d.ts:111

Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.

#### Inherited from

[`ContentView`](ContentView.md).[`android`](ContentView.md#android)

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: ui/core/view/index.d.ts:368

Gets or sets the dynamic elevation offset of the android view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`androidDynamicElevationOffset`](ContentView.md#androiddynamicelevationoffset)

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: ui/core/view/index.d.ts:361

Gets or sets the elevation of the android view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`androidElevation`](ContentView.md#androidelevation)

***

### androidOverflowEdge

```ts
androidOverflowEdge: AndroidOverflow;
```

Defined in: ui/core/view/view-common.d.ts:43

#### Inherited from

[`ContentView`](ContentView.md).[`androidOverflowEdge`](ContentView.md#androidoverflowedge)

***

### automationText

```ts
automationText: string;
```

Defined in: ui/core/view/index.d.ts:354

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`automationText`](ContentView.md#automationtext)

***

### background

```ts
background: string;
```

Defined in: ui/core/view/index.d.ts:375

Gets or sets the background style property.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`background`](ContentView.md#background)

***

### backgroundColor

```ts
backgroundColor: string | Color;
```

Defined in: ui/core/view/index.d.ts:382

Gets or sets the background color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`backgroundColor`](ContentView.md#backgroundcolor)

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: ui/core/view/index.d.ts:389

Gets or sets the background image of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`backgroundImage`](ContentView.md#backgroundimage)

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: ui/core/view/index.d.ts:124

Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`bindingContext`](ContentView.md#bindingcontext)

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: ui/core/view/index.d.ts:152

Gets or sets the bottom border color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderBottomColor`](ContentView.md#borderbottomcolor)

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:229

Gets or sets the bottom left border radius of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderBottomLeftRadius`](ContentView.md#borderbottomleftradius)

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:222

Gets or sets the bottom right border radius of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderBottomRightRadius`](ContentView.md#borderbottomrightradius)

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:187

Gets or sets the bottom border width of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderBottomWidth`](ContentView.md#borderbottomwidth)

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: ui/core/view/index.d.ts:131

Gets or sets the border color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderColor`](ContentView.md#bordercolor)

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: ui/core/view/index.d.ts:159

Gets or sets the left border color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderLeftColor`](ContentView.md#borderleftcolor)

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:194

Gets or sets the left border width of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderLeftWidth`](ContentView.md#borderleftwidth)

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

[`ContentView`](ContentView.md).[`borderRadius`](ContentView.md#borderradius)

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: ui/core/view/index.d.ts:145

Gets or sets the right border color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderRightColor`](ContentView.md#borderrightcolor)

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:180

Gets or sets the right border width of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderRightWidth`](ContentView.md#borderrightwidth)

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: ui/core/view/index.d.ts:138

Gets or sets the top border color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderTopColor`](ContentView.md#bordertopcolor)

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:208

Gets or sets the top left border radius of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderTopLeftRadius`](ContentView.md#bordertopleftradius)

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: ui/core/view/index.d.ts:215

Gets or sets the top right border radius of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderTopRightRadius`](ContentView.md#bordertoprightradius)

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:173

Gets or sets the top border width of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`borderTopWidth`](ContentView.md#bordertopwidth)

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

[`ContentView`](ContentView.md).[`borderWidth`](ContentView.md#borderwidth)

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: ui/core/view/index.d.ts:396

Gets or sets the box shadow of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`boxShadow`](ContentView.md#boxshadow)

***

### className

```ts
className: string;
```

Defined in: ui/core/view-base/index.d.ts:212

Gets or sets the CSS class name for this view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`className`](ContentView.md#classname)

***

### col

```ts
col: number;
```

Defined in: ui/core/view-base/index.d.ts:288

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`col`](ContentView.md#col)

***

### color

```ts
color: Color;
```

Defined in: ui/core/view/index.d.ts:236

Gets or sets the color of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`color`](ContentView.md#color)

***

### colSpan

```ts
colSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:303

The number of columns for the element to span across.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`colSpan`](ContentView.md#colspan)

***

### column

```ts
column: number;
```

Defined in: ui/core/view-base/index.d.ts:293

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`column`](ContentView.md#column)

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:307

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`columnSpan`](ContentView.md#columnspan)

***

### content

```ts
content: View;
```

Defined in: ui/content-view/index.d.ts:13

Gets or sets the single child of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`content`](ContentView.md#content)

***

### cssClasses

```ts
cssClasses: Set<string>;
```

Defined in: ui/core/view/index.d.ts:685

#### Inherited from

[`ContentView`](ContentView.md).[`cssClasses`](ContentView.md#cssclasses)

***

### cssPseudoClasses

```ts
cssPseudoClasses: Set<string>;
```

Defined in: ui/core/view/index.d.ts:686

#### Inherited from

[`ContentView`](ContentView.md).[`cssPseudoClasses`](ContentView.md#csspseudoclasses)

***

### cssType

```ts
cssType: string;
```

Defined in: ui/core/view/index.d.ts:667

Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.

#### Inherited from

[`ContentView`](ContentView.md).[`cssType`](ContentView.md#csstype)

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: ui/core/view-base/index.d.ts:235

Default visual state, defaults to 'normal'

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`defaultVisualState`](ContentView.md#defaultvisualstate)

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: ui/core/view/index.d.ts:403

Gets or sets the layout direction of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`direction`](ContentView.md#direction)

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: ui/core/view-base/index.d.ts:277

Dock position of the view within its parent.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`dock`](ContentView.md#dock)

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: ui/core/view-base/index.d.ts:177

#### Inherited from

[`ContentView`](ContentView.md).[`domNode`](ContentView.md#domnode)

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:348

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveBorderBottomWidth`](ContentView.md#effectiveborderbottomwidth)

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:349

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveBorderLeftWidth`](ContentView.md#effectiveborderleftwidth)

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:347

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveBorderRightWidth`](ContentView.md#effectiveborderrightwidth)

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:346

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveBorderTopWidth`](ContentView.md#effectivebordertopwidth)

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: ui/core/view-base/index.d.ts:341

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveHeight`](ContentView.md#effectiveheight)

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:271

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveLeft`](ContentView.md#effectiveleft)

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: ui/core/view-base/index.d.ts:344

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveMarginBottom`](ContentView.md#effectivemarginbottom)

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: ui/core/view-base/index.d.ts:345

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveMarginLeft`](ContentView.md#effectivemarginleft)

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: ui/core/view-base/index.d.ts:343

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveMarginRight`](ContentView.md#effectivemarginright)

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: ui/core/view-base/index.d.ts:342

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveMarginTop`](ContentView.md#effectivemargintop)

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: ui/core/view-base/index.d.ts:339

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveMinHeight`](ContentView.md#effectiveminheight)

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:338

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveMinWidth`](ContentView.md#effectiveminwidth)

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: ui/core/view-base/index.d.ts:272

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveTop`](ContentView.md#effectivetop)

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: ui/core/view-base/index.d.ts:340

#### Inherited from

[`ContentView`](ContentView.md).[`effectiveWidth`](ContentView.md#effectivewidth)

***

### flex

```ts
flex: Flex;
```

Defined in: ui/core/view/index.d.ts:578

The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`flex`](ContentView.md#flex)

***

### flexFlow

```ts
flexFlow: FlexFlow;
```

Defined in: ui/core/view/index.d.ts:573

The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`flexFlow`](ContentView.md#flexflow)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: ui/core/view-base/index.d.ts:317

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`flexGrow`](ContentView.md#flexgrow)

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: ui/core/view-base/index.d.ts:322

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`flexShrink`](ContentView.md#flexshrink)

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: ui/core/view-base/index.d.ts:327

When true, forces the item to wrap onto a new line.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`flexWrapBefore`](ContentView.md#flexwrapbefore)

***

### height

```ts
height: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:431

Gets or sets the desired height of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`height`](ContentView.md#height)

***

### hidden

```ts
hidden: boolean;
```

Defined in: ui/core/view-base/index.d.ts:217

Gets or sets the visual state of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`hidden`](ContentView.md#hidden)

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: ui/core/view/index.d.ts:473

Gets or sets the alignment of this view within its parent along the Horizontal axis.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`horizontalAlignment`](ContentView.md#horizontalalignment)

***

### horizontalOffset

```ts
horizontalOffset: number;
```

Defined in: ui/scroll-view/index.d.ts:34

Gets a value that contains the horizontal offset of the scrolled content.

***

### id

```ts
id: string;
```

Defined in: ui/core/view-base/index.d.ts:206

Gets or sets the id for this view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`id`](ContentView.md#id)

***

### ignoreTouchAnimation

```ts
ignoreTouchAnimation: boolean;
```

Defined in: ui/core/view/index.d.ts:647

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`ignoreTouchAnimation`](ContentView.md#ignoretouchanimation)

***

### ios

```ts
ios: any;
```

Defined in: ui/core/view/index.d.ts:117

Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.

#### Inherited from

[`ContentView`](ContentView.md).[`ios`](ContentView.md#ios)

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: ui/core/view/index.d.ts:329

Defines whether accessibility font scale should affect font size.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosAccessibilityAdjustsFontSize`](ContentView.md#iosaccessibilityadjustsfontsize)

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: ui/core/view/index.d.ts:343

Gets or sets the maximum accessibility font scale.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosAccessibilityMaxFontScale`](ContentView.md#iosaccessibilitymaxfontscale)

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: ui/core/view/index.d.ts:336

Gets or sets the minimum accessibility font scale.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosAccessibilityMinFontScale`](ContentView.md#iosaccessibilityminfontscale)

***

### iosGlassEffect

```ts
iosGlassEffect: GlassEffectType;
```

Defined in: ui/core/view/index.d.ts:634

Set the iOS liquid glass effect style on the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosGlassEffect`](ContentView.md#iosglasseffect)

***

### iosIgnoreSafeArea

```ts
iosIgnoreSafeArea: boolean;
```

Defined in: ui/core/view/index.d.ts:613

Gets or sets a value indicating whether the the view should totally ignore safe areas computation. This property is iOS specific. Default value: false

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosIgnoreSafeArea`](ContentView.md#iosignoresafearea)

***

### iosOverflowSafeArea

```ts
iosOverflowSafeArea: boolean;
```

Defined in: ui/core/view/index.d.ts:1130

Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosOverflowSafeArea`](ContentView.md#iosoverflowsafearea)

***

### iosOverflowSafeAreaEnabled

```ts
iosOverflowSafeAreaEnabled: boolean;
```

Defined in: ui/core/view/index.d.ts:606

Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`iosOverflowSafeAreaEnabled`](ContentView.md#iosoverflowsafeareaenabled)

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

[`ContentView`](ContentView.md).[`isCollapsed`](ContentView.md#iscollapsed)

***

### isEnabled

```ts
isEnabled: boolean;
```

Defined in: ui/core/view/index.d.ts:585

Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`isEnabled`](ContentView.md#isenabled)

***

### isLayoutValid

```ts
isLayoutValid: boolean;
```

Defined in: ui/core/view/index.d.ts:656

Gets if layout is valid. This is a read-only property.

#### Inherited from

[`ContentView`](ContentView.md).[`isLayoutValid`](ContentView.md#islayoutvalid)

***

### isScrollEnabled

```ts
isScrollEnabled: boolean;
```

Defined in: ui/scroll-view/index.d.ts:24

Gets or sets a value indicating whether scroll is enabled.

#### Ns Property

***

### isUserInteractionEnabled

```ts
isUserInteractionEnabled: boolean;
```

Defined in: ui/core/view/index.d.ts:592

Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`isUserInteractionEnabled`](ContentView.md#isuserinteractionenabled)

***

### left

```ts
left: LengthType;
```

Defined in: ui/core/view-base/index.d.ts:265

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`left`](ContentView.md#left)

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

[`ContentView`](ContentView.md).[`margin`](ContentView.md#margin)

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:466

Specifies extra space on the bottom side of this view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`marginBottom`](ContentView.md#marginbottom)

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:445

Specifies extra space on the left side of this view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`marginLeft`](ContentView.md#marginleft)

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:459

Specifies extra space on the right side of this view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`marginRight`](ContentView.md#marginright)

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:452

Specifies extra space on the top side of this view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`marginTop`](ContentView.md#margintop)

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: ui/core/view/index.d.ts:417

Gets or sets the minimum height the view may grow to.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`minHeight`](ContentView.md#minheight)

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: ui/core/view/index.d.ts:410

Gets or sets the minimum width the view may grow to.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`minWidth`](ContentView.md#minwidth)

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

[`ContentView`](ContentView.md).[`mIsRootView`](ContentView.md#misrootview)

***

### modal

```ts
modal: View;
```

Defined in: ui/core/view/index.d.ts:848

Returns the current modal view that this page is showing (is parent of), if any.

#### Inherited from

[`ContentView`](ContentView.md).[`modal`](ContentView.md#modal)

***

### nativeBackgroundState?

```ts
optional nativeBackgroundState?: "unset" | "invalid" | "drawn";
```

Defined in: ui/core/view/index.d.ts:661

Native background states. This is a read-only property.

#### Inherited from

[`ContentView`](ContentView.md).[`nativeBackgroundState`](ContentView.md#nativebackgroundstate)

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: ui/core/view-base/index.d.ts:190

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

#### Inherited from

[`ContentView`](ContentView.md).[`nativeViewProtected`](ContentView.md#nativeviewprotected)

***

### opacity

```ts
opacity: number;
```

Defined in: ui/core/view/index.d.ts:494

Gets or sets the opacity style property.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`opacity`](ContentView.md#opacity)

***

### order

```ts
order: number;
```

Defined in: ui/core/view-base/index.d.ts:312

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`order`](ContentView.md#order)

***

### orientation

```ts
orientation: OrientationType;
```

Defined in: ui/scroll-view/index.d.ts:72

Gets or sets direction in which the content can be scrolled.

#### Ns Property

***

### originX

```ts
originX: number;
```

Defined in: ui/core/view/index.d.ts:560

Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`originX`](ContentView.md#originx)

***

### originY

```ts
originY: number;
```

Defined in: ui/core/view/index.d.ts:567

Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`originY`](ContentView.md#originy)

***

### parent

```ts
parent: ViewBase;
```

Defined in: ui/core/view-base/index.d.ts:194

Gets the parent view. This property is read-only.

#### Inherited from

[`ContentView`](ContentView.md).[`parent`](ContentView.md#parent)

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

[`ContentView`](ContentView.md).[`perspective`](ContentView.md#perspective)

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: ui/core/view-base/index.d.ts:178

#### Inherited from

[`ContentView`](ContentView.md).[`recycleNativeView`](ContentView.md#recyclenativeview)

***

### reusable

```ts
reusable: boolean;
```

Defined in: ui/core/view-base/index.d.ts:360

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`reusable`](ContentView.md#reusable)

***

### rotate

```ts
rotate: number;
```

Defined in: ui/core/view/index.d.ts:501

Gets or sets the rotate affine transform of the view along the Z axis.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`rotate`](ContentView.md#rotate)

***

### rotateX

```ts
rotateX: number;
```

Defined in: ui/core/view/index.d.ts:508

Gets or sets the rotate affine transform of the view along the X axis.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`rotateX`](ContentView.md#rotatex)

***

### rotateY

```ts
rotateY: number;
```

Defined in: ui/core/view/index.d.ts:515

Gets or sets the rotate affine transform of the view along the Y axis.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`rotateY`](ContentView.md#rotatey)

***

### row

```ts
row: number;
```

Defined in: ui/core/view-base/index.d.ts:283

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`row`](ContentView.md#row)

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: ui/core/view-base/index.d.ts:298

The number of rows for the element to span across.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`rowSpan`](ContentView.md#rowspan)

***

### scaleX

```ts
scaleX: number;
```

Defined in: ui/core/view/index.d.ts:544

Gets or sets the scaleX affine transform of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`scaleX`](ContentView.md#scalex)

***

### scaleY

```ts
scaleY: number;
```

Defined in: ui/core/view/index.d.ts:551

Gets or sets the scaleY affine transform of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`scaleY`](ContentView.md#scaley)

***

### scrollableHeight

```ts
scrollableHeight: number;
```

Defined in: ui/scroll-view/index.d.ts:39

Gets the maximum value for the verticalOffset.

***

### scrollableWidth

```ts
scrollableWidth: number;
```

Defined in: ui/scroll-view/index.d.ts:44

Gets the maximum value for the horizontalOffset.

***

### scrollBarIndicatorVisible

```ts
scrollBarIndicatorVisible: boolean;
```

Defined in: ui/scroll-view/index.d.ts:51

Toggles scrollbar indicator visibility

#### Ns Property

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: ui/core/view-base/index.d.ts:229

Opt out of shared transition under different binding conditions

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`sharedTransitionIgnore`](ContentView.md#sharedtransitionignore)

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: ui/core/view-base/index.d.ts:223

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`sharedTransitionTag`](ContentView.md#sharedtransitiontag)

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

[`ContentView`](ContentView.md).[`statusBarStyle`](ContentView.md#statusbarstyle)

***

### testID

```ts
testID: string;
```

Defined in: ui/core/view/index.d.ts:639

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`testID`](ContentView.md#testid)

***

### top

```ts
top: LengthType;
```

Defined in: ui/core/view-base/index.d.ts:270

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`top`](ContentView.md#top)

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

[`ContentView`](ContentView.md).[`touchAnimation`](ContentView.md#touchanimation)

***

### touchDelay

```ts
touchDelay: number;
```

Defined in: ui/core/view/index.d.ts:651

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`touchDelay`](ContentView.md#touchdelay)

***

### transitionId

```ts
transitionId: number;
```

Defined in: ui/core/view/view-common.d.ts:65

Active transition instance id for tracking state

#### Inherited from

[`ContentView`](ContentView.md).[`transitionId`](ContentView.md#transitionid)

***

### translateX

```ts
translateX: number;
```

Defined in: ui/core/view/index.d.ts:530

Gets or sets the translateX affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`translateX`](ContentView.md#translatex)

***

### translateY

```ts
translateY: number;
```

Defined in: ui/core/view/index.d.ts:537

Gets or sets the translateY affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`translateY`](ContentView.md#translatey)

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: ui/core/view/index.d.ts:480

Gets or sets the alignment of this view within its parent along the Vertical axis.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`verticalAlignment`](ContentView.md#verticalalignment)

***

### verticalOffset

```ts
verticalOffset: number;
```

Defined in: ui/scroll-view/index.d.ts:29

Gets a value that contains the vertical offset of the scrolled content.

***

### viewController

```ts
viewController: any;
```

Defined in: ui/core/view-base/index.d.ts:182

returns the native UIViewController.

#### Inherited from

[`ContentView`](ContentView.md).[`viewController`](ContentView.md#viewcontroller)

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: ui/core/view/index.d.ts:487

Gets or sets the visibility of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`visibility`](ContentView.md#visibility)

***

### visionHoverStyle

```ts
visionHoverStyle: string | VisionHoverOptions;
```

Defined in: ui/core/view/index.d.ts:627

visionOS only

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`visionHoverStyle`](ContentView.md#visionhoverstyle)

***

### visionIgnoreHoverStyle

```ts
visionIgnoreHoverStyle: boolean;
```

Defined in: ui/core/view/index.d.ts:620

visionOS only

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`visionIgnoreHoverStyle`](ContentView.md#visionignorehoverstyle)

***

### width

```ts
width: PercentLengthType;
```

Defined in: ui/core/view/index.d.ts:424

Gets or sets the desired width of the view.

#### Ns Property

#### Inherited from

[`ContentView`](ContentView.md).[`width`](ContentView.md#width)

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

[`ContentView`](ContentView.md).[`accessibilityBlurEvent`](ContentView.md#accessibilityblurevent)

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

[`ContentView`](ContentView.md).[`accessibilityFocusChangedEvent`](ContentView.md#accessibilityfocuschangedevent)

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

[`ContentView`](ContentView.md).[`accessibilityFocusEvent`](ContentView.md#accessibilityfocusevent)

***

### accessibilityPerformEscapeEvent

```ts
static accessibilityPerformEscapeEvent: string;
```

Defined in: ui/core/view/view-common.d.ts:29

#### Inherited from

[`ContentView`](ContentView.md).[`accessibilityPerformEscapeEvent`](ContentView.md#accessibilityperformescapeevent)

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

[`ContentView`](ContentView.md).[`androidOverflowInsetEvent`](ContentView.md#androidoverflowinsetevent)

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

[`ContentView`](ContentView.md).[`createdEvent`](ContentView.md#createdevent)

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

[`ContentView`](ContentView.md).[`disposeNativeViewEvent`](ContentView.md#disposenativeviewevent)

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

[`ContentView`](ContentView.md).[`layoutChangedEvent`](ContentView.md#layoutchangedevent)

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

[`ContentView`](ContentView.md).[`loadedEvent`](ContentView.md#loadedevent)

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

[`ContentView`](ContentView.md).[`propertyChangeEvent`](ContentView.md#propertychangeevent)

***

### scrollEvent

```ts
static scrollEvent: string;
```

Defined in: ui/scroll-view/index.d.ts:17

String value used when hooking to scroll event.

#### Ns Event

scroll

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

[`ContentView`](ContentView.md).[`showingModallyEvent`](ContentView.md#showingmodallyevent)

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

[`ContentView`](ContentView.md).[`shownModallyEvent`](ContentView.md#shownmodallyevent)

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

[`ContentView`](ContentView.md).[`unloadedEvent`](ContentView.md#unloadedevent)

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

[`ContentView`](ContentView.md).[`backgroundPosition`](ContentView.md#backgroundposition)

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

[`ContentView`](ContentView.md).[`backgroundRepeat`](ContentView.md#backgroundrepeat)

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

[`ContentView`](ContentView.md).[`backgroundSize`](ContentView.md#backgroundsize)

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

[`ContentView`](ContentView.md).[`class`](ContentView.md#class)

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

[`ContentView`](ContentView.md).[`effectivePaddingBottom`](ContentView.md#effectivepaddingbottom)

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

[`ContentView`](ContentView.md).[`effectivePaddingLeft`](ContentView.md#effectivepaddingleft)

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

[`ContentView`](ContentView.md).[`effectivePaddingRight`](ContentView.md#effectivepaddingright)

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

[`ContentView`](ContentView.md).[`effectivePaddingTop`](ContentView.md#effectivepaddingtop)

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

[`ContentView`](ContentView.md).[`isLoaded`](ContentView.md#isloaded)

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

[`ContentView`](ContentView.md).[`nativeView`](ContentView.md#nativeview)

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

[`ContentView`](ContentView.md).[`page`](ContentView.md#page)

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

[`ContentView`](ContentView.md).[`parentNode`](ContentView.md#parentnode)

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

[`ContentView`](ContentView.md).[`style`](ContentView.md#style)

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

[`ContentView`](ContentView.md).[`textTransform`](ContentView.md#texttransform)

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

[`ContentView`](ContentView.md).[`typeName`](ContentView.md#typename)

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

[`ContentView`](ContentView.md).[`visualState`](ContentView.md#visualstate)

## Methods

### \_addChildFromBuilder()

```ts
_addChildFromBuilder(name: string, value: any): void;
```

Defined in: ui/content-view/index.d.ts:15

Called for every child element declared in xml.
This method will add a child element (value) to current element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the element. |
| `value` | `any` | Value of the element. |

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`_addChildFromBuilder`](ContentView.md#addchildfrombuilder)

***

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

[`ContentView`](ContentView.md).[`_addView`](ContentView.md#addview)

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

[`ContentView`](ContentView.md).[`_addViewCore`](ContentView.md#addviewcore)

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

[`ContentView`](ContentView.md).[`_addViewToNativeVisualTree`](ContentView.md#addviewtonativevisualtree)

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

[`ContentView`](ContentView.md).[`_applyGlassEffect`](ContentView.md#applyglasseffect)

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

[`ContentView`](ContentView.md).[`_applyXmlAttribute`](ContentView.md#applyxmlattribute)

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

[`ContentView`](ContentView.md).[`_batchUpdate`](ContentView.md#batchupdate)

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

[`ContentView`](ContentView.md).[`_childIndexToNativeChildIndex`](ContentView.md#childindextonativechildindex)

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

[`ContentView`](ContentView.md).[`_closeAllModalViewsInternal`](ContentView.md#closeallmodalviewsinternal)

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

[`ContentView`](ContentView.md).[`_createPropertyChangeData`](ContentView.md#createpropertychangedata)

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

[`ContentView`](ContentView.md).[`_dialogClosed`](ContentView.md#dialogclosed)

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

[`ContentView`](ContentView.md).[`_eachLayoutView`](ContentView.md#eachlayoutview)

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

[`ContentView`](ContentView.md).[`_emit`](ContentView.md#emit)

***

### \_getNativeViewsCount()

```ts
_getNativeViewsCount(): number;
```

Defined in: ui/core/view/index.d.ts:918

#### Returns

`number`

#### Inherited from

[`ContentView`](ContentView.md).[`_getNativeViewsCount`](ContentView.md#getnativeviewscount)

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

[`ContentView`](ContentView.md).[`_getRootModalViews`](ContentView.md#getrootmodalviews)

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

[`ContentView`](ContentView.md).[`_getValue`](ContentView.md#getvalue)

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

[`ContentView`](ContentView.md).[`_handleLivesync`](ContentView.md#handlelivesync)

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

[`ContentView`](ContentView.md).[`_hasAncestorView`](ContentView.md#hasancestorview)

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

[`ContentView`](ContentView.md).[`_hideNativeModalView`](ContentView.md#hidenativemodalview)

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

[`ContentView`](ContentView.md).[`_inheritStyles`](ContentView.md#inheritstyles)

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

[`ContentView`](ContentView.md).[`_inheritStyleScope`](ContentView.md#inheritstylescope)

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: ui/core/view-base/index.d.ts:418

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`_layoutParent`](ContentView.md#layoutparent)

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

[`ContentView`](ContentView.md).[`_observe`](ContentView.md#observe)

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

[`ContentView`](ContentView.md).[`_onAttachedToWindow`](ContentView.md#onattachedtowindow)

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

[`ContentView`](ContentView.md).[`_onDetachedFromWindow`](ContentView.md#ondetachedfromwindow)

***

### \_onOrientationChanged()

```ts
_onOrientationChanged(): void;
```

Defined in: ui/scroll-view/index.d.ts:91

#### Returns

`void`

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

[`ContentView`](ContentView.md).[`_onRootViewReset`](ContentView.md#onrootviewreset)

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

[`ContentView`](ContentView.md).[`_onSizeChanged`](ContentView.md#onsizechanged)

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

[`ContentView`](ContentView.md).[`_parentChanged`](ContentView.md#parentchanged)

***

### \_raiseLayoutChangedEvent()

```ts
protected _raiseLayoutChangedEvent(): void;
```

Defined in: ui/core/view/view-common.d.ts:101

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`_raiseLayoutChangedEvent`](ContentView.md#raiselayoutchangedevent)

***

### \_raiseShowingModallyEvent()

```ts
protected _raiseShowingModallyEvent(): void;
```

Defined in: ui/core/view/view-common.d.ts:103

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`_raiseShowingModallyEvent`](ContentView.md#raiseshowingmodallyevent)

***

### \_raiseShownModallyEvent()

```ts
protected _raiseShownModallyEvent(): void;
```

Defined in: ui/core/view/view-common.d.ts:102

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`_raiseShownModallyEvent`](ContentView.md#raiseshownmodallyevent)

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

[`ContentView`](ContentView.md).[`_removeView`](ContentView.md#removeview)

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

[`ContentView`](ContentView.md).[`_removeViewCore`](ContentView.md#removeviewcore)

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

[`ContentView`](ContentView.md).[`_removeViewFromNativeVisualTree`](ContentView.md#removeviewfromnativevisualtree)

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

[`ContentView`](ContentView.md).[`_resumeNativeUpdates`](ContentView.md#resumenativeupdates)

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

[`ContentView`](ContentView.md).[`_setDefaultPaddings`](ContentView.md#setdefaultpaddings)

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

[`ContentView`](ContentView.md).[`_setupAsRootView`](ContentView.md#setupasrootview)

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

[`ContentView`](ContentView.md).[`_setupUI`](ContentView.md#setupui)

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

[`ContentView`](ContentView.md).[`_setValue`](ContentView.md#setvalue)

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

[`ContentView`](ContentView.md).[`_shouldDelayLayout`](ContentView.md#shoulddelaylayout)

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

[`ContentView`](ContentView.md).[`_showNativeModalView`](ContentView.md#shownativemodalview)

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

[`ContentView`](ContentView.md).[`_suspendNativeUpdates`](ContentView.md#suspendnativeupdates)

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

[`ContentView`](ContentView.md).[`_tearDownUI`](ContentView.md#teardownui)

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

[`ContentView`](ContentView.md).[`_updateStyleScope`](ContentView.md#updatestylescope)

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

[`ContentView`](ContentView.md).[`accessibilityAnnouncement`](ContentView.md#accessibilityannouncement)

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

[`ContentView`](ContentView.md).[`accessibilityScreenChanged`](ContentView.md#accessibilityscreenchanged)

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

[`ContentView`](ContentView.md).[`addEventListener`](ContentView.md#addeventlistener)

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

[`ContentView`](ContentView.md).[`addPseudoClass`](ContentView.md#addpseudoclass)

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

[`ContentView`](ContentView.md).[`animate`](ContentView.md#animate)

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

[`ContentView`](ContentView.md).[`bind`](ContentView.md#bind)

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:429

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`callLoaded`](ContentView.md#callloaded)

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:430

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`callUnloaded`](ContentView.md#callunloaded)

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

[`ContentView`](ContentView.md).[`closeModal`](ContentView.md#closemodal)

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

[`ContentView`](ContentView.md).[`createAnimation`](ContentView.md#createanimation)

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

[`ContentView`](ContentView.md).[`createNativeView`](ContentView.md#createnativeview)

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

[`ContentView`](ContentView.md).[`deletePseudoClass`](ContentView.md#deletepseudoclass)

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

[`ContentView`](ContentView.md).[`destroyNode`](ContentView.md#destroynode)

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

[`ContentView`](ContentView.md).[`disposeNativeView`](ContentView.md#disposenativeview)

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

[`ContentView`](ContentView.md).[`eachChild`](ContentView.md#eachchild)

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

[`ContentView`](ContentView.md).[`eachChildView`](ContentView.md#eachchildview)

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

[`ContentView`](ContentView.md).[`ensureDomNode`](ContentView.md#ensuredomnode)

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

[`ContentView`](ContentView.md).[`focus`](ContentView.md#focus)

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

[`ContentView`](ContentView.md).[`get`](ContentView.md#get)

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

[`ContentView`](ContentView.md).[`getActualSize`](ContentView.md#getactualsize)

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

[`ContentView`](ContentView.md).[`getClosestWindow`](ContentView.md#getclosestwindow)

***

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: ui/core/view-base/index.d.ts:397

#### Returns

`string`

#### Inherited from

[`ContentView`](ContentView.md).[`getEffectivePaddingShorthand`](ContentView.md#geteffectivepaddingshorthand)

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

[`ContentView`](ContentView.md).[`getGestureObservers`](ContentView.md#getgestureobservers)

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

[`ContentView`](ContentView.md).[`getLocationInWindow`](ContentView.md#getlocationinwindow)

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

[`ContentView`](ContentView.md).[`getLocationOnScreen`](ContentView.md#getlocationonscreen)

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

[`ContentView`](ContentView.md).[`getLocationRelativeTo`](ContentView.md#getlocationrelativeto)

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

[`ContentView`](ContentView.md).[`getMeasuredHeight`](ContentView.md#getmeasuredheight)

***

### getMeasuredState()

```ts
getMeasuredState(): number;
```

Defined in: ui/core/view/index.d.ts:717

#### Returns

`number`

#### Inherited from

[`ContentView`](ContentView.md).[`getMeasuredState`](ContentView.md#getmeasuredstate)

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

[`ContentView`](ContentView.md).[`getMeasuredWidth`](ContentView.md#getmeasuredwidth)

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

[`ContentView`](ContentView.md).[`getSafeAreaInsets`](ContentView.md#getsafeareainsets)

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

[`ContentView`](ContentView.md).[`getViewByDomId`](ContentView.md#getviewbydomid)

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

[`ContentView`](ContentView.md).[`getViewById`](ContentView.md#getviewbyid)

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

[`ContentView`](ContentView.md).[`hasGestureObservers`](ContentView.md#hasgestureobservers)

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

[`ContentView`](ContentView.md).[`hasListeners`](ContentView.md#haslisteners)

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

[`ContentView`](ContentView.md).[`initNativeView`](ContentView.md#initnativeview)

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

[`ContentView`](ContentView.md).[`layout`](ContentView.md#layout)

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

[`ContentView`](ContentView.md).[`layoutNativeView`](ContentView.md#layoutnativeview)

***

### layoutView()

```ts
layoutView(): View;
```

Defined in: ui/content-view/index.d.ts:14

#### Returns

[`View`](View.md)

#### Inherited from

[`ContentView`](ContentView.md).[`layoutView`](ContentView.md#layoutview)

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

[`ContentView`](ContentView.md).[`loadView`](ContentView.md#loadview)

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

[`ContentView`](ContentView.md).[`measure`](ContentView.md#measure)

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

[`ContentView`](ContentView.md).[`notify`](ContentView.md#notify)

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

[`ContentView`](ContentView.md).[`notifyPropertyChange`](ContentView.md#notifypropertychange)

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

[`ContentView`](ContentView.md).[`off`](ContentView.md#off)

***

### on()

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: ui/scroll-view/index.d.ts:84

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`data`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

[`ContentView`](ContentView.md).[`on`](ContentView.md#on)

#### Call Signature

```ts
on(
   eventName: "scroll", 
   callback: (data: ScrollEventData) => void, 
   thisArg?: any): void;
```

Defined in: ui/scroll-view/index.d.ts:89

Raised when a scroll event occurs.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"scroll"` |
| `callback` | (`data`: [`ScrollEventData`](../interfaces/ScrollEventData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

[`ContentView`](ContentView.md).[`on`](ContentView.md#on)

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

[`ContentView`](ContentView.md).[`onBackPressed`](ContentView.md#onbackpressed)

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

[`ContentView`](ContentView.md).[`once`](ContentView.md#once)

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

[`ContentView`](ContentView.md).[`onLayout`](ContentView.md#onlayout)

***

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: ui/core/view/view-common.d.ts:83

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`onLoaded`](ContentView.md#onloaded)

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

[`ContentView`](ContentView.md).[`onMeasure`](ContentView.md#onmeasure)

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: ui/core/view-base/index.d.ts:568

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`onResumeNativeUpdates`](ContentView.md#onresumenativeupdates)

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: ui/core/view-base/index.d.ts:417

#### Returns

`void`

#### Inherited from

[`ContentView`](ContentView.md).[`onUnloaded`](ContentView.md#onunloaded)

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

[`ContentView`](ContentView.md).[`removeEventListener`](ContentView.md#removeeventlistener)

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

[`ContentView`](ContentView.md).[`requestLayout`](ContentView.md#requestlayout)

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

[`ContentView`](ContentView.md).[`resetNativeView`](ContentView.md#resetnativeview)

***

### scrollToHorizontalOffset()

```ts
scrollToHorizontalOffset(value: number, animated: boolean): any;
```

Defined in: ui/scroll-view/index.d.ts:65

Scrolls the content the specified horizontal offset position.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The offset value |
| `animated` | `boolean` | true for animated scroll, false for immediate scroll. |

#### Returns

`any`

***

### scrollToVerticalOffset()

```ts
scrollToVerticalOffset(value: number, animated: boolean): any;
```

Defined in: ui/scroll-view/index.d.ts:58

Scrolls the content the specified vertical offset position.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The offset value |
| `animated` | `boolean` | true for animated scroll, false for immediate scroll. |

#### Returns

`any`

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

[`ContentView`](ContentView.md).[`sendAccessibilityEvent`](ContentView.md#sendaccessibilityevent)

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

[`ContentView`](ContentView.md).[`set`](ContentView.md#set)

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

[`ContentView`](ContentView.md).[`setAccessibilityIdentifier`](ContentView.md#setaccessibilityidentifier)

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

[`ContentView`](ContentView.md).[`setInlineStyle`](ContentView.md#setinlinestyle)

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

[`ContentView`](ContentView.md).[`setMeasuredDimension`](ContentView.md#setmeasureddimension)

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

[`ContentView`](ContentView.md).[`setNativeView`](ContentView.md#setnativeview)

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

[`ContentView`](ContentView.md).[`setOnTouchListener`](ContentView.md#setontouchlistener)

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

[`ContentView`](ContentView.md).[`setProperty`](ContentView.md#setproperty)

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

[`ContentView`](ContentView.md).[`showModal`](ContentView.md#showmodal)

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

[`ContentView`](ContentView.md).[`toString`](ContentView.md#tostring)

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

[`ContentView`](ContentView.md).[`unbind`](ContentView.md#unbind)

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

[`ContentView`](ContentView.md).[`unloadView`](ContentView.md#unloadview)

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

[`ContentView`](ContentView.md).[`updateStatusBarStyle`](ContentView.md#updatestatusbarstyle)

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

[`ContentView`](ContentView.md).[`addEventListener`](ContentView.md#addeventlistener-1)

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

[`ContentView`](ContentView.md).[`combineMeasuredStates`](ContentView.md#combinemeasuredstates)

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

[`ContentView`](ContentView.md).[`layoutChild`](ContentView.md#layoutchild)

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

[`ContentView`](ContentView.md).[`measureChild`](ContentView.md#measurechild)

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

[`ContentView`](ContentView.md).[`off`](ContentView.md#off-1)

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

[`ContentView`](ContentView.md).[`on`](ContentView.md#on-1)

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

[`ContentView`](ContentView.md).[`once`](ContentView.md#once-1)

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

[`ContentView`](ContentView.md).[`removeEventListener`](ContentView.md#removeeventlistener-1)

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

[`ContentView`](ContentView.md).[`resolveSizeAndState`](ContentView.md#resolvesizeandstate)
