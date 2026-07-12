---
title: ViewBase
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

## Ns View

ViewBase

## Extends

- [`Observable`](Observable.md)

## Extended by

- [`ActionItem`](ActionItem.md)
- [`SegmentedBarItem`](SegmentedBarItem.md)
- [`TabViewItem`](TabViewItem.md)
- [`FormattedString`](FormattedString.md)
- [`Span`](Span.md)

## Constructors

### Constructor

```ts
new ViewBase(): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`ViewBase`

#### Overrides

[`Observable`](Observable.md).[`constructor`](Observable.md#constructor)

## Properties

### \_automaticallyAdjustsScrollViewInsets

```ts
_automaticallyAdjustsScrollViewInsets: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_context

```ts
_context: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_cssState

```ts
_cssState: CssState;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_defaultPaddingBottom

```ts
protected _defaultPaddingBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_defaultPaddingLeft

```ts
protected _defaultPaddingLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_defaultPaddingRight

```ts
protected _defaultPaddingRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_defaultPaddingTop

```ts
protected _defaultPaddingTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_domId

```ts
_domId: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_ignoreFlexMinWidthHeightReset

```ts
_ignoreFlexMinWidthHeightReset: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_isAddedToNativeVisualTree

```ts
_isAddedToNativeVisualTree: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_isPaddingRelative

```ts
protected _isPaddingRelative: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_isStyleScopeHost

```ts
_isStyleScopeHost: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_oldBottom

```ts
_oldBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_oldLeft

```ts
_oldLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_oldRight

```ts
_oldRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_oldTop

```ts
_oldTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### \_styleScope

```ts
_styleScope: StyleScope;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

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

***

### alignSelf

```ts
alignSelf: AlignSelf;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

(Android-only) Overrides the alignItems value for the child.

#### Ns Property

***

### bindingContext

```ts
bindingContext: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Ns Property

***

### className

```ts
className: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the CSS class name for this view.

#### Ns Property

***

### col

```ts
col: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

***

### colSpan

```ts
colSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The number of columns for the element to span across.

#### Ns Property

***

### column

```ts
column: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The column for the element. The columns are 0-indexed, so the first column is indicated by 0.

#### Ns Property

***

### columnSpan

```ts
columnSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Ns Property

***

### cssClasses

```ts
readonly cssClasses: Set<string>;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### cssPseudoClasses

```ts
readonly cssPseudoClasses: Set<string>;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### defaultVisualState

```ts
defaultVisualState: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Default visual state, defaults to 'normal'

#### Ns Property

***

### dock

```ts
dock: "left" | "right" | "top" | "bottom";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Dock position of the view within its parent.

#### Ns Property

***

### domNode

```ts
domNode: DOMNode;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveBorderBottomWidth

```ts
effectiveBorderBottomWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveBorderLeftWidth

```ts
effectiveBorderLeftWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveBorderRightWidth

```ts
effectiveBorderRightWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveBorderTopWidth

```ts
effectiveBorderTopWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveHeight

```ts
effectiveHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveLeft

```ts
effectiveLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveMarginBottom

```ts
effectiveMarginBottom: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveMarginLeft

```ts
effectiveMarginLeft: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveMarginRight

```ts
effectiveMarginRight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveMarginTop

```ts
effectiveMarginTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveMinHeight

```ts
effectiveMinHeight: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveMinWidth

```ts
effectiveMinWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveTop

```ts
effectiveTop: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### effectiveWidth

```ts
effectiveWidth: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### flexGrow

```ts
flexGrow: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.

#### Ns Property

***

### flexShrink

```ts
flexShrink: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.

#### Ns Property

***

### flexWrapBefore

```ts
flexWrapBefore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

When true, forces the item to wrap onto a new line.

#### Ns Property

***

### hidden

```ts
hidden: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the visual state of the view.

#### Ns Property

***

### id

```ts
id: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the id for this view.

#### Ns Property

***

### isCollapsed

```ts
isCollapsed: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Returns true if visibility is set to 'collapse'.
Default(false) set in prototype
Readonly property

***

### left

```ts
left: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.

#### Ns Property

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

***

### nativeViewProtected

```ts
nativeViewProtected: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

read-only. If you want to set out-of-band the nativeView use the setNativeView method.

***

### order

```ts
order: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Sets the order in which child elements inside a Flex appear in relation to one another.

#### Ns Property

***

### parent

```ts
parent: ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets the parent view. This property is read-only.

***

### recycleNativeView

```ts
recycleNativeView: "auto" | "always" | "never";
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

***

### reusable

```ts
reusable: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.

#### Ns Property

***

### row

```ts
row: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The row for the element. The rows are 0-indexed, so the first row is indicated by 0.

#### Ns Property

***

### rowSpan

```ts
rowSpan: number;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

The number of rows for the element to span across.

#### Ns Property

***

### sharedTransitionIgnore

```ts
sharedTransitionIgnore: boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Opt out of shared transition under different binding conditions

#### Ns Property

***

### sharedTransitionTag

```ts
sharedTransitionTag: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the shared transition tag for animated view transitions

#### Ns Property

***

### top

```ts
top: LengthType;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.

#### Ns Property

***

### viewController

```ts
viewController: any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

returns the native UIViewController.

***

### createdEvent

```ts
static createdEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to creation event

#### Ns Event

created

***

### disposeNativeViewEvent

```ts
static disposeNativeViewEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to disposeNativeView event

#### Ns Event

disposeNativeView

***

### loadedEvent

```ts
static loadedEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to loaded event.

#### Ns Event

loaded

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

***

### unloadedEvent

```ts
static unloadedEvent: string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

String value used when hooking to unloaded event.

#### Ns Event

unloaded

## Accessors

### android

#### Get Signature

```ts
get android(): any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`any`

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

***

### ios

#### Get Signature

```ts
get ios(): any;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`any`

***

### isLoaded

#### Get Signature

```ts
get isLoaded(): boolean;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Returns

`boolean`

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

***

### parentNode

#### Get Signature

```ts
get parentNode(): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Gets the template parent or the native parent. Sets the template parent.

##### Returns

`ViewBase`

#### Set Signature

```ts
set parentNode(node: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `ViewBase` |

##### Returns

`void`

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

## Methods

### \_addView()

```ts
_addView(view: ViewBase, atIndex?: number): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `ViewBase` |
| `atIndex?` | `number` |

#### Returns

`void`

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
| `view` | `ViewBase` |
| `atIndex?` | `number` |

#### Returns

`void`

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
| `view` | `ViewBase` |
| `atIndex?` | `number` |

#### Returns

`boolean`

***

### \_addVisualState()

```ts
_addVisualState(state: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

#### Returns

`void`

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

[`Observable`](Observable.md).[`_createPropertyChangeData`](Observable.md#createpropertychangedata)

***

### \_dialogClosed()

```ts
_dialogClosed(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

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

### ~~\_goToVisualState()~~

```ts
_goToVisualState(state: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

#### Returns

`void`

#### Deprecated

Use View._addVisualState() and View._removeVisualState() instead.

***

### \_inheritStyles()

```ts
_inheritStyles(view: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | `ViewBase` |

#### Returns

`void`

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

***

### \_layoutParent()

```ts
_layoutParent(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

***

### \_onRootViewReset()

```ts
_onRootViewReset(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Method is intended to be overridden by inheritors and used as "protected"

#### Returns

`void`

***

### \_parentChanged()

```ts
_parentChanged(oldParent: ViewBase): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldParent` | `ViewBase` |

#### Returns

`void`

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
| `view` | `ViewBase` |

#### Returns

`void`

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
| `view` | `ViewBase` |

#### Returns

`void`

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
| `view` | `ViewBase` |

#### Returns

`void`

***

### \_removeVisualState()

```ts
_removeVisualState(state: string): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `string` |

#### Returns

`void`

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

***

### \_setupAsRootView()

```ts
_setupAsRootView(context: any): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `any` |

#### Returns

`void`

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

***

### callLoaded()

```ts
callLoaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

***

### callUnloaded()

```ts
callUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

***

### closeModal()

```ts
closeModal(...args: any[]): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Closes the current modal view that this page is showing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

#### Returns

`void`

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

***

### disposeNativeView()

```ts
disposeNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Clean up references to the native view.

#### Returns

`void`

***

### eachChild()

```ts
eachChild(callback: (child: ViewBase) => boolean): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Iterates over children of type ViewBase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`child`: `ViewBase`) => `boolean` | Called for each child of type ViewBase. Iteration stops if this method returns falsy value. |

#### Returns

`void`

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

### getEffectivePaddingShorthand()

```ts
getEffectivePaddingShorthand(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`string`

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
| `T` *extends* `ViewBase` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `domId` | `number` |

#### Returns

`T`

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
| `T` *extends* `ViewBase` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`T`

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

### initNativeView()

```ts
initNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Initializes properties/listeners of the native view.

#### Returns

`void`

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
| `view` | `ViewBase` | to load. |

#### Returns

`void`

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

### onLoaded()

```ts
onLoaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

***

### onResumeNativeUpdates()

```ts
onResumeNativeUpdates(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

***

### onUnloaded()

```ts
onUnloaded(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

#### Returns

`void`

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

### requestLayout()

```ts
requestLayout(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Invalidates the layout of the view and triggers a new layout pass.

#### Returns

`void`

***

### resetNativeView()

```ts
resetNativeView(): void;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Resets properties/listeners set to the native view.

#### Returns

`void`

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

#### Overrides

[`Observable`](Observable.md).[`set`](Observable.md#set)

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

### showModal()

#### Call Signature

```ts
showModal(view: ViewBase, modalOptions?: ShowModalOptions): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Shows the view passed as parameter as a modal view.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | `ViewBase` | View instance to be shown modally. |
| `modalOptions?` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) | A ShowModalOptions instance |

##### Returns

`ViewBase`

#### Call Signature

```ts
showModal(moduleName: string, modalOptions?: ShowModalOptions): ViewBase;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Shows the View contained in moduleName as a modal view.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `moduleName` | `string` | The name of the module to load starting from the application root. |
| `modalOptions?` | [`ShowModalOptions`](../interfaces/ShowModalOptions.md) | A ShowModalOptions instance |

##### Returns

`ViewBase`

***

### toString()

```ts
toString(): string;
```

Defined in: [ui/core/view-base/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view-base/index.ts)

Returns a string representation of an object.

#### Returns

`string`

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
| `view` | `ViewBase` | to unload. |

#### Returns

`void`

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
