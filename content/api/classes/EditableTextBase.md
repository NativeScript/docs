---
title: EditableTextBase
titleTemplate: :title - API / NativeScript
description: Represents the base class for all editable text views.
contributors: false
---

Defined in: [ui/editable-text-base/index.d.ts:13](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L13)

Represents the base class for all editable text views.

## Ns View

EditableTextBase

## Extends

- [`TextBase`](TextBase.md)

## Extended by

- [`TextField`](TextField.md)
- [`TextView`](TextView.md)

## Constructors

### Constructor

```ts
new EditableTextBase(): EditableTextBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`EditableTextBase`

#### Inherited from

[`TextBase`](TextBase.md).[`constructor`](TextBase.md#constructor)

## Properties

### \_androidContentDescriptionUpdated?

```ts
optional _androidContentDescriptionUpdated?: boolean;
```

Defined in: [ui/core/view/index.d.ts:348](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L348)

Internal use only. This is used to limit the number of updates to android.view.View.setContentDescription()

#### Inherited from

[`TextBase`](TextBase.md).[`_androidContentDescriptionUpdated`](TextBase.md#androidcontentdescriptionupdated)

***

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_automaticallyAdjustsScrollViewInsets`](TextBase.md#automaticallyadjustsscrollviewinsets)

***

### \_closeModalCallback

```ts
protected _closeModalCallback: Function;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_closeModalCallback`](TextBase.md#closemodalcallback)

***

### \_context

```ts
_context: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_context`](TextBase.md#context)

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_cssState`](TextBase.md#cssstate)

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_defaultPaddingBottom`](TextBase.md#defaultpaddingbottom)

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_defaultPaddingLeft`](TextBase.md#defaultpaddingleft)

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_defaultPaddingRight`](TextBase.md#defaultpaddingright)

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_defaultPaddingTop`](TextBase.md#defaultpaddingtop)

***

### \_domId

```ts
_domId: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_domId`](TextBase.md#domid)

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_ignoreFlexMinWidthHeightReset`](TextBase.md#ignoreflexminwidthheightreset)

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_isAddedToNativeVisualTree`](TextBase.md#isaddedtonativevisualtree)

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_isPaddingRelative`](TextBase.md#ispaddingrelative)

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_isStyleScopeHost`](TextBase.md#isstylescopehost)

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_oldBottom`](TextBase.md#oldbottom)

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_oldLeft`](TextBase.md#oldleft)

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_oldRight`](TextBase.md#oldright)

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_oldTop`](TextBase.md#oldtop)

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`_styleScope`](TextBase.md#stylescope)

***

### \_suspendNativeUpdatesCount

```ts
_suspendNativeUpdatesCount: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Determines the depth of suspended updates.
When the value is 0 the current property updates are not batched nor scoped and must be immediately applied.
If the value is 1 or greater, the current updates are batched and does not have to provide immediate update.
Do not set this field, the _batchUpdate method is responsible to keep the count up to date,
as well as adding/rmoving the view to/from the visual tree.

#### Inherited from

[`TextBase`](TextBase.md).[`_suspendNativeUpdatesCount`](TextBase.md#suspendnativeupdatescount)

***

### accessibilityHidden

```ts
accessibilityHidden: boolean;
```

Defined in: [ui/core/view/index.d.ts:250](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L250)

Hide the view and its children from the a11y service

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityHidden`](TextBase.md#accessibilityhidden)

***

### accessibilityHint

```ts
accessibilityHint: string;
```

Defined in: [ui/core/view/index.d.ts:295](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L295)

A hint describes the elements behavior. Example: 'Tap change playback speed'

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityHint`](TextBase.md#accessibilityhint)

***

### accessibilityIdentifier

```ts
accessibilityIdentifier: string;
```

Defined in: [ui/core/view/index.d.ts:259](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L259)

The view's unique accessibilityIdentifier.

This is used for automated testing.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityIdentifier`](TextBase.md#accessibilityidentifier)

***

### accessibilityIgnoresInvertColors

```ts
accessibilityIgnoresInvertColors: boolean;
```

Defined in: [ui/core/view/index.d.ts:322](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L322)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityIgnoresInvertColors`](TextBase.md#accessibilityignoresinvertcolors)

***

### accessibilityLabel

```ts
accessibilityLabel: string;
```

Defined in: [ui/core/view/index.d.ts:281](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L281)

Short description of the element, ideally one word.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityLabel`](TextBase.md#accessibilitylabel)

***

### accessibilityLanguage

```ts
accessibilityLanguage: string;
```

Defined in: [ui/core/view/index.d.ts:310](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L310)

Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityLanguage`](TextBase.md#accessibilitylanguage)

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: [ui/core/view/index.d.ts:302](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L302)

When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityLiveRegion`](TextBase.md#accessibilityliveregion)

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: [ui/core/view/index.d.ts:317](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L317)

This view starts a media session. Equivalent to trait = startsMedia

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityMediaSession`](TextBase.md#accessibilitymediasession)

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: [ui/core/view/index.d.ts:266](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L266)

Which role should this view be treated by the a11y service?

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityRole`](TextBase.md#accessibilityrole)

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: [ui/core/view/index.d.ts:274](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L274)

Which state should this view be treated as by the a11y service?

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityState`](TextBase.md#accessibilitystate)

***

### accessibilityValue

```ts
accessibilityValue: string;
```

Defined in: [ui/core/view/index.d.ts:288](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L288)

Current value of the element in a localized string.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityValue`](TextBase.md#accessibilityvalue)

***

### accessible

```ts
accessible: boolean;
```

Defined in: [ui/core/view/index.d.ts:243](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L243)

If `true` the element is an accessibility element and all the children will be treated as a single selectable component.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`accessible`](TextBase.md#accessible)

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`alignSelf`](TextBase.md#alignself)

***

### android

```ts
android: any;
```

Defined in: [ui/core/view/index.d.ts:111](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L111)

Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.

#### Inherited from

[`TextBase`](TextBase.md).[`android`](TextBase.md#android)

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: [ui/core/view/index.d.ts:368](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L368)

Gets or sets the dynamic elevation offset of the android view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`androidDynamicElevationOffset`](TextBase.md#androiddynamicelevationoffset)

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: [ui/core/view/index.d.ts:361](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L361)

Gets or sets the elevation of the android view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`androidElevation`](TextBase.md#androidelevation)

***

### androidOverflowEdge

```ts
androidOverflowEdge: AndroidOverflow;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`androidOverflowEdge`](TextBase.md#androidoverflowedge)

***

### autocapitalizationType

```ts
autocapitalizationType: AutocapitalizationInputType;
```

Defined in: [ui/editable-text-base/index.d.ts:59](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L59)

Gets or sets the autocapitalization type.

#### Ns Property

***

### autocorrect

```ts
autocorrect: boolean;
```

Defined in: [ui/editable-text-base/index.d.ts:80](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L80)

Enables or disables autocorrection.

#### Ns Property

***

### autofillType

```ts
autofillType: string;
```

Defined in: [ui/editable-text-base/index.d.ts:66](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L66)

Gets or sets the autofill type.

#### Ns Property

***

### automationText

```ts
automationText: string;
```

Defined in: [ui/core/view/index.d.ts:354](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L354)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`automationText`](TextBase.md#automationtext)

***

### background

```ts
background: string;
```

Defined in: [ui/core/view/index.d.ts:375](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L375)

Gets or sets the background style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`background`](TextBase.md#background)

***

### backgroundColor

```ts
backgroundColor: string | Color;
```

Defined in: [ui/core/view/index.d.ts:382](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L382)

Gets or sets the background color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`backgroundColor`](TextBase.md#backgroundcolor)

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: [ui/core/view/index.d.ts:389](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L389)

Gets or sets the background image of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`backgroundImage`](TextBase.md#backgroundimage)

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: [ui/core/view/index.d.ts:124](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L124)

Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`bindingContext`](TextBase.md#bindingcontext)

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: [ui/core/view/index.d.ts:152](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L152)

Gets or sets the bottom border color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderBottomColor`](TextBase.md#borderbottomcolor)

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:229](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L229)

Gets or sets the bottom left border radius of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderBottomLeftRadius`](TextBase.md#borderbottomleftradius)

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:222](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L222)

Gets or sets the bottom right border radius of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderBottomRightRadius`](TextBase.md#borderbottomrightradius)

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:187](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L187)

Gets or sets the bottom border width of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderBottomWidth`](TextBase.md#borderbottomwidth)

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: [ui/core/view/index.d.ts:131](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L131)

Gets or sets the border color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderColor`](TextBase.md#bordercolor)

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: [ui/core/view/index.d.ts:159](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L159)

Gets or sets the left border color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderLeftColor`](TextBase.md#borderleftcolor)

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:194](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L194)

Gets or sets the left border width of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderLeftWidth`](TextBase.md#borderleftwidth)

***

### borderRadius

```ts
borderRadius: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/core/view/index.d.ts:201](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L201)

Gets or sets the border radius of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderRadius`](TextBase.md#borderradius)

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: [ui/core/view/index.d.ts:145](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L145)

Gets or sets the right border color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderRightColor`](TextBase.md#borderrightcolor)

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:180](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L180)

Gets or sets the right border width of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderRightWidth`](TextBase.md#borderrightwidth)

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: [ui/core/view/index.d.ts:138](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L138)

Gets or sets the top border color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderTopColor`](TextBase.md#bordertopcolor)

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:208](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L208)

Gets or sets the top left border radius of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderTopLeftRadius`](TextBase.md#bordertopleftradius)

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:215](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L215)

Gets or sets the top right border radius of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderTopRightRadius`](TextBase.md#bordertoprightradius)

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:173](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L173)

Gets or sets the top border width of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderTopWidth`](TextBase.md#bordertopwidth)

***

### borderWidth

```ts
borderWidth: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/core/view/index.d.ts:166](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L166)

Gets or sets the border width of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`borderWidth`](TextBase.md#borderwidth)

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: [ui/core/view/index.d.ts:396](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L396)

Gets or sets the box shadow of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`boxShadow`](TextBase.md#boxshadow)

***

### className

```ts
className: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the CSS class name for this view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`className`](TextBase.md#classname)

***

### col

```ts
col: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`col`](TextBase.md#col)

***

### color

```ts
color: Color;
```

Defined in: [ui/core/view/index.d.ts:236](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L236)

Gets or sets the color of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`color`](TextBase.md#color)

***

### colSpan

```ts
colSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The number of columns for the element to span across.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`colSpan`](TextBase.md#colspan)

***

### column

```ts
column: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`column`](TextBase.md#column)

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`columnSpan`](TextBase.md#columnspan)

***

### cssClasses

```ts
cssClasses: Set<string>;
```

Defined in: [ui/core/view/index.d.ts:685](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L685)

#### Inherited from

[`TextBase`](TextBase.md).[`cssClasses`](TextBase.md#cssclasses)

***

### cssPseudoClasses

```ts
cssPseudoClasses: Set<string>;
```

Defined in: [ui/core/view/index.d.ts:686](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L686)

#### Inherited from

[`TextBase`](TextBase.md).[`cssPseudoClasses`](TextBase.md#csspseudoclasses)

***

### cssType

```ts
cssType: string;
```

Defined in: [ui/core/view/index.d.ts:667](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L667)

Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.

#### Inherited from

[`TextBase`](TextBase.md).[`cssType`](TextBase.md#csstype)

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Default visual state, defaults to 'normal'

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`defaultVisualState`](TextBase.md#defaultvisualstate)

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: [ui/core/view/index.d.ts:403](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L403)

Gets or sets the layout direction of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`direction`](TextBase.md#direction)

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Dock position of the view within its parent.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`dock`](TextBase.md#dock)

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`domNode`](TextBase.md#domnode)

***

### editable

```ts
editable: boolean;
```

Defined in: [ui/editable-text-base/index.d.ts:73](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L73)

Gets or sets whether the instance is editable.

#### Ns Property

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveBorderBottomWidth`](TextBase.md#effectiveborderbottomwidth)

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveBorderLeftWidth`](TextBase.md#effectiveborderleftwidth)

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveBorderRightWidth`](TextBase.md#effectiveborderrightwidth)

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveBorderTopWidth`](TextBase.md#effectivebordertopwidth)

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveHeight`](TextBase.md#effectiveheight)

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveLeft`](TextBase.md#effectiveleft)

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveMarginBottom`](TextBase.md#effectivemarginbottom)

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveMarginLeft`](TextBase.md#effectivemarginleft)

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveMarginRight`](TextBase.md#effectivemarginright)

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveMarginTop`](TextBase.md#effectivemargintop)

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveMinHeight`](TextBase.md#effectiveminheight)

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveMinWidth`](TextBase.md#effectiveminwidth)

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveTop`](TextBase.md#effectivetop)

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`effectiveWidth`](TextBase.md#effectivewidth)

***

### flex

```ts
flex: Flex;
```

Defined in: [ui/core/view/index.d.ts:578](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L578)

The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`flex`](TextBase.md#flex)

***

### flexFlow

```ts
flexFlow: FlexFlow;
```

Defined in: [ui/core/view/index.d.ts:573](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L573)

The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`flexFlow`](TextBase.md#flexflow)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`flexGrow`](TextBase.md#flexgrow)

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`flexShrink`](TextBase.md#flexshrink)

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

When true, forces the item to wrap onto a new line.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`flexWrapBefore`](TextBase.md#flexwrapbefore)

***

### fontFamily

```ts
fontFamily: string;
```

Defined in: [ui/text-base/index.d.ts:40](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L40)

Gets or sets font-family style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`fontFamily`](TextBase.md#fontfamily)

***

### fontSize

```ts
fontSize: number;
```

Defined in: [ui/text-base/index.d.ts:47](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L47)

Gets or sets font-size style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`fontSize`](TextBase.md#fontsize)

***

### fontStyle

```ts
fontStyle: FontStyleType;
```

Defined in: [ui/text-base/index.d.ts:54](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L54)

Gets or sets font-style style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`fontStyle`](TextBase.md#fontstyle)

***

### fontWeight

```ts
fontWeight: FontWeightType;
```

Defined in: [ui/text-base/index.d.ts:61](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L61)

Gets or sets font-weight style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`fontWeight`](TextBase.md#fontweight)

***

### formattedText

```ts
formattedText: FormattedString;
```

Defined in: [ui/text-base/index.d.ts:33](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L33)

Gets or sets a formatted string.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`formattedText`](TextBase.md#formattedtext)

***

### height

```ts
height: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:431](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L431)

Gets or sets the desired height of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`height`](TextBase.md#height)

***

### hidden

```ts
hidden: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the visual state of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`hidden`](TextBase.md#hidden)

***

### hint

```ts
hint: string;
```

Defined in: [ui/editable-text-base/index.d.ts:87](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L87)

Gets or sets the placeholder text.

#### Ns Property

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: [ui/core/view/index.d.ts:473](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L473)

Gets or sets the alignment of this view within its parent along the Horizontal axis.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`horizontalAlignment`](TextBase.md#horizontalalignment)

***

### id

```ts
id: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the id for this view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`id`](TextBase.md#id)

***

### ignoreTouchAnimation

```ts
ignoreTouchAnimation: boolean;
```

Defined in: [ui/core/view/index.d.ts:647](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L647)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`ignoreTouchAnimation`](TextBase.md#ignoretouchanimation)

***

### ios

```ts
ios: any;
```

Defined in: [ui/core/view/index.d.ts:117](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L117)

Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.

#### Inherited from

[`TextBase`](TextBase.md).[`ios`](TextBase.md#ios)

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: [ui/core/view/index.d.ts:329](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L329)

Defines whether accessibility font scale should affect font size.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosAccessibilityAdjustsFontSize`](TextBase.md#iosaccessibilityadjustsfontsize)

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: [ui/core/view/index.d.ts:343](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L343)

Gets or sets the maximum accessibility font scale.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosAccessibilityMaxFontScale`](TextBase.md#iosaccessibilitymaxfontscale)

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: [ui/core/view/index.d.ts:336](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L336)

Gets or sets the minimum accessibility font scale.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosAccessibilityMinFontScale`](TextBase.md#iosaccessibilityminfontscale)

***

### iosGlassEffect

```ts
iosGlassEffect: GlassEffectType;
```

Defined in: [ui/core/view/index.d.ts:634](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L634)

Set the iOS liquid glass effect style on the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosGlassEffect`](TextBase.md#iosglasseffect)

***

### iosIgnoreSafeArea

```ts
iosIgnoreSafeArea: boolean;
```

Defined in: [ui/core/view/index.d.ts:613](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L613)

Gets or sets a value indicating whether the the view should totally ignore safe areas computation. This property is iOS specific. Default value: false

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosIgnoreSafeArea`](TextBase.md#iosignoresafearea)

***

### iosOverflowSafeArea

```ts
iosOverflowSafeArea: boolean;
```

Defined in: [ui/core/view/index.d.ts:599](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L599)

Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: false

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosOverflowSafeArea`](TextBase.md#iosoverflowsafearea)

***

### iosOverflowSafeAreaEnabled

```ts
iosOverflowSafeAreaEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:606](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L606)

Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosOverflowSafeAreaEnabled`](TextBase.md#iosoverflowsafeareaenabled)

***

### iosTextAnimation

```ts
iosTextAnimation: boolean | "inherit";
```

Defined in: [ui/text-base/index.d.ts:174](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L174)

Specify wether the native text should be applied with or without animations

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`iosTextAnimation`](TextBase.md#iostextanimation)

***

### isCollapsed

```ts
isCollapsed: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Returns true if visibility is set to 'collapse'.
Default(false) set in prototype
Readonly property

#### Inherited from

[`TextBase`](TextBase.md).[`isCollapsed`](TextBase.md#iscollapsed)

***

### isEnabled

```ts
isEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:585](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L585)

Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`isEnabled`](TextBase.md#isenabled)

***

### isLayoutValid

```ts
isLayoutValid: boolean;
```

Defined in: [ui/core/view/index.d.ts:656](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L656)

Gets if layout is valid. This is a read-only property.

#### Inherited from

[`TextBase`](TextBase.md).[`isLayoutValid`](TextBase.md#islayoutvalid)

***

### isUserInteractionEnabled

```ts
isUserInteractionEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:592](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L592)

Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`isUserInteractionEnabled`](TextBase.md#isuserinteractionenabled)

***

### keyboardType

```ts
keyboardType: KeyboardInputType;
```

Defined in: [ui/editable-text-base/index.d.ts:38](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L38)

Gets or sets the soft keyboard type.

#### Ns Property

***

### left

```ts
left: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`left`](TextBase.md#left)

***

### letterSpacing

```ts
letterSpacing: number;
```

Defined in: [ui/text-base/index.d.ts:68](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L68)

Gets or sets letterSpace style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`letterSpacing`](TextBase.md#letterspacing)

***

### lineHeight

```ts
lineHeight: number;
```

Defined in: [ui/text-base/index.d.ts:75](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L75)

Gets or sets lineHeight style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`lineHeight`](TextBase.md#lineheight)

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

Defined in: [ui/core/view/index.d.ts:438](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L438)

Gets or sets margin style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`margin`](TextBase.md#margin)

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:466](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L466)

Specifies extra space on the bottom side of this view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`marginBottom`](TextBase.md#marginbottom)

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:445](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L445)

Specifies extra space on the left side of this view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`marginLeft`](TextBase.md#marginleft)

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:459](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L459)

Specifies extra space on the right side of this view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`marginRight`](TextBase.md#marginright)

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:452](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L452)

Specifies extra space on the top side of this view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`marginTop`](TextBase.md#margintop)

***

### maxLength

```ts
maxLength: number;
```

Defined in: [ui/editable-text-base/index.d.ts:94](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L94)

Limits input to a certain number of characters.

#### Ns Property

***

### maxLines

```ts
maxLines: number;
```

Defined in: [ui/text-base/index.d.ts:132](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L132)

Gets or sets white space style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`maxLines`](TextBase.md#maxlines)

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: [ui/core/view/index.d.ts:417](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L417)

Gets or sets the minimum height the view may grow to.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`minHeight`](TextBase.md#minheight)

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:410](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L410)

Gets or sets the minimum width the view may grow to.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`minWidth`](TextBase.md#minwidth)

***

### mIsRootView

```ts
mIsRootView: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

if _setupAsRootView is called it means it is not supposed to be
added to a parent. However parent can be set before for the purpose
of CSS variables/classes. That variable ensures that _addViewToNativeVisualTree
is not called in _setupAsRootView

#### Inherited from

[`TextBase`](TextBase.md).[`mIsRootView`](TextBase.md#misrootview)

***

### modal

```ts
modal: View;
```

Defined in: [ui/core/view/index.d.ts:848](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L848)

Returns the current modal view that this page is showing (is parent of), if any.

#### Inherited from

[`TextBase`](TextBase.md).[`modal`](TextBase.md#modal)

***

### nativeBackgroundState?

```ts
optional nativeBackgroundState?: "unset" | "invalid" | "drawn";
```

Defined in: [ui/core/view/index.d.ts:661](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L661)

Native background states. This is a read-only property.

#### Inherited from

[`TextBase`](TextBase.md).[`nativeBackgroundState`](TextBase.md#nativebackgroundstate)

***

### nativeTextViewProtected

```ts
readonly nativeTextViewProtected: any;
```

Defined in: [ui/text-base/index.d.ts:19](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L19)

Gets of the text widget. In some cases(android TextInputLayout) the TextView is made of 2 views: the layout and the text view
So we need a different getter for the layout and text functions

#### Inherited from

[`TextBase`](TextBase.md).[`nativeTextViewProtected`](TextBase.md#nativetextviewprotected)

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

#### Inherited from

[`TextBase`](TextBase.md).[`nativeViewProtected`](TextBase.md#nativeviewprotected)

***

### opacity

```ts
opacity: number;
```

Defined in: [ui/core/view/index.d.ts:494](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L494)

Gets or sets the opacity style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`opacity`](TextBase.md#opacity)

***

### order

```ts
order: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`order`](TextBase.md#order)

***

### originX

```ts
originX: number;
```

Defined in: [ui/core/view/index.d.ts:560](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L560)

Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`originX`](TextBase.md#originx)

***

### originY

```ts
originY: number;
```

Defined in: [ui/core/view/index.d.ts:567](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L567)

Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`originY`](TextBase.md#originy)

***

### padding

```ts
padding: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/text-base/index.d.ts:139](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L139)

Gets or sets padding style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`padding`](TextBase.md#padding)

***

### paddingBottom

```ts
paddingBottom: LengthType;
```

Defined in: [ui/text-base/index.d.ts:146](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L146)

Specify the bottom padding of this layout.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`paddingBottom`](TextBase.md#paddingbottom)

***

### paddingLeft

```ts
paddingLeft: LengthType;
```

Defined in: [ui/text-base/index.d.ts:153](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L153)

Specify the left padding of this layout.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`paddingLeft`](TextBase.md#paddingleft)

***

### paddingRight

```ts
paddingRight: LengthType;
```

Defined in: [ui/text-base/index.d.ts:160](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L160)

Specify the right padding of this layout.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`paddingRight`](TextBase.md#paddingright)

***

### paddingTop

```ts
paddingTop: LengthType;
```

Defined in: [ui/text-base/index.d.ts:167](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L167)

Specify the top padding of this layout.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`paddingTop`](TextBase.md#paddingtop)

***

### parent

```ts
parent: ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets the parent view. This property is read-only.

#### Inherited from

[`TextBase`](TextBase.md).[`parent`](TextBase.md#parent)

***

### perspective

```ts
perspective: number;
```

Defined in: [ui/core/view/index.d.ts:523](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L523)

Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`perspective`](TextBase.md#perspective)

***

### placeholderColor

```ts
placeholderColor: Color;
```

Defined in: [ui/editable-text-base/index.d.ts:101](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L101)

Gets or sets the color of the placeholder text

#### Ns Property

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`recycleNativeView`](TextBase.md#recyclenativeview)

***

### returnKeyType

```ts
returnKeyType: ReturnKeyButtonType;
```

Defined in: [ui/editable-text-base/index.d.ts:45](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L45)

Gets or sets the soft keyboard return key flavor.

#### Ns Property

***

### reusable

```ts
reusable: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`reusable`](TextBase.md#reusable)

***

### rotate

```ts
rotate: number;
```

Defined in: [ui/core/view/index.d.ts:501](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L501)

Gets or sets the rotate affine transform of the view along the Z axis.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`rotate`](TextBase.md#rotate)

***

### rotateX

```ts
rotateX: number;
```

Defined in: [ui/core/view/index.d.ts:508](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L508)

Gets or sets the rotate affine transform of the view along the X axis.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`rotateX`](TextBase.md#rotatex)

***

### rotateY

```ts
rotateY: number;
```

Defined in: [ui/core/view/index.d.ts:515](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L515)

Gets or sets the rotate affine transform of the view along the Y axis.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`rotateY`](TextBase.md#rotatey)

***

### row

```ts
row: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`row`](TextBase.md#row)

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The number of rows for the element to span across.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`rowSpan`](TextBase.md#rowspan)

***

### scaleX

```ts
scaleX: number;
```

Defined in: [ui/core/view/index.d.ts:544](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L544)

Gets or sets the scaleX affine transform of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`scaleX`](TextBase.md#scalex)

***

### scaleY

```ts
scaleY: number;
```

Defined in: [ui/core/view/index.d.ts:551](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L551)

Gets or sets the scaleY affine transform of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`scaleY`](TextBase.md#scaley)

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Opt out of shared transition under different binding conditions

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`sharedTransitionIgnore`](TextBase.md#sharedtransitionignore)

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`sharedTransitionTag`](TextBase.md#sharedtransitiontag)

***

### statusBarStyle

```ts
statusBarStyle: "dark" | "light";
```

Defined in: [ui/core/view/index.d.ts:683](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L683)

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

[`TextBase`](TextBase.md).[`statusBarStyle`](TextBase.md#statusbarstyle)

***

### testID

```ts
testID: string;
```

Defined in: [ui/core/view/index.d.ts:639](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L639)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`testID`](TextBase.md#testid)

***

### text

```ts
text: string;
```

Defined in: [ui/text-base/index.d.ts:26](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L26)

Gets or sets the text.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`text`](TextBase.md#text)

***

### textAlignment

```ts
textAlignment: TextAlignmentType;
```

Defined in: [ui/text-base/index.d.ts:82](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L82)

Gets or sets text-alignment style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`textAlignment`](TextBase.md#textalignment)

***

### textDecoration

```ts
textDecoration: TextDecorationType;
```

Defined in: [ui/text-base/index.d.ts:89](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L89)

Gets or sets text decorations style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`textDecoration`](TextBase.md#textdecoration)

***

### textOverflow

```ts
textOverflow: TextOverflowType;
```

Defined in: [ui/text-base/index.d.ts:125](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L125)

Gets or sets text-overflow style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`textOverflow`](TextBase.md#textoverflow)

***

### textShadow

```ts
textShadow: ShadowCSSValues;
```

Defined in: [ui/text-base/index.d.ts:103](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L103)

Gets or sets text shadow style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`textShadow`](TextBase.md#textshadow)

***

### textStroke

```ts
textStroke: StrokeCSSValues;
```

Defined in: [ui/text-base/index.d.ts:111](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L111)

Gets or sets text stroke style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`textStroke`](TextBase.md#textstroke)

***

### textTransform

```ts
textTransform: TextTransformType;
```

Defined in: [ui/text-base/index.d.ts:96](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L96)

Gets or sets text transform style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`textTransform`](TextBase.md#texttransform)

***

### top

```ts
top: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`top`](TextBase.md#top)

***

### touchAnimation

```ts
touchAnimation: 
  | boolean
  | TouchAnimationOptions;
```

Defined in: [ui/core/view/index.d.ts:643](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L643)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`touchAnimation`](TextBase.md#touchanimation)

***

### touchDelay

```ts
touchDelay: number;
```

Defined in: [ui/core/view/index.d.ts:651](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L651)

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`touchDelay`](TextBase.md#touchdelay)

***

### transitionId

```ts
transitionId: number;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

Active transition instance id for tracking state

#### Inherited from

[`TextBase`](TextBase.md).[`transitionId`](TextBase.md#transitionid)

***

### translateX

```ts
translateX: number;
```

Defined in: [ui/core/view/index.d.ts:530](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L530)

Gets or sets the translateX affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`translateX`](TextBase.md#translatex)

***

### translateY

```ts
translateY: number;
```

Defined in: [ui/core/view/index.d.ts:537](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L537)

Gets or sets the translateY affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`translateY`](TextBase.md#translatey)

***

### updateTextTrigger

```ts
updateTextTrigger: UpdateTextTriggerType;
```

Defined in: [ui/editable-text-base/index.d.ts:52](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L52)

Gets or sets a value indicating when the text property will be updated.

#### Ns Property

***

### valueFormatter

```ts
valueFormatter: (value: string) => string;
```

Defined in: [ui/editable-text-base/index.d.ts:107](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L107)

Format input values
Note: useful for input masking/formatting

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: [ui/core/view/index.d.ts:480](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L480)

Gets or sets the alignment of this view within its parent along the Vertical axis.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`verticalAlignment`](TextBase.md#verticalalignment)

***

### viewController

```ts
viewController: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

returns the native UIViewController.

#### Inherited from

[`TextBase`](TextBase.md).[`viewController`](TextBase.md#viewcontroller)

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: [ui/core/view/index.d.ts:487](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L487)

Gets or sets the visibility of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`visibility`](TextBase.md#visibility)

***

### visionHoverStyle

```ts
visionHoverStyle: string | VisionHoverOptions;
```

Defined in: [ui/core/view/index.d.ts:627](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L627)

visionOS only

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`visionHoverStyle`](TextBase.md#visionhoverstyle)

***

### visionIgnoreHoverStyle

```ts
visionIgnoreHoverStyle: boolean;
```

Defined in: [ui/core/view/index.d.ts:620](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L620)

visionOS only

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`visionIgnoreHoverStyle`](TextBase.md#visionignorehoverstyle)

***

### whiteSpace

```ts
whiteSpace: WhiteSpaceType;
```

Defined in: [ui/text-base/index.d.ts:118](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L118)

Gets or sets white space style property.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`whiteSpace`](TextBase.md#whitespace)

***

### width

```ts
width: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:424](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L424)

Gets or sets the desired width of the view.

#### Ns Property

#### Inherited from

[`TextBase`](TextBase.md).[`width`](TextBase.md#width)

***

### accessibilityBlurEvent

```ts
static accessibilityBlurEvent: string;
```

Defined in: [ui/core/view/index.d.ts:79](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L79)

String value used when hooking to accessibilityBlur event.

#### Ns Event

accessibilityBlur

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityBlurEvent`](TextBase.md#accessibilityblurevent)

***

### accessibilityFocusChangedEvent

```ts
static accessibilityFocusChangedEvent: string;
```

Defined in: [ui/core/view/index.d.ts:93](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L93)

String value used when hooking to accessibilityFocusChanged event.

#### Ns Event

accessibilityFocusChanged

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityFocusChangedEvent`](TextBase.md#accessibilityfocuschangedevent)

***

### accessibilityFocusEvent

```ts
static accessibilityFocusEvent: string;
```

Defined in: [ui/core/view/index.d.ts:86](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L86)

String value used when hooking to accessibilityFocus event.

#### Ns Event

accessibilityFocus

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityFocusEvent`](TextBase.md#accessibilityfocusevent)

***

### accessibilityPerformEscapeEvent

```ts
static accessibilityPerformEscapeEvent: string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityPerformEscapeEvent`](TextBase.md#accessibilityperformescapeevent)

***

### androidOverflowInsetEvent

```ts
static androidOverflowInsetEvent: string;
```

Defined in: [ui/core/view/index.d.ts:100](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L100)

String value used when hooking to androidOverflowInset event.

#### Ns Event

androidOverflowInset

#### Inherited from

[`TextBase`](TextBase.md).[`androidOverflowInsetEvent`](TextBase.md#androidoverflowinsetevent)

***

### blurEvent

```ts
static blurEvent: string;
```

Defined in: [ui/editable-text-base/index.d.ts:19](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L19)

String value used when hooking to the blur event.

#### Ns Event

blurEvent

***

### createdEvent

```ts
static createdEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to creation event

#### Ns Event

created

#### Inherited from

[`TextBase`](TextBase.md).[`createdEvent`](TextBase.md#createdevent)

***

### disposeNativeViewEvent

```ts
static disposeNativeViewEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to disposeNativeView event

#### Ns Event

disposeNativeView

#### Inherited from

[`TextBase`](TextBase.md).[`disposeNativeViewEvent`](TextBase.md#disposenativeviewevent)

***

### focusEvent

```ts
static focusEvent: string;
```

Defined in: [ui/editable-text-base/index.d.ts:25](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L25)

String value used when hooking to the focus event.

#### Ns Event

focusEvent

***

### iosTextAnimationFallback

```ts
static iosTextAnimationFallback: boolean;
```

Defined in: [ui/text-base/index.d.ts:179](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/text-base/index.d.ts#L179)

The value used when the iosTextAnimation is set to 'inherit'

#### Inherited from

[`TextBase`](TextBase.md).[`iosTextAnimationFallback`](TextBase.md#iostextanimationfallback)

***

### layoutChangedEvent

```ts
static layoutChangedEvent: string;
```

Defined in: [ui/core/view/index.d.ts:59](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L59)

String value used when hooking to layoutChanged event.

#### Ns Event

layoutChanged

#### Inherited from

[`TextBase`](TextBase.md).[`layoutChangedEvent`](TextBase.md#layoutchangedevent)

***

### loadedEvent

```ts
static loadedEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to loaded event.

#### Ns Event

loaded

#### Inherited from

[`TextBase`](TextBase.md).[`loadedEvent`](TextBase.md#loadedevent)

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

[`TextBase`](TextBase.md).[`propertyChangeEvent`](TextBase.md#propertychangeevent)

***

### showingModallyEvent

```ts
static showingModallyEvent: string;
```

Defined in: [ui/core/view/index.d.ts:65](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L65)

String value used when hooking to showingModally event.

#### Ns Event

showingModally

#### Inherited from

[`TextBase`](TextBase.md).[`showingModallyEvent`](TextBase.md#showingmodallyevent)

***

### shownModallyEvent

```ts
static shownModallyEvent: string;
```

Defined in: [ui/core/view/index.d.ts:72](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L72)

String value used when hooking to shownModally event.

#### Ns Event

shownModally

#### Inherited from

[`TextBase`](TextBase.md).[`shownModallyEvent`](TextBase.md#shownmodallyevent)

***

### textChangeEvent

```ts
static textChangeEvent: string;
```

Defined in: [ui/editable-text-base/index.d.ts:31](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L31)

String value used when hooking to the textChange event.

#### Ns Event

textChangeEvent

***

### unloadedEvent

```ts
static unloadedEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to unloaded event.

#### Ns Event

unloaded

#### Inherited from

[`TextBase`](TextBase.md).[`unloadedEvent`](TextBase.md#unloadedevent)

## Accessors

### backgroundPosition

#### Get Signature

```ts
get backgroundPosition(): string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

##### Returns

`string`

#### Set Signature

```ts
set backgroundPosition(value: string): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`backgroundPosition`](TextBase.md#backgroundposition)

***

### backgroundRepeat

#### Get Signature

```ts
get backgroundRepeat(): BackgroundRepeatType;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

##### Returns

[`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md)

#### Set Signature

```ts
set backgroundRepeat(value: BackgroundRepeatType): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md) |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`backgroundRepeat`](TextBase.md#backgroundrepeat)

***

### backgroundSize

#### Get Signature

```ts
get backgroundSize(): string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

##### Returns

`string`

#### Set Signature

```ts
set backgroundSize(value: string): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`backgroundSize`](TextBase.md#backgroundsize)

***

### class

#### Get Signature

```ts
get class(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`string`

#### Set Signature

```ts
set class(v: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`class`](TextBase.md#class)

***

### effectivePaddingBottom

#### Get Signature

```ts
get effectivePaddingBottom(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingBottom(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`effectivePaddingBottom`](TextBase.md#effectivepaddingbottom)

***

### effectivePaddingLeft

#### Get Signature

```ts
get effectivePaddingLeft(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingLeft(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`effectivePaddingLeft`](TextBase.md#effectivepaddingleft)

***

### effectivePaddingRight

#### Get Signature

```ts
get effectivePaddingRight(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingRight(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`effectivePaddingRight`](TextBase.md#effectivepaddingright)

***

### effectivePaddingTop

#### Get Signature

```ts
get effectivePaddingTop(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingTop(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`effectivePaddingTop`](TextBase.md#effectivepaddingtop)

***

### isLoaded

#### Get Signature

```ts
get isLoaded(): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`isLoaded`](TextBase.md#isloaded)

***

### nativeView

#### Get Signature

```ts
get nativeView(): any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`any`

#### Set Signature

```ts
set nativeView(value: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`nativeView`](TextBase.md#nativeview)

***

### page

#### Get Signature

```ts
get page(): Page;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets owner page. This is a read-only property.

##### Returns

[`Page`](Page.md)

#### Inherited from

[`TextBase`](TextBase.md).[`page`](TextBase.md#page)

***

### parentNode

#### Get Signature

```ts
get parentNode(): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets the template parent or the native parent. Sets the template parent.

##### Returns

[`ViewBase`](ViewBase.md)

#### Set Signature

```ts
set parentNode(node: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`ViewBase`](ViewBase.md) |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`parentNode`](TextBase.md#parentnode)

***

### style

#### Get Signature

```ts
get style(): Style;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets the style object associated to this view.

##### Returns

[`Style`](Style.md)

#### Set Signature

```ts
set style(inlineStyle: Style): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Ns Property

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `inlineStyle` | [`Style`](Style.md) |

##### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`style`](TextBase.md#style)

***

### typeName

#### Get Signature

```ts
get typeName(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".

##### Returns

`string`

#### Inherited from

[`TextBase`](TextBase.md).[`typeName`](TextBase.md#typename)

***

### visualState

#### Get Signature

```ts
get visualState(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Deprecated

##### Returns

`string`

#### Inherited from

[`TextBase`](TextBase.md).[`visualState`](TextBase.md#visualstate)

## Methods

### \_addView()

```ts
_addView(view: ViewBase, atIndex?: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_addView`](TextBase.md#addview)

***

### \_addViewCore()

```ts
_addViewCore(view: ViewBase, atIndex?: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_addViewCore`](TextBase.md#addviewcore)

***

### \_addViewToNativeVisualTree()

```ts
_addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`_addViewToNativeVisualTree`](TextBase.md#addviewtonativevisualtree)

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

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

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

[`TextBase`](TextBase.md).[`_applyGlassEffect`](TextBase.md#applyglasseffect)

***

### ~~\_applyXmlAttribute()~~

```ts
_applyXmlAttribute(attribute: string, value: string): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`_applyXmlAttribute`](TextBase.md#applyxmlattribute)

***

### \_batchUpdate()

```ts
_batchUpdate<T>(callback: () => T): T;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`_batchUpdate`](TextBase.md#batchupdate)

***

### \_childIndexToNativeChildIndex()

```ts
_childIndexToNativeChildIndex(index?: number): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index?` | `number` |

#### Returns

`number`

#### Inherited from

[`TextBase`](TextBase.md).[`_childIndexToNativeChildIndex`](TextBase.md#childindextonativechildindex)

***

### \_closeAllModalViewsInternal()

```ts
_closeAllModalViewsInternal(): boolean;
```

Defined in: [ui/core/view/index.d.ts:924](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L924)

Internal method:
Closes all modal views. Should be used by plugins like `nativescript-angular` which implement their own `modal views` service.

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`_closeAllModalViewsInternal`](TextBase.md#closeallmodalviewsinternal)

***

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

[`TextBase`](TextBase.md).[`_createPropertyChangeData`](TextBase.md#createpropertychangedata)

***

### \_dialogClosed()

```ts
_dialogClosed(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_dialogClosed`](TextBase.md#dialogclosed)

***

### \_eachLayoutView()

```ts
_eachLayoutView(callback: (View: any) => void): void;
```

Defined in: [ui/core/view/index.d.ts:932](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L932)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`View`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_eachLayoutView`](TextBase.md#eachlayoutview)

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

[`TextBase`](TextBase.md).[`_emit`](TextBase.md#emit)

***

### \_getNativeViewsCount()

```ts
_getNativeViewsCount(): number;
```

Defined in: [ui/core/view/index.d.ts:918](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L918)

#### Returns

`number`

#### Inherited from

[`TextBase`](TextBase.md).[`_getNativeViewsCount`](TextBase.md#getnativeviewscount)

***

### \_getRootModalViews()

```ts
_getRootModalViews(): ViewBase[];
```

Defined in: [ui/core/view/index.d.ts:930](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L930)

Internal method:
Gets all modal views of the current view.

#### Returns

[`ViewBase`](ViewBase.md)[]

#### Inherited from

[`TextBase`](TextBase.md).[`_getRootModalViews`](TextBase.md#getrootmodalviews)

***

### \_getValue()

```ts
_getValue(property: any): never;
```

Defined in: [ui/core/view/index.d.ts:1113](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1113)

__Obsolete:__ There is a new property system that does not rely on _getValue.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `any` |

#### Returns

`never`

#### Inherited from

[`TextBase`](TextBase.md).[`_getValue`](TextBase.md#getvalue)

***

### \_handleLivesync()

```ts
_handleLivesync(context?: {
  path: string;
  type: string;
}): boolean;
```

Defined in: [ui/core/view/index.d.ts:1084](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1084)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context?` | \{ `path`: `string`; `type`: `string`; \} |
| `context.path?` | `string` |
| `context.type?` | `string` |

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`_handleLivesync`](TextBase.md#handlelivesync)

***

### \_hasAncestorView()

```ts
_hasAncestorView(ancestorView: View): boolean;
```

Defined in: [ui/core/view/index.d.ts:1107](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1107)

Checks whether the current view has specific view for an ancestor.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ancestorView` | [`View`](View.md) |

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`_hasAncestorView`](TextBase.md#hasancestorview)

***

### \_hideNativeModalView()

```ts
protected _hideNativeModalView(parent: ViewCommon, whenClosedCallback: () => void): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `ViewCommon` |
| `whenClosedCallback` | () => `void` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_hideNativeModalView`](TextBase.md#hidenativemodalview)

***

### \_inheritStyles()

```ts
_inheritStyles(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_inheritStyles`](TextBase.md#inheritstyles)

***

### \_inheritStyleScope()

```ts
_inheritStyleScope(styleScope: StyleScope): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `styleScope` | `StyleScope` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_inheritStyleScope`](TextBase.md#inheritstylescope)

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_layoutParent`](TextBase.md#layoutparent)

***

### \_observe()

```ts
protected _observe(
   type: GestureTypes, 
   callback: (args: GestureEventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) |
| `callback` | (`args`: [`GestureEventData`](../interfaces/GestureEventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_observe`](TextBase.md#observe)

***

### \_onAttachedToWindow()

```ts
_onAttachedToWindow(): void;
```

Defined in: [ui/core/view/index.d.ts:1097](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1097)

Called in android when native view is attached to window.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_onAttachedToWindow`](TextBase.md#onattachedtowindow)

***

### \_onDetachedFromWindow()

```ts
_onDetachedFromWindow(): void;
```

Defined in: [ui/core/view/index.d.ts:1102](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1102)

Called in android when native view is dettached from window.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_onDetachedFromWindow`](TextBase.md#ondetachedfromwindow)

***

### \_onRootViewReset()

```ts
_onRootViewReset(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_onRootViewReset`](TextBase.md#onrootviewreset)

***

### \_onSizeChanged()?

```ts
optional _onSizeChanged(): void;
```

Defined in: [ui/core/view/index.d.ts:937](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L937)

iOS Only Internal method used to update various view details like background rerendering, border, etc.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_onSizeChanged`](TextBase.md#onsizechanged)

***

### \_parentChanged()

```ts
_parentChanged(oldParent: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldParent` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_parentChanged`](TextBase.md#parentchanged)

***

### \_raiseLayoutChangedEvent()

```ts
protected _raiseLayoutChangedEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_raiseLayoutChangedEvent`](TextBase.md#raiselayoutchangedevent)

***

### \_raiseShowingModallyEvent()

```ts
protected _raiseShowingModallyEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_raiseShowingModallyEvent`](TextBase.md#raiseshowingmodallyevent)

***

### \_raiseShownModallyEvent()

```ts
protected _raiseShownModallyEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_raiseShownModallyEvent`](TextBase.md#raiseshownmodallyevent)

***

### \_removeView()

```ts
_removeView(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Core logic for removing a child view from this instance. Used by the framework to handle lifecycle events more centralized. Do not use outside the UI Stack implementation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_removeView`](TextBase.md#removeview)

***

### \_removeViewCore()

```ts
_removeViewCore(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_removeViewCore`](TextBase.md#removeviewcore)

***

### \_removeViewFromNativeVisualTree()

```ts
_removeViewFromNativeVisualTree(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_removeViewFromNativeVisualTree`](TextBase.md#removeviewfromnativevisualtree)

***

### \_resumeNativeUpdates()

```ts
_resumeNativeUpdates(type: SuspendType): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SuspendType` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_resumeNativeUpdates`](TextBase.md#resumenativeupdates)

***

### \_setDefaultPaddings()

```ts
_setDefaultPaddings(insets: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `insets` | `any` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_setDefaultPaddings`](TextBase.md#setdefaultpaddings)

***

### \_setupAsRootView()

```ts
_setupAsRootView(context: any): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_setupAsRootView`](TextBase.md#setupasrootview)

***

### \_setupUI()

```ts
_setupUI(
   context: any, 
   atIndex?: number, 
   parentIsLoaded?: boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`_setupUI`](TextBase.md#setupui)

***

### \_setValue()

```ts
_setValue(property: any, value: any): never;
```

Defined in: [ui/core/view/index.d.ts:1118](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1118)

__Obsolete:__ There is a new property system that does not rely on _setValue.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `any` |
| `value` | `any` |

#### Returns

`never`

#### Inherited from

[`TextBase`](TextBase.md).[`_setValue`](TextBase.md#setvalue)

***

### \_shouldDelayLayout()

```ts
_shouldDelayLayout(): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

When returning true the callLoaded method will be run in setTimeout
Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`_shouldDelayLayout`](TextBase.md#shoulddelaylayout)

***

### \_showNativeModalView()

```ts
protected _showNativeModalView(parent: ViewCommon, options: ShowModalOptions): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `ViewCommon` |
| `options` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_showNativeModalView`](TextBase.md#shownativemodalview)

***

### \_suspendNativeUpdates()

```ts
_suspendNativeUpdates(type: SuspendType): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SuspendType` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_suspendNativeUpdates`](TextBase.md#suspendnativeupdates)

***

### \_tearDownUI()

```ts
_tearDownUI(force?: boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Tears down the UI for ViewBase and all its children recursively.
This method should *not* be overridden by derived views.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`_tearDownUI`](TextBase.md#teardownui)

***

### \_updateStyleScope()

```ts
_updateStyleScope(
   cssFileName?: string, 
   cssString?: string, 
   css?: string): void;
```

Defined in: [ui/core/view/index.d.ts:1092](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L1092)

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

[`TextBase`](TextBase.md).[`_updateStyleScope`](TextBase.md#updatestylescope)

***

### accessibilityAnnouncement()

```ts
accessibilityAnnouncement(msg?: string): void;
```

Defined in: [ui/core/view/index.d.ts:972](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L972)

Make an announcement to the screen reader.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg?` | `string` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityAnnouncement`](TextBase.md#accessibilityannouncement)

***

### accessibilityScreenChanged()

```ts
accessibilityScreenChanged(): void;
```

Defined in: [ui/core/view/index.d.ts:977](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L977)

Announce screen changed

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`accessibilityScreenChanged`](TextBase.md#accessibilityscreenchanged)

***

### addEventListener()

```ts
addEventListener(
   eventNames: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

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

[`TextBase`](TextBase.md).[`addEventListener`](TextBase.md#addeventlistener)

***

### addPseudoClass()

```ts
protected addPseudoClass(name: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Unstable

A widget can call this method to add a matching css pseudo class.

#### Inherited from

[`TextBase`](TextBase.md).[`addPseudoClass`](TextBase.md#addpseudoclass)

***

### animate()

```ts
animate(options: AnimationDefinition): AnimationPromise;
```

Defined in: [ui/core/view/index.d.ts:853](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L853)

Animates one or more properties of the view based on the supplied options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AnimationDefinition` |

#### Returns

[`AnimationPromise`](../type-aliases/AnimationPromise.md)

#### Inherited from

[`TextBase`](TextBase.md).[`animate`](TextBase.md#animate)

***

### bind()

```ts
bind(options: BindingOptions, source?: Object): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`BindingOptions`](../interfaces/BindingOptions.md) |
| `source?` | `Object` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`bind`](TextBase.md#bind)

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`callLoaded`](TextBase.md#callloaded)

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`callUnloaded`](TextBase.md#callunloaded)

***

### closeModal()

```ts
closeModal(...args: any[]): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

Closes the current modal view that this page is showing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`closeModal`](TextBase.md#closemodal)

***

### createAnimation()

```ts
createAnimation(options: AnimationDefinition): Animation;
```

Defined in: [ui/core/view/index.d.ts:858](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L858)

Creates an Animation object based on the supplied options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AnimationDefinition` |

#### Returns

[`Animation`](Animation.md)

#### Inherited from

[`TextBase`](TextBase.md).[`createAnimation`](TextBase.md#createanimation)

***

### createNativeView()

```ts
createNativeView(): Object;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Creates a native view.
Returns either android.view.View or UIView.

#### Returns

`Object`

#### Inherited from

[`TextBase`](TextBase.md).[`createNativeView`](TextBase.md#createnativeview)

***

### deletePseudoClass()

```ts
protected deletePseudoClass(name: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Unstable

A widget can call this method to discard matching css pseudo class.

#### Inherited from

[`TextBase`](TextBase.md).[`deletePseudoClass`](TextBase.md#deletepseudoclass)

***

### destroyNode()

```ts
destroyNode(forceDestroyChildren?: boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`destroyNode`](TextBase.md#destroynode)

***

### dismissSoftInput()

```ts
dismissSoftInput(): void;
```

Defined in: [ui/editable-text-base/index.d.ts:112](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L112)

Hides the soft input method, ususally a soft keyboard.

#### Returns

`void`

***

### disposeNativeView()

```ts
disposeNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Clean up references to the native view.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`disposeNativeView`](TextBase.md#disposenativeview)

***

### eachChild()

```ts
eachChild(callback: (child: ViewBase) => boolean): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

Iterates over children of type ViewBase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`ViewBase`](ViewBase.md)) => `boolean` | Called for each child of type ViewBase. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`eachChild`](TextBase.md#eachchild)

***

### eachChildView()

```ts
eachChildView(callback: (view: View) => boolean): void;
```

Defined in: [ui/core/view/index.d.ts:953](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L953)

Iterates over children of type View.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`view`: [`View`](View.md)) => `boolean` | Called for each child of type View. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`eachChildView`](TextBase.md#eachchildview)

***

### ensureDomNode()

```ts
ensureDomNode(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Unstable

Ensures a dom-node for this view.

#### Inherited from

[`TextBase`](TextBase.md).[`ensureDomNode`](TextBase.md#ensuredomnode)

***

### focus()

```ts
focus(): boolean;
```

Defined in: [ui/core/view/index.d.ts:787](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L787)

Tries to focus the view.
Returns a value indicating whether this view or one of its descendants actually took focus.

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`focus`](TextBase.md#focus)

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

[`TextBase`](TextBase.md).[`get`](TextBase.md#get)

***

### getActualSize()

```ts
getActualSize(): Size;
```

Defined in: [ui/core/view/index.d.ts:883](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L883)

Returns the actual size of the view in device-independent pixels.

#### Returns

[`Size`](../interfaces/Size.md)

#### Inherited from

[`TextBase`](TextBase.md).[`getActualSize`](TextBase.md#getactualsize)

***

### getClosestWindow()

```ts
getClosestWindow(): Window;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

(Android only) Gets closest window parent considering modals.

#### Returns

`Window`

#### Inherited from

[`TextBase`](TextBase.md).[`getClosestWindow`](TextBase.md#getclosestwindow)

***

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`string`

#### Inherited from

[`TextBase`](TextBase.md).[`getEffectivePaddingShorthand`](TextBase.md#geteffectivepaddingshorthand)

***

### getGestureObservers()

```ts
getGestureObservers(type: GestureTypes): GesturesObserver[];
```

Defined in: [ui/core/view/index.d.ts:789](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L789)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) |

#### Returns

[`GesturesObserver`](GesturesObserver.md)[]

#### Inherited from

[`TextBase`](TextBase.md).[`getGestureObservers`](TextBase.md#getgestureobservers)

***

### getLocationInWindow()

```ts
getLocationInWindow(): Point;
```

Defined in: [ui/core/view/index.d.ts:868](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L868)

Returns the location of this view in the window coordinate system.

#### Returns

`Point`

#### Inherited from

[`TextBase`](TextBase.md).[`getLocationInWindow`](TextBase.md#getlocationinwindow)

***

### getLocationOnScreen()

```ts
getLocationOnScreen(): Point;
```

Defined in: [ui/core/view/index.d.ts:873](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L873)

Returns the location of this view in the screen coordinate system.

#### Returns

`Point`

#### Inherited from

[`TextBase`](TextBase.md).[`getLocationOnScreen`](TextBase.md#getlocationonscreen)

***

### getLocationRelativeTo()

```ts
getLocationRelativeTo(otherView: View): Point;
```

Defined in: [ui/core/view/index.d.ts:878](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L878)

Returns the location of this view in the otherView's coordinate system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherView` | [`View`](View.md) |

#### Returns

`Point`

#### Inherited from

[`TextBase`](TextBase.md).[`getLocationRelativeTo`](TextBase.md#getlocationrelativeto)

***

### getMeasuredHeight()

```ts
getMeasuredHeight(): number;
```

Defined in: [ui/core/view/index.d.ts:715](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L715)

Returns the raw height component.

#### Returns

`number`

#### Inherited from

[`TextBase`](TextBase.md).[`getMeasuredHeight`](TextBase.md#getmeasuredheight)

***

### getMeasuredState()

```ts
getMeasuredState(): number;
```

Defined in: [ui/core/view/index.d.ts:717](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L717)

#### Returns

`number`

#### Inherited from

[`TextBase`](TextBase.md).[`getMeasuredState`](TextBase.md#getmeasuredstate)

***

### getMeasuredWidth()

```ts
getMeasuredWidth(): number;
```

Defined in: [ui/core/view/index.d.ts:710](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L710)

Returns the raw width component.

#### Returns

`number`

#### Inherited from

[`TextBase`](TextBase.md).[`getMeasuredWidth`](TextBase.md#getmeasuredwidth)

***

### getSafeAreaInsets()

```ts
getSafeAreaInsets(): Position;
```

Defined in: [ui/core/view/index.d.ts:863](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L863)

Returns the iOS safe area insets of this view.

#### Returns

`Position`

#### Inherited from

[`TextBase`](TextBase.md).[`getSafeAreaInsets`](TextBase.md#getsafeareainsets)

***

### getViewByDomId()

```ts
getViewByDomId<T>(domId: number): T;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`getViewByDomId`](TextBase.md#getviewbydomid)

***

### getViewById()

```ts
getViewById<T>(id: string): T;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`getViewById`](TextBase.md#getviewbyid)

***

### hasGestureObservers()?

```ts
optional hasGestureObservers(): boolean;
```

Defined in: [ui/core/view/index.d.ts:942](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L942)

Android only check if gesture observers are attached

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`hasGestureObservers`](TextBase.md#hasgestureobservers)

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

[`TextBase`](TextBase.md).[`hasListeners`](TextBase.md#haslisteners)

***

### initNativeView()

```ts
initNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Initializes properties/listeners of the native view.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`initNativeView`](TextBase.md#initnativeview)

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

Defined in: [ui/core/view/index.d.ts:705](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L705)

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

[`TextBase`](TextBase.md).[`layout`](TextBase.md#layout)

***

### layoutNativeView()

```ts
layoutNativeView(
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: [ui/core/view/index.d.ts:750](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L750)

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

[`TextBase`](TextBase.md).[`layoutNativeView`](TextBase.md#layoutnativeview)

***

### loadView()

```ts
loadView(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Load view.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | to load. |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`loadView`](TextBase.md#loadview)

***

### measure()

```ts
measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
```

Defined in: [ui/core/view/index.d.ts:694](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L694)

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

[`TextBase`](TextBase.md).[`measure`](TextBase.md#measure)

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

[`TextBase`](TextBase.md).[`notify`](TextBase.md#notify)

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

[`TextBase`](TextBase.md).[`notifyPropertyChange`](TextBase.md#notifypropertychange)

***

### off()

```ts
off(
   eventName: string, 
   callback?: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:800](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L800)

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

[`TextBase`](TextBase.md).[`off`](TextBase.md#off)

***

### on()

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:812](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L812)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

#### Call Signature

```ts
on(
   event: "loaded", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:817](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L817)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

#### Call Signature

```ts
on(
   event: "unloaded", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:822](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L822)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

#### Call Signature

```ts
on(
   event: "androidBackPressed", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:828](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L828)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

#### Call Signature

```ts
on(
   event: "showingModally", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/core/view/index.d.ts:833](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L833)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

#### Call Signature

```ts
on(
   event: "shownModally", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:838](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L838)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

#### Call Signature

```ts
on(
   event: "androidOverflowInset", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:843](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L843)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on)

***

### onBackPressed()

```ts
onBackPressed(): boolean;
```

Defined in: [ui/core/view/index.d.ts:888](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L888)

Derived classes can override this method to handle Android back button press.

#### Returns

`boolean`

#### Inherited from

[`TextBase`](TextBase.md).[`onBackPressed`](TextBase.md#onbackpressed)

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

[`TextBase`](TextBase.md).[`once`](TextBase.md#once)

***

### onLayout()

```ts
onLayout(
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: [ui/core/view/index.d.ts:734](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L734)

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

[`TextBase`](TextBase.md).[`onLayout`](TextBase.md#onlayout)

***

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`onLoaded`](TextBase.md#onloaded)

***

### onMeasure()

```ts
onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
```

Defined in: [ui/core/view/index.d.ts:725](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L725)

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

[`TextBase`](TextBase.md).[`onMeasure`](TextBase.md#onmeasure)

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`onResumeNativeUpdates`](TextBase.md#onresumenativeupdates)

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`onUnloaded`](TextBase.md#onunloaded)

***

### removeEventListener()

```ts
removeEventListener(
   eventNames: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

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

[`TextBase`](TextBase.md).[`removeEventListener`](TextBase.md#removeeventlistener)

***

### requestLayout()

```ts
requestLayout(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Invalidates the layout of the view and triggers a new layout pass.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`requestLayout`](TextBase.md#requestlayout)

***

### resetNativeView()

```ts
resetNativeView(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

Resets properties/listeners set to the native view.

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`resetNativeView`](TextBase.md#resetnativeview)

***

### sendAccessibilityEvent()

```ts
sendAccessibilityEvent(options: AccessibilityEventOptions): void;
```

Defined in: [ui/core/view/index.d.ts:967](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L967)

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

[`TextBase`](TextBase.md).[`sendAccessibilityEvent`](TextBase.md#sendaccessibilityevent)

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Updates the specified property with the provided value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`set`](TextBase.md#set)

***

### setAccessibilityIdentifier()

```ts
setAccessibilityIdentifier(view: any, value: string): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `any` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`setAccessibilityIdentifier`](TextBase.md#setaccessibilityidentifier)

***

### setInlineStyle()

```ts
setInlineStyle(style: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | `string` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`setInlineStyle`](TextBase.md#setinlinestyle)

***

### setMeasuredDimension()

```ts
setMeasuredDimension(measuredWidth: number, measuredHeight: number): void;
```

Defined in: [ui/core/view/index.d.ts:741](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L741)

This method must be called by onMeasure(int, int) to store the measured width and measured height. Failing to do so will trigger an exception at measurement time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `measuredWidth` | `number` | The measured width of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL. |
| `measuredHeight` | `number` | The measured height of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL. |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`setMeasuredDimension`](TextBase.md#setmeasureddimension)

***

### setNativeView()

```ts
setNativeView(value: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

[`TextBase`](TextBase.md).[`setNativeView`](TextBase.md#setnativeview)

***

### setOnTouchListener()?

```ts
optional setOnTouchListener(): void;
```

Defined in: [ui/core/view/index.d.ts:947](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L947)

Android only to set the touch listener

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`setOnTouchListener`](TextBase.md#setontouchlistener)

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

[`TextBase`](TextBase.md).[`setProperty`](TextBase.md#setproperty)

***

### setSelection()

```ts
setSelection(start: number, stop?: number): any;
```

Defined in: [ui/editable-text-base/index.d.ts:124](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/editable-text-base/index.d.ts#L124)

Set the selection anchor to start and the selection edge to stop

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `start` | `number` |
| `stop?` | `number` |

#### Returns

`any`

***

### showModal()

```ts
showModal(...args: any[]): View;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

Shows the view passed as parameter as a modal view.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

[`View`](View.md)

#### Inherited from

[`TextBase`](TextBase.md).[`showModal`](TextBase.md#showmodal)

***

### toString()

```ts
toString(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`TextBase`](TextBase.md).[`toString`](TextBase.md#tostring)

***

### unbind()

```ts
unbind(property: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `string` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`unbind`](TextBase.md#unbind)

***

### unloadView()

```ts
unloadView(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Unload view.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | to unload. |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`unloadView`](TextBase.md#unloadview)

***

### updateStatusBarStyle()

```ts
updateStatusBarStyle(value: "dark" | "light"): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"dark"` \| `"light"` |

#### Returns

`void`

#### Inherited from

[`TextBase`](TextBase.md).[`updateStatusBarStyle`](TextBase.md#updatestatusbarstyle)

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

[`TextBase`](TextBase.md).[`addEventListener`](TextBase.md#addeventlistener-1)

***

### combineMeasuredStates()

```ts
static combineMeasuredStates(curState: number, newState: any): number;
```

Defined in: [ui/core/view/index.d.ts:781](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L781)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `curState` | `number` |
| `newState` | `any` |

#### Returns

`number`

#### Inherited from

[`TextBase`](TextBase.md).[`combineMeasuredStates`](TextBase.md#combinemeasuredstates)

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

Defined in: [ui/core/view/index.d.ts:769](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L769)

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

[`TextBase`](TextBase.md).[`layoutChild`](TextBase.md#layoutchild)

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

Defined in: [ui/core/view/index.d.ts:759](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L759)

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

[`TextBase`](TextBase.md).[`measureChild`](TextBase.md#measurechild)

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

[`TextBase`](TextBase.md).[`off`](TextBase.md#off-1)

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

[`TextBase`](TextBase.md).[`on`](TextBase.md#on-1)

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

[`TextBase`](TextBase.md).[`once`](TextBase.md#once-1)

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

[`TextBase`](TextBase.md).[`removeEventListener`](TextBase.md#removeeventlistener-1)

***

### resolveSizeAndState()

```ts
static resolveSizeAndState(
   size: number, 
   specSize: number, 
   specMode: number, 
   childMeasuredState: number): number;
```

Defined in: [ui/core/view/index.d.ts:779](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L779)

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

[`TextBase`](TextBase.md).[`resolveSizeAndState`](TextBase.md#resolvesizeandstate)
