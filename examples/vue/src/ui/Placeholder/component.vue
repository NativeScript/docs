<script lang="ts" setup>
  const creatingView = (args) => {
    let nativeView
    if (global.isIOS) {
      // Example with UITextView on iOS
      nativeView = UITextView.new()
      nativeView.text = 'Native View (iOS)'
    } else if (global.isAndroid) {
      // Example with TextView on Android
      nativeView = new android.widget.TextView(
          Utils.android.getApplicationContext()
      )
      nativeView.setText('Native View (Android)')
    }

    // assign it to args.view so NativeScript can place it into the UI
    args.view = nativeView
  }
</script>

<template>
  <Page>
    <GridLayout>
      <ContentView verticalAlignment="center" horizontalAlignment="center">
        <!-- #region example -->
        <Placeholder @creatingView="creatingView" />
        <!-- #endregion example -->
      </ContentView>
    </GridLayout>


  </Page>
</template>
