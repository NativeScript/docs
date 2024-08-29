import { Frame } from '@nativescript/core'

export const Image = () => {
  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="Image">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example todo not working*/}
        <image src='~/assets/solid.png' height={60}/>
        {/*endregion example*/}

      </gridlayout>
    </>
  );
};
