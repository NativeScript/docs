
{/* #region example */}
import { Frame } from '@nativescript/core'

export const ActionBar = () => {
  function goBack() {
    Frame.goBack()
  }

  return (<>
    <actionbar title="ActionBar">
      <actionitem on:tap={goBack} text="<<Back"></actionitem>
    </actionbar>
    <gridlayout>
      <label>Main Content</label>
    </gridlayout>
  </>)
}
{/* #endregion example */}
