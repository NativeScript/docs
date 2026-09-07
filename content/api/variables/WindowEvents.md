---
title: WindowEvents
titleTemplate: :title - API / NativeScript
description: Application-level events related to window management.
contributors: false
---

```ts
const WindowEvents: {
  primaryWindowChanged: "primaryWindowChanged";
  windowClose: "windowClose";
  windowOpen: "windowOpen";
};
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Application-level events related to window management.

## Type Declaration

### primaryWindowChanged

```ts
readonly primaryWindowChanged: "primaryWindowChanged";
```

Fired on Application when another window takes over the primary role.

### windowClose

```ts
readonly windowClose: "windowClose";
```

Fired on Application when a NativeWindow is closed/destroyed.

### windowOpen

```ts
readonly windowOpen: "windowOpen";
```

Fired on Application when a new NativeWindow is created.
