---
title: isEnabled
titleTemplate: :title - API / NativeScript
contributors: false
---

```ts
function isEnabled(): boolean;
```

Defined in: trace/index.d.ts:39

A function that returns whether the tracer is enabled and there is a point in writing messages.
Check this to avoid writing complex string templates.
Send error messages even if tracing is disabled.

## Returns

`boolean`
