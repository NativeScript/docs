import { Frame } from '@nativescript/core'

export const TimePicker = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="TimePicker">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <timepicker hour="9" minute="41" />
        {/*endregion example*/}

      </gridlayout>
    </>
  );
};
