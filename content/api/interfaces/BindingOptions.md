---
title: BindingOptions
titleTemplate: :title - API / NativeScript
description: The options object used in the Bindable.bind method.
contributors: false
---

Defined in: [ui/core/bindable/bindable-types.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/bindable-types.ts)

The options object used in the Bindable.bind method.

## Properties

### expression?

```ts
optional expression?: string;
```

Defined in: [ui/core/bindable/bindable-types.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/bindable-types.ts)

An expression used for calculations (convertions) based on the value of the property.

***

### sourceProperty

```ts
sourceProperty: string;
```

Defined in: [ui/core/bindable/bindable-types.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/bindable-types.ts)

The property name of the source object (typically the ViewModel) to bind to.

***

### targetProperty

```ts
targetProperty: string;
```

Defined in: [ui/core/bindable/bindable-types.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/bindable-types.ts)

The property name of the target object (that is the Bindable instance) to bind the source property to.

***

### twoWay?

```ts
optional twoWay?: boolean;
```

Defined in: [ui/core/bindable/bindable-types.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/bindable-types.ts)

True to establish a two-way binding, false otherwise. A two-way binding will synchronize both the source and the target property values regardless of which one initiated the change.
