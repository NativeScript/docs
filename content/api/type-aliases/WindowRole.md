---
title: WindowRole
titleTemplate: :title - API / NativeScript
description: The purpose a window surface serves. - `application` – a regular app window (iOS application scene, Android activity). - `embedded` – a window hosted inside ...
contributors: false
---

```ts
type WindowRole = "application" | "embedded" | "carplay" | "externalDisplay";
```

Defined in: [native-window/index.d.ts:18](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/index.d.ts#L18)

The purpose a window surface serves.

- `application` – a regular app window (iOS application scene, Android activity).
- `embedded` – a window hosted inside another app or container.
- `carplay` – a CarPlay template scene.
- `externalDisplay` – an external/secondary display scene.
