import { Frame } from '@nativescript/core'

export const Label = () => {
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="Label">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <label text="TextHere" />
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
