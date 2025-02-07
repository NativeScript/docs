import { Frame } from '@nativescript/core'

export const HtmlView = () => {
  const htmlString = `
    <h1 style="color: black; font-family: ui-sans-serif, system-ui;">
      <span style="color: #65adf1;">Html</span>View
    </h1>
  `
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="HtmlView">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <htmlview html={htmlString}></htmlview>
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
