---
title: Placeholder
---

`<Placeholder>` allows adding native views directly in your markup without creating a full [View](#) wrapper for it. When NativeScript is constructing the UI and encounters a Placeholder element, it emits a `creatingView` event, allowing you to pass in any native view to be rendered by assigning it to the `args.view` parameter.

### Creating a Simple Placeholder

<!-- /// flavor plain -->

```xml
<Placeholder creatingView="creatingView" />
```

```ts
import { Utils } from '@nativescript/core'

export function creatingView(args) {
  let nativeView
  if (global.isIOS) {
    // Example with UITextView in iOS
    nativeView = UITextView.new()
    nativeView.text = 'Native View (iOS)'
  } else if (global.isAndroid) {
    // Example with TextView in Android
    nativeView = new android.widget.TextView(
      Utils.android.getApplicationContext()
    )
    nativeView.setText('Native View (Android)')
  }

  // assign it to args.view so NativeScript can place it into the UI
  args.view = nativeView
}
```

<!-- ///

/// flavor react

```tsx
import { isIOS, isAndroid } from '@nativescript/core'
;<placeholder
  onCreatingView={() => {
    if (isIOS) {
      // Example with UILabel in iOS
      const nativeView = new UILabel()
      nativeView.text = 'Native View - iOS'
      args.view = nativeView
    } else if (isAndroid) {
      // Example with TextView in Android
      const nativeView = new android.widget.TextView(args.context)
      nativeView.setSingleLine(true)
      nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END)
      nativeView.setText('Native View - Android')
      args.view = nativeView
    } else {
      console.warn(
        'Unsupported platform! Did they finally make NativeScript for desktop?'
      )
    }
  }}
/>
```

///

/// flavor angular

```xml
<Placeholder (creatingView)="creatingView($event)" />
```

```ts
import { Utils, Placeholder } from '@nativescript/core'

function creatingView(args) {
  const placeholder = args.object as Placeholder

  let nativeView
  if (global.isIOS) {
    // Example with UITextView in iOS
    nativeView = UITextView.new()
    nativeView.text = 'Native View (iOS)'
  } else if (global.isAndroid) {
    // Example with TextView in Android
    nativeView = new android.widget.TextView(Utils.android.getApplicationContext())
    nativeView.setText('Native View (Android)')
  }

  placeholder.view = nativeView
}
```

///

/// flavor vue

```xml
<Placeholder @creatingView="creatingView" />
```

```js
// Example with TextView in Android
methods: {
  creatingView: function(args) {
      const nativeView = new android.widget.TextView(args.context);
      nativeView.setSingleLine(true);
      nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
      nativeView.setText("Native View - Android");
      args.view = nativeView;
  }
}
// Example with UILabel in iOS
methods: {
  creatingView: function(args) {
      const nativeView = new UILabel();
      nativeView.text = "Native View - iOS";
      args.view = nativeView;
  }
}
```

/// -->

## Props

### ...Inherited

Additional inherited properties not shown. Refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/placeholder)

## Events

### creatingView

Emitted when building the UI, the event args allow passing a native view instance back via `args.view`.

#### CreateViewEventData

<!-- todo: perhaps just link to API ref. -->

| Name      | Type  | Description                                              |
| --------- | ----- | -------------------------------------------------------- |
| `view`    | `any` | The native view that should be added to the visual tree. |
| `context` | `any` | _Optional_: An optional context for creating the view.   |
