---
title: Binding
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: ui/core/bindable/index.d.ts:20

## Constructors

### Constructor

```ts
new Binding(target: ViewBase, options: BindingOptions): Binding;
```

Defined in: ui/core/bindable/index.d.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`ViewBase`](ViewBase.md) |
| `options` | [`BindingOptions`](../interfaces/BindingOptions.md) |

#### Returns

`Binding`

## Properties

### options

```ts
options: BindingOptions;
```

Defined in: ui/core/bindable/index.d.ts:29

***

### sourceIsBindingContext

```ts
sourceIsBindingContext: boolean;
```

Defined in: ui/core/bindable/index.d.ts:28

***

### target

```ts
target: WeakRef<ViewBase>;
```

Defined in: ui/core/bindable/index.d.ts:22

***

### updating

```ts
updating: boolean;
```

Defined in: ui/core/bindable/index.d.ts:27

## Methods

### bind()

```ts
bind(source: any): void;
```

Defined in: ui/core/bindable/index.d.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `any` |

#### Returns

`void`

***

### clearBinding()

```ts
clearBinding(): void;
```

Defined in: ui/core/bindable/index.d.ts:47

#### Returns

`void`

***

### clearSource()

```ts
clearSource(): void;
```

Defined in: ui/core/bindable/index.d.ts:33

#### Returns

`void`

***

### loadedHandlerVisualTreeBinding()

```ts
loadedHandlerVisualTreeBinding(args: any): void;
```

Defined in: ui/core/bindable/index.d.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | `any` |

#### Returns

`void`

***

### onSourcePropertyChanged()

```ts
onSourcePropertyChanged(data: PropertyChangeData): void;
```

Defined in: ui/core/bindable/index.d.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`PropertyChangeData`](../interfaces/PropertyChangeData.md) |

#### Returns

`void`

***

### unbind()

```ts
unbind(): void;
```

Defined in: ui/core/bindable/index.d.ts:38

#### Returns

`void`
