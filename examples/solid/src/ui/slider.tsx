import { Frame } from '@nativescript/core'
import { createSignal } from 'solid-js'

export const Slider = () => {
  const [sliderValue, setSliderValue] = createSignal(0)
  function goBack() {
    Frame.goBack()
  }

  const handleChange = (event: Event) => {
    setSliderValue(event.value)
    console.log(event.value)
    // You can perform any other actions here based on the updated value
  }

  return (
    <>
      <actionbar title="Slider">
        <actionitem on:tap={goBack} text="<<Back"></actionitem>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout
        ios:visibility="collapse"
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <stacklayout>
          {/* #region example */}
          <slider
            width={300}
            value={sliderValue()}
            on:valueChange={handleChange}
          />
          {/* #endregion example */}
          <label>{sliderValue()}</label>
        </stacklayout>
      </gridlayout>
    </>
  )
}
