import { Frame } from '@nativescript/core'

export const TextField = () => {
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="TextField">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <textfield hint="Placeholder..." />
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
