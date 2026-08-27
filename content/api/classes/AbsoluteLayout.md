---
title: AbsoluteLayout
titleTemplate: :title - API / NativeScript
description: A layout that lets you specify exact locations (left/top coordinates) of its children.
contributors: false
---

Defined in: [ui/layouts/absolute-layout/index.d.ts:12](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/absolute-layout/index.d.ts#L12)

A layout that lets you specify exact locations (left/top coordinates) of its children.

## Ns View

AbsoluteLayout

## Extends

- [`LayoutBase`](LayoutBase.md)

## Constructors

### Constructor

```ts
new AbsoluteLayout(): AbsoluteLayout;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`AbsoluteLayout`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`constructor`](LayoutBase.md#constructor)

## Properties

### \_androidContentDescriptionUpdated?

```ts
optional _androidContentDescriptionUpdated?: boolean;
```

Defined in: [ui/core/view/index.d.ts:358](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L358)

Internal use only. This is used to limit the number of updates to android.view.View.setContentDescription()

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_androidContentDescriptionUpdated`](LayoutBase.md#androidcontentdescriptionupdated)

***

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_automaticallyAdjustsScrollViewInsets`](LayoutBase.md#automaticallyadjustsscrollviewinsets)

***

### \_closeModalCallback

```ts
protected _closeModalCallback: Function;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_closeModalCallback`](LayoutBase.md#closemodalcallback)

***

### \_context

```ts
_context: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_context`](LayoutBase.md#context)

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_cssState`](LayoutBase.md#cssstate)

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_defaultPaddingBottom`](LayoutBase.md#defaultpaddingbottom)

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_defaultPaddingLeft`](LayoutBase.md#defaultpaddingleft)

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_defaultPaddingRight`](LayoutBase.md#defaultpaddingright)

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_defaultPaddingTop`](LayoutBase.md#defaultpaddingtop)

***

### \_domId

```ts
_domId: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_domId`](LayoutBase.md#domid)

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_ignoreFlexMinWidthHeightReset`](LayoutBase.md#ignoreflexminwidthheightreset)

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_isAddedToNativeVisualTree`](LayoutBase.md#isaddedtonativevisualtree)

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_isPaddingRelative`](LayoutBase.md#ispaddingrelative)

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_isStyleScopeHost`](LayoutBase.md#isstylescopehost)

***

### \_nativeWindow?

```ts
optional _nativeWindow?: NativeWindow;
```

Defined in: [ui/core/view/index.d.ts:970](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L970)

Internal property:
The window this view is the root view of. Only ever set on a window's root view;
use `getNativeWindow()` to resolve the window of any other view.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_nativeWindow`](LayoutBase.md#nativewindow)

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_oldBottom`](LayoutBase.md#oldbottom)

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_oldLeft`](LayoutBase.md#oldleft)

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_oldRight`](LayoutBase.md#oldright)

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_oldTop`](LayoutBase.md#oldtop)

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_styleScope`](LayoutBase.md#stylescope)

***

### \_suspendNativeUpdatesCount

```ts
_suspendNativeUpdatesCount: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Determines the depth of suspended updates.
When the value is 0 the current property updates are not batched nor scoped and must be immediately applied.
If the value is 1 or greater, the current updates are batched and does not have to provide immediate update.
Do not set this field, the _batchUpdate method is responsible to keep the count up to date,
as well as adding/rmoving the view to/from the visual tree.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_suspendNativeUpdatesCount`](LayoutBase.md#suspendnativeupdatescount)

***

### accessibilityHidden

```ts
accessibilityHidden: boolean;
```

Defined in: [ui/core/view/index.d.ts:260](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L260)

Hide the view and its children from the a11y service

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityHidden`](LayoutBase.md#accessibilityhidden)

***

### accessibilityHint

```ts
accessibilityHint: string;
```

Defined in: [ui/core/view/index.d.ts:305](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L305)

A hint describes the elements behavior. Example: 'Tap change playback speed'

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityHint`](LayoutBase.md#accessibilityhint)

***

### accessibilityIdentifier

```ts
accessibilityIdentifier: string;
```

Defined in: [ui/core/view/index.d.ts:269](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L269)

The view's unique accessibilityIdentifier.

This is used for automated testing.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityIdentifier`](LayoutBase.md#accessibilityidentifier)

***

### accessibilityIgnoresInvertColors

```ts
accessibilityIgnoresInvertColors: boolean;
```

Defined in: [ui/core/view/index.d.ts:332](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L332)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityIgnoresInvertColors`](LayoutBase.md#accessibilityignoresinvertcolors)

***

### accessibilityLabel

```ts
accessibilityLabel: string;
```

Defined in: [ui/core/view/index.d.ts:291](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L291)

Short description of the element, ideally one word.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityLabel`](LayoutBase.md#accessibilitylabel)

***

### accessibilityLanguage

```ts
accessibilityLanguage: string;
```

Defined in: [ui/core/view/index.d.ts:320](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L320)

Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityLanguage`](LayoutBase.md#accessibilitylanguage)

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: [ui/core/view/index.d.ts:312](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L312)

When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityLiveRegion`](LayoutBase.md#accessibilityliveregion)

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: [ui/core/view/index.d.ts:327](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L327)

This view starts a media session. Equivalent to trait = startsMedia

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityMediaSession`](LayoutBase.md#accessibilitymediasession)

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: [ui/core/view/index.d.ts:276](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L276)

Which role should this view be treated by the a11y service?

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityRole`](LayoutBase.md#accessibilityrole)

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: [ui/core/view/index.d.ts:284](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L284)

Which state should this view be treated as by the a11y service?

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityState`](LayoutBase.md#accessibilitystate)

***

### accessibilityValue

```ts
accessibilityValue: string;
```

Defined in: [ui/core/view/index.d.ts:298](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L298)

Current value of the element in a localized string.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityValue`](LayoutBase.md#accessibilityvalue)

***

### accessible

```ts
accessible: boolean;
```

Defined in: [ui/core/view/index.d.ts:253](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L253)

If `true` the element is an accessibility element and all the children will be treated as a single selectable component.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessible`](LayoutBase.md#accessible)

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`alignSelf`](LayoutBase.md#alignself)

***

### android

```ts
android: any;
```

Defined in: [ui/core/view/index.d.ts:121](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L121)

Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`android`](LayoutBase.md#android)

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: [ui/core/view/index.d.ts:378](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L378)

Gets or sets the dynamic elevation offset of the android view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`androidDynamicElevationOffset`](LayoutBase.md#androiddynamicelevationoffset)

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: [ui/core/view/index.d.ts:371](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L371)

Gets or sets the elevation of the android view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`androidElevation`](LayoutBase.md#androidelevation)

***

### androidOverflowEdge

```ts
androidOverflowEdge: AndroidOverflow;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`androidOverflowEdge`](LayoutBase.md#androidoverflowedge)

***

### automationText

```ts
automationText: string;
```

Defined in: [ui/core/view/index.d.ts:364](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L364)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`automationText`](LayoutBase.md#automationtext)

***

### background

```ts
background: string;
```

Defined in: [ui/core/view/index.d.ts:385](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L385)

Gets or sets the background style property.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`background`](LayoutBase.md#background)

***

### backgroundColor

```ts
backgroundColor: string | Color;
```

Defined in: [ui/core/view/index.d.ts:392](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L392)

Gets or sets the background color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`backgroundColor`](LayoutBase.md#backgroundcolor)

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: [ui/core/view/index.d.ts:399](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L399)

Gets or sets the background image of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`backgroundImage`](LayoutBase.md#backgroundimage)

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: [ui/core/view/index.d.ts:134](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L134)

Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`bindingContext`](LayoutBase.md#bindingcontext)

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: [ui/core/view/index.d.ts:162](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L162)

Gets or sets the bottom border color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderBottomColor`](LayoutBase.md#borderbottomcolor)

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:239](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L239)

Gets or sets the bottom left border radius of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderBottomLeftRadius`](LayoutBase.md#borderbottomleftradius)

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:232](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L232)

Gets or sets the bottom right border radius of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderBottomRightRadius`](LayoutBase.md#borderbottomrightradius)

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:197](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L197)

Gets or sets the bottom border width of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderBottomWidth`](LayoutBase.md#borderbottomwidth)

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: [ui/core/view/index.d.ts:141](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L141)

Gets or sets the border color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderColor`](LayoutBase.md#bordercolor)

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: [ui/core/view/index.d.ts:169](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L169)

Gets or sets the left border color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderLeftColor`](LayoutBase.md#borderleftcolor)

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:204](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L204)

Gets or sets the left border width of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderLeftWidth`](LayoutBase.md#borderleftwidth)

***

### borderRadius

```ts
borderRadius: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/core/view/index.d.ts:211](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L211)

Gets or sets the border radius of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderRadius`](LayoutBase.md#borderradius)

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: [ui/core/view/index.d.ts:155](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L155)

Gets or sets the right border color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderRightColor`](LayoutBase.md#borderrightcolor)

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:190](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L190)

Gets or sets the right border width of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderRightWidth`](LayoutBase.md#borderrightwidth)

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: [ui/core/view/index.d.ts:148](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L148)

Gets or sets the top border color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderTopColor`](LayoutBase.md#bordertopcolor)

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:218](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L218)

Gets or sets the top left border radius of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderTopLeftRadius`](LayoutBase.md#bordertopleftradius)

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:225](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L225)

Gets or sets the top right border radius of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderTopRightRadius`](LayoutBase.md#bordertoprightradius)

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:183](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L183)

Gets or sets the top border width of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderTopWidth`](LayoutBase.md#bordertopwidth)

***

### borderWidth

```ts
borderWidth: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/core/view/index.d.ts:176](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L176)

Gets or sets the border width of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`borderWidth`](LayoutBase.md#borderwidth)

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: [ui/core/view/index.d.ts:406](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L406)

Gets or sets the box shadow of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`boxShadow`](LayoutBase.md#boxshadow)

***

### className

```ts
className: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the CSS class name for this view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`className`](LayoutBase.md#classname)

***

### clipToBounds

```ts
clipToBounds: boolean;
```

Defined in: [ui/layouts/layout-base.d.ts:106](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L106)

Gets or sets a value indicating whether to clip the content of this layout.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`clipToBounds`](LayoutBase.md#cliptobounds)

***

### col

```ts
col: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`col`](LayoutBase.md#col)

***

### color

```ts
color: Color;
```

Defined in: [ui/core/view/index.d.ts:246](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L246)

Gets or sets the color of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`color`](LayoutBase.md#color)

***

### colSpan

```ts
colSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The number of columns for the element to span across.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`colSpan`](LayoutBase.md#colspan)

***

### column

```ts
column: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`column`](LayoutBase.md#column)

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`columnSpan`](LayoutBase.md#columnspan)

***

### cssClasses

```ts
cssClasses: Set<string>;
```

Defined in: [ui/core/view/index.d.ts:711](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L711)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`cssClasses`](LayoutBase.md#cssclasses)

***

### cssPseudoClasses

```ts
cssPseudoClasses: Set<string>;
```

Defined in: [ui/core/view/index.d.ts:712](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L712)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`cssPseudoClasses`](LayoutBase.md#csspseudoclasses)

***

### cssType

```ts
cssType: string;
```

Defined in: [ui/core/view/index.d.ts:693](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L693)

Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`cssType`](LayoutBase.md#csstype)

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Default visual state, defaults to 'normal'

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`defaultVisualState`](LayoutBase.md#defaultvisualstate)

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: [ui/core/view/index.d.ts:413](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L413)

Gets or sets the layout direction of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`direction`](LayoutBase.md#direction)

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Dock position of the view within its parent.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`dock`](LayoutBase.md#dock)

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`domNode`](LayoutBase.md#domnode)

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveBorderBottomWidth`](LayoutBase.md#effectiveborderbottomwidth)

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveBorderLeftWidth`](LayoutBase.md#effectiveborderleftwidth)

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveBorderRightWidth`](LayoutBase.md#effectiveborderrightwidth)

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveBorderTopWidth`](LayoutBase.md#effectivebordertopwidth)

***

### effectiveColumnGap

```ts
effectiveColumnGap: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveColumnGap`](LayoutBase.md#effectivecolumngap)

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveHeight`](LayoutBase.md#effectiveheight)

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveLeft`](LayoutBase.md#effectiveleft)

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMarginBottom`](LayoutBase.md#effectivemarginbottom)

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMarginLeft`](LayoutBase.md#effectivemarginleft)

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMarginRight`](LayoutBase.md#effectivemarginright)

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMarginTop`](LayoutBase.md#effectivemargintop)

***

### effectiveMaxHeight

```ts
effectiveMaxHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMaxHeight`](LayoutBase.md#effectivemaxheight)

***

### effectiveMaxWidth

```ts
effectiveMaxWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMaxWidth`](LayoutBase.md#effectivemaxwidth)

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMinHeight`](LayoutBase.md#effectiveminheight)

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveMinWidth`](LayoutBase.md#effectiveminwidth)

***

### effectiveRowGap

```ts
effectiveRowGap: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveRowGap`](LayoutBase.md#effectiverowgap)

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveTop`](LayoutBase.md#effectivetop)

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectiveWidth`](LayoutBase.md#effectivewidth)

***

### flex

```ts
flex: Flex;
```

Defined in: [ui/core/view/index.d.ts:604](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L604)

The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`flex`](LayoutBase.md#flex)

***

### flexFlow

```ts
flexFlow: FlexFlow;
```

Defined in: [ui/core/view/index.d.ts:599](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L599)

The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`flexFlow`](LayoutBase.md#flexflow)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`flexGrow`](LayoutBase.md#flexgrow)

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`flexShrink`](LayoutBase.md#flexshrink)

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

When true, forces the item to wrap onto a new line.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`flexWrapBefore`](LayoutBase.md#flexwrapbefore)

***

### height

```ts
height: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:457](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L457)

Gets or sets the desired height of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`height`](LayoutBase.md#height)

***

### hidden

```ts
hidden: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the visual state of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`hidden`](LayoutBase.md#hidden)

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: [ui/core/view/index.d.ts:499](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L499)

Gets or sets the alignment of this view within its parent along the Horizontal axis.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`horizontalAlignment`](LayoutBase.md#horizontalalignment)

***

### id

```ts
id: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the id for this view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`id`](LayoutBase.md#id)

***

### ignoreTouchAnimation

```ts
ignoreTouchAnimation: boolean;
```

Defined in: [ui/core/view/index.d.ts:673](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L673)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`ignoreTouchAnimation`](LayoutBase.md#ignoretouchanimation)

***

### ios

```ts
ios: any;
```

Defined in: [ui/core/view/index.d.ts:127](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L127)

Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`ios`](LayoutBase.md#ios)

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: [ui/core/view/index.d.ts:339](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L339)

Defines whether accessibility font scale should affect font size.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosAccessibilityAdjustsFontSize`](LayoutBase.md#iosaccessibilityadjustsfontsize)

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: [ui/core/view/index.d.ts:353](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L353)

Gets or sets the maximum accessibility font scale.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosAccessibilityMaxFontScale`](LayoutBase.md#iosaccessibilitymaxfontscale)

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: [ui/core/view/index.d.ts:346](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L346)

Gets or sets the minimum accessibility font scale.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosAccessibilityMinFontScale`](LayoutBase.md#iosaccessibilityminfontscale)

***

### iosGlassEffect

```ts
iosGlassEffect: GlassEffectType;
```

Defined in: [ui/core/view/index.d.ts:660](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L660)

Set the iOS liquid glass effect style on the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosGlassEffect`](LayoutBase.md#iosglasseffect)

***

### iosIgnoreSafeArea

```ts
iosIgnoreSafeArea: boolean;
```

Defined in: [ui/core/view/index.d.ts:639](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L639)

Gets or sets a value indicating whether the the view should totally ignore safe areas computation. This property is iOS specific. Default value: false

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosIgnoreSafeArea`](LayoutBase.md#iosignoresafearea)

***

### iosOverflowSafeArea

```ts
iosOverflowSafeArea: boolean;
```

Defined in: [ui/core/view/index.d.ts:1187](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1187)

Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosOverflowSafeArea`](LayoutBase.md#iosoverflowsafearea)

***

### iosOverflowSafeAreaEnabled

```ts
iosOverflowSafeAreaEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:632](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L632)

Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`iosOverflowSafeAreaEnabled`](LayoutBase.md#iosoverflowsafeareaenabled)

***

### isCollapsed

```ts
isCollapsed: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Returns true if visibility is set to 'collapse'.
Default(false) set in prototype
Readonly property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`isCollapsed`](LayoutBase.md#iscollapsed)

***

### isEnabled

```ts
isEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:611](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L611)

Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`isEnabled`](LayoutBase.md#isenabled)

***

### isLayoutValid

```ts
isLayoutValid: boolean;
```

Defined in: [ui/core/view/index.d.ts:682](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L682)

Gets if layout is valid. This is a read-only property.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`isLayoutValid`](LayoutBase.md#islayoutvalid)

***

### isPassThroughParentEnabled

```ts
isPassThroughParentEnabled: boolean;
```

Defined in: [ui/layouts/layout-base.d.ts:115](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L115)

Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`isPassThroughParentEnabled`](LayoutBase.md#ispassthroughparentenabled)

***

### isUserInteractionEnabled

```ts
isUserInteractionEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:618](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L618)

Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`isUserInteractionEnabled`](LayoutBase.md#isuserinteractionenabled)

***

### left

```ts
left: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`left`](LayoutBase.md#left)

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

Defined in: [ui/core/view/index.d.ts:464](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L464)

Gets or sets margin style property.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`margin`](LayoutBase.md#margin)

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:492](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L492)

Specifies extra space on the bottom side of this view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`marginBottom`](LayoutBase.md#marginbottom)

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:471](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L471)

Specifies extra space on the left side of this view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`marginLeft`](LayoutBase.md#marginleft)

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:485](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L485)

Specifies extra space on the right side of this view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`marginRight`](LayoutBase.md#marginright)

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:478](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L478)

Specifies extra space on the top side of this view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`marginTop`](LayoutBase.md#margintop)

***

### maxHeight

```ts
maxHeight: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:443](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L443)

Gets or sets the maximum height the view may grow to. Accepts a fixed length
or a percentage of the available height. Defaults to 'auto' (no maximum).

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`maxHeight`](LayoutBase.md#maxheight)

***

### maxWidth

```ts
maxWidth: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:435](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L435)

Gets or sets the maximum width the view may grow to. Accepts a fixed length
or a percentage of the available width. Defaults to 'auto' (no maximum).

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`maxWidth`](LayoutBase.md#maxwidth)

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: [ui/core/view/index.d.ts:427](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L427)

Gets or sets the minimum height the view may grow to.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`minHeight`](LayoutBase.md#minheight)

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:420](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L420)

Gets or sets the minimum width the view may grow to.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`minWidth`](LayoutBase.md#minwidth)

***

### modal

```ts
modal: View;
```

Defined in: [ui/core/view/index.d.ts:874](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L874)

Returns the current modal view that this page is showing (is parent of), if any.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`modal`](LayoutBase.md#modal)

***

### nativeBackgroundState?

```ts
optional nativeBackgroundState?: "unset" | "invalid" | "drawn";
```

Defined in: [ui/core/view/index.d.ts:687](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L687)

Native background states. This is a read-only property.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`nativeBackgroundState`](LayoutBase.md#nativebackgroundstate)

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`nativeViewProtected`](LayoutBase.md#nativeviewprotected)

***

### opacity

```ts
opacity: number;
```

Defined in: [ui/core/view/index.d.ts:520](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L520)

Gets or sets the opacity style property.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`opacity`](LayoutBase.md#opacity)

***

### order

```ts
order: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`order`](LayoutBase.md#order)

***

### originX

```ts
originX: number;
```

Defined in: [ui/core/view/index.d.ts:586](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L586)

Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`originX`](LayoutBase.md#originx)

***

### originY

```ts
originY: number;
```

Defined in: [ui/core/view/index.d.ts:593](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L593)

Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`originY`](LayoutBase.md#originy)

***

### padding

```ts
padding: 
  | string
  | number
  | LengthDipUnit
  | LengthPxUnit;
```

Defined in: [ui/layouts/layout-base.d.ts:71](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L71)

Gets or sets padding style property.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`padding`](LayoutBase.md#padding)

***

### paddingBottom

```ts
paddingBottom: LengthType;
```

Defined in: [ui/layouts/layout-base.d.ts:78](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L78)

Specify the bottom padding of this layout.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`paddingBottom`](LayoutBase.md#paddingbottom)

***

### paddingLeft

```ts
paddingLeft: LengthType;
```

Defined in: [ui/layouts/layout-base.d.ts:85](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L85)

Specify the left padding of this layout.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`paddingLeft`](LayoutBase.md#paddingleft)

***

### paddingRight

```ts
paddingRight: LengthType;
```

Defined in: [ui/layouts/layout-base.d.ts:92](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L92)

Specify the right padding of this layout.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`paddingRight`](LayoutBase.md#paddingright)

***

### paddingTop

```ts
paddingTop: LengthType;
```

Defined in: [ui/layouts/layout-base.d.ts:99](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L99)

Specify the top padding of this layout.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`paddingTop`](LayoutBase.md#paddingtop)

***

### parent

```ts
parent: ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets the parent view. This property is read-only.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`parent`](LayoutBase.md#parent)

***

### perspective

```ts
perspective: number;
```

Defined in: [ui/core/view/index.d.ts:549](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L549)

Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`perspective`](LayoutBase.md#perspective)

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`recycleNativeView`](LayoutBase.md#recyclenativeview)

***

### reusable

```ts
reusable: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`reusable`](LayoutBase.md#reusable)

***

### rotate

```ts
rotate: number;
```

Defined in: [ui/core/view/index.d.ts:527](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L527)

Gets or sets the rotate affine transform of the view along the Z axis.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`rotate`](LayoutBase.md#rotate)

***

### rotateX

```ts
rotateX: number;
```

Defined in: [ui/core/view/index.d.ts:534](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L534)

Gets or sets the rotate affine transform of the view along the X axis.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`rotateX`](LayoutBase.md#rotatex)

***

### rotateY

```ts
rotateY: number;
```

Defined in: [ui/core/view/index.d.ts:541](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L541)

Gets or sets the rotate affine transform of the view along the Y axis.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`rotateY`](LayoutBase.md#rotatey)

***

### row

```ts
row: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`row`](LayoutBase.md#row)

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The number of rows for the element to span across.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`rowSpan`](LayoutBase.md#rowspan)

***

### scaleX

```ts
scaleX: number;
```

Defined in: [ui/core/view/index.d.ts:570](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L570)

Gets or sets the scaleX affine transform of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`scaleX`](LayoutBase.md#scalex)

***

### scaleY

```ts
scaleY: number;
```

Defined in: [ui/core/view/index.d.ts:577](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L577)

Gets or sets the scaleY affine transform of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`scaleY`](LayoutBase.md#scaley)

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Opt out of shared transition under different binding conditions

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`sharedTransitionIgnore`](LayoutBase.md#sharedtransitionignore)

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`sharedTransitionTag`](LayoutBase.md#sharedtransitiontag)

***

### statusBarStyle

```ts
statusBarStyle: "dark" | "light";
```

Defined in: [ui/core/view/index.d.ts:709](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L709)

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

[`LayoutBase`](LayoutBase.md).[`statusBarStyle`](LayoutBase.md#statusbarstyle)

***

### testID

```ts
testID: string;
```

Defined in: [ui/core/view/index.d.ts:665](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L665)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`testID`](LayoutBase.md#testid)

***

### top

```ts
top: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`top`](LayoutBase.md#top)

***

### touchAnimation

```ts
touchAnimation: 
  | boolean
  | TouchAnimationOptions;
```

Defined in: [ui/core/view/index.d.ts:669](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L669)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`touchAnimation`](LayoutBase.md#touchanimation)

***

### touchDelay

```ts
touchDelay: number;
```

Defined in: [ui/core/view/index.d.ts:677](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L677)

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`touchDelay`](LayoutBase.md#touchdelay)

***

### transitionId

```ts
transitionId: number;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

Active transition instance id for tracking state

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`transitionId`](LayoutBase.md#transitionid)

***

### translateX

```ts
translateX: number;
```

Defined in: [ui/core/view/index.d.ts:556](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L556)

Gets or sets the translateX affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`translateX`](LayoutBase.md#translatex)

***

### translateY

```ts
translateY: number;
```

Defined in: [ui/core/view/index.d.ts:563](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L563)

Gets or sets the translateY affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`translateY`](LayoutBase.md#translatey)

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: [ui/core/view/index.d.ts:506](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L506)

Gets or sets the alignment of this view within its parent along the Vertical axis.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`verticalAlignment`](LayoutBase.md#verticalalignment)

***

### viewController

```ts
viewController: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

returns the native UIViewController.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`viewController`](LayoutBase.md#viewcontroller)

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: [ui/core/view/index.d.ts:513](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L513)

Gets or sets the visibility of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`visibility`](LayoutBase.md#visibility)

***

### visionHoverStyle

```ts
visionHoverStyle: string | VisionHoverOptions;
```

Defined in: [ui/core/view/index.d.ts:653](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L653)

visionOS only

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`visionHoverStyle`](LayoutBase.md#visionhoverstyle)

***

### visionIgnoreHoverStyle

```ts
visionIgnoreHoverStyle: boolean;
```

Defined in: [ui/core/view/index.d.ts:646](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L646)

visionOS only

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`visionIgnoreHoverStyle`](LayoutBase.md#visionignorehoverstyle)

***

### width

```ts
width: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:450](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L450)

Gets or sets the desired width of the view.

#### Ns Property

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`width`](LayoutBase.md#width)

***

### accessibilityBlurEvent

```ts
static accessibilityBlurEvent: string;
```

Defined in: [ui/core/view/index.d.ts:89](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L89)

String value used when hooking to accessibilityBlur event.

#### Ns Event

accessibilityBlur

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityBlurEvent`](LayoutBase.md#accessibilityblurevent)

***

### accessibilityFocusChangedEvent

```ts
static accessibilityFocusChangedEvent: string;
```

Defined in: [ui/core/view/index.d.ts:103](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L103)

String value used when hooking to accessibilityFocusChanged event.

#### Ns Event

accessibilityFocusChanged

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityFocusChangedEvent`](LayoutBase.md#accessibilityfocuschangedevent)

***

### accessibilityFocusEvent

```ts
static accessibilityFocusEvent: string;
```

Defined in: [ui/core/view/index.d.ts:96](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L96)

String value used when hooking to accessibilityFocus event.

#### Ns Event

accessibilityFocus

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityFocusEvent`](LayoutBase.md#accessibilityfocusevent)

***

### accessibilityPerformEscapeEvent

```ts
static accessibilityPerformEscapeEvent: string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityPerformEscapeEvent`](LayoutBase.md#accessibilityperformescapeevent)

***

### androidOverflowInsetEvent

```ts
static androidOverflowInsetEvent: string;
```

Defined in: [ui/core/view/index.d.ts:110](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L110)

String value used when hooking to androidOverflowInset event.

#### Ns Event

androidOverflowInset

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`androidOverflowInsetEvent`](LayoutBase.md#androidoverflowinsetevent)

***

### closedModallyEvent

```ts
static closedModallyEvent: string;
```

Defined in: [ui/core/view/index.d.ts:82](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L82)

String value used when hooking to closedModally event. Fired on the
modal view once its native dismissal has fully completed (after the
close callback and UI teardown).

#### Ns Event

closedModally

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`closedModallyEvent`](LayoutBase.md#closedmodallyevent)

***

### createdEvent

```ts
static createdEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to creation event

#### Ns Event

created

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`createdEvent`](LayoutBase.md#createdevent)

***

### disposeNativeViewEvent

```ts
static disposeNativeViewEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to disposeNativeView event

#### Ns Event

disposeNativeView

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`disposeNativeViewEvent`](LayoutBase.md#disposenativeviewevent)

***

### layoutChangedEvent

```ts
static layoutChangedEvent: string;
```

Defined in: [ui/core/view/index.d.ts:60](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L60)

String value used when hooking to layoutChanged event.

#### Ns Event

layoutChanged

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`layoutChangedEvent`](LayoutBase.md#layoutchangedevent)

***

### loadedEvent

```ts
static loadedEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to loaded event.

#### Ns Event

loaded

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`loadedEvent`](LayoutBase.md#loadedevent)

***

### propertyChangeEvent

```ts
static propertyChangeEvent: string;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

String value used when hooking to propertyChange event.

#### Ns Event

propertyChange

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`propertyChangeEvent`](LayoutBase.md#propertychangeevent)

***

### showingModallyEvent

```ts
static showingModallyEvent: string;
```

Defined in: [ui/core/view/index.d.ts:66](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L66)

String value used when hooking to showingModally event.

#### Ns Event

showingModally

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`showingModallyEvent`](LayoutBase.md#showingmodallyevent)

***

### shownModallyEvent

```ts
static shownModallyEvent: string;
```

Defined in: [ui/core/view/index.d.ts:73](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L73)

String value used when hooking to shownModally event.

#### Ns Event

shownModally

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`shownModallyEvent`](LayoutBase.md#shownmodallyevent)

***

### unloadedEvent

```ts
static unloadedEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to unloaded event.

#### Ns Event

unloaded

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`unloadedEvent`](LayoutBase.md#unloadedevent)

## Accessors

### backgroundPosition

#### Get Signature

```ts
get backgroundPosition(): string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Returns

`string`

#### Set Signature

```ts
set backgroundPosition(value: string): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`backgroundPosition`](LayoutBase.md#backgroundposition)

***

### backgroundRepeat

#### Get Signature

```ts
get backgroundRepeat(): BackgroundRepeatType;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Returns

[`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md)

#### Set Signature

```ts
set backgroundRepeat(value: BackgroundRepeatType): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BackgroundRepeatType`](../namespaces/CoreTypes/type-aliases/BackgroundRepeatType.md) |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`backgroundRepeat`](LayoutBase.md#backgroundrepeat)

***

### backgroundSize

#### Get Signature

```ts
get backgroundSize(): string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Returns

`string`

#### Set Signature

```ts
set backgroundSize(value: string): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`backgroundSize`](LayoutBase.md#backgroundsize)

***

### class

#### Get Signature

```ts
get class(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`string`

#### Set Signature

```ts
set class(v: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`class`](LayoutBase.md#class)

***

### effectivePaddingBottom

#### Get Signature

```ts
get effectivePaddingBottom(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingBottom(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectivePaddingBottom`](LayoutBase.md#effectivepaddingbottom)

***

### effectivePaddingLeft

#### Get Signature

```ts
get effectivePaddingLeft(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingLeft(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectivePaddingLeft`](LayoutBase.md#effectivepaddingleft)

***

### effectivePaddingRight

#### Get Signature

```ts
get effectivePaddingRight(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingRight(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectivePaddingRight`](LayoutBase.md#effectivepaddingright)

***

### effectivePaddingTop

#### Get Signature

```ts
get effectivePaddingTop(): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`number`

#### Set Signature

```ts
set effectivePaddingTop(v: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`effectivePaddingTop`](LayoutBase.md#effectivepaddingtop)

***

### isLoaded

#### Get Signature

```ts
get isLoaded(): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`isLoaded`](LayoutBase.md#isloaded)

***

### nativeView

#### Get Signature

```ts
get nativeView(): any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`any`

#### Set Signature

```ts
set nativeView(value: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`nativeView`](LayoutBase.md#nativeview)

***

### page

#### Get Signature

```ts
get page(): Page;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets owner page. This is a read-only property.

##### Returns

[`Page`](Page.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`page`](LayoutBase.md#page)

***

### parentNode

#### Get Signature

```ts
get parentNode(): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets the template parent or the native parent. Sets the template parent.

##### Returns

[`ViewBase`](ViewBase.md)

#### Set Signature

```ts
set parentNode(node: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`ViewBase`](ViewBase.md) |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`parentNode`](LayoutBase.md#parentnode)

***

### style

#### Get Signature

```ts
get style(): Style;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets the style object associated to this view.

##### Returns

[`Style`](Style.md)

#### Set Signature

```ts
set style(inlineStyle: Style): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Ns Property

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `inlineStyle` | [`Style`](Style.md) |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`style`](LayoutBase.md#style)

***

### textTransform

#### Get Signature

```ts
get textTransform(): TextTransformType;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Returns

[`TextTransformType`](../namespaces/CoreTypes/type-aliases/TextTransformType.md)

#### Set Signature

```ts
set textTransform(value: TextTransformType): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`TextTransformType`](../namespaces/CoreTypes/type-aliases/TextTransformType.md) |

##### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`textTransform`](LayoutBase.md#texttransform)

***

### typeName

#### Get Signature

```ts
get typeName(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".

##### Returns

`string`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`typeName`](LayoutBase.md#typename)

***

### visualState

#### Get Signature

```ts
get visualState(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

##### Deprecated

##### Returns

`string`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`visualState`](LayoutBase.md#visualstate)

## Methods

### \_addView()

```ts
_addView(view: ViewBase, atIndex?: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_addView`](LayoutBase.md#addview)

***

### \_addViewCore()

```ts
_addViewCore(view: ViewBase, atIndex?: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |
| `atIndex?` | `number` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_addViewCore`](LayoutBase.md#addviewcore)

***

### \_addViewToNativeVisualTree()

```ts
_addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`_addViewToNativeVisualTree`](LayoutBase.md#addviewtonativevisualtree)

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

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

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

[`LayoutBase`](LayoutBase.md).[`_applyGlassEffect`](LayoutBase.md#applyglasseffect)

***

### ~~\_applyXmlAttribute()~~

```ts
_applyXmlAttribute(attribute: string, value: string): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`_applyXmlAttribute`](LayoutBase.md#applyxmlattribute)

***

### \_batchUpdate()

```ts
_batchUpdate<T>(callback: () => T): T;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`_batchUpdate`](LayoutBase.md#batchupdate)

***

### \_childIndexToNativeChildIndex()

```ts
_childIndexToNativeChildIndex(index?: number): number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index?` | `number` |

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_childIndexToNativeChildIndex`](LayoutBase.md#childindextonativechildindex)

***

### \_closeAllModalViewsInternal()

```ts
_closeAllModalViewsInternal(): boolean;
```

Defined in: [ui/core/view/index.d.ts:950](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L950)

Internal method:
Closes all modal views. Should be used by plugins like `nativescript-angular` which implement their own `modal views` service.

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_closeAllModalViewsInternal`](LayoutBase.md#closeallmodalviewsinternal)

***

### \_createPropertyChangeData()

```ts
_createPropertyChangeData(
   propertyName: string, 
   value: any, 
   oldValue?: any): PropertyChangeData;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`_createPropertyChangeData`](LayoutBase.md#createpropertychangedata)

***

### \_dialogClosed()

```ts
_dialogClosed(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_dialogClosed`](LayoutBase.md#dialogclosed)

***

### \_eachLayoutView()

```ts
_eachLayoutView(callback: (View: any) => void): void;
```

Defined in: [ui/core/view/index.d.ts:982](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L982)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`View`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_eachLayoutView`](LayoutBase.md#eachlayoutview)

***

### \_emit()

```ts
_emit(eventName: string): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_emit`](LayoutBase.md#emit)

***

### \_getNativeViewsCount()

```ts
_getNativeViewsCount(): number;
```

Defined in: [ui/core/view/index.d.ts:944](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L944)

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_getNativeViewsCount`](LayoutBase.md#getnativeviewscount)

***

### \_getRootModalHost()

```ts
_getRootModalHost(): ViewBase;
```

Defined in: [ui/core/view/index.d.ts:963](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L963)

Internal method:
Walks up the view tree — through the presenting view of any modal on the way —
to the root this view ultimately lives under, which is the root view of its window.

#### Returns

[`ViewBase`](ViewBase.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_getRootModalHost`](LayoutBase.md#getrootmodalhost)

***

### \_getRootModalViews()

```ts
_getRootModalViews(): ViewBase[];
```

Defined in: [ui/core/view/index.d.ts:956](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L956)

Internal method:
Gets all modal views of the current view.

#### Returns

[`ViewBase`](ViewBase.md)[]

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_getRootModalViews`](LayoutBase.md#getrootmodalviews)

***

### \_getValue()

```ts
_getValue(property: any): never;
```

Defined in: [ui/core/view/index.d.ts:1170](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1170)

__Obsolete:__ There is a new property system that does not rely on _getValue.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `any` |

#### Returns

`never`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_getValue`](LayoutBase.md#getvalue)

***

### \_handleLivesync()

```ts
_handleLivesync(context?: {
  path: string;
  type: string;
}): boolean;
```

Defined in: [ui/core/view/index.d.ts:1141](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1141)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context?` | \{ `path`: `string`; `type`: `string`; \} |
| `context.path?` | `string` |
| `context.type?` | `string` |

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_handleLivesync`](LayoutBase.md#handlelivesync)

***

### \_hasAncestorView()

```ts
_hasAncestorView(ancestorView: View): boolean;
```

Defined in: [ui/core/view/index.d.ts:1164](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1164)

Checks whether the current view has specific view for an ancestor.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ancestorView` | [`View`](View.md) |

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_hasAncestorView`](LayoutBase.md#hasancestorview)

***

### \_hideNativeModalView()

```ts
protected _hideNativeModalView(parent: ViewCommon, whenClosedCallback: () => void): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `ViewCommon` |
| `whenClosedCallback` | () => `void` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_hideNativeModalView`](LayoutBase.md#hidenativemodalview)

***

### \_inheritStyles()

```ts
_inheritStyles(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_inheritStyles`](LayoutBase.md#inheritstyles)

***

### \_inheritStyleScope()

```ts
_inheritStyleScope(styleScope: StyleScope): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `styleScope` | `StyleScope` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_inheritStyleScope`](LayoutBase.md#inheritstylescope)

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_layoutParent`](LayoutBase.md#layoutparent)

***

### \_observe()

```ts
protected _observe(
   type: GestureTypes, 
   callback: (args: GestureEventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) |
| `callback` | (`args`: [`GestureEventData`](../interfaces/GestureEventData.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_observe`](LayoutBase.md#observe)

***

### \_onAttachedToWindow()

```ts
_onAttachedToWindow(): void;
```

Defined in: [ui/core/view/index.d.ts:1154](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1154)

Called in android when native view is attached to window.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_onAttachedToWindow`](LayoutBase.md#onattachedtowindow)

***

### \_onDetachedFromWindow()

```ts
_onDetachedFromWindow(): void;
```

Defined in: [ui/core/view/index.d.ts:1159](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1159)

Called in android when native view is dettached from window.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_onDetachedFromWindow`](LayoutBase.md#ondetachedfromwindow)

***

### \_onRootViewReset()

```ts
_onRootViewReset(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_onRootViewReset`](LayoutBase.md#onrootviewreset)

***

### \_onSizeChanged()?

```ts
optional _onSizeChanged(): void;
```

Defined in: [ui/core/view/index.d.ts:987](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L987)

iOS Only Internal method used to update various view details like background rerendering, border, etc.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_onSizeChanged`](LayoutBase.md#onsizechanged)

***

### \_parentChanged()

```ts
_parentChanged(oldParent: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldParent` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_parentChanged`](LayoutBase.md#parentchanged)

***

### \_raiseLayoutChangedEvent()

```ts
protected _raiseLayoutChangedEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_raiseLayoutChangedEvent`](LayoutBase.md#raiselayoutchangedevent)

***

### \_raiseShowingModallyEvent()

```ts
protected _raiseShowingModallyEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_raiseShowingModallyEvent`](LayoutBase.md#raiseshowingmodallyevent)

***

### \_raiseShownModallyEvent()

```ts
protected _raiseShownModallyEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_raiseShownModallyEvent`](LayoutBase.md#raiseshownmodallyevent)

***

### \_registerLayoutChild()

```ts
_registerLayoutChild(child: View): void;
```

Defined in: [ui/layouts/layout-base.d.ts:53](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L53)

INTERNAL. Used by the layout system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `child` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_registerLayoutChild`](LayoutBase.md#registerlayoutchild)

***

### \_removeView()

```ts
_removeView(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Core logic for removing a child view from this instance. Used by the framework to handle lifecycle events more centralized. Do not use outside the UI Stack implementation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_removeView`](LayoutBase.md#removeview)

***

### \_removeViewCore()

```ts
_removeViewCore(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_removeViewCore`](LayoutBase.md#removeviewcore)

***

### \_removeViewFromNativeVisualTree()

```ts
_removeViewFromNativeVisualTree(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_removeViewFromNativeVisualTree`](LayoutBase.md#removeviewfromnativevisualtree)

***

### \_resumeNativeUpdates()

```ts
_resumeNativeUpdates(type: SuspendType): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SuspendType` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_resumeNativeUpdates`](LayoutBase.md#resumenativeupdates)

***

### \_setDefaultPaddings()

```ts
_setDefaultPaddings(insets: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `insets` | `any` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_setDefaultPaddings`](LayoutBase.md#setdefaultpaddings)

***

### \_setupAsRootView()

```ts
_setupAsRootView(context: any): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_setupAsRootView`](LayoutBase.md#setupasrootview)

***

### \_setupUI()

```ts
_setupUI(
   context: any, 
   atIndex?: number, 
   parentIsLoaded?: boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`_setupUI`](LayoutBase.md#setupui)

***

### \_setValue()

```ts
_setValue(property: any, value: any): never;
```

Defined in: [ui/core/view/index.d.ts:1175](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1175)

__Obsolete:__ There is a new property system that does not rely on _setValue.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `any` |
| `value` | `any` |

#### Returns

`never`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_setValue`](LayoutBase.md#setvalue)

***

### \_shouldDelayLayout()

```ts
_shouldDelayLayout(): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

When returning true the callLoaded method will be run in setTimeout
Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_shouldDelayLayout`](LayoutBase.md#shoulddelaylayout)

***

### \_showNativeModalView()

```ts
protected _showNativeModalView(parent: ViewCommon, options: ShowModalOptions): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent` | `ViewCommon` |
| `options` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_showNativeModalView`](LayoutBase.md#shownativemodalview)

***

### \_suspendNativeUpdates()

```ts
_suspendNativeUpdates(type: SuspendType): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `SuspendType` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_suspendNativeUpdates`](LayoutBase.md#suspendnativeupdates)

***

### \_tearDownUI()

```ts
_tearDownUI(force?: boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Tears down the UI for ViewBase and all its children recursively.
This method should *not* be overridden by derived views.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_tearDownUI`](LayoutBase.md#teardownui)

***

### \_unregisterLayoutChild()

```ts
_unregisterLayoutChild(child: View): void;
```

Defined in: [ui/layouts/layout-base.d.ts:58](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L58)

INTERNAL. Used by the layout system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `child` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`_unregisterLayoutChild`](LayoutBase.md#unregisterlayoutchild)

***

### \_updateStyleScope()

```ts
_updateStyleScope(
   cssFileName?: string, 
   cssString?: string, 
   css?: string): void;
```

Defined in: [ui/core/view/index.d.ts:1149](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1149)

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

[`LayoutBase`](LayoutBase.md).[`_updateStyleScope`](LayoutBase.md#updatestylescope)

***

### accessibilityAnnouncement()

```ts
accessibilityAnnouncement(msg?: string): void;
```

Defined in: [ui/core/view/index.d.ts:1022](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1022)

Make an announcement to the screen reader.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg?` | `string` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityAnnouncement`](LayoutBase.md#accessibilityannouncement)

***

### accessibilityScreenChanged()

```ts
accessibilityScreenChanged(): void;
```

Defined in: [ui/core/view/index.d.ts:1027](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1027)

Announce screen changed

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`accessibilityScreenChanged`](LayoutBase.md#accessibilityscreenchanged)

***

### addChild()

```ts
addChild(view: View): void;
```

Defined in: [ui/layouts/layout-base.d.ts:30](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L30)

Adds the view to children array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`View`](View.md) | The view to be added to the end of the children array. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`addChild`](LayoutBase.md#addchild)

***

### addEventListener()

```ts
addEventListener(
   eventNames: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

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

[`LayoutBase`](LayoutBase.md).[`addEventListener`](LayoutBase.md#addeventlistener)

***

### addPseudoClass()

```ts
protected addPseudoClass(name: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Unstable

A widget can call this method to add a matching css pseudo class.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`addPseudoClass`](LayoutBase.md#addpseudoclass)

***

### animate()

```ts
animate(options: AnimationDefinition): AnimationPromise;
```

Defined in: [ui/core/view/index.d.ts:879](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L879)

Animates one or more properties of the view based on the supplied options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AnimationDefinition` |

#### Returns

[`AnimationPromise`](../type-aliases/AnimationPromise.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`animate`](LayoutBase.md#animate)

***

### bind()

```ts
bind(options: BindingOptions, source?: Object): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`BindingOptions`](../interfaces/BindingOptions.md) |
| `source?` | `Object` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`bind`](LayoutBase.md#bind)

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`callLoaded`](LayoutBase.md#callloaded)

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`callUnloaded`](LayoutBase.md#callunloaded)

***

### closeModal()

```ts
closeModal(...args: any[]): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

Closes the current modal view that this page is showing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`closeModal`](LayoutBase.md#closemodal)

***

### createAnimation()

```ts
createAnimation(options: AnimationDefinition): Animation;
```

Defined in: [ui/core/view/index.d.ts:884](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L884)

Creates an Animation object based on the supplied options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AnimationDefinition` |

#### Returns

[`Animation`](Animation.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`createAnimation`](LayoutBase.md#createanimation)

***

### createNativeView()

```ts
createNativeView(): Object;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Creates a native view.
Returns either android.view.View or UIView.

#### Returns

`Object`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`createNativeView`](LayoutBase.md#createnativeview)

***

### deletePseudoClass()

```ts
protected deletePseudoClass(name: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Unstable

A widget can call this method to discard matching css pseudo class.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`deletePseudoClass`](LayoutBase.md#deletepseudoclass)

***

### destroyNode()

```ts
destroyNode(forceDestroyChildren?: boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`destroyNode`](LayoutBase.md#destroynode)

***

### disposeNativeView()

```ts
disposeNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Clean up references to the native view.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`disposeNativeView`](LayoutBase.md#disposenativeview)

***

### eachChild()

```ts
eachChild(callback: (child: ViewBase) => boolean): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

Iterates over children of type ViewBase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`ViewBase`](ViewBase.md)) => `boolean` | Called for each child of type ViewBase. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`eachChild`](LayoutBase.md#eachchild)

***

### eachChildView()

```ts
eachChildView(callback: (view: View) => boolean): void;
```

Defined in: [ui/core/view/index.d.ts:1003](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1003)

Iterates over children of type View.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`view`: [`View`](View.md)) => `boolean` | Called for each child of type View. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`eachChildView`](LayoutBase.md#eachchildview)

***

### eachLayoutChild()

```ts
eachLayoutChild(callback: (child: View, isLast: boolean) => void): void;
```

Defined in: [ui/layouts/layout-base.d.ts:64](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L64)

Calls the callback for each child that should be laid out.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`View`](View.md), `isLast`: `boolean`) => `void` | The callback |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`eachLayoutChild`](LayoutBase.md#eachlayoutchild)

***

### ensureDomNode()

```ts
ensureDomNode(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Unstable

Ensures a dom-node for this view.

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`ensureDomNode`](LayoutBase.md#ensuredomnode)

***

### focus()

```ts
focus(): boolean;
```

Defined in: [ui/core/view/index.d.ts:813](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L813)

Tries to focus the view.
Returns a value indicating whether this view or one of its descendants actually took focus.

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`focus`](LayoutBase.md#focus)

***

### get()

```ts
get(name: string): any;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Gets the value of the specified property.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`get`](LayoutBase.md#get)

***

### getActualSize()

```ts
getActualSize(): Size;
```

Defined in: [ui/core/view/index.d.ts:909](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L909)

Returns the actual size of the view in device-independent pixels.

#### Returns

[`Size`](../interfaces/Size.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getActualSize`](LayoutBase.md#getactualsize)

***

### getChildAt()

```ts
getChildAt(index: number): View;
```

Defined in: [ui/layouts/layout-base.d.ts:18](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L18)

Returns the view at the specified position.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | The position at which to get the child from. |

#### Returns

[`View`](View.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getChildAt`](LayoutBase.md#getchildat)

***

### getChildIndex()

```ts
getChildIndex(child: View): number;
```

Defined in: [ui/layouts/layout-base.d.ts:24](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L24)

Returns the position of the child view

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `child` | [`View`](View.md) | The child view that we are looking for. |

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getChildIndex`](LayoutBase.md#getchildindex)

***

### getChildrenCount()

```ts
getChildrenCount(): number;
```

Defined in: [ui/layouts/layout-base.d.ts:12](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L12)

Returns the number of children in this Layout.

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getChildrenCount`](LayoutBase.md#getchildrencount)

***

### getClosestWindow()

```ts
getClosestWindow(): Window;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

(Android only) Gets closest window parent considering modals.

#### Returns

`Window`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getClosestWindow`](LayoutBase.md#getclosestwindow)

***

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`string`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getEffectivePaddingShorthand`](LayoutBase.md#geteffectivepaddingshorthand)

***

### getGestureObservers()

```ts
getGestureObservers(type: GestureTypes): GesturesObserver[];
```

Defined in: [ui/core/view/index.d.ts:815](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L815)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`GestureTypes`](../enumerations/GestureTypes.md) |

#### Returns

[`GesturesObserver`](GesturesObserver.md)[]

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getGestureObservers`](LayoutBase.md#getgestureobservers)

***

### getLocationInWindow()

```ts
getLocationInWindow(): Point;
```

Defined in: [ui/core/view/index.d.ts:894](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L894)

Returns the location of this view in the window coordinate system.

#### Returns

`Point`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getLocationInWindow`](LayoutBase.md#getlocationinwindow)

***

### getLocationOnScreen()

```ts
getLocationOnScreen(): Point;
```

Defined in: [ui/core/view/index.d.ts:899](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L899)

Returns the location of this view in the screen coordinate system.

#### Returns

`Point`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getLocationOnScreen`](LayoutBase.md#getlocationonscreen)

***

### getLocationRelativeTo()

```ts
getLocationRelativeTo(otherView: View): Point;
```

Defined in: [ui/core/view/index.d.ts:904](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L904)

Returns the location of this view in the otherView's coordinate system.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `otherView` | [`View`](View.md) |

#### Returns

`Point`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getLocationRelativeTo`](LayoutBase.md#getlocationrelativeto)

***

### getMeasuredHeight()

```ts
getMeasuredHeight(): number;
```

Defined in: [ui/core/view/index.d.ts:741](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L741)

Returns the raw height component.

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getMeasuredHeight`](LayoutBase.md#getmeasuredheight)

***

### getMeasuredState()

```ts
getMeasuredState(): number;
```

Defined in: [ui/core/view/index.d.ts:743](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L743)

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getMeasuredState`](LayoutBase.md#getmeasuredstate)

***

### getMeasuredWidth()

```ts
getMeasuredWidth(): number;
```

Defined in: [ui/core/view/index.d.ts:736](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L736)

Returns the raw width component.

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getMeasuredWidth`](LayoutBase.md#getmeasuredwidth)

***

### getNativeWindow()

```ts
getNativeWindow(): NativeWindow;
```

Defined in: [ui/core/view/index.d.ts:980](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L980)

The window currently hosting this view, or `undefined` when the view is not part of
any window's view tree — including a view whose window has been closed.

Resolved on every call by walking up to the root view — through the presenting view
of any modal on the way — so a view re-parented into another window's tree reports
the window it moved to.

#### Returns

[`NativeWindow`](NativeWindow.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getNativeWindow`](LayoutBase.md#getnativewindow)

***

### getSafeAreaInsets()

```ts
getSafeAreaInsets(): Position;
```

Defined in: [ui/core/view/index.d.ts:889](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L889)

Returns the iOS safe area insets of this view.

#### Returns

`Position`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`getSafeAreaInsets`](LayoutBase.md#getsafeareainsets)

***

### getViewByDomId()

```ts
getViewByDomId<T>(domId: number): T;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`getViewByDomId`](LayoutBase.md#getviewbydomid)

***

### getViewById()

```ts
getViewById<T>(id: string): T;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`getViewById`](LayoutBase.md#getviewbyid)

***

### hasGestureObservers()?

```ts
optional hasGestureObservers(): boolean;
```

Defined in: [ui/core/view/index.d.ts:992](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L992)

Android only check if gesture observers are attached

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`hasGestureObservers`](LayoutBase.md#hasgestureobservers)

***

### hasListeners()

```ts
hasListeners(eventName: string): boolean;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Checks whether a listener is registered for the specified event name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event to check for. |

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`hasListeners`](LayoutBase.md#haslisteners)

***

### initNativeView()

```ts
initNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Initializes properties/listeners of the native view.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`initNativeView`](LayoutBase.md#initnativeview)

***

### insertChild()

```ts
insertChild(child: View, atIndex: number): boolean;
```

Defined in: [ui/layouts/layout-base.d.ts:37](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L37)

Inserts the view to children array at the specified index.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `child` | [`View`](View.md) | - |
| `atIndex` | `number` | The insertion index. |

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`insertChild`](LayoutBase.md#insertchild)

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

Defined in: [ui/core/view/index.d.ts:731](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L731)

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

[`LayoutBase`](LayoutBase.md).[`layout`](LayoutBase.md#layout)

***

### layoutNativeView()

```ts
layoutNativeView(
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: [ui/core/view/index.d.ts:776](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L776)

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

[`LayoutBase`](LayoutBase.md).[`layoutNativeView`](LayoutBase.md#layoutnativeview)

***

### loadView()

```ts
loadView(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Load view.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | to load. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`loadView`](LayoutBase.md#loadview)

***

### measure()

```ts
measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
```

Defined in: [ui/core/view/index.d.ts:720](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L720)

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

[`LayoutBase`](LayoutBase.md).[`measure`](LayoutBase.md#measure)

***

### notify()

```ts
notify<T>(data: T): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`notify`](LayoutBase.md#notify)

***

### notifyPropertyChange()

```ts
notifyPropertyChange(
   name: string, 
   value: any, 
   oldValue?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`notifyPropertyChange`](LayoutBase.md#notifypropertychange)

***

### off()

```ts
off(
   eventName: string, 
   callback?: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:826](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L826)

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

[`LayoutBase`](LayoutBase.md).[`off`](LayoutBase.md#off)

***

### on()

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:838](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L838)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

#### Call Signature

```ts
on(
   event: "loaded", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:843](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L843)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

#### Call Signature

```ts
on(
   event: "unloaded", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:848](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L848)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

#### Call Signature

```ts
on(
   event: "androidBackPressed", 
   callback: (args: EventData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:854](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L854)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

#### Call Signature

```ts
on(
   event: "showingModally", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/core/view/index.d.ts:859](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L859)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

#### Call Signature

```ts
on(
   event: "shownModally", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:864](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L864)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

#### Call Signature

```ts
on(
   event: "androidOverflowInset", 
   callback: (args: ShownModallyData) => void, 
   thisArg?: any): any;
```

Defined in: [ui/core/view/index.d.ts:869](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L869)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on)

***

### onBackPressed()

```ts
onBackPressed(): boolean;
```

Defined in: [ui/core/view/index.d.ts:914](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L914)

Derived classes can override this method to handle Android back button press.

#### Returns

`boolean`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`onBackPressed`](LayoutBase.md#onbackpressed)

***

### once()

```ts
once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`once`](LayoutBase.md#once)

***

### onLayout()

```ts
onLayout(
   left: number, 
   top: number, 
   right: number, 
   bottom: number): void;
```

Defined in: [ui/core/view/index.d.ts:760](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L760)

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

[`LayoutBase`](LayoutBase.md).[`onLayout`](LayoutBase.md#onlayout)

***

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`onLoaded`](LayoutBase.md#onloaded)

***

### onMeasure()

```ts
onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
```

Defined in: [ui/core/view/index.d.ts:751](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L751)

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

[`LayoutBase`](LayoutBase.md).[`onMeasure`](LayoutBase.md#onmeasure)

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`onResumeNativeUpdates`](LayoutBase.md#onresumenativeupdates)

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`onUnloaded`](LayoutBase.md#onunloaded)

***

### removeChild()

```ts
removeChild(view: View): void;
```

Defined in: [ui/layouts/layout-base.d.ts:43](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L43)

Removes the specified view from the children array.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`View`](View.md) | The view to remove from the children array. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`removeChild`](LayoutBase.md#removechild)

***

### removeChildren()

```ts
removeChildren(): void;
```

Defined in: [ui/layouts/layout-base.d.ts:48](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/layout-base.d.ts#L48)

Removes all views in this layout.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`removeChildren`](LayoutBase.md#removechildren)

***

### removeEventListener()

```ts
removeEventListener(
   eventNames: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

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

[`LayoutBase`](LayoutBase.md).[`removeEventListener`](LayoutBase.md#removeeventlistener)

***

### requestLayout()

```ts
requestLayout(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Invalidates the layout of the view and triggers a new layout pass.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`requestLayout`](LayoutBase.md#requestlayout)

***

### resetNativeView()

```ts
resetNativeView(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

Resets properties/listeners set to the native view.

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`resetNativeView`](LayoutBase.md#resetnativeview)

***

### sendAccessibilityEvent()

```ts
sendAccessibilityEvent(options: AccessibilityEventOptions): void;
```

Defined in: [ui/core/view/index.d.ts:1017](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1017)

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

[`LayoutBase`](LayoutBase.md).[`sendAccessibilityEvent`](LayoutBase.md#sendaccessibilityevent)

***

### set()

```ts
set(name: string, value: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Updates the specified property with the provided value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`set`](LayoutBase.md#set)

***

### setAccessibilityIdentifier()

```ts
setAccessibilityIdentifier(view: any, value: string): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `any` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`setAccessibilityIdentifier`](LayoutBase.md#setaccessibilityidentifier)

***

### setInlineStyle()

```ts
setInlineStyle(style: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | `string` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`setInlineStyle`](LayoutBase.md#setinlinestyle)

***

### setMeasuredDimension()

```ts
setMeasuredDimension(measuredWidth: number, measuredHeight: number): void;
```

Defined in: [ui/core/view/index.d.ts:767](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L767)

This method must be called by onMeasure(int, int) to store the measured width and measured height. Failing to do so will trigger an exception at measurement time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `measuredWidth` | `number` | The measured width of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL. |
| `measuredHeight` | `number` | The measured height of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`setMeasuredDimension`](LayoutBase.md#setmeasureddimension)

***

### setNativeView()

```ts
setNativeView(value: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`setNativeView`](LayoutBase.md#setnativeview)

***

### setOnTouchListener()?

```ts
optional setOnTouchListener(): void;
```

Defined in: [ui/core/view/index.d.ts:997](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L997)

Android only to set the touch listener

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`setOnTouchListener`](LayoutBase.md#setontouchlistener)

***

### setProperty()

```ts
setProperty(name: string, value: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

Updates the specified property with the provided value and raises a property change event and a specific change event based on the property name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`setProperty`](LayoutBase.md#setproperty)

***

### showModal()

```ts
showModal(...args: any[]): View;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

Shows the view passed as parameter as a modal view.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

[`View`](View.md)

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`showModal`](LayoutBase.md#showmodal)

***

### toString()

```ts
toString(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`toString`](LayoutBase.md#tostring)

***

### unbind()

```ts
unbind(property: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `property` | `string` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`unbind`](LayoutBase.md#unbind)

***

### unloadView()

```ts
unloadView(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Unload view.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`ViewBase`](ViewBase.md) | to unload. |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`unloadView`](LayoutBase.md#unloadview)

***

### updateStatusBarStyle()

```ts
updateStatusBarStyle(value: "dark" | "light"): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `"dark"` \| `"light"` |

#### Returns

`void`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`updateStatusBarStyle`](LayoutBase.md#updatestatusbarstyle)

***

### ~~addEventListener()~~

```ts
static addEventListener(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`addEventListener`](LayoutBase.md#addeventlistener-1)

***

### combineMeasuredStates()

```ts
static combineMeasuredStates(curState: number, newState: any): number;
```

Defined in: [ui/core/view/index.d.ts:807](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L807)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `curState` | `number` |
| `newState` | `any` |

#### Returns

`number`

#### Inherited from

[`LayoutBase`](LayoutBase.md).[`combineMeasuredStates`](LayoutBase.md#combinemeasuredstates)

***

### getLeft()

```ts
static getLeft(view: View): LengthType;
```

Defined in: [ui/layouts/absolute-layout/index.d.ts:16](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/absolute-layout/index.d.ts#L16)

Gets the value of the Left property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

[`LengthType`](../namespaces/CoreTypes/type-aliases/LengthType.md)

***

### getTop()

```ts
static getTop(view: View): LengthType;
```

Defined in: [ui/layouts/absolute-layout/index.d.ts:26](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/absolute-layout/index.d.ts#L26)

Gets the value of the Top property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |

#### Returns

[`LengthType`](../namespaces/CoreTypes/type-aliases/LengthType.md)

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

Defined in: [ui/core/view/index.d.ts:795](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L795)

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

[`LayoutBase`](LayoutBase.md).[`layoutChild`](LayoutBase.md#layoutchild)

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

Defined in: [ui/core/view/index.d.ts:785](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L785)

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

[`LayoutBase`](LayoutBase.md).[`measureChild`](LayoutBase.md#measurechild)

***

### ~~off()~~

```ts
static off(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`off`](LayoutBase.md#off-1)

***

### ~~on()~~

```ts
static on(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any, 
   once?: boolean): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`on`](LayoutBase.md#on-1)

***

### ~~once()~~

```ts
static once(
   eventName: string, 
   callback: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`once`](LayoutBase.md#once-1)

***

### ~~removeEventListener()~~

```ts
static removeEventListener(
   eventName: string, 
   callback?: (data: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [data/observable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/data/observable/index.ts)

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

[`LayoutBase`](LayoutBase.md).[`removeEventListener`](LayoutBase.md#removeeventlistener-1)

***

### resolveSizeAndState()

```ts
static resolveSizeAndState(
   size: number, 
   specSize: number, 
   specMode: number, 
   childMeasuredState: number): number;
```

Defined in: [ui/core/view/index.d.ts:805](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L805)

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

[`LayoutBase`](LayoutBase.md).[`resolveSizeAndState`](LayoutBase.md#resolvesizeandstate)

***

### setLeft()

```ts
static setLeft(view: View, value: LengthType): void;
```

Defined in: [ui/layouts/absolute-layout/index.d.ts:21](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/absolute-layout/index.d.ts#L21)

Sets the value of the Left property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `value` | [`LengthType`](../namespaces/CoreTypes/type-aliases/LengthType.md) |

#### Returns

`void`

***

### setTop()

```ts
static setTop(view: View, value: LengthType): void;
```

Defined in: [ui/layouts/absolute-layout/index.d.ts:31](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/layouts/absolute-layout/index.d.ts#L31)

Sets the value of the Top property from a given View.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](View.md) |
| `value` | [`LengthType`](../namespaces/CoreTypes/type-aliases/LengthType.md) |

#### Returns

`void`
