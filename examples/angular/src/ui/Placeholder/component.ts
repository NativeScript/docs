// #region example
import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Utils } from '@nativescript/core'

@Component({
  selector: 'ns-placeholder',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PlaceholderComponent { 

  creatingView(args) {
    let nativeView
    if (__IOS__) {
      // Example with UITextView on iOS
      nativeView = UITextView.new()
      nativeView.text = 'Native View (iOS)'
    } else if (__ANDROID__) {
      // Example with TextView on Android
      nativeView = new android.widget.TextView(
        Utils.android.getApplicationContext()
      )
      nativeView.setText('Native View (Android)')
    }
  
    // assign it to args.view so NativeScript can place it into the UI
    args.view = nativeView
  }
}
// #endregion example
