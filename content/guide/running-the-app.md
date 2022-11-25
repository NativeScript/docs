---
title: Running the app
---

## Running on physical devices

You can install your app on a device during development via two ways:

- Enabling USB Debugging
- Wifi. To debug over Wifi, follow the steps at [Connect to a device over Wi-Fi (Android 11+)](https://developer.android.com/studio/command-line/adb#connect-to-a-device-over-wi-fi-android-11+) and [Connect to a device over Wi-Fi (Android 10 and lower)](https://developer.android.com/studio/command-line/adb#wireless).

### Enable Debugging over USB on Android devices

Follow the steps below to enable Debugging over USB:

1. Activate the `Developer options` menu:

`Settings` → `About phone` → `Software info` and then tapping the `Build number` row at the bottom `7 times`

Then back to `Settings` → `System` → `Developer options` to enable `USB debugging`.

2. Plug in your device via USB

Plug in your device via USB to your development machine.

Now check that your device is properly connected to ADB, the Android Debug Bridge, by running:

```cli
adb devices
```

The device should be listed. See the full [adb documentation](https://developer.android.com/studio/command-line/adb) for troubleshooting and detailed information.

To see the list of all the connected Android devices, you can run:

```cli
ns device android
```

3. Run your app

Launch your app on the device:

```cli
ns run android
```

### Launching an app on an iOS physical device

1. Connect your iOS device to your Mac

Use a USB to Lightning cable to connect the device to the Mac machine. Navigate to the `ios` folder in your project under `platforms`, then open the `.xcodeproj` file, or if you are using CocoaPods open the `.xcworkspace` in Xcode.

If this is your first time running an app on your iOS device, you may need to register your device for development. Open the `Product` menu from Xcode's menubar, then go to `Destination`. Look for and select your device from the list. Xcode will then register your device for development.

2. Configure code signing

Register for an Apple developer account if you don't have one yet.

Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).

3. Run your app

If the device is now registered with your developer account you should be able to run your NativeScript app on the device. Execute the following from your terminal to run the app from the CLI:

```cli
ns run ios
```

The app should install and launch on the connected iOS device.

## Running on virtual devices

### Android Emulators

Apart from using real Android devices, a viable option is to download, install and use an Android emulator.
In NativeScript, we can use all Android emulators that are connected and recognized by the [`ns device`](/development-workflow/nativescript-cli-basics#list-connected-devices)

::: tip Tip
Sometimes emulators take longer to start. As a recommendation and to avoid timing issues, start the emulator before executing other CLI commands. Once the emulator is started, leave it open to avoid the initial load time the next time you need to deploy an Android application.
:::

#### Creating Android Virtual Device via Android Studio

Open Android Studio, and then open "AVD Manager" &mdash; if you are on the welcome screen, then it's under the **Configure › AVD Manager** dropdown, otherwise it's under the **Tools › AVD Manager** menu.

If the list of available Virtual Devices is empty, you will need to create a new AVD. Click on "**Create Virtual Device...**" then pick a phone from the list. You can select any phone from the list &mdash; for example "**Pixel 3 XL**" and then click "**Next**". For the System Image select the latest version (the highest API Level in the list). If the selection is greyed out, click the "Download" link next to the Release Name to download the System Image and then click "**Next**" and "**Finish**" to create the AVD. The newly created AVD should show up in the list, and you should be able to click the green "play" button to start the virtual device.

#### Creating Android Virtual Device via command line tool

The `avdmanager` is a tool that allows you to create and manage Android Virtual Devices (AVDs) from the command line. The `avdmanager` is provided in the Android SDK Tools package (25.3.0 and higher) and is located in `<ANDROID_HOME_PATH_HERE>/cmdline-tools/latest/bin/`. For more information about the avdmanager and how to use it to create AVDs, see the [official avdmanager documentation](https://developer.android.com/studio/command-line/avdmanager).

Command syntax to create new AVD

```cli
cd $ANDROID_HOME/cmdline-tools/latest/bin
avdmanager create avd -n name -k "sdk_id" [-c {path|size}] [-f] [-p path]
```

You must provide a name for the AVD and specify the ID of the SDK package to use for the AVD using sdk_id wrapped in quotes.
For example, the following command creates an AVD named `test` using the x86 system image for API level 25:

```cli
avdmanager create avd -n test -k "system-images;android-25;google_apis;x86"
```

::: warning Note
The above command suggest that the system image is already downloaded. To download an image use the `sdkmanager`. For example `sdkmanager "system-images;android-25;google_apis;x86"`
:::

The following describes the usages for the other options:

- `-c {path|size}`: The path to the SD card image for this AVD or the size of a new SD card image to create for this AVD, in KB or MB, denoted with K or M. For example, -c path/to/sdcard/ or -c 1000M.
- `-f`: Force creation of the AVD. Use this option if you need to overwrite an existing AVD with a new AVD using the same name.
- `-p path`: Path to the location where the directory for this AVD's files will be created. If you do not specify a path, the AVD will be created in ~/.android/avd/.

To list all the downloaded system images use the `list` command.

```cli
avdmanager list
```

#### Using third-party emulators

An applicable option is to use third-party emulators (like **GenyMotion**).
Visit the official sites for details on how to install and use these emulators.

- [GenyMotion official site](https://www.genymotion.com)

### iOS Simulators

#### Creating iOS Simulators

The iOS simulator emulates iOS devices on Macs. The following documentation is a quick way to get the iOS simulator set up. For more information, see [Apple's documentation](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html).

#### Running on iOS Simualators

On a mac if you have XCode installed with the proper tools, executing `ns run ios` from your terminal will launch the Simulator program with a default device. Alternatively, you can open the Simulator program on your mac, select which device(s) you want to open by navigating to `File -> Open Simulator` and choosing the device to launch. Then execute `ns run ios` and the NativeScript app will launch on the open simulator(s).
