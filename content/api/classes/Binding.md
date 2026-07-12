---
title: Binding
titleTemplate: :title - API / NativeScript
contributors: false
---

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

## Constructors

### Constructor

```ts
new Binding(target: ViewBase, options: BindingOptions): Binding;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

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

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

***

### sourceIsBindingContext

```ts
sourceIsBindingContext: boolean;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

***

### target

```ts
target: WeakRef<ViewBase>;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

***

### updating

```ts
updating: boolean;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

## Methods

### bind()

```ts
bind(source: any): void;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

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

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

#### Returns

`void`

***

### clearSource()

```ts
clearSource(): void;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

#### Returns

`void`

***

### loadedHandlerVisualTreeBinding()

```ts
loadedHandlerVisualTreeBinding(args: any): void;
```

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

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

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

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

Defined in: [ui/core/bindable/index.ts](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/bindable/index.ts)

#### Returns

`void`
