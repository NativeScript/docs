// #region example
export const ListView = () => {
  const items = []
  for (let i = 0; i < 100; i++) {
    items.push({
      text: `Item ${i + 1}`,
    })
  }
  return (
    <>
      <actionbar title="ListView">
      </actionbar>
      <gridlayout>
        <list-view items={items}></list-view>
      </gridlayout>
    </>
  )
}
// #endregion example
