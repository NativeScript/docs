---
title: WINDOW_SCOPED_CSS_CLASSES
titleTemplate: :title - API / NativeScript
description: Classes describing the state of a single window. Two windows can legitimately disagree on all of them, so they live on each window's root view (and the modal...
contributors: false
---

```ts
const WINDOW_SCOPED_CSS_CLASSES: string[];
```

Defined in: [css/system-classes.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/css/system-classes.ts)

Classes describing the state of a single window. Two windows can legitimately
disagree on all of them, so they live on each window's root view (and the modals
presented over it) rather than in the process-wide system class list.
