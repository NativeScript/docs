# NativeScript AI Agent Context

This document provides comprehensive context for AI coding assistants to help build high-quality NativeScript applications. NativeScript is a framework for building truly native apps for iOS, Android, visionOS, etc. using JavaScript, TypeScript, or any framework that transpiles to JavaScript.

## Project Overview

NativeScript provides:
- **Direct native API access** - No wrappers, no plugins needed for most platform APIs
- **Cross-platform development** - Single codebase for multiple platforms
- **Framework flexibility** - Works with Angular, Vue, Solid, Svelte, React, or plain TypeScript
- **Native performance** - pure native UI rendering

## Project Structure

A typical NativeScript project structure:

```
my-app/
├── App_Resources/           # Platform-specific resources (icons, configs, native code)
│   ├── Android/            # Android specific resources
│   │   └── src/main/res/   # Android resources (drawables, values, etc.)
│   └── iOS/                # iOS specific resources
│       └── src/            # Swift/ObjC native code
├── src/                    # Application source code
│   ├── app.ts              # Application entry point
│   ├── app.css             # Global styles
│   └── ...                 # Components, pages, etc.
├── nativescript.config.ts  # NativeScript configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── webpack.config.js       # Build configuration (optional with Vite)
```

## Core Imports

Always import from `@nativescript/core`:

```typescript
import {
  Application,
  Observable,
  Frame,
  Page,
  Color,
  Utils,
  Device,
  Screen,
  isAndroid,
  isIOS,
  File,
  Folder,
  knownFolders,
  Http,
  ImageSource,
  ObservableArray,
} from '@nativescript/core'
```

## UI Components

### Layout Containers
- `GridLayout` - Table-like layout with rows and columns
- `StackLayout` - Stacks children vertically or horizontally
- `FlexboxLayout` - CSS Flexbox-like layout
- `AbsoluteLayout` - Position children with absolute coordinates
- `DockLayout` - Dock children to edges
- `WrapLayout` - Wraps children to next row/column

### Navigation Components
- `Frame` - Navigation container
- `Page` - Screen content container
- `ActionBar` - Top navigation bar

### Common Components
- `Label` - Text display
- `Button` - Tappable button
- `TextField` - Single-line text input
- `TextView` - Multi-line text input
- `Image` - Image display
- `ListView` - Scrollable list with view recycling
- `ScrollView` - Scrollable container
- `WebView` - Embedded web browser
- `Switch`, `Slider`, `Progress`, `ActivityIndicator`
- `DatePicker`, `TimePicker`, `ListPicker`
- `SearchBar`, `SegmentedBar`, `TabView`

## Best Practices

### 1. View Bindings - Use Direct Property Binding

**Bad:**
```xml
<Label text="{{ getMyText() }}" />
```

**Good:**
```xml
<Label text="{{ myText }}" />
```

Direct property binding provides 1-1 data projection for optimal view rendering performance.

### 2. ListView - Use Template Selectors for Conditional Layouts

**Bad:** Using `v-if`/`ngIf` inside ListView items causes view creation/destruction during scroll.

**Good:** Use `itemTemplateSelector` for different row layouts:

```xml
<ListView items="{{ items }}" itemTemplateSelector="{{ selectTemplate }}">
  <ListView.itemTemplates>
    <template key="header">
      <Label text="{{ title }}" class="header" />
    </template>
    <template key="item">
      <Label text="{{ name }}" />
    </template>
  </ListView.itemTemplates>
</ListView>
```

```typescript
selectItemTemplate(item, index, items) {
  return item.isHeader ? 'header' : 'item';
}
```

### 3. Visibility vs v-if/ngIf

- `v-if`/`ngIf` - Completely destroys/recreates views (expensive during scroll)
- `visibility: 'collapse'` or `hidden: true` - Hides view without destroying it
- `visibility: 'hidden'` - Hides but maintains layout space

Use `hidden` or `visibility` for performance-critical scenarios like scrolling.

### 4. iOS Delegates - Always Retain References

**Bad:**
```typescript
controller.delegate = MyDelegateImpl.initWithOwner(this)
```

**Good:**
```typescript
this.delegateRef = MyDelegateImpl.initWithOwner(this)
controller.delegate = this.delegateRef
```

Not retaining delegate references causes garbage collection issues.

### 5. Timers and Intervals - Always Clean Up

```typescript
// Store reference
this.intervalId = setInterval(() => { /* ... */ }, 1000)

// Clean up in appropriate lifecycle
clearInterval(this.intervalId)
```

Rogue timers cause memory leaks and unexpected behavior.

## Extending Native Classes

### Android (using @NativeClass decorator)

```typescript
@NativeClass()
class MyButton extends android.widget.Button {
  constructor() {
    super()
    return global.__native(this)
  }

  setEnabled(enabled: boolean): void {
    this.super.setEnabled(enabled)
  }
}
```

### iOS (using @NativeClass decorator)

```typescript
@NativeClass()
class MyViewController extends UIViewController {
  static ObjCProtocols = [UITableViewDelegate]
  
  viewDidLoad(): void {
    super.viewDidLoad()
    // Setup code
  }
}

// Export properly when used elsewhere
export { MyViewController }
```

### Cross-Platform Native Classes in Single File

```typescript
let customClass
function setupCustomClass() {
  if (__ANDROID__) {
    @NativeClass()
    class CustomClass extends android.view.View {
      // Android implementation
    }
    customClass = CustomClass
  } else {
    @NativeClass()
    class CustomClass extends NSObject {
      // iOS implementation
    }
    customClass = CustomClass
  }
}
setupCustomClass()
```

## Data Binding with Observable

```typescript
import { Observable, EventData } from '@nativescript/core'

export class ViewModel extends Observable {
  private _counter: number = 0

  get counter(): number {
    return this._counter
  }

  set counter(value: number) {
    if (this._counter !== value) {
      this._counter = value
      this.notifyPropertyChange('counter', value)
    }
  }

  onTap(args: EventData) {
    this.counter++
  }
}
```

## Platform Conditionals

Various conditional helpers are provided by @nativescript/core in addition to global macros provided by all NativeScript bundlers (webpack, vite, etc.):

```typescript
import { isAndroid, isIOS, isVisionOS } from '@nativescript/core'

if (isAndroid) {
  // Android-specific code
}

if (isIOS) {
  // iOS-specific code
}

if (isVisionOS) {
  // visionOS-specific code
}

// Build-time macros (removed during compilation for other platform)
if (__ANDROID__) {
  // Only compiled for Android
}

if (__IOS__) {
  // Only compiled for iOS
}

if (__VISIONOS__) {
  // Only compiled for visionOS
}

if (__APPLE__) {
  // Compiled for either iOS and visionOS
}

if (__DEV__) {
  // Development-only code
}
```

## Platform-Specific Files

Use platform suffixes for completely different implementations:
- `my-component.android.ts` - Android only
- `my-component.ios.ts` - iOS only

Or use conditionals within same file for shared logic with platform differences.

## Multithreading with Workers

```typescript
// main-thread.ts
const worker = new Worker(new URL('./my-script.worker', import.meta.url))

worker.postMessage({ data: 'process this' })

worker.onmessage = (e) => {
  console.log('Result:', e.data)
}

worker.onerror = (e) => {
  console.error('Worker error:', e.message)
}

// Always terminate when done
worker.terminate()
```

```typescript
// my-script.worker.ts
self.onmessage = (e) => {
  const result = processData(e.data)
  self.postMessage(result)
}
```

## Gestures

```typescript
import { GestureTypes, GestureEventData } from '@nativescript/core'

// In code
view.on(GestureTypes.tap, (args: GestureEventData) => {
  console.log('Tapped!')
})

// Available gestures:
// tap, doubleTap, longPress, swipe, pan, pinch, rotation, touch
```

## CSS Animations

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-in {
  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}
```

## Animatable CSS Properties
- `opacity`
- `background-color`
- `transform: translate(x, y)`
- `transform: scale(x, y)`
- `transform: rotate(deg)`

## Adding Native Code

Use the CLI to add native code files:

```bash
# Swift
ns native add swift AwesomeClass

# Objective-C
ns native add objective-c OtherClass

# Kotlin
ns native add kotlin com.company.AwesomeClass

# Java
ns native add java com.company.OtherClass
```

Files are placed in `App_Resources/{platform}/src/`.

## Framework-Specific Patterns

### Plain TypeScript
```typescript
import { Application } from '@nativescript/core'
Application.run({ moduleName: 'app-root' })
```

### Angular
```typescript
import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA], // Required for NativeScript elements
})
export class App {}
```

### Vue
```typescript
import { createApp } from 'nativescript-vue'
import Home from './Home.vue'

createApp(Home).start()
```

### Solid
```tsx
const App = () => {
  return (
    <stackLayout>
      <label text="Hello Solid!" />
    </stackLayout>
  )
}
```

### Svelte
```svelte
<script lang="ts">
  let message = 'Hello Svelte!'
</script>

<stackLayout>
  <label text={message} />
</stackLayout>
```

### React
```tsx
const App = () => {
  return (
    <stackLayout>
      <label text="Hello React!" />
    </stackLayout>
  )
}
```

## Configuration (nativescript.config.ts)

```typescript
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.myapp',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  ios: {
    // iOS-specific config
  },
} as NativeScriptConfig
```

## Security Configuration

NativeScript includes security options to control sensitive runtime behaviors, particularly around remote ES module imports.

### Remote Module Security

NativeScript supports dynamic `import()` from remote URLs. This is useful during development but carries security implications in production since NativeScript code has **direct access to native platform APIs** (file system, keychain, network, camera, etc.).

| Mode | Remote Modules |
|------|----------------|
| **Debug** | ✅ Always allowed |
| **Production** | ❌ Blocked by default |

### Enabling Remote Modules in Production

If you need remote ES modules in production, explicitly opt-in:

```typescript
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.myapp',
  appPath: 'src',
  
  security: {
    allowRemoteModules: true
  }
} as NativeScriptConfig
```

### Using an Allowlist (Recommended)

Restrict to specific trusted origins:

```typescript
export default {
  // ...
  security: {
    allowRemoteModules: true,
    remoteModuleAllowlist: [
      'https://cdn.yourcompany.com/modules/',
      'https://esm.sh/@yourorg/'
    ]
  }
} as NativeScriptConfig
```

The allowlist uses **prefix matching** — a URL is allowed if it starts with any entry.

### Security Best Practices

- **Keep production secure by default** - Don't enable unless necessary
- **Use narrow allowlists** - Specific paths, not broad domains
- **Pin versions in URLs** - Use immutable, versioned URLs
- **Never use user-controlled URLs** - Injection vulnerability risk

For comprehensive security guidance, see the [Security Guide](/guide/security).

## Common CLI Commands

```bash
# Create new project
ns create myApp --template @nativescript/template-blank

# Run on device/emulator
ns run android
ns run ios

# Debug on device/emulator
ns debug android
ns debug ios

# Disable HMR for standard live reload
ns debug android --no-hmr
ns debug ios --no-hmr

# Build release
ns build android --release
ns build ios --release

# Clean project (run after App_Resources changes)
ns clean

# Add native code
ns native add swift MyClass
ns native add objective-c OtherAwesomeClass
ns native add kotlin com.example.MyClass
ns native add java com.company.OtherAwesomeClass
```

## Property System for Custom Views

```typescript
import { Property, View } from '@nativescript/core'

class MyView extends View {
  // Define property with automatic native sync
}

export const myProperty = new Property<MyView, string>({
  name: 'myProperty',
  defaultValue: '',
  affectsLayout: true,
})

myProperty.register(MyView)
```

## Tracing and Error Handling

The `Trace` module provides powerful debugging and error handling capabilities that go beyond `console.log`:

- Control which categories of messages are logged
- Disable all tracing with a single call for production
- Create custom trace writers for specialized output
- Implement custom error handlers for crash reporting

### Basic Tracing Setup

```typescript
import { Trace } from '@nativescript/core'

// 1. Set categories to trace (in app.ts)
Trace.setCategories(Trace.categories.concat('MyApp', 'MyApp.Network'))

// 2. Enable tracing
Trace.enable()

// 3. Write trace messages throughout your app
Trace.write('User logged in', 'MyApp', Trace.messageType.info)
Trace.write('API call failed', 'MyApp.Network', Trace.messageType.error)

// 4. Disable in production
if (!__DEV__) {
  Trace.disable()
}
```

### Built-in Trace Categories

```typescript
Trace.categories.VisualTreeEvents  // View lifecycle events
Trace.categories.Layout            // Layout calculations
Trace.categories.Style             // CSS/styling
Trace.categories.ViewHierarchy     // View tree changes
Trace.categories.NativeLifecycle   // Native platform lifecycle
Trace.categories.Navigation        // Frame navigation
Trace.categories.Binding           // Data binding
Trace.categories.BindingError      // Data binding errors
Trace.categories.Error             // General errors
Trace.categories.Animation         // Animation events
Trace.categories.Transition        // Page transitions
Trace.categories.All               // All categories

// Combine built-in with custom categories
Trace.setCategories(Trace.categories.concat('MyCategory1', 'MyCategory2'))
```

### Message Types

```typescript
Trace.messageType.log   // 0 - General log
Trace.messageType.info  // 1 - Informational
Trace.messageType.warn  // 2 - Warning
Trace.messageType.error // 3 - Error
```

### Custom Trace Writer

Create custom writers to format output or send logs to external services:

```typescript
import { Trace, TraceWriter } from '@nativescript/core'

const TimestampTraceWriter: TraceWriter = {
  write(message, category, type) {
    const timestamp = new Date().toISOString()
    const typeLabel = ['LOG', 'INFO', 'WARN', 'ERROR'][type] || 'LOG'
    
    console.log(`[${timestamp}] [${typeLabel}] [${category}] ${message}`)
    
    // Optional: Send to external logging service
    if (type === Trace.messageType.error) {
      sendToLogService({ timestamp, category, message, type })
    }
  }
}

// Replace default writers with custom writer
Trace.clearWriters()
Trace.addWriter(TimestampTraceWriter)
```

### Custom Error Handler

Register a custom error handler for centralized error management:

```typescript
import { Trace, TraceErrorHandler } from '@nativescript/core'

const errorHandler: TraceErrorHandler = {
  handlerError(err: Error) {
    if (__DEV__) {
      // Development: Log detailed error
      Trace.write(
        `${err.message}\n${err.stack}`,
        'unhandled-error',
        Trace.messageType.error
      )
      // Optionally re-throw to see in debugger
      throw err
    } else {
      // Production: Report to analytics/crash reporting
      reportToCrashlytics(err)
    }
  }
}

// Register the error handler (in app.ts)
Trace.setErrorHandler(errorHandler)

// Pass errors to the handler
try {
  riskyOperation()
} catch (err) {
  Trace.error(err)
}
```

### Global Application Error Events

Handle uncaught errors and promise rejections:

```typescript
import { Application } from '@nativescript/core'

// Uncaught JavaScript errors
Application.on(Application.uncaughtErrorEvent, (args) => {
  const error = args.error
  console.error('Uncaught error:', error.message)
  console.error('Stack:', error.stack)
  
  // Report to crash service
  reportError(error)
  
  // Optionally prevent app crash (use with caution)
  // args.cancel = true
})

// Unhandled promise rejections
Application.on(Application.discardedErrorEvent, (args) => {
  console.error('Unhandled promise rejection:', args.error)
  reportError(args.error)
})
```

### Complete Error Handling Setup

```typescript
// app.ts - Recommended error handling setup
import { Application, Trace, TraceErrorHandler } from '@nativescript/core'

// 1. Setup trace categories
Trace.setCategories(Trace.categories.concat('App', 'App.Error'))

// 2. Enable tracing in development
if (__DEV__) {
  Trace.enable()
}

// 3. Custom error handler
const errorHandler: TraceErrorHandler = {
  handlerError(err: Error) {
    Trace.write(err.message, 'App.Error', Trace.messageType.error)
    
    if (!__DEV__) {
      // Send to Sentry, Crashlytics, etc.
      reportToCrashService({
        message: err.message,
        stack: err.stack,
        timestamp: Date.now()
      })
    }
  }
}
Trace.setErrorHandler(errorHandler)

// 4. Global error handlers
Application.on(Application.uncaughtErrorEvent, (args) => {
  Trace.error(args.error)
})

Application.on(Application.discardedErrorEvent, (args) => {
  Trace.error(args.error)
})

// 5. Start the app
Application.run({ moduleName: 'app-root' })
```

### Trace API Quick Reference

```typescript
// Categories
Trace.setCategories(categories: string)      // Set allowed categories
Trace.addCategories(categories: string)      // Add to existing categories
Trace.isCategorySet(category: string)        // Check if category is set

// Writing
Trace.write(message, category, type?)        // Write a trace message
Trace.error(error: Error | string)           // Pass error to handler

// Writers
Trace.addWriter(writer: TraceWriter)         // Add custom writer
Trace.removeWriter(writer: TraceWriter)      // Remove a writer
Trace.clearWriters()                         // Remove all writers

// Error handling
Trace.setErrorHandler(handler)               // Set custom error handler
Trace.getErrorHandler()                      // Get current error handler

// Enable/Disable
Trace.enable()                               // Enable tracing
Trace.disable()                              // Disable tracing
Trace.isEnabled()                            // Check if enabled
```

## Performance Tips

1. **Minimize layout nesting** - Deep hierarchies hurt performance
2. **Use GridLayout** - Most flexible and performant for complex layouts
3. **Avoid method bindings** - Use property bindings instead
4. **Use template selectors** - For conditional ListView rows
5. **Prefer `hidden`/`visibility`** - Over `v-if`/`ngIf` during scroll
6. **Clean up resources** - Timers, listeners, observers
7. **Use Workers** - For heavy computation off main thread
8. **Optimize images** - Provide properly sized images for each density

## Android Drawable Densities

Place images in appropriate folders:
- `App_Resources/Android/src/main/res/drawable-mdpi/` - 1x
- `App_Resources/Android/src/main/res/drawable-hdpi/` - 1.5x
- `App_Resources/Android/src/main/res/drawable-xhdpi/` - 2x
- `App_Resources/Android/src/main/res/drawable-xxhdpi/` - 3x
- `App_Resources/Android/src/main/res/drawable-xxxhdpi/` - 4x

## iOS Asset Catalog

Place images in `App_Resources/iOS/Assets.xcassets/` with proper `@2x` and `@3x` suffixes.

## Creating Custom View Elements

When built-in elements don't meet your needs, create custom native elements.

### Anatomy of a Custom View

Every custom NativeScript view must have:
- (**required**) A class extending any NativeScript View
- (**required**) `createNativeView`: Construct and return a platform-native view
- (_optional_) `initNativeView`: Perform initialization after creation
- (_optional_) `disposeNativeView`: Cleanup resources when removed

### Project Structure for Custom Views

```
./my-custom-view/
  ├── common.ts          # Shared logic
  ├── index.android.ts   # Android implementation
  ├── index.ios.ts       # iOS implementation
  └── index.d.ts         # Type definitions
```

### Basic Custom View Example

```typescript
import { View } from '@nativescript/core'

export class CustomView extends View {
  createNativeView() {
    // iOS: return UIView instance
    // Android: return android.view.View instance
  }

  initNativeView() {
    // initialization code
  }

  disposeNativeView() {
    // cleanup code
  }
}
```

### Extending Existing Views

You can extend any existing NativeScript view:

```typescript
import { GridLayout, Label, Color, Property, booleanConverter, CoreTypes } from '@nativescript/core'

export class Checkbox extends GridLayout {
  checked = false
  defaultColor = new Color('#dddddd')
  selectionColor = new Color('#4CAF50')
  private _iconLabel: Label

  constructor() {
    super()
    this.horizontalAlignment = 'center'
    this.verticalAlignment = 'middle'

    this._iconLabel = new Label()
    this._iconLabel.text = String.fromCharCode(0xf764) // circle icon
    this._iconLabel.className = 'mat' // Material Design Icons font
    this._iconLabel.color = this.defaultColor
    this.addChild(this._iconLabel)
  }

  toggle() {
    this.checked = !this.checked
    this._iconLabel.text = this.checked 
      ? String.fromCharCode(0xf5e0)  // checkmark
      : String.fromCharCode(0xf764)  // circle
    this._iconLabel.color = this.checked ? this.selectionColor : this.defaultColor
  }
}
```

### Defining Customizable Properties

```typescript
import { Property, booleanConverter, Color } from '@nativescript/core'

const checkedProperty = new Property<Checkbox, boolean>({
  name: 'checked',
  defaultValue: false,
  valueConverter: booleanConverter,
})

const sizeProperty = new Property<Checkbox, number>({
  name: 'size',
  defaultValue: 24,
  affectsLayout: true,
})

const selectionColorProperty = new Property<Checkbox, Color>({
  name: 'selectionColor',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v),
})

// Implement setNative handlers
export class Checkbox extends GridLayout {
  [checkedProperty.setNative](value: boolean) {
    this.checked = value
    this._updateVisual()
  }

  [sizeProperty.setNative](value: number) {
    this._iconLabel.fontSize = value
  }

  [selectionColorProperty.setNative](value: Color) {
    this.selectionColor = value
  }
}

// Register properties
checkedProperty.register(Checkbox)
sizeProperty.register(Checkbox)
selectionColorProperty.register(Checkbox)
```

### Registering Custom Elements by Framework

**TypeScript (XML)**
```xml
<Page xmlns:custom="./checkbox">
  <StackLayout>
    <custom:Checkbox checked="true" size="32" />
  </StackLayout>
</Page>
```

**Angular**
```typescript
import { registerElement } from '@nativescript/angular'
import { Checkbox } from './checkbox'
registerElement('Checkbox', () => Checkbox)
```

**Vue**
```typescript
import { registerElement } from 'nativescript-vue'
import { Checkbox } from './checkbox'
registerElement('Checkbox', () => Checkbox)
```

**Svelte**
```typescript
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom'
import { Checkbox } from './checkbox'
registerNativeViewElement('checkbox', () => Checkbox)
```

**React**
```typescript
import { registerElement } from 'react-nativescript'
import { Checkbox } from './checkbox'
registerElement('checkbox', () => Checkbox)
```

**Solid**
```typescript
import { registerElement } from 'dominative'
import { Checkbox } from './checkbox'
registerElement('checkbox', Checkbox)
```

### Customizing Existing View Elements

Extend existing elements to customize behavior:

```typescript
// index.ios.ts - Custom ListPicker with larger font
import { ListPicker } from '@nativescript/core'

export class CustomListPicker extends ListPicker {
  private _delegate: ListPickerDelegateImpl

  initNativeView() {
    this._delegate = ListPickerDelegateImpl.initWithOwner(new WeakRef(this))
    this.nativeViewProtected.delegate = this._delegate
  }
}

@NativeClass()
class ListPickerDelegateImpl extends NSObject implements UIPickerViewDelegate {
  static ObjCProtocols = [UIPickerViewDelegate]
  private _owner: WeakRef<ListPicker>

  static initWithOwner(owner: WeakRef<ListPicker>): ListPickerDelegateImpl {
    const delegate = ListPickerDelegateImpl.new() as ListPickerDelegateImpl
    delegate._owner = owner
    return delegate
  }

  pickerViewViewForRowForComponentReusingView(pickerView: UIPickerView, row: number): UIView {
    const owner = this._owner?.deref()
    const label = UILabel.new()
    label.font = UIFont.systemFontOfSize(26) // Custom font size
    label.text = owner?.items[row]
    label.textAlignment = NSTextAlignment.Center
    return label
  }
}
```

### createNativeView Platform Examples

```typescript
// iOS
createNativeView() {
  const config = WKWebViewConfiguration.new()
  return new WKWebView({ frame: CGRectZero, configuration: config })
}

// Android  
createNativeView() {
  return new android.webkit.WebView(this._context)
}
```

## Resources

- Documentation: https://docs.nativescript.org
- API Reference: https://docs.nativescript.org/api/
- Plugins: https://docs.nativescript.org/plugins/
- GitHub: https://github.com/NativeScript/NativeScript
- NativeScript Preview with Stackblitz: https://preview.nativescript.org/
- JavaScript starter: https://nativescript.new/javascript
- TypeScript starter: https://nativescript.new/typescript
- Angular starter: https://nativescript.new/angular
- React starter: https://nativescript.new/react
- Solid starter: https://nativescript.new/solid
- Svelte starter: https://nativescript.new/svelte
- Vue starter: https://nativescript.new/vue
- Vue 3 starter: https://nativescript.new/vue3
