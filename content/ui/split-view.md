---
title: SplitView
description: A singular root view component for coordinating up to four column roles (primary, secondary, supplementary, inspector).
contributors:
  - NathanWalker
---

`<SplitView>` is an iOS-only container component that gives you a declarative [UISplitViewController](https://developer.apple.com/documentation/uikit/uisplitviewcontroller) and exposes its modern multi-column capabilities to NativeScript apps. It lets you coordinate **up to four** roles:

- **primary** – main navigation or master content
- **secondary** – detail view for the selected item
- **supplementary** – contextual / side content
- **inspector** – tool / inspector pane available on iOS 17+ when the system supports it

Each role is typically provided by a child `<Frame>` so that every column can manage its own navigation stack independently, while still being part of the same split view controller. This mirrors how native iPadOS apps structure complex layouts.

::: tip
It is intended to be used as the singular starting root view for the entire app.

This component is ideal for iPadOS-style apps, admin-style layouts, or any experience where you need a master-detail flow plus an extra contextual pane or inspector.
:::

## Example

### Declarative XML

```xml
<SplitView
  displayMode="twoBesideSecondary"
  splitBehavior="tile"
  preferredPrimaryColumnWidthFraction="0.25"
  preferredSupplementaryColumnWidthFraction="0.33"
  preferredInspectorColumnWidthFraction="0.20">

  <Frame splitRole="primary" defaultPage="pages/master" />
  <Frame splitRole="secondary" defaultPage="pages/detail" />
  <Frame splitRole="supplementary" defaultPage="pages/context" />
  <Frame splitRole="inspector" defaultPage="pages/inspector" />
</SplitView>
```
This configures a 3–4 column layout (depending on OS support) and assigns each role to its own frame.

### Programmatic

```ts
import { SplitView } from '@nativescript/core'

const splitView = new SplitView()
splitView.displayMode = 'twoBesideSecondary'
splitView.splitBehavior = 'tile'
splitView.preferredPrimaryColumnWidthFraction = 0.25

// create frames with splitRole before adding them
```

### With inspector change listener

```ts
splitView.on('inspectorChange', ({ data }) => {
  console.log('Inspector visible?', data.showing)
})
```
Fired whenever the inspector column is shown or hidden.

## Concepts

### Roles

SplitView coordinates **roles** rather than arbitrary children. Children declare their intended role:

```xml
<Frame splitRole="primary" />
<Frame splitRole="secondary" />
<Frame splitRole="supplementary" />
<Frame splitRole="inspector" />
```

If a role is omitted, SplitView falls back to the order in which children were added. However, declaring the role is recommended for clarity and for future layout changes.

### Column styles

The underlying controller can operate in *double* or *triple* column styles. SplitView exposes this through a common enum:

- `SplitView.SplitStyle.double`
- `SplitView.SplitStyle.triple`

iOS chooses the right `UISplitViewControllerStyle` for you. On iOS 17+ an inspector column can also be shown.

## Props

### displayMode

```ts
displayMode:
  | 'automatic'
  | 'secondaryOnly'
  | 'oneBesideSecondary'
  | 'oneOverSecondary'
  | 'twoBesideSecondary'
  | 'twoOverSecondary'
  | 'twoDisplaceSecondary'
```

Maps to [UISplitViewController.preferredDisplayMode](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/preferreddisplaymode). Determines how the primary/supplementary columns relate to the secondary column (beside vs over vs displaced).

### splitBehavior (iOS 14+)

```ts
splitBehavior: 'automatic' | 'tile' | 'overlay' | 'displace'
```

Maps to [UISplitViewController.preferredSplitBehavior](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/preferredsplitbehavior). Controls how columns behave when the size class changes (for example overlaying instead of resizing). iOS 14 or newer is required.

### preferredPrimaryColumnWidthFraction

```ts
preferredPrimaryColumnWidthFraction: number // 0..1
```

Fractional width for the primary column (for example `0.25` = 25%).

### preferredSupplementaryColumnWidthFraction

```ts
preferredSupplementaryColumnWidthFraction: number // 0..1
```

Used in triple-column style to reserve width for the supplementary column.

### preferredInspectorColumnWidthFraction

```ts
preferredInspectorColumnWidthFraction: number // 0..1
```

Width fraction for the inspector column, applied only when the platform supports the inspector role (iOS 17+). On earlier versions this is safely ignored.

### inspectorShowing (readonly)

```ts
inspectorShowing: boolean
```

Current visibility state of the inspector column. Helpful to sync UI buttons with the actual split view state.

## Static members

### SplitView.getInstance()

```ts
const active = SplitView.getInstance()
```

Returns the last created SplitView instance, or `null` if none exists. This is a convenience for apps that only ever use a single SplitView and want to access it imperatively (for example, from a service).

### SplitView.SplitStyle

```ts
const { SplitStyle } = SplitView
```

Common enum representing double vs triple column styles. The iOS implementation maps this to the proper `UISplitViewController` style.

## Methods

### showPrimary() / hidePrimary()

```ts
splitView.showPrimary()
splitView.hidePrimary()
```

Shows or hides the primary column. Useful on compact width or when presenting master-detail flows modally.

### showSecondary() / hideSecondary()

```ts
splitView.showSecondary()
splitView.hideSecondary()
```

Controls the visibility of the secondary column.

### showSupplementary() / hideSupplementary()

```ts
splitView.showSupplementary()
splitView.hideSupplementary()
```

Ensures the supplementary column is visible when the display mode allows it. Hiding is typically handled automatically by the display mode.

### showInspector() / hideInspector()

```ts
splitView.showInspector()
splitView.hideInspector()
```

Toggles the inspector column (iOS 17+). Calls are no-ops on platforms/versions where inspector is not available.

### onSecondaryViewCollapsed(secondaryVC, primaryVC)

Lifecycle hook invoked when the system collapses the secondary onto the primary (for example, when moving to a compact size). Override in subclasses or listen at the NativeScript level to adjust your UI.

## Events

### inspectorChange

```ts
splitView.on('inspectorChange', (args) => {
  console.log('Inspector visible?', args.data.showing)
})
```

Emitted whenever the inspector column changes visibility. Payload contains a `data.showing: boolean`.

## Platform notes

- **Platform**: iOS only (backed by `UISplitViewController`).
- **splitBehavior**: requires iOS 14+.
- **Inspector**: requires iOS 17+. On earlier versions the property is ignored and inspector-related methods are safe no-ops.

## Native component

- iOS: [`UISplitViewController`](https://developer.apple.com/documentation/uikit/uisplitviewcontroller)
