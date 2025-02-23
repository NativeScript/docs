
declare class SDStatusBarManager extends NSObject {

	static alloc(): SDStatusBarManager; // inherited from NSObject

	static new(): SDStatusBarManager; // inherited from NSObject

	static sharedInstance(): SDStatusBarManager;

	batteryDetailEnabled: boolean;

	bluetoothState: SDStatusBarManagerBluetoothState;

	carrierName: string;

	dateString: string;

	iPadDateEnabled: boolean;

	iPadGsmSignalEnabled: boolean;

	networkType: SDStatusBarManagerNetworkType;

	timeString: string;

	readonly usingOverrides: boolean;

	disableOverrides(): void;

	enableOverrides(): void;
}

declare const enum SDStatusBarManagerBluetoothState {

	Hidden = 0,

	VisibleDimmed = 1,

	VisibleConnected = 2
}

declare const enum SDStatusBarManagerNetworkType {

	TypeWiFi = 0,

	TypeGPRS = 1,

	TypeEdge = 2,

	Type3G = 3,

	Type4G = 4,

	TypeLTE = 5
}
