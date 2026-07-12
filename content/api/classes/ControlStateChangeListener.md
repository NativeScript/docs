---
title: ControlStateChangeListener
titleTemplate: :title - API / NativeScript
description: "An utility class used for supporting styling infrastructure. WARNING: This class is intended for IOS only."
contributors: false
---

Defined in: [ui/core/control-state-change/index.d.ts:7](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/control-state-change/index.d.ts#L7)

An utility class used for supporting styling infrastructure.
WARNING: This class is intended for IOS only.

## Constructors

### Constructor

```ts
new ControlStateChangeListener(
   control: any, 
   states: string[], 
   callback: ControlStateChangeListenerCallback): ControlStateChangeListener;
```

Defined in: [ui/core/control-state-change/index.d.ts:13](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/control-state-change/index.d.ts#L13)

Initializes an instance of ControlStateChangeListener class.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | `any` | An instance of the UIControl which state will be watched. |
| `states` | `string`[] | - |
| `callback` | `ControlStateChangeListenerCallback` | A callback called when a visual state of the UIControl is changed. |

#### Returns

`ControlStateChangeListener`

## Methods

### start()

```ts
start(): any;
```

Defined in: [ui/core/control-state-change/index.d.ts:15](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/control-state-change/index.d.ts#L15)

#### Returns

`any`

***

### stop()

```ts
stop(): any;
```

Defined in: [ui/core/control-state-change/index.d.ts:16](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/control-state-change/index.d.ts#L16)

#### Returns

`any`
