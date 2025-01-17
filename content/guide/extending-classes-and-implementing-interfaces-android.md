---
title: Android Subclassing and Implementing interfaces
description: NativeScript gives you full access to the native platform, you can subclass native classes in your JavaScript/TypeScript code, implement native interfaces and more.
contributors:
  - Ombuweb
  - rigor789
---

## Extending Kotlin and Java classes

### Subclassing Kotlin and Java classes

The following examples demonstrate how to subclass Kotlin/Java classes in NativeScript:

::: code-group

```kotlin [Kotlin]
class MyButton(context: Context) : android.widget.Button(context) {
    override fun setEnabled(enabled: Boolean) {
        super.setEnabled(enabled)
    }
}

val btn = MyButton(context)
```

```java [Java]
public class MyButton extends android.widget.Button {
    public MyButton(Context context) {
        super(context);
    }

    @Override
    public void setEnabled(boolean enabled) {
        super.setEnabled(enabled);
    }
}

MyButton btn = new MyButton(context);
```

:::

Doing the same in NativeScript:

::: code-group

```ts [via TypeScript]
let constructorCalled = false

@NativeClass
class MyButton extends android.widget.Button {
  constructor() {
    super()
    constructorCalled = true

    // necessary when extending TypeScript constructors
    return global.__native(this)
  }

  setEnabled(enabled: boolean): void {
    this.super.setEnabled(enabled)
  }
}

const button = new MyButton(context)
```

```js [via JavaScript]
let constructorCalled = false
const MyButton = android.widget.Button.extend({
  // constructor
  init: function () {
    constructorCalled = true
  },

  setEnabled: function (enabled) {
    this.super.setEnabled(enabled)
  },
})

const button = new MyButton(context)
```

:::

:::info Note
In the above example, the `setEnabled` function's use of `this` keyword points to the JavaScript object that proxies the extended native instance. The `this.super` usage provides access to the base class method implementation.
:::

### Creating an anonymous Java class which extends from the base Java `java.lang.Object` class

::: code-group

```ts [via TypeScript]
@NativeClass
class MyClass extends java.lang.Object {
  constructor() {
    super()
    // necessary when extending TypeScript constructors
    return global.__native(this)
  }

  toString(): string {
    // override Object's toString
  }
}

const myClassInstance = new MyClass()
```

```js [via JavaScript]
const MyClass = java.lang.Object({
  init() {
    // constructor
  },

  toString() {
    // override Object's toString
  },
})

const myClassInstance = new MyClass()
```

:::

### Creating named Java classes

To create a named Java class which extends from the `java.lang.Object` class:

::: code-group

```ts [via TypeScript]
@NativeClass
@JavaProxy('org.nativescript.example.MyClass')
class MyClass extends java.lang.Object {
  // constructor
  constructor() {
    super()
    // necessary when extending TypeScript constructors
    return global.__native(this)
  }

  toString(): string {
    // override Object's toString
  }
}

const myClassInstance = new MyClass()

// note: this may result in a TypeScript error because the namespace is not typed
// this can be safely ignored with // @ts-ignore
// or by type-casting to `any` for example.
const myClassInstance2 = new org.nativescript.example.MyClass()
const myClassInstance3 = new (org as any).nativescript.example.MyClass()
```

<!-- // or you can generate types to use with 'ns typings android' -->

```js [via JavaScript]
const MyClass = java.lang.Object('org.nativescript.example.MyClass', {
  init() {
    // constructor
  },

  toString() {
    // override Object's toString
  },
})

const myClassInstance = new MyClass()
const myClassInstance2 = new org.nativescript.example.MyClass()
```

:::

:::tip
One important thing to note when dealing with extending classes and implementing interfaces in NativeScript is that, unlike in Java&mdash;where you can extend an Abstract class with a `new java.arbitrary.abstract.Class() { }`, in NativeScript the class needs to be extended as per the previous examples - using the extend function on the `java.arbitrary.abstract.Class`, or using the extends class syntax in TypeScript.
:::

## Custom Android Application and Activity

NativeScript provides a way to create custom `android.app.Application` and [android.app.Activity](#extending-android-activity) implementations.

### Extending Android Application

Create a new TypeScript file in the root of your project folder - name it `application.android.ts` or `application.android.js` if you are using plain JS.

::: info Note
Note the `*.android` suffix - we want this file packaged for Android only.
:::

A minimal example of the custom Application class:

:::code-group

```ts [TypeScript]
// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
@NativeClass()
@JavaProxy('org.nativescript.example.Application')
class Application extends android.app.Application {
  public onCreate(): void {
    super.onCreate()

    // At this point modules have already been initialized
    // Enter custom initialization code here
  }

  public attachBaseContext(baseContext: android.content.Context) {
    super.attachBaseContext(baseContext)

    // This code enables MultiDex support for the application (if needed)
    // androidx.multidex.MultiDex.install(this);
  }
}
```

```js [JavaScript]
const superProto = android.app.Application.prototype

// the first parameter of the `extend` call defines the package and the name for the native *.JAVA file generated.
android.app.Application.extend('org.nativescript.example.Application', {
  onCreate: function () {
    superProto.onCreate.call(this)

    // At this point modules have already been initialized
    // Enter custom initialization code here
  },
  attachBaseContext: function (base) {
    superProto.attachBaseContext.call(this, base)
    // This code enables MultiDex support for the application (if needed compile androidx.multidex:multidex)
    // androidx.multidex.MultiDex.install(this);
  },
})
```

:::

To use the custom Application class, modify the application entry in the `AndroidManifest.xml` in `App_Resources/Android/`:

```xml
<application
  android:name="org.nativescript.example.Application"
  android:allowBackup="true"
  android:icon="@mipmap/ic_launcher"
  android:label="@string/app_name"
  android:theme="@style/AppTheme">
```

Lastly, in order to correctly include the custom Application class, the extended Android application should be added to the webpack.config.js file.

```js
const webpack = require('@nativescript/webpack')

module.exports = (env) => {
  webpack.init(env)

  webpack.chainWebpack((config) => {
    if (webpack.Utils.platform.getPlatformName() === 'android') {
      // make sure the path to the applicatioon.android.(js|ts)
      // is relative to the webpack.config.js
      config.entry('application').add('./application.android')
    }
  })

  return webpack.resolveConfig()
}
```

The source code of `application.android.ts` is bundled separately as `application.js` file which is loaded from the native Application.java class on launch.

The `bundle.js` and `vendor.js` files are not loaded early enough in the application launch. That's why the logic in `application.android.ts` is needed to be bundled separately in order to be loaded as early as needed in the application lifecycle.

::: warning Note
This approach will not work if `application.android.ts` requires external modules.
:::

<!-- TODO: add Preview -->

### Extending Android Activity

@nativescript/core ships with a default `androidx.appcompat.app.AppCompatActivity` implementation, that bootstraps the NativeScript application, without forcing users to declare their custom Activity in every project. In some cases you may need to implement a custom Android Activity.

Create a new `./src/activity.android.ts` or `./src/activity.android.js` when using plain JS.

::: info Note
Note the `.android` suffix - we only want this file on Android.
:::

A basic Activity can be implemented as follows:

::: code-group

```ts [TypeScript]
import {
  Frame,
  Application,
  setActivityCallbacks,
  AndroidActivityCallbacks,
} from '@nativescript/core'

@NativeClass()
@JavaProxy('org.nativescript.example.CustomActivity')
class CustomActivity extends androidx.appcompat.app.AppCompatActivity {
  public isNativeScriptActivity

  private _callbacks: AndroidActivityCallbacks

  public onCreate(savedInstanceState: android.os.Bundle): void {
    Application.android.init(this.getApplication())
    // Set the isNativeScriptActivity in onCreate (as done in the original NativeScript activity code)
    // The JS constructor might not be called because the activity is created from Android.
    this.isNativeScriptActivity = true
    if (!this._callbacks) {
      setActivityCallbacks(this)
    }

    this._callbacks.onCreate(
      this,
      savedInstanceState,
      this.getIntent(),
      super.onCreate
    )
  }

  public onNewIntent(intent: android.content.Intent): void {
    this._callbacks.onNewIntent(
      this,
      intent,
      super.setIntent,
      super.onNewIntent
    )
  }

  public onSaveInstanceState(outState: android.os.Bundle): void {
    this._callbacks.onSaveInstanceState(
      this,
      outState,
      super.onSaveInstanceState
    )
  }

  public onStart(): void {
    this._callbacks.onStart(this, super.onStart)
  }

  public onStop(): void {
    this._callbacks.onStop(this, super.onStop)
  }

  public onDestroy(): void {
    this._callbacks.onDestroy(this, super.onDestroy)
  }

  public onPostResume(): void {
    this._callbacks.onPostResume(this, super.onPostResume)
  }

  public onBackPressed(): void {
    this._callbacks.onBackPressed(this, super.onBackPressed)
  }

  public onRequestPermissionsResult(
    requestCode: number,
    permissions: Array<string>,
    grantResults: Array<number>
  ): void {
    this._callbacks.onRequestPermissionsResult(
      this,
      requestCode,
      permissions,
      grantResults,
      undefined /*TODO: Enable if needed*/
    )
  }

  public onActivityResult(
    requestCode: number,
    resultCode: number,
    data: android.content.Intent
  ): void {
    this._callbacks.onActivityResult(
      this,
      requestCode,
      resultCode,
      data,
      super.onActivityResult
    )
  }
}
```

```js [JavaScript]
import { Frame, Application, setActivityCallbacks } from '@nativescript/core'

const superProto = androidx.appcompat.app.AppCompatActivity.prototype

androidx.appcompat.app.AppCompatActivity.extend(
  'org.nativescript.example.CustomActivity',
  {
    onCreate(savedInstanceState) {
      // Used to make sure the App is inited in case onCreate is called before the rest of the framework
      Application.android.init(this.getApplication())

      // Set the isNativeScriptActivity in onCreate (as done in the original NativeScript activity code)
      // The JS constructor might not be called because the activity is created from Android.
      this.isNativeScriptActivity = true
      if (!this._callbacks) {
        setActivityCallbacks(this)
      }
      // Modules will take care of calling super.onCreate, do not call it here
      this._callbacks.onCreate(
        this,
        savedInstanceState,
        this.getIntent(),
        superProto.onCreate
      )

      // Add custom initialization logic here
    },
    onNewIntent(intent) {
      this._callbacks.onNewIntent(
        this,
        intent,
        superProto.setIntent,
        superProto.onNewIntent
      )
    },
    onSaveInstanceState(outState) {
      this._callbacks.onSaveInstanceState(
        this,
        outState,
        superProto.onSaveInstanceState
      )
    },
    onStart() {
      this._callbacks.onStart(this, superProto.onStart)
    },
    onStop() {
      this._callbacks.onStop(this, superProto.onStop)
    },
    onDestroy() {
      this._callbacks.onDestroy(this, superProto.onDestroy)
    },
    onPostResume() {
      this._callbacks.onPostResume(this, superProto.onPostResume)
    },
    onBackPressed() {
      this._callbacks.onBackPressed(this, superProto.onBackPressed)
    },
    onRequestPermissionsResult(requestCode, permissions, grantResults) {
      this._callbacks.onRequestPermissionsResult(
        this,
        requestCode,
        permissions,
        grantResults,
        undefined
      )
    },
    onActivityResult(requestCode, resultCode, data) {
      this._callbacks.onActivityResult(
        this,
        requestCode,
        resultCode,
        data,
        superProto.onActivityResult
      )
    },
    /* Add any other events you need to capture */
  }
)
```

:::

:::warning Note
The `this._callbacks` property is automatically assigned to your extended class by the `frame.setActivityCallbacks` method. It implements the [AndroidActivityCallbacks interface](/api/interface/AndroidActivityCallbacks) and allows core to get notified for important Activity events. It is **important** to use these callbacks, as many parts of NativeScript rely on them!
:::

Next, modify the activity in `App_Resources/Android/src/main/AndroidManifest.xml`

```xml
<activity
  android:name="org.nativescript.example.CustomActivity"
  android:label="@string/title_activity_kimera"
  android:configChanges="keyboardHidden|orientation|screenSize">
```

To include the new Activity in the build, make sure it's added to the `webpack.config.js` with the following:

```js
const webpack = require('@nativescript/webpack')

module.exports = (env) => {
  webpack.init(env)
  env.appComponents = (env.appComponents || []).concat(['./src/activity.android'])


  return webpack.resolveConfig()
}
```

## Implementing Kotlin and Java interfaces

The next example shows how to implement an interface in Kotlin/Java with NativeScript. The main difference between inheriting classes and implementing interfaces in NativeScript is the use of the `extend` keyword. Implement an interface is done by passing the implementation object to the interface constructor function. The syntax is identical to [Java Anonymous Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html).

::: code-group

```kotlin [Kotlin]
button.setOnClickListener {
    // Perform action on click
}
```

```java [Java]
button.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) {
        // Perform action on click
    }
});
```

:::

The same can be implemented in NativeScript:

```ts
button.setOnClickListener(
  new android.view.View.OnClickListener({
    onClick() {
      // Perform action on click
    },
  })
)
```

Alternatively you can use the following pattern for a named interface implementation using TypeScript:

```ts
@NativeClass()
@Interfaces([android.view.View.OnClickListener])
class ClickListener
  extends java.lang.Object
  implements android.view.View.OnClickListener
{
  constructor() {
    super()

    // necessary when extending TypeScript constructors
    return global.__native(this)
  }

  onClick(view: android.view.View): void {
    // Perform action on click
  }
}

nativeView.setOnClickListener(new ClickListener())
```

Or using JavaScript:

```js
const ClickListener = java.lang.Object.extend({
  // the interfaces to use
  interfaces: [android.view.View.OnClickListener],
  onClick() {
    // Perform action on click
  },
})

nativeView.setOnClickListener(new ClickListener())
```
