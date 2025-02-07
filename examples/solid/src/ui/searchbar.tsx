import { Frame } from '@nativescript/core'

export const SearchBar = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="SearchBar">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <searchbar hint="SEARCH HERE"></searchbar>
        {/*#endregion example*/}

      </gridlayout>
    </>
  );
};
