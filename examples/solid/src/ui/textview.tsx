import { Frame } from '@nativescript/core'

export const TextView = () => {

  // #region example
  const text = `TextView\nWith\nMultiple\nLines!`;
  // #endregion example
  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="TextView">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <textview text={text} />
        {/*#endregion example*/}

      </gridlayout>
    </>
  );
};
