---
title: Adding ObjectiveC/Swift Code to an application
contributors:
  - Ombuweb
  - NathanWalker
  - rigor789
  - vallemar
---


You can add Objective-C/Swift source files to `App_Resources/iOS/src`. For Objective-C files, create a `.modulemap` file. To add a [CocoaPod](https://guides.cocoapods.org/using/getting-started.html), edit `App_Resources/iOS/Podfile`:

```bash
App_Resources/
├─ iOS/
│  ├─ src/
│  │  ├─ Shimmer.swift
│  │  ├─ Shimmer.h
│  │  ├─ Shimmer.m
│  │  └─ module.modulemap
│  └─ Podfile
└─ ... more
```


### Adding Swift code

Define the swfit file within the path `App_Resources/iOS/src`.


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

Given the example above, your JavaScript or TypeScript code can reference the Swift code by using the full class names, e.g.

```ts
const helloSwift = new HelloSwift();
helloSwift.stringToReturn = "Custom hello from Swift!";
console.log(helloSwift.getString()); // Custom hello from Swift!
```

#### Using `@objc`

`@objc` allows exposing variables and functions to use them from JS/TS, note that in the example the variables and methods have this notation.

#### Using `@objcMembers`

A shortcut to the `@objc` notation is to use the `@objcMembers` notation at the class level to make the entire class accessible, e.g.

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
<!---
TODO: add Objective-C code
### Adding Objective-C code

Define the Objective-C code within the path `App_Resources/iOS/src`.

### Create extension
```swift
//  UIViewExtension.swift
import UIKit

extension UIView {
    @objc func removeAllSubViews() {
        for view in self.subviews {
            view.removeFromSuperview()
        }
    }
}
```

```objc
//  UIView+Extension.h
#import <UIKit/UIKit.h>

@interface UIView (SDExtension)

- (void) removeAllSubViews;

@end
```

```objc
//  UIView+Extension.m
#import "UIView+SDExtension.h"

@implementation UIView (SDExtension)

- (void) removeAllSubViews
{
    for (int i = 0; i < [[self subviews] count]; i++ ) {
        [[[self subviews] objectAtIndex:i] removeFromSuperview];
    }
}

@end
```

-->