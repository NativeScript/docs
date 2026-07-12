---
title: SharedTransitionTagProperties
titleTemplate: :title - API / NativeScript
description: Properties which can be set on individual Shared Elements
contributors: false
---

```ts
type SharedTransitionTagProperties = SharedProperties & {
  callback?: (view: View, action: SharedTransitionEventAction) => Promise<void>;
  propertiesToMatch?: SharedTransitionTagPropertiesToMatch;
  zIndex?: number;
};
```

Defined in: [ui/transition/shared-transition.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/transition/shared-transition.ts)

Properties which can be set on individual Shared Elements

## Type Declaration

### callback?

```ts
optional callback?: (view: View, action: SharedTransitionEventAction) => Promise<void>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `view` | [`View`](../classes/View.md) |
| `action` | `SharedTransitionEventAction` |

#### Returns

`Promise`\<`void`\>

### propertiesToMatch?

```ts
optional propertiesToMatch?: SharedTransitionTagPropertiesToMatch;
```

Collection of properties to match and animate on each shared element.

Defaults to: 'backgroundColor', 'cornerRadius', 'borderWidth', 'borderColor'

Tip: Using an empty array, [], for view or layer will avoid copying any properties if desired.

### zIndex?

```ts
optional zIndex?: number;
```

The visual stacking order where 0 is at the bottom.
Shared elements are stacked one on top of the other during each transition.
By default they are not ordered in any particular fashion.
