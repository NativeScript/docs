import { Frame } from '@nativescript/core'

export const DatePicker = () => {

  const date = new Date(1997, 2,16);
  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="DatePicker">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <datepicker date={date}  ></datepicker>
        {/*endregion example*/}

      </gridlayout>
    </>
  );
};
