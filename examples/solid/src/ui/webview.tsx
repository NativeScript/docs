import { Frame } from '@nativescript/core'

export const WebView = () => {
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="WebView">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <activityindicator busy="true" />
        {/* #region example */}
        <webview src="https://nativescript.org/" />
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
