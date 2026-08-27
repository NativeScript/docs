---
title: WindowContentRequest
titleTemplate: :title - API / NativeScript
description: Describes the window asking for content.
contributors: false
---

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Describes the window asking for content.

## Properties

### android?

```ts
optional android?: {
  intent?: Intent;
  savedInstanceState?: Bundle;
};
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

#### intent?

```ts
optional intent?: Intent;
```

#### savedInstanceState?

```ts
optional savedInstanceState?: Bundle;
```

***

### data?

```ts
optional data?: Record<string, any>;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

NSUserActivity.userInfo on iOS, intent extras on Android.

***

### ios?

```ts
optional ios?: {
  connectionOptions?: UISceneConnectionOptions;
};
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

#### connectionOptions?

```ts
optional connectionOptions?: UISceneConnectionOptions;
```

***

### isPrimary

```ts
isPrimary: boolean;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

Whether the window is the application's primary window.

***

### window

```ts
window: NativeWindow;
```

Defined in: [native-window/native-window-interfaces.ts](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/native-window/native-window-interfaces.ts)

The window that needs content.
