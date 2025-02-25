import { Frame } from '@nativescript/core'
import { Utils } from '@nativescript/core'

export const Placeholder = () => {
  const creatingView = (args: any) => {
    let nativeView
    if (__IOS__) {
      // Example with UITextView on iOS
      nativeView = UITextView.new()
      nativeView.text = 'Native View (iOS)'
    } else if (__ANDROID__) {
      // Example with TextView on Android
      nativeView = new android.widget.TextView(
        Utils.android.getApplicationContext(),
      )
      nativeView.setText('Native View (Android)')
    }

    // assign it to args.view so NativeScript can place it into the UI
    args.view = nativeView
  }
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="Placeholder">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <placeholder on:creatingView={creatingView}></placeholder>

        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
