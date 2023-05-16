---
title: Connectivity
description: Get the current device network connection type and monitor changes in the connection type.
---

The connectivity class abstracts the native API that is responsible for receiving information about the connection type and availability of the network.

## How to use the Connectivity class

The following example shows how to use the Connectivity class:

<!--Preview: https://stackblitz.com/edit/nativescript-stackblitz-templates-1xb9ys?file=app/main-view-model.ts -->


## Connectivity API
The Connectivity class offers the following API:

### getConnectionType()

```ts
type = Connectivity.getConnectionType()
```

Gets the type of connection.
Returns a `number` value from the connectivity.connectionType ` enumeration. To use this method on Android you need to have the android.permission.ACCESS_NETWORK_STATE` permission added to the `AndroidManifest.xml` file.

---
### startMonitoring()

```ts
Connectivity.startMonitoring(connectionTypeChangedCallback: (newConnectionType: number) => void): void
```

Starts monitoring the connection type.
`connectionTypeChangedCallback`:  A function that will be called when the connection type changes.

---
### stopMonitoring()

```ts
Connectivity.stopMonitoring()
```

Stops monitoring the connection type.

---

### connectionType

```ts
Connectivity.connectionType.none
```

Defines the different connection types.

:::details More connection types

- `wifi = 1`
- `mobile = 2`,
- `ethernet = 3`,
- `bluetooth = 4`,
- `vpn = 5`

:::

---

## API Reference(s)
- [@nativescript/core/connectivity](https://docs.nativescript.org/api-reference/modules.html#connectivity) module
- [connectionType](https://docs.nativescript.org/api-reference/modules.html#connectivity) enum  

## Native Component
- `Android`: [CONNECTIVITY_SERVICE (android.content.Context)](https://developer.android.com/reference/android/content/Context)
- `iOS`: [SCNetworkReachability](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachability-g7d)
