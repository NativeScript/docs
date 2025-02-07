import { Frame } from '@nativescript/core'
import { createSignal } from 'solid-js'

export const Switch = () => {
  const [switchValue, setSwitchValue] = createSignal(true)

  const handleChange = (event: Event) => {
    setSwitchValue(event.value)
    console.log(event.value)
  }
  function goBack() {
    Frame.goBack()
  }
  return (
    <>
      <actionbar title="Switch">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        {/* #region example */}
        <stacklayout>
          <switch
            horizontalAlignment="center"
            on:checkedChange={handleChange}
            checked={switchValue()}
          ></switch>
        </stacklayout>
        {/* #endregion example */}
      </gridlayout>
    </>
  )
}
