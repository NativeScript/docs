import { Frame } from '@nativescript/core'

export const TabView = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="TabView">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <tabview>
          <tabviewitem title="First">
            <label text="First Tab Content" textAlignment="center" verticalAlignment="center"></label>
          </tabviewitem>
          <tabviewitem title="Second">
            <label text="Second Tab Content" textAlignment="center" verticalAlignment="center"></label>
          </tabviewitem>
          <tabviewitem title="Third">
            <label text="Third Tab Content" textAlignment="center" verticalAlignment="center"></label>
          </tabviewitem>
        </tabview>
        {/*endregion example*/}

      </gridlayout>
    </>
  );
};
