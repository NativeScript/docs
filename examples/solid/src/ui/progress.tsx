{/* #region example */}
import { createSignal } from 'solid-js'

export const Progress = () => {
  const [count, setCount] = createSignal(0)
  setInterval(() => {
    setCount(count() + 1)
    if (count() === 101) setCount(0)
  }, 100)
  return (
    <>
      <actionbar title="Progress">
      </actionbar>
      <gridlayout>
        <progress value={count()}></progress>
      </gridlayout>
    </>
  )
}
{/* #endregion example */}
