import { Frame } from '@nativescript/core'

export const ActionBar = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="ActionBar">
        {/*region example*/}
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
        {/*#endregion example*/}
      </actionbar>
      {/* @ts-ignore */}
    </>
  );
};
