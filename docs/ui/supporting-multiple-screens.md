---
title: Supporting Multiple Screens
description: Learn how to tailor your application for different screen sizes. The examples in the article show how to define custom XML and CSS files depending on the device's screen sizes. The provided samples show how to determine the orientation and platform-specific XML and CSS files.
position: 150
slug: multiple-screen-sizes
previous_url: /core-concepts/supporting-multiple-screens
environment: nativescript
---

# Supporting Multiple Screens
Mobile application run on different devices with different screen sizes and form factors. NativeScript provides a way to define different files(.js, .css, .xml etc.) to be loaded based on the screens size, platform and orientation of the current device. The approach is somewhat similar to [multi screen support in android](http://developer.android.com/guide/practices/screens_support.html). There is a set of *qualifiers* that can be added inside the file that will be respected when the file is loaded. Here is how the file should look like:

`<file-name>[.<qualifier>]*.<extension>`

NativeScript supports three different file qualifiers:
- Platform qualifiers
- Screen size qualifiers
- Orientation qualifiers

> **Important:** The qualifiers for screen size and orientation are supported only in NativeScript Core applications. These qualifiers are not compatible with Angular. The platform qualifiers can be used in both NativeScript Core and NativeScript Angular applicaitons.

## Platform Qualifiers

* `android` – android platform
* `ios` – iOS platform

*Example(platform specific files)*:

* `app.android.css` - CSS styles for Android.
* `app.ios.css` - CSS styles for iOS. 

The platform qualifiers are executed during build time, while the others - during run time. For example, the app.ios.css file will not be taken in consideration when building for android platform. Contrary, the screen size qualifiers will be considered just after the application runs on a device with specific screen size.

## Screen Size Qualifiers

All the values in screen size qualifiers are in density independent pixels(dp) - meaning it corresponds to the physical dimensions of the screen. The assumptions is that there are ~160 dp per inch. For example, according to android guidelines if the device's smaller dimension is more than 600dp(~3.75 inches) it is probably tablet.

* `minWH<X>` - The smaller dimension(width or height) should be at least **X** dp.
* `minW<X>` - Width should be at least **X** dp.
* `minH<X>` - Height should be at least **X** dp.

*Example(separate XML file for tablet and phone)*:

* `main-page.minWH600.xml` - XML file to be used for tablet devices.
* `main-page.xml` - XML to be used for phones 

> **Note:** Screen size qualifiers are not supported by Angular.

## Orientation Qualifiers

* `land` - orientation is in landscape mode
* `port` - orientation is in portrait mode

> **Note:** Orientation qualifiers are not supported by Angular.

> **Note:** All qualifiers are taken into account when the page is loading. However, changing the device orientation will not trigger page reload and will not change the current page.
