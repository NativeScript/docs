---
title: Connectivity
description: Get the current device network connection type and monitor changes in the connection type.
---

`Connectivity` provides easy-to-use APIs consolidating the appropriate platform native APIs to interact with the network's connection type and availability.

## Using Connectivity

To use Connectivity, import it from `@nativescript/core`.

```ts
import { Connectivity } from '@nativescript/core'
```

### Getting the current connection type

To check what type of network is currently connected use the [getConnectionType()](#getConnectionType) method.

```ts
const connectionType: number = Connectivity.getConnectionType()

if (connectionType) {
  // `Connectivity.connectionType.none`` is `0` so truthiness can be used to determine if the device is connected to any type of network
  fetch('https://httpbin.org/get')
    .then((response) => response.text())
    .then((result) => console.log(`Fetched ${result} with ${connectionType}`))
} else {
  console.log('Not connected to a network.')
}
```

Conditional behavior can easily be added for certain types of connections using the `Connectivity.connectionType` enum.

```ts
if (
  connectionType === Connectivity.connectionType.wifi ||
  connectionType === Connectivity.connectionType.ethernet
) {
  // Download large file
} else {
  // Download mobile friendly file
}
```

### Monitor changes to the connection type

Using the [startMonitoring()](#startMonitoring) method changes to the connection type can be observed.

```ts
Connectivity.startMonitoring((change: number) => {
  switch (change) {
    case Connectivity.connectionType.wifi:
    case Connectivity.connectionType.ethernet:
      console.log('Connected to home network')
      break
    case Connectivity.connectionType.mobile:
    case Connectivity.connectionType.bluetooth:
      console.log('Connected to mobile network')
      break
    case Connectivity.connectionType.vpn:
      console.log('Connected to vpn network')
      break
    default:
      console.log('Not connected to any network')
      break
  }
})
```

If you wish to halt the monitoring of connectivity changes, use the [stopMonitoring()](#stopMonitoring) function.

```ts
Connectivity.stopMonitoring()
```

## API

### getConnectionType()

```ts
Connectivity.getConnectionType(): number
```

This method retrieves the current connection type. It returns a number value representing one of the `connectionType` enumeration values.

::: warning Note
For Android, the `android.permission.ACCESS_NETWORK_STATE` permission must be added to the `AndroidManifest.xml` file to use this method.
:::

---

### startMonitoring()

```ts
Connectivity.startMonitoring(connectionTypeChangedCallback: (newConnectionType: number) => void): void
```

This method initiates the monitoring of the network connection type.
The `connectionTypeChangedCallback` is a function that will be invoked when the network connection type changes.

---

### stopMonitoring()

```ts
Connectivity.stopMonitoring()
```

This method halts the monitoring of the network connection type.

---

### connectionType

```ts
Connectivity.connectionType: number
```

This enumeration defines the different possible connection types.

:::details More connection types

- `none = 0`
- `wifi = 1`
- `mobile = 2`,
- `ethernet = 3`,
- `bluetooth = 4`,
- `vpn = 5`

:::

---

## API Reference(s)

- [@nativescript/core/connectivity](https://docs.nativescript.org/api/namespace/Connectivity) module
- [connectionType](https://docs.nativescript.org/api/enum/Connectivity-connectionType) enum

## Native Component

- `Android`: [CONNECTIVITY_SERVICE (android.content.Context)](https://developer.android.com/reference/android/content/Context)
- `iOS`: [SCNetworkReachability](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachability-g7d)
