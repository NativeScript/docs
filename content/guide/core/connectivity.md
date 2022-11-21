---
title: Connectivity
---

The connectivity class provides a common abstraction of the functionality responsible for receiving information about the connection type and availability of the network.

## Using Connectivity

The following example shows how to use the Connectivity class:

<!-- TODO: Add Preview -->


## Connectivity API

### getConnectionType

```ts
const type = Connectivity.getConnectionType()
```

Gets the type of connection.
Returns a `number` value from the connectivity.connectionType ` enumeration. To use this method on Android you need to have the android.permission.ACCESS_NETWORK_STATE` permission added to the `AndroidManifest.xml` file.

---
### startMonitoring

```ts

Connectivity.startMonitoring(connectionTypeChangedCallback: (newConnectionType: number) => void): void

```

Starts monitoring the connection type.
`connectionTypeChangedCallback`:  A function that will be called when the connection type changes.

---
### stopMonitoring

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

:::details References

## API References

| Name                                                                                                     | Type     |
| -------------------------------------------------------------------------------------------------------- | -------- |
| [@nativescript/core/connectivity](https://docs.nativescript.org/api-reference/modules.html#connectivity) | `Module` |
| [connectionType](https://docs.nativescript.org/api-reference/modules.html#connectivity)                  | `Enum`   |

## Native Component

| Android                                                                                                           | iOS                                                                                                              |
| :---------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| [CONNECTIVITY_SERVICE (android.content.Context)](https://developer.android.com/reference/android/content/Context) | [SCNetworkReachability](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachability-g7d) |

:::