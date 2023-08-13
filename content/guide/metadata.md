---
title: Metadata
---

NativeScript empowers JavaScript with platform iOS and Android APIs through **_metadata_**. The platform metadata contains all the necessary information about each of the supported native classes, interfaces, protocols, structures, enumerations, functions, variables, etc. and is generated at build time by examining the native libraries from the iOS/Android SDKs and any third-party libraries and frameworks that are used by the NativeScript app.

::: warning Note
You cannot use APIs that are not present in the metadata. By default, if `--compileSdk` argument isn't provided while building, metadata will be built against the latest Android [Platform SDK](https://developer.android.com/about/versions/nougat/index.html) installed on the workstation. See [metadata limitations](#metadata-limitations).
:::

### Metadata Filtering

By default NativeScript includes all supported entities in the metadata. This allows app and plugin authors to freely call any native API from JavaScript. While it is benefitial during development, in some cases having metadata for all the APIs is undesirable and unnecessary. For example, there could be security implications involved (mentioning names of entities that shouldn't be known in the metadata binary files for example); performance could be degraded at runtime (due to larger metadata which has to be consulted when an unknown entry is encountered or at startup); or app size could increase due to unnecessary metadata which is never used.

To give developers control over the generated metadata there's support for black and whitelisting symbols by their native name.

### Metadata filtering rules in plugins

Plugins can declare their list of APIs that are called from JavaScript using a file named `native-api-usage.json`, located in each of the platform directories (`platforms/android` or `platforms/ios`). Its format is similar to:

```json
{
  "uses": ["java.util:List"]
}
```

### Metadata filtering rules in apps

Applications have the final word of what filtering will be applied to metadata. They provide similar `native-api-usage.json` files, located in `App_Resources/Android` and `App_Resources/iOS`, having the following format:

```json
{
  "whitelist-plugins-usages": true,
  "whitelist": ["java.util:Base64*"],
  "blacklist": ["java.util:Locale*"]
}
```

### Rules syntax

Each list comprises pattern entries with the following characteristics:

- Entries are of the form `<pattern1>[:pattern2]`
- On Android, **_pattern1_** is matched against Java package names, while the optional **_pattern2_** -- against classes, interfaces, enums.
- On iOS, **_pattern1_** is matched against Clang module/submodule names, while the optional **_pattern2_** -- against structs, global functions, enums, Objective-C interfaces, protocols, categories, constants, etc.
- Patterns support wildcards (**"\*"** - any number of characters and **"?"** - any single character).
- An unspecified or empty pattern is equivalent to being set to **"\*"** (matching everything)

### Rules semantics

After analyzing the filtering rules for a platform, {N} CLI builds final whitelist and blacklist files and outputs them in the native project to be used by the corresponding metadata generator. The blacklist is always equal to the one specified by the app. While the whitelist depends on the `whitelist-plugins-usages` flag:

- If it is `true`, the final whitelist is a concatenation of all plugin usage lists with the app's whitelist
- Otherwise, it is equal to the app's whitelist

These two lists unambiguously determine how filtering is performed:

1. If the whitelist is empty, then everything is considered whitelisted by default
2. If it contains at least one rule, only entities matching a rule are considered whitelisted
3. All entities which are not whitelisted or match a rule in the blacklist are stripped from metadata
4. All other entities are included in the metadata

### Examples

Sample filtering specifications can be found in `@nativescript/core` plugin's repository:

- [Android API usage list](https://github.com/NativeScript/NativeScript/blob/master/packages/core/platforms/android/native-api-usage.json)
- [iOS API usage list](https://github.com/NativeScript/NativeScript/blob/master/packages/core/platforms/ios/native-api-usage.json)

### Troubleshooting

Missing metadata entities could result in bugs at runtime. For example, if a native class has been accidentally filtered out, its constructor function will be `undefined` and this will lead to an exception when its attempted to be called. Figuring out what is the reason for something being `undefined` could be quite difficult because the reasons can vary. To check whether metadata filtering is to blame or not you should examine metadata generator's verbose logs after a successful build:

- On iOS they are located in `platforms/ios/build/<configuration>-<platform>/metadata-generation-stderr-<arch>.txt` (e.g. `platforms/ios/build/Debug-iphonesimulator/metadata-generation-stderr-x86_64.txt`);
- On Android they are located in `platforms/android/build-tools/buildMetadata.log`

For each global symbol that is discovered by the generator, there should be a line providing information whether it was included in the metadata or not, and which rules or what exception caused this. Examples:
<!-- TODO: An example of the following -->
- `verbose: Blacklisted kCFBuddhistCalendar from CoreFoundation.CFLocale (disabled by 'CoreFoundation*:*')` - when there are no whitelist rules a blacklisted symbol will show only the rule which disabled it
- `verbose: Blacklisted NSString from Foundation.NSString` - when there is at least one whitelist rule, some blacklisted symbols will not specify a rule. This means that the symbol didn't match any of the whitelist rules.
- `verbose: Blacklisted PHImageContentModeDefault from Photos.PhotosTypes (enabled by 'Photos.PhotosTypes:*', disabled by 'Photos.PhotosTypes:PHImageContentMode*')`, `verbose: Blacklisted String from java.lang (enabled by java.lang:*, disabled by java.lang:String)` - a blacklisted entry which matches both a whitelist rule and a blacklist rule will specify both.
- `verbose: Included NSObject from ObjectiveC.NSObject` - when there are no whitelist rules an included symbol won't specify a rule which caused it to be included
- `verbose: Included PHCollectionListType from Photos.PhotosTypes (enabled by 'Photos.PhotosTypes:*')`, `verbose: Included StrictMath from java.lang (enabled by java.lang:*)` - when a symbol is included because it matched a rule from the whitelist (and didn't match any from the blacklist) it will print that rule
- `verbose: Exception [Name: 'vfwprintf', JsName: 'vfwprintf', Module: 'Darwin.C.wchar', File: '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator13.2.sdk/usr/include/wchar.h'] : Can't create type dependency. --> [Type Decayed] : Can't create type dependency. --> [Type Typedef] : VaList type is not supported.` - if a symbol is not included because it isn't supported for some reason it will be stated in the logged exception. In this case the symbol cannot be used from JavaScript because NativeScript doesn't support calling functions with variable argument lists.
- `verbose: Exception [Name: 'GLKVector3Make', JsName: 'GLKVector3Make', Module: 'GLKit.GLKVector3', File: '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator13.2.sdk/System/Library/Frameworks/GLKit.framework/Headers/GLKVector3.h'] : Can't create type dependency. --> [Type Typedef] : Can't create type dependency. --> [Type Elaborated] : Can't create type dependency. --> [Type Record] : The record is an union.` - Another example of an unsupported symbol, this time the reason is that `union`s are unsupported

## Android Metadata

The NativeScript Metadata is the mapping between the JavaScript and the Android world. Besides a full list with all the available classes and methods, the metadata contains the [JNI](http://developer.android.com/training/articles/perf-jni.html) signature for each accessible Android method/field. It is pre-generated in a binary format, and embedded in the application package (apk), storing the minimal required information thus providing small size and highly efficient read access. The generation process uses bytecode reading to parse all publicly available types in the Android libraries supplied to the NativeScript project. The generator works as part of the Android build process, meaning that no user interaction is required for it to work.

![Metadata](/assets/images/metadata_diagram.png)

### Metadata API Level

Only Android public APIs (**including those of any plugins added to the project**) present in the metadata will be accessible in JavaScript/TypeScript. That means, if an application is built with metadata for API level 23 (Android Marshmallow 6.0 – 6.0.1), the application user might have problems when running the application on an older device, for example with API levels 17 through 19 (Android KitKat 4.4 – 4.4.4). You can use SDK version conditionals to help these cases.

Metadata is built automatically for each application. The metadata API level, or simply put, what API level the metadata is built for, is determined by the `--compileSdk` flag passed to the build. By default the NativeScript CLI automatically detects the highest Android API level installed on the developer's machine and passes it to the build implicitly. This `--compileSdk` flag can be supplied explicitly when starting a build: `ns run android --compileSdk=1`.

#### Metadata Limitations

Let's look at the Android [TextView](https://developer.android.com/reference/android/widget/TextView.html).
In API level 21 a method called `getLetterSpacing` was added meaning an application developer can use the `getLetterSpacing` method only on two conditions:

- The built metadata is >= 21
- The device that the application will be running on is >= 21

#### Possible Implications When Working With Android APIs

##### Implication A: Building against lower API level.

If an application is built with `--compileSdk` flag pointing to a lower Android API level, for example 19, the generated metadata will also be for API level 19. In that case making calls to API in Levels 21 and up will not be possible, because the metadata comprises of meta information about API level <= 19.

This problem is easily solved by not specifying a `--compileSdk` flag and using the default behavior.

##### Implication B: Building against higher API level.

What happens when an application is built with a higher API level(e.g. 23), but runs on a device with a lower API level(e.g. 20)?
First the metadata is built for API level 23. If the JavaScript code calls a method introduced after API level 20 the Android runtime will try to call this method because it will recognize it in the metadata, but when the actual native call is made on the lower level device, an exception will be thrown because this method won't be present on the device.

This problem is solved by detecting the API level at runtime and using the available API.

Detecting the API Level in JavaScript:

```js
if (android.os.Build.VERSION.SDK_INT >= 21) {
  // your api level-specific code
}
```

## iOS Metadata

This is our own custom data format for listing the iOS APIs we are aware of and can handle. It stores the minimal required information and provides a small size and highly efficient read access. iOS supports type introspection to some extent but along with the C APIs embedded all the way in the native APIs we had to store a lot of extra information. The Metadata is pre-generated at compile time from the SDK header files and embedded in the app package (ipa).

