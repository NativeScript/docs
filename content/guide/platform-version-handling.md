---
title: Platform Version Handling
---

There are several key things to understand about platform version handling within the scope of your NativeScript project. Platform versioning pertains to specific SDKs shipped with Android, iOS, visionOS, macOS, Meta Quest, etc.

In general, maintaining `package.json` dependency versions is often a familiar topic with JavaScript developers. We recommend [this article](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) as well as [our overview here](https://docs.nativescript.org/guide/development-workflow/using-packages#package-managers) if not familiar with JavaScript package managers.

This document however focuses on a topic beyond the JavaScript ecosystem.

# How to manage platform versions

## Android

There are 2 key Android files in your project to keep an eye on with platform versioning over time:

1. `app.gradle`: [Gradle](https://gradle.org/) build configuration for Android which contains minimum, maximum and build-tools SDK targets.

We can specify target SDKs as follows:

```groovy
android {
  compileSdkVersion 34
  buildToolsVersion "34"
  defaultConfig {
    minSdkVersion 24
    targetSdkVersion 34
    versionName = "1.0.0"
    versionCode = 1
  }
}
```

Every year, platforms often bump minimum requirements for public store deployments to be accepted which can often be seen [here for Google](https://developer.android.com/google/play/requirements/target-sdk). For example, it may be stated like this:

> New apps and app updates must target Android 14 (API level 34) or higher to be submitted to Google Play; except for Wear OS and Android TV apps, which must target Android 13 (API level 33) or higher.
Existing apps must target Android 13 (API level 33) or higher to remain available to new users on devices running Android OS higher than your app's target API level.

It's good to refer to these platform docs from time to time (*email notifications are also often sent to Play Store accounts on these evolving requirements*) to ensure your app's targets keep up with store requirements.

2. `before-plugins.gradle`: (*optional*) Some plugins may fallback to gradle configured versions which you can define here to also help align with app build configuration targets.

We can specify additional gradle versions as follows:

```groovy
ext {
  compileSdkVersion = 34
  buildToolsVersion = "34"
  minSdkVersion = 24
  targetSdkVersion = 34
}
```

### Android Version Errors with Solutions

#### Error Sample A

```bash
1.  Dependency 'androidx.appcompat:appcompat-resources:1.6.1' requires libraries and applications that
      depend on it to compile against version 33 or later of the
      Android APIs.

      :app is currently compiled against android-31.

      Recommended action: Update this project to use a newer compileSdk
      of at least 33, for example 34.
```

#### Error Solution A

This one is a bit more self explanatory since the error includes a recommended action. Just targeting higher sdk version would resolve this one.

#### Error Sample B

```bash
platforms/android/app/build.gradle' line: 574
A problem occurred configuring project ':app'.
Could not find androidx.dynamicanimation:dynamicanimation:1.1.2
```

#### Error Solution B

This is often a misspelled plugin name or invalid version. In this particular error, it's that 1.1.2 of that library does not exist; it's actually `1.1.0-alpha03` for example.

## iOS

There are 2 key iOS files in your project to keep an eye on with platform versioning over time:

- `App_Resources/iOS/build.xcconfig`: Sets minimum iOS deployment version 

We can specify the minimum target as follows:

```bash
IPHONEOS_DEPLOYMENT_TARGET = 17.0;
```

Every year, platforms often bump minimum requirements for public store deployments to be accepted which can often be seen [here for Apple](https://developer.apple.com/ios/submit/). For example, the `Build with Xcode` section may often state something like this:

> All iOS and iPadOS apps uploaded to App Store Connect must be built with a minimum of Xcode 15 and the iOS 17 SDK. Starting April 2025, all iOS and iPadOS apps uploaded to App Store Connect must be built with the iOS 18 SDK.

It's good to refer to these platform docs from time to time (*email notifications are also often sent to App Store accounts on these evolving requirements*) to ensure your app's targets keep up with store requirements.

- `App_Resources/iOS/Podfile`: (*optional*) If your project brings in plugins that involve [Cocoapods](https://cocoapods.org/) it's a good idea to have one of these. It can help align platform version minimums to match your build.xcconfig.

We can make our `Podfile` match our build.xcconfig target versions as follows:

```ruby
platform :ios, '17.0'

post_install do |installer|
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '17.0'
      end
    end 
end
```

It's generally a good practice to have these match.

### iOS Version Errors with Solutions

#### iOS Version Error Sample A

```
node_modules/@nativescript/swift-ui/platforms/ios/src/Common/View+Modifiers.swift:874:49: error: 'accessibilitySortPriority' is only available in iOS 14.0 or newer
                            view = AnyView(view.accessibilitySortPriority(priority))

RichTextKit/Sources/RichTextKit/Format/RichTextFormatToolbarBase.swift:148:31: error: 'bordered' is only available in iOS 15.0 or newer
                .buttonStyle(.bordered)

RichTextKit/Sources/RichTextKit/Colors/RichTextColor+Picker.swift:175:22: error: 'foregroundStyle' is only available in iOS 17.0 or newer
                    .foregroundStyle(foregroundColor)
```

### iOS Version Error Solution A

This is related to 2 causes:

- A plugin in use, @nativescript/swift-ui, uses a modifier that is only available on iOS 14.0 or newer.
- Another plugin or internal implementation in the project use uses Swift APIs that are only available in 15 and 17 or newer.

So what to do in a case like this? You have several options.

A. Set an `IPHONEOS_DEPLOYMENT_TARGET` in your `App_Resource/iOS/build.xcconfig` to the highest minimum version stated. In this case, it would be 17.0.

```
IPHONEOS_DEPLOYMENT_TARGET = 17.0;
```

B. Make a change to source code to properly wrap the implementations with [availability](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/statements/#Availability-Condition) decorators to ensure that platform version specific code does not cause an issue if your app is run on an older devicie. You can use [patch-package](https://www.npmjs.com/package/patch-package) to create the diff to manage custom source code changes made to plugins. 

```
var body: some View {
    if #available(iOS 17.0, *) {
        ZStack {
            // ... something only available on iOS 17 or newer
        }
    } else {
        // fallback 
        EmptyView()
    }
}
```

## Other Considerations

It's common for NativeScript plugins to include a `platforms/{ios|android}` folder which merge various platform dependencies in with your project. These will often include Cocoapods, gradle plugins, or just platform specific code. It's possible these plugins may specify SDK's which need an update from time to time to match the store requirements mentioned above. You can contact plugin authors or become involved in open source yourself by helping keep your plugins up to date.
