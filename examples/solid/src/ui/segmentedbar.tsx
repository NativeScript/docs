import { Frame } from '@nativescript/core'

export const SegmentedBar = () => {
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="SegmentedBar">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <segmentedbar>
          <segmentedbaritem title="First" />
          <segmentedbaritem title="Second" />
          <segmentedbaritem title="Third" />
        </segmentedbar>
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
