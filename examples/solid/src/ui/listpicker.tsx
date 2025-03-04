import { Frame } from '@nativescript/core'

export const ListPicker = () => {
  const choices = ['First', 'Second', 'Third']
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="ListPicker">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <listpicker items={choices}></listpicker>
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
