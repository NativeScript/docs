---
title: iOS Subclassing and conforming to protocols
---
<!-- TODO: add Preview -->

## Extending iOS classes

The following example shows how to extend the `UIViewController`:

```js
var MyViewController = UIViewController.extend({
    // Override an existing method from the base class.
    // We will obtain the method signature from the protocol.
    viewDidLoad: function () {
        // Call super using the prototype:
        UIViewController.prototype.viewDidLoad.apply(this, arguments);
        // or the super property:
        this.super.viewDidLoad();

        // Add UI to the view here...
    },
    shouldAutorotate: function () { return false; },

    // You can override existing properties
    get modalInPopover() { return this.super.modalInPopover; },
    set modalInPopover(x) { this.super.modalInPopover = x; },

    // Additional JavaScript instance methods or properties that are not accessible from Objective-C code.
    myMethod: function() { },

    get myProperty() { return true; },
    set myProperty(x) { },
}, {
    name: "MyViewController"
});

```

```ts
// A native class with the name "JSObject" will be registered, so it should be unique
@NativeClass()
class JSObject extends NSObject implements NSCoding {
    public encodeWithCoder(aCoder) { /* ... */ }

    public initWithCoder(aDecoder) { /* ... */ }

    public "selectorWithX:andY:"(x, y) { /* ... */ }

    // An array of protocols to be implemented by the native class
    public static ObjCProtocols = [ NSCoding ];

    // A selector will be exposed so it can be called from native.
    public static ObjCExposedMethods = {
        "selectorWithX:andY:": { returns: interop.types.void, params: [ interop.types.id, interop.types.id ] }
    };
}
```

:::warning Note

There should be no TypeScript constructor, because it will not be executed. Instead override one of the `init` methods.
:::

#### Exposed Method Example

As shown above, extending native classes in NativeScript take the following form:

`var <DerivedClass> = <BaseClass>.extend(classMembers, nativeSignature);`

The `classMembers` object can contain three types of methods:

- base class overrides,
- native visible methods, and
- pure JavaScript methods

The pure JavaScript methods are not accessible to native libraries. If you want the method to be visible and callable from the native libraries, pass the `nativeSignature` parameter the needed additional metadata about the method signature  to `extend` with needed additional metadata about the method signature.


The `nativeSignature` argument is optional and has the following properties:

- `name` - optional, string with the derived class name
- `protocols` - optional, array with the implemented protocols
- `exposedMethods` - optional, dictionary with method `names` and `native method signature` objects

The `native method signature` object has two properties:

- `returns` - required, `type` object
- `params` - required, an array of `type` objects

The type object in general is one of the `runtime types`:

- A constructor function, that identifies the Objective-C class
- A primitive types in the `interop.types` object
- In rare cases can be a reference type, struct type etc. described with the interop API


The following example is how you can expose a pure JavaScript method to Objective-C APIs:

```js
var MyViewController = UIViewController.extend({
    viewDidLoad: function () {
        // ...
        var aboutButton = UIButton.buttonWithType(UIButtonType.UIButtonTypeRoundedRect);
        // Pass this target and the aboutTap selector for touch up callback.
        aboutButton.addTargetActionForControlEvents(this, "aboutTap", UIControlEvents.UIControlEventTouchUpInside);
        // ...
    },
    // The aboutTap is a JavaScript method that will be accessible from Objective-C.
    aboutTap: function(sender) {
        var alertWindow = new UIAlertView();
        alertWindow.title = "About";
        alertWindow.addButtonWithTitle("OK");
        alertWindow.show();
    },
}, {
    name: "MyViewController",
    exposedMethods: {
        // Declare the signature of the aboutTap. We can not infer it, since it is not inherited from base class or protocol.
        aboutTap: { returns: interop.types.void, params: [ UIControl ] }
    }
});
```

### Overriding Initializers
Initializers should always return a reference to the object itself, and if it cannot be initialized, it should return `null`. This is why we need to check if `self` exists before trying to use it.

```js
var MyObject = NSObject.extend({
    init: function() {
        var self = this.super.init();
        if (self) {
            // The base class initialized successfully
            console.log("Initialized");
        }
        return self;
    }
});

```

## Conforming to Objective-C/Swift protocols

The following example conforms to the `UIApplicationDelegate` protocol:

```js
var MyAppDelegate = UIResponder.extend({
    // Implement a method from UIApplicationDelegate.
    // We will obtain the method signature from the protocol.
    applicationDidFinishLaunchingWithOptions: function (application, launchOptions) {
        this._window = new UIWindow(UIScreen.mainScreen.bounds);
        this._window.rootViewController = MyViewController.alloc().init();
        this._window.makeKeyAndVisible();
        return true;
    }
}, {
    // The name for the registered Objective-C class.
    name: "MyAppDelegate",
    // Declare that the native Objective-C class will implement the UIApplicationDelegate Objective-C protocol.
    protocols: [UIApplicationDelegate]
});
```

Let's look how to declare a delegate in Typescript by setting one for the [Tesseract-OCR-iOS](https://github.com/gali8/Tesseract-OCR-iOS/wiki/Using-Tesseract-OCR-iOS/6510b29bbf18655f29a26f484b00a24cc66ed88b) API

```ts
interface G8TesseractDelegate extends NSObjectProtocol {
    preprocessedImageForTesseractSourceImage?(tesseract: G8Tesseract, sourceImage: UIImage): UIImage;
    progressImageRecognitionForTesseract?(tesseract: G8Tesseract): void;
    shouldCancelImageRecognitionForTesseract?(tesseract: G8Tesseract): boolean;
}
```

Implementing the delegate:

```ts
@NativeClass()
class G8TesseractDelegateImpl
    extends NSObject // native delegates mostly always extend NSObject
    implements G8TesseractDelegate {

    static ObjCProtocols = [G8TesseractDelegate] // define our native protocols

    static new(): G8TesseractDelegateImpl {
        return <G8TesseractDelegateImpl>super.new() // calls new() on the NSObject
    }

    preprocessedImageForTesseractSourceImage(tesseract: G8Tesseract, sourceImage: UIImage): UIImage {
        console.info('preprocessedImageForTesseractSourceImage')
        return sourceImage
    }

    progressImageRecognitionForTesseract(tesseract: G8Tesseract) {
        console.info('progressImageRecognitionForTesseract')
    }

    shouldCancelImageRecognitionForTesseract(tesseract: G8Tesseract): boolean {
        console.info('shouldCancelImageRecognitionForTesseract')
        return false
    }

}
```

Using the class conforming to the `G8TesseractDelegate`:

```ts
function image2text(image: UIImage): string {
    let delegate: G8TesseractDelegateImpl = G8TesseractDelegateImpl.new()
    let tess: G8Tesseract = G8Tesseract.new()
    tess.delegate = delegate
    /*=============================
    =            NOTES            =
    =============================*/
    // The `tess.delegate` property is weak and won't be retained by the Objective-C runtime so you should manually keep the delegate JS object alive as long the tessaract instance is alive
    /*=====  End of NOTES  ======*/
    tess.image = image
    let results: boolean = tess.recognize()
    if (results == true) {
        return tess.recognizedText
    } else {
        return 'ERROR'
    }
}

```
## Limitations
- You shouldn't extend an already extended class
- You can't override static methods or properties
- You can't expose static methods or properties
