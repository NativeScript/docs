import { Frame } from '@nativescript/core'

export const Button = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="Button">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <button on:tap={() => alert("button clicked")}>
          Click Me
        </button>
        {/*endregion example*/}

      </gridlayout>
    </>
  );
};
