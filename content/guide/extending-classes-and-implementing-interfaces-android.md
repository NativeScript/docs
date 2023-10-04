---
title: Android Subclassing and Implementing interfaces
---

## Extending Kotlin/Java classes

The following examples demonstrate how to subclass Kotlin/Java classes in NativeScript:

- Kotlin:

```kotlin
class MyButton(context: Context) : android.widget.Button(context) {
    override fun setEnabled(enabled: Boolean) {
        super.setEnabled(enabled)
    }
}

val btn = MyButton(context)
```

- Java:

```java
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

- NativeScript using JavaScript:

```js
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

const btn = new MyButton(context)
```

- NativeScript using TypeScript:

```ts
let constructorCalled = false
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

const btn = new MyButton(context)
```

:::tip Note
In the above example, the `setEnabled` function's use of `this` keyword points to the JavaScript object that proxies the extended native instance. The `this.super` usage provides access to the base class method implementation.
:::

Creating an anonymous Java class which extends from the base Java `java.lang.Object` class:

- NativeScript using JavaScript:

```js
const MyClass = java.lang.Object({
  // constructor
  init: function () {},

  toString: function () {
    // override Object's toString
  },
})

const myClassInstance = new MyClass()
```

- NativeScript using TypeScript:

```ts
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

To create a named Java class which extends from the `java.lang.Object` class:

```js
const MyClass = java.lang.Object('my.application.name.MyClass', {
  // constructor
  init: function () {},

  toString: function () {
    // override Object's toString
  },
})

const myClassInstance = new MyClass()
const myClassInstance2 = new my.application.name.MyClass()
```

- NativeScript using TypeScript:

```ts
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

// Note: A TypeScript compilation error will result because the namespace will not be recognized. It's safe to ignore with // @ts-ignore
const myClassInstance2 = new my.application.name.MyClass()

// or you can use as any
const myClassInstance3: any = new (my as any).application.name.MyClass()

// or you can generate types to use with 'ns typings android'
```

:::tip
One important thing to note when dealing with extending classes and implementing interfaces in NativeScript is that, unlike in Java - where you can extend an Abstract class with a new java.arbitrary.abstract.Class() { }, in NativeScript the class needs to be extended as per the previous examples - using the extend function on the java.arbitrary.abstract.Class, or using the extends class syntax in TypeScript.
:::

### Custom Android Application and Activity

NativeScript provides a way to create custom `android.app.Application` and [android.app.Activity](#extending-android-activity) implementations.

#### Extending the Android Application

1. Create a new TypeScript file in the root of your project folder - name it `application.android.ts` or `application.android.js` if you are using plain JS.

::: tip Note
Note the `*.android` suffix - we want this file packaged for Android only.
:::

1. Copy the following code for TypeScript file:

```ts
// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
@NativeClass()
@JavaProxy('org.myApp.Application')
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

Copy the following code for the JavaScript file:

```js
const superProto = android.app.Application.prototype

// the first parameter of the `extend` call defines the package and the name for the native *.JAVA file generated.
android.app.Application.extend('org.myApp.Application', {
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

1. Modify the application entry within the `AndroidManifest.xml` in the `App_Resources/Android/` folder:

```xml
<application
        android:name="org.myApp.Application"
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
```

::: tip Note
This modification is required by the native platform. It tells Android that your custom Application class will be used as the main entry point of the application.
:::

4. In order to build the app, the extended Android application should be added to the webpack.config.js file.

```js
const webpack = require('@nativescript/webpack')

module.exports = (env) => {
  webpack.init(env)

  webpack.chainWebpack((config) => {
    if (webpack.Utils.platform.getPlatformName() === 'android') {
      // make sure the path to the applicatioon.android.(js|ts)
      // is relative to the webpack.config.js
      // you may need to use `./app/application.android if
      // your app source is located inside the ./app folder.
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

#### Extending Android Activity

@nativescript/core ships with a default `androidx.appcompat.app.AppCompatActivity` implementation, that bootstraps the NativeScript application, without forcing users to declare their custom Activity in every project. In some cases you may need to implement a custom Android Activity. In this section we'll look at how to do that!

Create a new `activity.android.ts` or `activity.android.js` when using plain JS.

::: tip Note
Note the `.android` suffix - we only want this file on Android.
:::

A basic Activity can be implemented as follows in TypeScript:

```ts
import {
  Frame,
  Application,
  setActivityCallbacks,
  AndroidActivityCallbacks,
} from '@nativescript/core'

@NativeClass()
@JavaProxy('org.myApp.MainActivity')
class Activity extends androidx.appcompat.app.AppCompatActivity {
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

A basic Activity can be implemented as follows in JavaScript:

```js
import { Frame, Application, setActivityCallbacks } from '@nativescript/core'

const superProto = androidx.appcompat.app.AppCompatActivity.prototype
androidx.appcompat.app.AppCompatActivity.extend('org.myApp.MainActivity', {
  onCreate: function (savedInstanceState) {
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
  onNewIntent: function (intent) {
    this._callbacks.onNewIntent(
      this,
      intent,
      superProto.setIntent,
      superProto.onNewIntent
    )
  },
  onSaveInstanceState: function (outState) {
    this._callbacks.onSaveInstanceState(
      this,
      outState,
      superProto.onSaveInstanceState
    )
  },
  onStart: function () {
    this._callbacks.onStart(this, superProto.onStart)
  },
  onStop: function () {
    this._callbacks.onStop(this, superProto.onStop)
  },
  onDestroy: function () {
    this._callbacks.onDestroy(this, superProto.onDestroy)
  },
  onPostResume: function () {
    this._callbacks.onPostResume(this, superProto.onPostResume)
  },
  onBackPressed: function () {
    this._callbacks.onBackPressed(this, superProto.onBackPressed)
  },
  onRequestPermissionsResult: function (
    requestCode,
    permissions,
    grantResults
  ) {
    this._callbacks.onRequestPermissionsResult(
      this,
      requestCode,
      permissions,
      grantResults,
      undefined
    )
  },
  onActivityResult: function (requestCode, resultCode, data) {
    this._callbacks.onActivityResult(
      this,
      requestCode,
      resultCode,
      data,
      superProto.onActivityResult
    )
  },
  /* Add any other events you need to capture */
})
```

:::warning Note
The `this._callbacks` property is automatically assigned to your extended class by the `frame.setActivityCallbacks` method. It implements the [AndroidActivityCallbacks interface](https://docs.nativescript.org/core-concepts/application-lifecycle#android-activity-events) and allows core to get notified for important Activity events. It is **important** to use these callbacks, as many parts of NativeScript rely on them!
:::

<!-- TODO: fix links -->

Next, modify the activity in `App_Resources/Android/src/main/AndroidManifest.xml`

```xml
<activity
  android:name="org.myApp.MainActivity"
  android:label="@string/title_activity_kimera"
  android:configChanges="keyboardHidden|orientation|screenSize">
```

To include the new Activity in the build, make sure it's added to webpack by editing the `webpack.config.js` with the following:

```js
const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	env.appComponents = (env.appComponents || []).concat(['./activity.android'])

	return webpack.resolveConfig();
};

}
```

## Implementing Kotlin/Java interfaces

The next example shows how to implement an interface in Kotlin/Java with NativeScript. The main difference between inheriting classes and implementing interfaces in NativeScript is the use of the `extend` keyword. Basically, you implement an interface by passing the implementation object to the interface constructor function. The syntax is identical to the [Java Anonymous Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html).

- Kotlin:

```kotlin
button.setOnClickListener {
    // Perform action on click
}
```

- Java:

```java
button.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) {
        // Perform action on click
    }
});
```

- NativeScript:

```ts
button.setOnClickListener(
  new android.view.View.OnClickListener({
    onClick: function () {
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
  onClick: function () {
    // Perform action on click
  },
})

nativeView.setOnClickListener(new ClickListener())
```
