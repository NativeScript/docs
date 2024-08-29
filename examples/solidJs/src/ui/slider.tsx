import { Frame } from '@nativescript/core'

export const Slider = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="ActionBar">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        {/*endregion example*/}

      </gridlayout>
    </>
  );
};
