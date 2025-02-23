import { Frame } from '@nativescript/core'

export const ScrollView = () => {
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="ScrollViiew">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <gridlayout rows="*, 50, 300, *">
          <scrollview orientation="horizontal" row="1">
            <stacklayout orientation="horizontal" padding="12">
              <label text="h1" width="50"></label>
              <label text="h2" width="50"></label>
              <label text="h3" width="50"></label>
              <label text="h4" width="50"></label>
              <label text="h5" width="50"></label>
              <label text="h6" width="50"></label>
              <label text="h7" width="50"></label>
              <label text="h8" width="50"></label>
              <label text="h9" width="50"></label>
            </stacklayout>
          </scrollview>

          <contentview row="2">
            {/* #region example */}
            <scrollview>
              <stacklayout padding="12">
                <label text="v1" height="50"></label>
                <label text="v2" height="50"></label>
                <label text="v3" height="50"></label>
                <label text="v4" height="50"></label>
                <label text="v5" height="50"></label>
                <label text="v6" height="50"></label>
                <label text="v7" height="50"></label>
                <label text="v8" height="50"></label>
                <label text="v9" height="50"></label>
              </stacklayout>
            </scrollview>
            {/* #endregion example */}
          </contentview>
        </gridlayout>
      </gridlayout>
    </>
  )
}
