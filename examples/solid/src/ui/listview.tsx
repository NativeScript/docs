import { Frame } from '@nativescript/core'
export const ListView = () => {
  // #region example
  const items = [];
  for(let index = 0; index < 100; index++) {
    items.push({
      text: `Item ${index+1}`
    })
  }
  // #endregion example
  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="ListView">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout >

        {/*region example todo not working, no direct translation of listview?*/}
        <list-view items={items}>
        </list-view>
        {/*#endregion example*/}

      </gridlayout>
    </>
  );
};
