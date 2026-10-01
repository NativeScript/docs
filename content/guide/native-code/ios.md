---
title: Adding ObjectiveC/Swift Code to an application
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
  - vallemar
---

You can add Objective-C/Swift source files to `App_Resources/iOS/src`. Objective-C files also need a [`module.modulemap`](#_2-add-a-module-modulemap) file that lists their headers. To add a [CocoaPod](https://guides.cocoapods.org/using/getting-started.html), edit `App_Resources/iOS/Podfile`:

```bash
App_Resources/
├─ iOS/
│  ├─ src/
│  │  ├─ HelloSwift.swift
│  │  ├─ Shimmer.h
│  │  ├─ Shimmer.m
│  │  └─ module.modulemap
│  └─ Podfile
└─ ... more
```

### Adding Swift code

Define the Swift file in `App_Resources/iOS/src`.

```swift
// HelloSwift.swift
import UIKit

class HelloSwift: NSObject {
    @objc public var stringToReturn: String = "Hello from Swift!"

    @objc public func getString() -> String {
        return stringToReturn;
    }
}
```

Given the example above, your JavaScript or TypeScript code can reference the Swift code by using the full class name:

```ts
const helloSwift = new HelloSwift()
helloSwift.stringToReturn = 'Custom hello from Swift!'
console.log(helloSwift.getString()) 
// prints: Custom hello from Swift!
```

#### Using `@objc`

`@objc` allows exposing variables and functions to use them from JS/TS, note that in the example the variables and methods have this notation.

#### Using `@objcMembers`

A shortcut to the `@objc` notation is to use the `@objcMembers` notation at the class level to make the entire class accessible.

```swift
// HelloSwift.swift
import UIKit

@objcMembers
class HelloSwift: NSObject {
    public var stringToReturn: String = "Hello from Swift!"

    public func getString() -> String {
        return stringToReturn;
    }
}
```

### Adding Objective-C code

Objective-C code needs one more file than Swift: a `module.modulemap`. The example below adds a `Shimmer` class written in Objective-C to `App_Resources/iOS/src` and makes it callable from JavaScript/TypeScript.

#### 1. Add the header and implementation files

```objc
// Shimmer.h
#import <UIKit/UIKit.h>

@interface Shimmer : NSObject

+ (void)startOnView:(UIView *)view;
+ (void)stopOnView:(UIView *)view;

@end
```

```objc
// Shimmer.m
#import "Shimmer.h"

@implementation Shimmer

+ (void)startOnView:(UIView *)view {
    CAGradientLayer *gradient = [CAGradientLayer layer];
    gradient.frame = view.bounds;
    gradient.startPoint = CGPointMake(0, 0.5);
    gradient.endPoint = CGPointMake(1, 0.5);
    gradient.colors = @[
        (id)[UIColor colorWithWhite:1 alpha:0.4].CGColor,
        (id)[UIColor whiteColor].CGColor,
        (id)[UIColor colorWithWhite:1 alpha:0.4].CGColor,
    ];

    CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"locations"];
    animation.fromValue = @[@-1.0, @-0.5, @0.0];
    animation.toValue = @[@1.0, @1.5, @2.0];
    animation.duration = 1.2;
    animation.repeatCount = HUGE_VALF;
    [gradient addAnimation:animation forKey:@"shimmer"];

    view.layer.mask = gradient;
}

+ (void)stopOnView:(UIView *)view {
    view.layer.mask = nil;
}

@end
```

#### 2. Add a `module.modulemap`

A module map is a small text file, used by the Clang compiler, that groups a set of Objective-C header files into a named _module_. NativeScript reads the module map when it builds your app to find out which Objective-C classes, methods and properties exist. It uses that information to generate the metadata that lets JavaScript call your code.

**Without a module map, your Objective-C code is still compiled into the app, but JavaScript cannot see it.** The class will be `undefined` at runtime, and the build log will contain this warning:

```
warning: Directory .../App_Resources/iOS/src with native iOS source code doesn't contain a modulemap file. Metadata for it will not be generated and it will not be accessible from JavaScript.
```

Create a file named exactly `module.modulemap` at the root of `App_Resources/iOS/src`, next to your files:

```bash
App_Resources/
└─ iOS/
   └─ src/
      ├─ Shimmer.h
      ├─ Shimmer.m
      └─ module.modulemap
```

For the `Shimmer` example, it contains:

```
// module.modulemap
module Shimmer {
    header "Shimmer.h"
    export *
}
```

Each line does the following:

- `module Shimmer { ... }`: declares a module. The name can be anything that is unique in your app, and it does not need to match a class name. You never import this name in JavaScript, because the classes become globals (see step 3).
- `header "Shimmer.h"`: a header to include in the module. The path is relative to the `module.modulemap` file. List **only `.h` files**, never `.m` files. Classes that are only declared in a `.m` file are not exposed.
- `export *`: re-exports everything that the listed headers import (here, `UIKit`), so that types like `UIView` in your method signatures resolve correctly.

When you add more Objective-C classes, add one `header` line per header file to the same module. Headers in subfolders use a relative path:

```
module LocalModule {
    header "Shimmer.h"
    header "views/GradientView.h"
    export *
}
```

::: tip Note
Swift files do **not** need to be listed in a module map. Only Objective-C headers do.

The `ns native add objective-c <ClassName>` command creates the `.h` and `.m` files and adds the header to `App_Resources/iOS/src/module.modulemap` for you, using a module named `LocalModule`. See [Adding custom native code](/guide/adding-native-code).
:::

#### 3. Use it from JavaScript/TypeScript

After a rebuild, the class is available as a global. Objective-C selectors are mapped to JavaScript method names by dropping the colons, so `startOnView:` becomes `startOnView`:

```ts
import { EventData, View } from '@nativescript/core'

export function onTap(args: EventData) {
  const view = args.object as View
  Shimmer.startOnView(view.ios)
}
```

To get type checking and autocomplete for `Shimmer`, [generate TypeScript typings](/guide/native-code/generate-typings) for it. Until you do, you can declare it yourself with `declare const Shimmer: any`.

If the class is still `undefined` after you add or change the module map, run `ns clean` and build again.

