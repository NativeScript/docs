---
title: Troubleshooting
description: Common issues and solutions
contributors:
  - Ombuweb
  - rigor789
  - NathanWalker
---

## Useful tips

### Deleting XCode DerivedData

XCode caches build data inside a folder called `DerivedData` - occasionally it can get corrupted due to a bad build, and subsequent builds can fail until the cached artifacts are cleared.

[Learn more in this guide to delete DerivedData](https://programmingwithswift.com/delete-derived-data-xcode/)

### Stopping the ADB server

<abbr title="Android Debug Bridge">adb</abbr> can sometimes get stuck in an unresponsive state. In these cases, you can force restart the adb server by running:

```cli
adb kill-server
```

## Common issues

### XCode 14: xcodebuild failed with exit code 65

```
error: Signing for "XXX-YYY" requires a development team.
Select a development team in the Signing & Capabilities editor. (in target 'XXX-YYY' from project 'Pods')

<...>
note: Run script build phase 'NativeScript PreBuild' will be run during every build because the option to
run the script phase "Based on dependency analysis" is unchecked. (in target 'XXX' from project 'XXX')
<...>

** BUILD FAILED **

Unable to apply changes on device: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXX.
Error is: Command xcodebuild failed with exit code 65.
```

::: warning :orange_circle: Possible Solution

The most likely issue is a missing `DEVELOPMENT_TEAM` for some Pods. The workaround is to put the following in `App_Resources/iOS/Podfile` (create one if your project doesn't have it already):

```ruby
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      # either set the DEVELOPMENT_TEAM explicitly
      config.build_settings['DEVELOPMENT_TEAM'] = '<TEAM_ID>'
      # or disable code signing
      config.build_settings['CODE_SIGNING_ALLOWED'] = 'NO'
    end
  end
end
```

Replacing `<TEAM_ID>` with your actual team id.

:::

### CocoaPods could not find compatible versions for pod

```
CocoaPods could not find compatible versions for pod "SDWebImage":
  In Podfile:
    SDWebImage (~> 5.13.2)
```

::: tip :green_circle: Common Solution

CocoaPods are like npm packages but for iOS libraries (it’s their own npm registry if you will). Your local Cocoapods cache (usually located in `~/.cocoapods`) keeps a Spec list reference that can become outdated and needs to be manually updated with the following command:

```cli
pod repo update
```

In case this doesn't resolve the issue, you can often [delete the XCode DerivedData](#delete-xcode-deriveddata).

:::

### CocoaPods could not find compatible versions for pod - higher minimum deployment target

```
[!] CocoaPods could not find compatible versions for pod "FBSDKCoreKit":
  In Podfile:
    FBSDKCoreKit (~> 13.1.0)

Specs satisfying the `FBSDKCoreKit (~> 13.1.0)` dependency were found, but they required a higher minimum deployment target.
```

::: tip :green_circle: Common Solution

<!-- @include: ./parts/troubleshooting-increase-deployment-target.md -->

:::

### dyld: Symbol not found

```
dyld: Symbol not found: __ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE
  Referenced from: /path/to/app/platforms/ios/internal/metadata-generator-x86_64/bin/./objc-metadata-generator (which was built for Mac OS X 12.0)
  Expected in: /usr/lib/libc++.1.dylib
```

::: warning :orange_circle: Possible Solution

This can happen when a library uses a symbol not avaialble in the current deployment target.

<!-- @include: ./parts/troubleshooting-increase-deployment-target.md -->

:::

### Unable to apply changes on device

```
Installing on device XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXX...
Unable to apply changes on device: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXX.
Error is: Failed to install /path/to/appname/platforms/ios/build/Debug-iphoneos/appname.ipa
on device with identifier XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXX. Error is: Could not install application.
```

::: warning :orange_circle: Possible Solution

Open the project in XCode (`platforms/ios/<appname>.xcworkspace`) and then select the project name in the left file tree. You should see **General**, **Signing & Capabilities** and other tabs in the middle. Select your device as the run target in the top bar, then select **Signing & Capabilities** and select an appropriate team, and if necessary press the **Register Device** button in the Profiles list.

Once the device is registered, you can exit XCode, and running the app from the NativeScript CLI should work as expected.

:::

### EMFILE: too many open files 'FILE_PATH'

```
Webpack compilation complete. Watching for file changes.
Watchpack Error (watcher): Error: EMFILE: too many open files 'FILE_PATH'
Watchpack Error (watcher): Error: EMFILE: too many open files 'FILE_PATH'
Watchpack Error (watcher): Error: EMFILE: too many open files 'FILE_PATH' <-- This repeats many times
```

::: warning :orange_circle: Possible Solution

Add the following lines to your shell profile, usually `~/.bash_profile` or `~/.bashrc`, or if you are using `zsh` then `~/.zshrc` config file:

```bash
export NODE_OPTIONS="--max-old-space-size=4096"
```

Then open a new terminal window and try running again.

**Note**: you can increase this number further, but keep in mind the maximum value depends on the available system memory.

:::

### error TS2611: 'xxx' is defined as a property in class 'Y', but is overridden here in 'Z' as an accessor

```
ERROR: node_modules/@nativescript/core/ui/proxy-view-container/index.d.ts:10:9
error TS2611: 'ios' is defined as a property in class 'LayoutBase',
but is overridden here in 'ProxyViewContainer' as an accessor.

10 get ios(): any;
~~~

node_modules/@nativescript/core/ui/proxy-view-container/index.d.ts:11:9
error TS2611: 'android' is defined as a property in class 'LayoutBase',
but is overridden here in 'ProxyViewContainer' as an accessor.

11 get android(): any;
```

::: tip :green_circle: Common Solution

The above can be ignored by adding the following to your `tsconfig.json`:

```json
"skipDefaultLibCheck": true,
"skipLibCheck": true,
```

<!--  -->

:::
