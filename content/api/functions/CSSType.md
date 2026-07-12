---
title: CSSType
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function CSSType(type: string): ClassDecorator;
```

Defined in: [ui/core/view/index.d.ts:37](https://github.com/NativeScript/NativeScript/blob/9.0.20-core/packages/core/ui/core/view/index.d.ts#L37)

Specifies the type name for the instances of this View class,
that is used when matching CSS type selectors.

Usage:
```
@CSSType("Button")
class Button extends View {
}
```

Internally the decorator set `Button.prototype.cssType = "Button"`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type name, e. g. "Button", "Label", etc. |

## Returns

`ClassDecorator`
