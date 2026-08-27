---
title: Frame
titleTemplate: :title - API / NativeScript
description: Represents the logical View unit that is responsible for navigation within an application. Nested frames are supported, enabling hierarchical navigation scen...
contributors: false
---

Defined in: [ui/frame/index.d.ts:17](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L17)

Represents the logical View unit that is responsible for navigation within an application.
Nested frames are supported, enabling hierarchical navigation scenarios.

## Ns View

Frame

## Extends

- `FrameBase`

## Constructors

### Constructor

```ts
new Frame(): Frame;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`Frame`

#### Inherited from

```ts
FrameBase.constructor
```

## Properties

### \_androidContentDescriptionUpdated?

```ts
optional _androidContentDescriptionUpdated?: boolean;
```

Defined in: [ui/core/view/index.d.ts:358](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L358)

Internal use only. This is used to limit the number of updates to android.view.View.setContentDescription()

#### Inherited from

```ts
FrameBase._androidContentDescriptionUpdated
```

***

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._automaticallyAdjustsScrollViewInsets
```

***

### \_closeModalCallback

```ts
protected _closeModalCallback: Function;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

```ts
FrameBase._closeModalCallback
```

***

### \_context

```ts
_context: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._context
```

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._cssState
```

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._defaultPaddingBottom
```

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._defaultPaddingLeft
```

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._defaultPaddingRight
```

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._defaultPaddingTop
```

***

### \_domId

```ts
_domId: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._domId
```

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._ignoreFlexMinWidthHeightReset
```

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._isAddedToNativeVisualTree
```

***

### \_isInFrameStack

```ts
_isInFrameStack: boolean;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Inherited from

```ts
FrameBase._isInFrameStack
```

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._isPaddingRelative
```

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._isStyleScopeHost
```

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

```ts
FrameBase._nativeWindow
```

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._oldBottom
```

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._oldLeft
```

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._oldRight
```

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._oldTop
```

***

### \_resolvedPage

```ts
_resolvedPage: Page;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

A reference of current page that is set earlier than current entry.
Using this property, methods like 'eachChildView' and '_childrenCount' gain access to page view
just in time for calls like '_addView' to perform view-tree iterations.

#### Inherited from

```ts
FrameBase._resolvedPage
```

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase._styleScope
```

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

```ts
FrameBase._suspendNativeUpdatesCount
```

***

### accessibilityHidden

```ts
accessibilityHidden: boolean;
```

Defined in: [ui/core/view/index.d.ts:260](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L260)

Hide the view and its children from the a11y service

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityHidden
```

***

### accessibilityHint

```ts
accessibilityHint: string;
```

Defined in: [ui/core/view/index.d.ts:305](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L305)

A hint describes the elements behavior. Example: 'Tap change playback speed'

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityHint
```

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

```ts
FrameBase.accessibilityIdentifier
```

***

### accessibilityIgnoresInvertColors

```ts
accessibilityIgnoresInvertColors: boolean;
```

Defined in: [ui/core/view/index.d.ts:332](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L332)

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityIgnoresInvertColors
```

***

### accessibilityLabel

```ts
accessibilityLabel: string;
```

Defined in: [ui/core/view/index.d.ts:291](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L291)

Short description of the element, ideally one word.

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityLabel
```

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

```ts
FrameBase.accessibilityLanguage
```

***

### accessibilityLiveRegion

```ts
accessibilityLiveRegion: AccessibilityLiveRegion;
```

Defined in: [ui/core/view/index.d.ts:312](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L312)

When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityLiveRegion
```

***

### accessibilityMediaSession

```ts
accessibilityMediaSession: boolean;
```

Defined in: [ui/core/view/index.d.ts:327](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L327)

This view starts a media session. Equivalent to trait = startsMedia

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityMediaSession
```

***

### accessibilityRole

```ts
accessibilityRole: AccessibilityRole;
```

Defined in: [ui/core/view/index.d.ts:276](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L276)

Which role should this view be treated by the a11y service?

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityRole
```

***

### accessibilityState

```ts
accessibilityState: AccessibilityState;
```

Defined in: [ui/core/view/index.d.ts:284](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L284)

Which state should this view be treated as by the a11y service?

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityState
```

***

### accessibilityValue

```ts
accessibilityValue: string;
```

Defined in: [ui/core/view/index.d.ts:298](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L298)

Current value of the element in a localized string.

#### Ns Property

#### Inherited from

```ts
FrameBase.accessibilityValue
```

***

### accessible

```ts
accessible: boolean;
```

Defined in: [ui/core/view/index.d.ts:253](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L253)

If `true` the element is an accessibility element and all the children will be treated as a single selectable component.

#### Ns Property

#### Inherited from

```ts
FrameBase.accessible
```

***

### actionBarVisibility

```ts
actionBarVisibility: "auto" | "always" | "never";
```

Defined in: [ui/frame/index.d.ts:126](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L126)

Used to control the visibility the Navigation Bar in iOS and the Action Bar in Android.

#### Ns Property

#### Overrides

```ts
FrameBase.actionBarVisibility
```

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

#### Inherited from

```ts
FrameBase.alignSelf
```

***

### android

```ts
android: AndroidFrame;
```

Defined in: [ui/frame/index.d.ts:170](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L170)

Gets the AndroidFrame object that represents the Android-specific APIs for this Frame. Valid when running on Android OS.

#### Overrides

```ts
FrameBase.android
```

***

### androidDynamicElevationOffset

```ts
androidDynamicElevationOffset: number;
```

Defined in: [ui/core/view/index.d.ts:378](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L378)

Gets or sets the dynamic elevation offset of the android view.

#### Ns Property

#### Inherited from

```ts
FrameBase.androidDynamicElevationOffset
```

***

### androidElevation

```ts
androidElevation: number;
```

Defined in: [ui/core/view/index.d.ts:371](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L371)

Gets or sets the elevation of the android view.

#### Ns Property

#### Inherited from

```ts
FrameBase.androidElevation
```

***

### androidOverflowEdge

```ts
androidOverflowEdge: AndroidOverflow;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

```ts
FrameBase.androidOverflowEdge
```

***

### animated

```ts
animated: boolean;
```

Defined in: [ui/frame/index.d.ts:149](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L149)

Gets or sets if navigation transitions should be animated.

#### Overrides

```ts
FrameBase.animated
```

***

### automationText

```ts
automationText: string;
```

Defined in: [ui/core/view/index.d.ts:364](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L364)

#### Ns Property

#### Inherited from

```ts
FrameBase.automationText
```

***

### background

```ts
background: string;
```

Defined in: [ui/core/view/index.d.ts:385](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L385)

Gets or sets the background style property.

#### Ns Property

#### Inherited from

```ts
FrameBase.background
```

***

### backgroundColor

```ts
backgroundColor: string | Color;
```

Defined in: [ui/core/view/index.d.ts:392](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L392)

Gets or sets the background color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.backgroundColor
```

***

### backgroundImage

```ts
backgroundImage: string | LinearGradient;
```

Defined in: [ui/core/view/index.d.ts:399](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L399)

Gets or sets the background image of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.backgroundImage
```

***

### backStack

```ts
backStack: BackstackEntry[];
```

Defined in: [ui/frame/index.d.ts:132](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L132)

Gets the back stack of this instance.

#### Overrides

```ts
FrameBase.backStack
```

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: [ui/core/view/index.d.ts:134](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L134)

Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.

#### Ns Property

#### Inherited from

```ts
FrameBase.bindingContext
```

***

### borderBottomColor

```ts
borderBottomColor: Color;
```

Defined in: [ui/core/view/index.d.ts:162](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L162)

Gets or sets the bottom border color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderBottomColor
```

***

### borderBottomLeftRadius

```ts
borderBottomLeftRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:239](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L239)

Gets or sets the bottom left border radius of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderBottomLeftRadius
```

***

### borderBottomRightRadius

```ts
borderBottomRightRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:232](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L232)

Gets or sets the bottom right border radius of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderBottomRightRadius
```

***

### borderBottomWidth

```ts
borderBottomWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:197](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L197)

Gets or sets the bottom border width of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderBottomWidth
```

***

### borderColor

```ts
borderColor: string | Color;
```

Defined in: [ui/core/view/index.d.ts:141](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L141)

Gets or sets the border color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderColor
```

***

### borderLeftColor

```ts
borderLeftColor: Color;
```

Defined in: [ui/core/view/index.d.ts:169](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L169)

Gets or sets the left border color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderLeftColor
```

***

### borderLeftWidth

```ts
borderLeftWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:204](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L204)

Gets or sets the left border width of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderLeftWidth
```

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

```ts
FrameBase.borderRadius
```

***

### borderRightColor

```ts
borderRightColor: Color;
```

Defined in: [ui/core/view/index.d.ts:155](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L155)

Gets or sets the right border color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderRightColor
```

***

### borderRightWidth

```ts
borderRightWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:190](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L190)

Gets or sets the right border width of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderRightWidth
```

***

### borderTopColor

```ts
borderTopColor: Color;
```

Defined in: [ui/core/view/index.d.ts:148](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L148)

Gets or sets the top border color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderTopColor
```

***

### borderTopLeftRadius

```ts
borderTopLeftRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:218](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L218)

Gets or sets the top left border radius of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderTopLeftRadius
```

***

### borderTopRightRadius

```ts
borderTopRightRadius: LengthType;
```

Defined in: [ui/core/view/index.d.ts:225](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L225)

Gets or sets the top right border radius of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderTopRightRadius
```

***

### borderTopWidth

```ts
borderTopWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:183](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L183)

Gets or sets the top border width of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.borderTopWidth
```

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

```ts
FrameBase.borderWidth
```

***

### boxShadow

```ts
boxShadow: string | ShadowCSSValues[];
```

Defined in: [ui/core/view/index.d.ts:406](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L406)

Gets or sets the box shadow of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.boxShadow
```

***

### className

```ts
className: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the CSS class name for this view.

#### Ns Property

#### Inherited from

```ts
FrameBase.className
```

***

### col

```ts
col: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

```ts
FrameBase.col
```

***

### color

```ts
color: Color;
```

Defined in: [ui/core/view/index.d.ts:246](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L246)

Gets or sets the color of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.color
```

***

### colSpan

```ts
colSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The number of columns for the element to span across.

#### Ns Property

#### Inherited from

```ts
FrameBase.colSpan
```

***

### column

```ts
column: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

#### Inherited from

```ts
FrameBase.column
```

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Ns Property

#### Inherited from

```ts
FrameBase.columnSpan
```

***

### cssClasses

```ts
cssClasses: Set<string>;
```

Defined in: [ui/core/view/index.d.ts:711](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L711)

#### Inherited from

```ts
FrameBase.cssClasses
```

***

### cssPseudoClasses

```ts
cssPseudoClasses: Set<string>;
```

Defined in: [ui/core/view/index.d.ts:712](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L712)

#### Inherited from

```ts
FrameBase.cssPseudoClasses
```

***

### cssType

```ts
cssType: string;
```

Defined in: [ui/core/view/index.d.ts:693](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L693)

Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.

#### Inherited from

```ts
FrameBase.cssType
```

***

### currentEntry

```ts
currentEntry: NavigationEntry;
```

Defined in: [ui/frame/index.d.ts:143](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L143)

Gets the NavigationEntry instance the Frame is currently navigated to.

#### Overrides

```ts
FrameBase.currentEntry
```

***

### currentPage

```ts
currentPage: Page;
```

Defined in: [ui/frame/index.d.ts:137](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L137)

Gets the Page instance the Frame is currently navigated to.

#### Overrides

```ts
FrameBase.currentPage
```

***

### defaultPage?

```ts
optional defaultPage?: string;
```

Defined in: [ui/frame/index.d.ts:43](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L43)

#### Ns Property

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Default visual state, defaults to 'normal'

#### Ns Property

#### Inherited from

```ts
FrameBase.defaultVisualState
```

***

### direction

```ts
direction: LayoutDirectionType;
```

Defined in: [ui/core/view/index.d.ts:413](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L413)

Gets or sets the layout direction of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.direction
```

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Dock position of the view within its parent.

#### Ns Property

#### Inherited from

```ts
FrameBase.dock
```

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.domNode
```

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveBorderBottomWidth
```

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveBorderLeftWidth
```

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveBorderRightWidth
```

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveBorderTopWidth
```

***

### effectiveColumnGap

```ts
effectiveColumnGap: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveColumnGap
```

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveHeight
```

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveLeft
```

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMarginBottom
```

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMarginLeft
```

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMarginRight
```

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMarginTop
```

***

### effectiveMaxHeight

```ts
effectiveMaxHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMaxHeight
```

***

### effectiveMaxWidth

```ts
effectiveMaxWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMaxWidth
```

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMinHeight
```

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveMinWidth
```

***

### effectiveRowGap

```ts
effectiveRowGap: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveRowGap
```

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveTop
```

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.effectiveWidth
```

***

### flex

```ts
flex: Flex;
```

Defined in: [ui/core/view/index.d.ts:604](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L604)

The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.

#### Ns Property

#### Inherited from

```ts
FrameBase.flex
```

***

### flexFlow

```ts
flexFlow: FlexFlow;
```

Defined in: [ui/core/view/index.d.ts:599](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L599)

The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

#### Ns Property

#### Inherited from

```ts
FrameBase.flexFlow
```

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

#### Inherited from

```ts
FrameBase.flexGrow
```

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

#### Inherited from

```ts
FrameBase.flexShrink
```

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

When true, forces the item to wrap onto a new line.

#### Ns Property

#### Inherited from

```ts
FrameBase.flexWrapBefore
```

***

### height

```ts
height: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:457](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L457)

Gets or sets the desired height of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.height
```

***

### hidden

```ts
hidden: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the visual state of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.hidden
```

***

### horizontalAlignment

```ts
horizontalAlignment: HorizontalAlignmentType;
```

Defined in: [ui/core/view/index.d.ts:499](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L499)

Gets or sets the alignment of this view within its parent along the Horizontal axis.

#### Ns Property

#### Inherited from

```ts
FrameBase.horizontalAlignment
```

***

### id

```ts
id: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the id for this view.

#### Ns Property

#### Inherited from

```ts
FrameBase.id
```

***

### ignoreTouchAnimation

```ts
ignoreTouchAnimation: boolean;
```

Defined in: [ui/core/view/index.d.ts:673](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L673)

#### Ns Property

#### Inherited from

```ts
FrameBase.ignoreTouchAnimation
```

***

### ios

```ts
ios: iOSFrame;
```

Defined in: [ui/frame/index.d.ts:175](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L175)

Gets the iOSFrame object that represents the iOS-specific APIs for this Frame. Valid when running on iOS.

#### Overrides

```ts
FrameBase.ios
```

***

### iosAccessibilityAdjustsFontSize

```ts
iosAccessibilityAdjustsFontSize: boolean;
```

Defined in: [ui/core/view/index.d.ts:339](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L339)

Defines whether accessibility font scale should affect font size.

#### Ns Property

#### Inherited from

```ts
FrameBase.iosAccessibilityAdjustsFontSize
```

***

### iosAccessibilityMaxFontScale

```ts
iosAccessibilityMaxFontScale: number;
```

Defined in: [ui/core/view/index.d.ts:353](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L353)

Gets or sets the maximum accessibility font scale.

#### Ns Property

#### Inherited from

```ts
FrameBase.iosAccessibilityMaxFontScale
```

***

### iosAccessibilityMinFontScale

```ts
iosAccessibilityMinFontScale: number;
```

Defined in: [ui/core/view/index.d.ts:346](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L346)

Gets or sets the minimum accessibility font scale.

#### Ns Property

#### Inherited from

```ts
FrameBase.iosAccessibilityMinFontScale
```

***

### iosGlassEffect

```ts
iosGlassEffect: GlassEffectType;
```

Defined in: [ui/core/view/index.d.ts:660](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L660)

Set the iOS liquid glass effect style on the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.iosGlassEffect
```

***

### iosIgnoreSafeArea

```ts
iosIgnoreSafeArea: boolean;
```

Defined in: [ui/core/view/index.d.ts:639](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L639)

Gets or sets a value indicating whether the the view should totally ignore safe areas computation. This property is iOS specific. Default value: false

#### Ns Property

#### Inherited from

```ts
FrameBase.iosIgnoreSafeArea
```

***

### iosNavigationBarClass?

```ts
optional iosNavigationBarClass?: any;
```

Defined in: [ui/frame/index.d.ts:182](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L182)

Specify a custom UINavigationBar class (iOS only)

#### Ns Property

***

### iosOverflowSafeArea

```ts
iosOverflowSafeArea: boolean;
```

Defined in: [ui/core/view/index.d.ts:1187](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L1187)

Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

```ts
FrameBase.iosOverflowSafeArea
```

***

### iosOverflowSafeAreaEnabled

```ts
iosOverflowSafeAreaEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:632](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L632)

Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true

#### Ns Property

#### Inherited from

```ts
FrameBase.iosOverflowSafeAreaEnabled
```

***

### iosToolbarClass?

```ts
optional iosToolbarClass?: any;
```

Defined in: [ui/frame/index.d.ts:188](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L188)

Specify a custom UIToolbar class (iOS only)

#### Ns Property

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

```ts
FrameBase.isCollapsed
```

***

### isEnabled

```ts
isEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:611](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L611)

Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.isEnabled
```

***

### isLayoutValid

```ts
isLayoutValid: boolean;
```

Defined in: [ui/core/view/index.d.ts:682](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L682)

Gets if layout is valid. This is a read-only property.

#### Inherited from

```ts
FrameBase.isLayoutValid
```

***

### isUserInteractionEnabled

```ts
isUserInteractionEnabled: boolean;
```

Defined in: [ui/core/view/index.d.ts:618](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L618)

Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.isUserInteractionEnabled
```

***

### left

```ts
left: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

#### Inherited from

```ts
FrameBase.left
```

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

```ts
FrameBase.margin
```

***

### marginBottom

```ts
marginBottom: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:492](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L492)

Specifies extra space on the bottom side of this view.

#### Ns Property

#### Inherited from

```ts
FrameBase.marginBottom
```

***

### marginLeft

```ts
marginLeft: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:471](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L471)

Specifies extra space on the left side of this view.

#### Ns Property

#### Inherited from

```ts
FrameBase.marginLeft
```

***

### marginRight

```ts
marginRight: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:485](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L485)

Specifies extra space on the right side of this view.

#### Ns Property

#### Inherited from

```ts
FrameBase.marginRight
```

***

### marginTop

```ts
marginTop: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:478](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L478)

Specifies extra space on the top side of this view.

#### Ns Property

#### Inherited from

```ts
FrameBase.marginTop
```

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

```ts
FrameBase.maxHeight
```

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

```ts
FrameBase.maxWidth
```

***

### minHeight

```ts
minHeight: LengthType;
```

Defined in: [ui/core/view/index.d.ts:427](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L427)

Gets or sets the minimum height the view may grow to.

#### Ns Property

#### Inherited from

```ts
FrameBase.minHeight
```

***

### minWidth

```ts
minWidth: LengthType;
```

Defined in: [ui/core/view/index.d.ts:420](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L420)

Gets or sets the minimum width the view may grow to.

#### Ns Property

#### Inherited from

```ts
FrameBase.minWidth
```

***

### modal

```ts
modal: View;
```

Defined in: [ui/core/view/index.d.ts:874](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L874)

Returns the current modal view that this page is showing (is parent of), if any.

#### Inherited from

```ts
FrameBase.modal
```

***

### nativeBackgroundState?

```ts
optional nativeBackgroundState?: "unset" | "invalid" | "drawn";
```

Defined in: [ui/core/view/index.d.ts:687](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L687)

Native background states. This is a read-only property.

#### Inherited from

```ts
FrameBase.nativeBackgroundState
```

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

#### Inherited from

```ts
FrameBase.nativeViewProtected
```

***

### opacity

```ts
opacity: number;
```

Defined in: [ui/core/view/index.d.ts:520](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L520)

Gets or sets the opacity style property.

#### Ns Property

#### Inherited from

```ts
FrameBase.opacity
```

***

### order

```ts
order: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

#### Inherited from

```ts
FrameBase.order
```

***

### originX

```ts
originX: number;
```

Defined in: [ui/core/view/index.d.ts:586](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L586)

Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.originX
```

***

### originY

```ts
originY: number;
```

Defined in: [ui/core/view/index.d.ts:593](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L593)

Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.originY
```

***

### parent

```ts
parent: ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets the parent view. This property is read-only.

#### Inherited from

```ts
FrameBase.parent
```

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

```ts
FrameBase.perspective
```

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Inherited from

```ts
FrameBase.recycleNativeView
```

***

### reusable

```ts
reusable: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

#### Inherited from

```ts
FrameBase.reusable
```

***

### rotate

```ts
rotate: number;
```

Defined in: [ui/core/view/index.d.ts:527](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L527)

Gets or sets the rotate affine transform of the view along the Z axis.

#### Ns Property

#### Inherited from

```ts
FrameBase.rotate
```

***

### rotateX

```ts
rotateX: number;
```

Defined in: [ui/core/view/index.d.ts:534](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L534)

Gets or sets the rotate affine transform of the view along the X axis.

#### Ns Property

#### Inherited from

```ts
FrameBase.rotateX
```

***

### rotateY

```ts
rotateY: number;
```

Defined in: [ui/core/view/index.d.ts:541](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L541)

Gets or sets the rotate affine transform of the view along the Y axis.

#### Ns Property

#### Inherited from

```ts
FrameBase.rotateY
```

***

### row

```ts
row: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

#### Inherited from

```ts
FrameBase.row
```

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

The number of rows for the element to span across.

#### Ns Property

#### Inherited from

```ts
FrameBase.rowSpan
```

***

### scaleX

```ts
scaleX: number;
```

Defined in: [ui/core/view/index.d.ts:570](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L570)

Gets or sets the scaleX affine transform of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.scaleX
```

***

### scaleY

```ts
scaleY: number;
```

Defined in: [ui/core/view/index.d.ts:577](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L577)

Gets or sets the scaleY affine transform of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.scaleY
```

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Opt out of shared transition under different binding conditions

#### Ns Property

#### Inherited from

```ts
FrameBase.sharedTransitionIgnore
```

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

#### Inherited from

```ts
FrameBase.sharedTransitionTag
```

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

```ts
FrameBase.statusBarStyle
```

***

### testID

```ts
testID: string;
```

Defined in: [ui/core/view/index.d.ts:665](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L665)

#### Ns Property

#### Inherited from

```ts
FrameBase.testID
```

***

### top

```ts
top: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

#### Inherited from

```ts
FrameBase.top
```

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

```ts
FrameBase.touchAnimation
```

***

### touchDelay

```ts
touchDelay: number;
```

Defined in: [ui/core/view/index.d.ts:677](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L677)

#### Ns Property

#### Inherited from

```ts
FrameBase.touchDelay
```

***

### transition

```ts
transition: NavigationTransition;
```

Defined in: [ui/frame/index.d.ts:155](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L155)

Gets or sets the default navigation transition for this frame.

#### Overrides

```ts
FrameBase.transition
```

***

### transitionId

```ts
transitionId: number;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

Active transition instance id for tracking state

#### Inherited from

```ts
FrameBase.transitionId
```

***

### translateX

```ts
translateX: number;
```

Defined in: [ui/core/view/index.d.ts:556](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L556)

Gets or sets the translateX affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

```ts
FrameBase.translateX
```

***

### translateY

```ts
translateY: number;
```

Defined in: [ui/core/view/index.d.ts:563](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L563)

Gets or sets the translateY affine transform of the view in device independent pixels.

#### Ns Property

#### Inherited from

```ts
FrameBase.translateY
```

***

### verticalAlignment

```ts
verticalAlignment: VerticalAlignmentType;
```

Defined in: [ui/core/view/index.d.ts:506](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L506)

Gets or sets the alignment of this view within its parent along the Vertical axis.

#### Ns Property

#### Inherited from

```ts
FrameBase.verticalAlignment
```

***

### viewController

```ts
viewController: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

returns the native UIViewController.

#### Inherited from

```ts
FrameBase.viewController
```

***

### visibility

```ts
visibility: VisibilityType;
```

Defined in: [ui/core/view/index.d.ts:513](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L513)

Gets or sets the visibility of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.visibility
```

***

### visionHoverStyle

```ts
visionHoverStyle: string | VisionHoverOptions;
```

Defined in: [ui/core/view/index.d.ts:653](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L653)

visionOS only

#### Ns Property

#### Inherited from

```ts
FrameBase.visionHoverStyle
```

***

### visionIgnoreHoverStyle

```ts
visionIgnoreHoverStyle: boolean;
```

Defined in: [ui/core/view/index.d.ts:646](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L646)

visionOS only

#### Ns Property

#### Inherited from

```ts
FrameBase.visionIgnoreHoverStyle
```

***

### width

```ts
width: PercentLengthType;
```

Defined in: [ui/core/view/index.d.ts:450](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L450)

Gets or sets the desired width of the view.

#### Ns Property

#### Inherited from

```ts
FrameBase.width
```

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

```ts
FrameBase.accessibilityBlurEvent
```

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

```ts
FrameBase.accessibilityFocusChangedEvent
```

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

```ts
FrameBase.accessibilityFocusEvent
```

***

### accessibilityPerformEscapeEvent

```ts
static accessibilityPerformEscapeEvent: string;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Inherited from

```ts
FrameBase.accessibilityPerformEscapeEvent
```

***

### androidOptionSelectedEvent

```ts
static androidOptionSelectedEvent: string;
```

Defined in: [ui/frame/index.d.ts:23](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L23)

String value used when hooking to OptionSelected event.

#### Ns Event

optionSelected

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

```ts
FrameBase.androidOverflowInsetEvent
```

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

```ts
FrameBase.closedModallyEvent
```

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

```ts
FrameBase.createdEvent
```

***

### defaultAnimatedNavigation

```ts
static defaultAnimatedNavigation: boolean;
```

Defined in: [ui/frame/index.d.ts:160](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L160)

Gets or sets if navigation transitions should be animated globally.

#### Overrides

```ts
FrameBase.defaultAnimatedNavigation
```

***

### defaultTransition

```ts
static defaultTransition: NavigationTransition;
```

Defined in: [ui/frame/index.d.ts:165](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L165)

Gets or sets the default NavigationTransition for all frames across the app.

#### Overrides

```ts
FrameBase.defaultTransition
```

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

```ts
FrameBase.disposeNativeViewEvent
```

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

```ts
FrameBase.layoutChangedEvent
```

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

```ts
FrameBase.loadedEvent
```

***

### navigatedToEvent

```ts
static navigatedToEvent: string;
```

Defined in: [ui/frame/index.d.ts:37](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L37)

String value used when hooking to navigatedTo event.

#### Ns Event

navigatedTo

#### Overrides

```ts
FrameBase.navigatedToEvent
```

***

### navigatingToEvent

```ts
static navigatingToEvent: string;
```

Defined in: [ui/frame/index.d.ts:30](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L30)

String value used when hooking to navigatingTo event.

#### Ns Event

navigatingTo

#### Overrides

```ts
FrameBase.navigatingToEvent
```

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

```ts
FrameBase.propertyChangeEvent
```

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

```ts
FrameBase.showingModallyEvent
```

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

```ts
FrameBase.shownModallyEvent
```

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

```ts
FrameBase.unloadedEvent
```

## Accessors

### \_childrenCount

#### Get Signature

```ts
get _childrenCount(): number;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

##### Returns

`number`

#### Inherited from

```ts
FrameBase._childrenCount
```

***

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

```ts
FrameBase.backgroundPosition
```

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

```ts
FrameBase.backgroundRepeat
```

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

```ts
FrameBase.backgroundSize
```

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

```ts
FrameBase.class
```

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

```ts
FrameBase.effectivePaddingBottom
```

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

```ts
FrameBase.effectivePaddingLeft
```

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

```ts
FrameBase.effectivePaddingRight
```

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

```ts
FrameBase.effectivePaddingTop
```

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

```ts
FrameBase.isLoaded
```

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

```ts
FrameBase.nativeView
```

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

```ts
FrameBase.page
```

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

```ts
FrameBase.parentNode
```

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

```ts
FrameBase.style
```

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

```ts
FrameBase.textTransform
```

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

```ts
FrameBase.typeName
```

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

```ts
FrameBase.visualState
```

## Methods

### \_addChildFromBuilder()

```ts
_addChildFromBuilder(name: string, value: any): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._addChildFromBuilder
```

***

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

```ts
FrameBase._addView
```

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

```ts
FrameBase._addViewCore
```

***

### \_addViewToNativeVisualTree()

```ts
_addViewToNativeVisualTree(child: View): boolean;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

Performs the core logic of adding a child view to the native visual tree. Returns true if the view's native representation has been successfully added, false otherwise.
Method is intended to be overridden by inheritors and used as "protected".

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `child` | [`View`](View.md) |

#### Returns

`boolean`

#### Inherited from

```ts
FrameBase._addViewToNativeVisualTree
```

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

```ts
FrameBase._applyGlassEffect
```

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

```ts
FrameBase._applyXmlAttribute
```

***

### \_backstackEntryTrace()

```ts
_backstackEntryTrace(b: BackstackEntry): string;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `b` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`string`

#### Inherited from

```ts
FrameBase._backstackEntryTrace
```

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

```ts
FrameBase._batchUpdate
```

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

```ts
FrameBase._childIndexToNativeChildIndex
```

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

```ts
FrameBase._closeAllModalViewsInternal
```

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

```ts
FrameBase._createPropertyChangeData
```

***

### \_dialogClosed()

```ts
_dialogClosed(): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

```ts
FrameBase._dialogClosed
```

***

### \_disposeBackstackEntry()

```ts
protected _disposeBackstackEntry(entry: BackstackEntry): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._disposeBackstackEntry
```

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

```ts
FrameBase._eachLayoutView
```

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

```ts
FrameBase._emit
```

***

### \_getNativeViewsCount()

```ts
_getNativeViewsCount(): number;
```

Defined in: [ui/core/view/index.d.ts:944](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L944)

#### Returns

`number`

#### Inherited from

```ts
FrameBase._getNativeViewsCount
```

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

```ts
FrameBase._getRootModalHost
```

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

```ts
FrameBase._getRootModalViews
```

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

```ts
FrameBase._getValue
```

***

### \_goBackCore()

```ts
_goBackCore(backstackEntry: BackstackEntry): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `backstackEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._goBackCore
```

***

### \_handleLivesync()

```ts
_handleLivesync(context?: ModuleContext): boolean;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context?` | `ModuleContext` |

#### Returns

`boolean`

#### Inherited from

```ts
FrameBase._handleLivesync
```

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

```ts
FrameBase._hasAncestorView
```

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

```ts
FrameBase._hideNativeModalView
```

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

```ts
FrameBase._inheritStyles
```

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

```ts
FrameBase._inheritStyleScope
```

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._layoutParent
```

***

### \_navigateCore()

```ts
_navigateCore(backstackEntry: BackstackEntry): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `backstackEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._navigateCore
```

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

```ts
FrameBase._observe
```

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

```ts
FrameBase._onAttachedToWindow
```

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

```ts
FrameBase._onDetachedFromWindow
```

***

### \_onNavigatingTo()

```ts
_onNavigatingTo(backstackEntry: BackstackEntry, isBack: boolean): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `backstackEntry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |
| `isBack` | `boolean` |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._onNavigatingTo
```

***

### \_onRootViewReset()

```ts
_onRootViewReset(): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

#### Inherited from

```ts
FrameBase._onRootViewReset
```

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

```ts
FrameBase._onSizeChanged
```

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

```ts
FrameBase._parentChanged
```

***

### \_popFromFrameStack()

```ts
_popFromFrameStack(): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._popFromFrameStack
```

***

### \_printFrameBackStack()

```ts
_printFrameBackStack(): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._printFrameBackStack
```

***

### \_processNextNavigationEntry()

```ts
protected _processNextNavigationEntry(): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._processNextNavigationEntry
```

***

### \_raiseLayoutChangedEvent()

```ts
protected _raiseLayoutChangedEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._raiseLayoutChangedEvent
```

***

### \_raiseShowingModallyEvent()

```ts
protected _raiseShowingModallyEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._raiseShowingModallyEvent
```

***

### \_raiseShownModallyEvent()

```ts
protected _raiseShownModallyEvent(): void;
```

Defined in: [ui/core/view/view-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/view-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase._raiseShownModallyEvent
```

***

### \_removeEntry()

```ts
_removeEntry(removed: BackstackEntry): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `removed` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._removeEntry
```

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

```ts
FrameBase._removeView
```

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

```ts
FrameBase._removeViewCore
```

***

### \_removeViewFromNativeVisualTree()

```ts
_removeViewFromNativeVisualTree(child: View): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `child` | [`View`](View.md) |

#### Returns

`void`

#### Inherited from

```ts
FrameBase._removeViewFromNativeVisualTree
```

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

```ts
FrameBase._resumeNativeUpdates
```

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

```ts
FrameBase._setDefaultPaddings
```

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

```ts
FrameBase._setupAsRootView
```

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

```ts
FrameBase._setupUI
```

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

```ts
FrameBase._setValue
```

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

```ts
FrameBase._shouldDelayLayout
```

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

```ts
FrameBase._showNativeModalView
```

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

```ts
FrameBase._suspendNativeUpdates
```

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

```ts
FrameBase._tearDownUI
```

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

```ts
FrameBase._updateStyleScope
```

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

```ts
FrameBase.accessibilityAnnouncement
```

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

```ts
FrameBase.accessibilityScreenChanged
```

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

```ts
FrameBase.addEventListener
```

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

```ts
FrameBase.addPseudoClass
```

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

```ts
FrameBase.animate
```

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

```ts
FrameBase.bind
```

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase.callLoaded
```

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase.callUnloaded
```

***

### canGoBack()

```ts
canGoBack(): boolean;
```

Defined in: [ui/frame/index.d.ts:94](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L94)

Checks whether the goBack operation is available.

#### Returns

`boolean`

#### Overrides

```ts
FrameBase.canGoBack
```

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

```ts
FrameBase.closeModal
```

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

```ts
FrameBase.createAnimation
```

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

```ts
FrameBase.createNativeView
```

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

```ts
FrameBase.deletePseudoClass
```

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

```ts
FrameBase.destroyNode
```

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

```ts
FrameBase.disposeNativeView
```

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

```ts
FrameBase.eachChild
```

***

### eachChildView()

```ts
eachChildView(callback: (child: View) => boolean): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

Iterates over children of type View.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: [`View`](View.md)) => `boolean` | Called for each child of type View. Iteration stops if this method returns falsy value. |

#### Returns

`void`

#### Inherited from

```ts
FrameBase.eachChildView
```

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

```ts
FrameBase.ensureDomNode
```

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

```ts
FrameBase.focus
```

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

```ts
FrameBase.get
```

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

```ts
FrameBase.getActualSize
```

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

```ts
FrameBase.getClosestWindow
```

***

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`string`

#### Inherited from

```ts
FrameBase.getEffectivePaddingShorthand
```

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

```ts
FrameBase.getGestureObservers
```

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

```ts
FrameBase.getLocationInWindow
```

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

```ts
FrameBase.getLocationOnScreen
```

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

```ts
FrameBase.getLocationRelativeTo
```

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

```ts
FrameBase.getMeasuredHeight
```

***

### getMeasuredState()

```ts
getMeasuredState(): number;
```

Defined in: [ui/core/view/index.d.ts:743](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view/index.d.ts#L743)

#### Returns

`number`

#### Inherited from

```ts
FrameBase.getMeasuredState
```

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

```ts
FrameBase.getMeasuredWidth
```

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

```ts
FrameBase.getNativeWindow
```

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

```ts
FrameBase.getSafeAreaInsets
```

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

```ts
FrameBase.getViewByDomId
```

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

```ts
FrameBase.getViewById
```

***

### goBack()

```ts
goBack(to?: BackstackEntry): any;
```

Defined in: [ui/frame/index.d.ts:89](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L89)

Navigates to the previous entry (if any) in the back stack.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `to?` | [`BackstackEntry`](../interfaces/BackstackEntry.md) | The backstack entry to navigate back to. |

#### Returns

`any`

#### Overrides

```ts
FrameBase.goBack
```

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

```ts
FrameBase.hasGestureObservers
```

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

```ts
FrameBase.hasListeners
```

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

```ts
FrameBase.initNativeView
```

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

```ts
FrameBase.layout
```

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

```ts
FrameBase.layoutNativeView
```

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

```ts
FrameBase.loadView
```

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

```ts
FrameBase.measure
```

***

### navigate()

#### Call Signature

```ts
navigate(pageModuleName: string): any;
```

Defined in: [ui/frame/index.d.ts:104](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L104)

Navigates to a Page instance as described by the module name.
This method will require the module and will check for a Page property in the exports of the module.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pageModuleName` | `string` | The name of the module to require starting from the application root. For example if you want to navigate to page called "myPage.js" in a folder called "subFolder" and your root folder is "app" you can call navigate method like this: const frames = require("&#64;nativescript/core/ui/frame"); frames.topmost().navigate("app/subFolder/myPage"); |

##### Returns

`any`

##### Overrides

```ts
FrameBase.navigate
```

#### Call Signature

```ts
navigate(create: () => Page): any;
```

Defined in: [ui/frame/index.d.ts:110](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L110)

Creates a new Page instance using the provided callback and navigates to that Page.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `create` | () => [`Page`](Page.md) | The function to be used to create the new Page instance. |

##### Returns

`any`

##### Overrides

```ts
FrameBase.navigate
```

#### Call Signature

```ts
navigate(entry: NavigationEntry): any;
```

Defined in: [ui/frame/index.d.ts:119](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L119)

Navigates to a Page resolved by the provided NavigationEntry object.
Since there are a couple of  ways to specify a Page instance through an entry, there is a resolution priority:
    1. entry.moduleName
    2. entry.create()

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | [`NavigationEntry`](../interfaces/NavigationEntry.md) | The NavigationEntry instance. |

##### Returns

`any`

##### Overrides

```ts
FrameBase.navigate
```

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

```ts
FrameBase.notify
```

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

```ts
FrameBase.notifyPropertyChange
```

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

```ts
FrameBase.off
```

***

### on()

#### Call Signature

```ts
on(
   eventName: string, 
   callback: (args: EventData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/frame/index.d.ts:297](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L297)

Adds a listener for the specified event name.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (`args`: [`EventData`](../interfaces/EventData.md)) => `void` | The event listener to add. Will be called when an event of the given name is raised. |
| `thisArg?` | `any` | An optional parameter which, when set, will be bound as the `this` context when the callback is called. Falsy values will be not be bound. |

##### Returns

`void`

##### Overrides

```ts
FrameBase.on
```

#### Call Signature

```ts
on(
   event: "navigatingTo", 
   callback: (args: NavigationData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/frame/index.d.ts:302](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L302)

Raised when navigation to the page has started.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"navigatingTo"` |
| `callback` | (`args`: [`NavigationData`](../interfaces/NavigationData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
FrameBase.on
```

#### Call Signature

```ts
on(
   event: "navigatedTo", 
   callback: (args: NavigationData) => void, 
   thisArg?: any): void;
```

Defined in: [ui/frame/index.d.ts:307](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L307)

Raised when navigation to the page has finished.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"navigatedTo"` |
| `callback` | (`args`: [`NavigationData`](../interfaces/NavigationData.md)) => `void` |
| `thisArg?` | `any` |

##### Returns

`void`

##### Overrides

```ts
FrameBase.on
```

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

```ts
FrameBase.onBackPressed
```

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

```ts
FrameBase.once
```

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

```ts
FrameBase.onLayout
```

***

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase.onLoaded
```

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

```ts
FrameBase.onMeasure
```

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase.onResumeNativeUpdates
```

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

#### Inherited from

```ts
FrameBase.onUnloaded
```

***

### performGoBack()

```ts
performGoBack(navigationContext: NavigationContext): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `navigationContext` | `NavigationContext` |

#### Returns

`void`

#### Inherited from

```ts
FrameBase.performGoBack
```

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

```ts
FrameBase.removeEventListener
```

***

### replacePage()

```ts
replacePage(entry: string | NavigationEntry): void;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry` | `string` \| `NavigationEntry` |

#### Returns

`void`

#### Inherited from

```ts
FrameBase.replacePage
```

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

```ts
FrameBase.requestLayout
```

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

```ts
FrameBase.resetNativeView
```

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

```ts
FrameBase.sendAccessibilityEvent
```

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

```ts
FrameBase.set
```

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

```ts
FrameBase.setAccessibilityIdentifier
```

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

```ts
FrameBase.setInlineStyle
```

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

```ts
FrameBase.setMeasuredDimension
```

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

```ts
FrameBase.setNativeView
```

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

```ts
FrameBase.setOnTouchListener
```

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

```ts
FrameBase.setProperty
```

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

```ts
FrameBase.showModal
```

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

```ts
FrameBase.toString
```

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

```ts
FrameBase.unbind
```

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

```ts
FrameBase.unloadView
```

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

```ts
FrameBase.updateStatusBarStyle
```

***

### \_isEntryBackstackVisible()

```ts
static _isEntryBackstackVisible(entry: BackstackEntry): boolean;
```

Defined in: [ui/frame/frame-common.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/frame-common.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entry` | [`BackstackEntry`](../interfaces/BackstackEntry.md) |

#### Returns

`boolean`

#### Inherited from

```ts
FrameBase._isEntryBackstackVisible
```

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

```ts
FrameBase.addEventListener
```

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

```ts
FrameBase.combineMeasuredStates
```

***

### getFrameById()

```ts
static getFrameById(id: string): Frame;
```

Defined in: [ui/frame/index.d.ts:53](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L53)

Gets a frame by id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Frame`

#### Overrides

```ts
FrameBase.getFrameById
```

***

### goBack()

```ts
static goBack(frame?: Frame): any;
```

Defined in: [ui/frame/index.d.ts:73](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L73)

Navigates back using the navigation hierarchy (if any). Updates the Frame stack as needed.
This method will start from the given Frame and will recursively search its ancestors for an instance that has the canGoBack operation available.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `frame?` | `Frame` | The Frame to navigate back. Defaults to the topmost Frame; pass one to scope the back navigation to that Frame's hierarchy. |

#### Returns

`any`

#### Overrides

```ts
FrameBase.goBack
```

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

```ts
FrameBase.layoutChild
```

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

```ts
FrameBase.measureChild
```

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

```ts
FrameBase.off
```

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

```ts
FrameBase.on
```

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

```ts
FrameBase.once
```

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

```ts
FrameBase.removeEventListener
```

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

```ts
FrameBase.resolveSizeAndState
```

***

### topmost()

```ts
static topmost(window?: WindowBase): Frame;
```

Defined in: [ui/frame/index.d.ts:66](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L66)

Gets the topmost frame of a window. An application will typically has one frame instance. Multiple frames handle nested (hierarchical) navigation scenarios.

The frame highest in the navigation stack wins outright while it belongs to no window -
`navigate()` puts a frame in the stack before it is attached to one, and scoping cannot
place such a frame. Otherwise the frame highest in the stack that belongs to the resolved
window is returned, falling back to the frame highest in the stack regardless of window
when that window hosts none.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `window?` | [`WindowBase`](WindowBase.md) | The window to scope the lookup to. Defaults to `Application.activeWindow`. |

#### Returns

`Frame`

#### Overrides

```ts
FrameBase.topmost
```
