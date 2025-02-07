import { Frame } from '@nativescript/core'
import { createSignal } from 'solid-js'

export const Progress = () => {

  // #region example
  const [count, setCount] = createSignal(0);
  setInterval( () =>{
    setCount(count() + 1);
    if(count() === 101)
      setCount(0) ;
  }, 100);
  // #endregion example

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="Progress">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout ios:visibility="collapse" verticalAlignment="center" horizontalAlignment="center">

        {/*region example*/}
        <stacklayout>
          <progress value={count()}></progress>
          <label textAlignment="center">{count()}</label>

        </stacklayout>
        {/*#endregion example*/}

      </gridlayout>
    </>
  );
};
