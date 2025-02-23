import { EventData, Page } from '@nativescript/core'

// #region example
const items = Array.from({ length: 100 }).map((_, i) => ({
  title: `Item ${i}`,
}))
// #endregion example

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = {
    items,
  }
}

// #region itemTemplateSelector
// example item definition
type ItemType = {
  title: string
  type: 'heading' | 'item'
}

// called for each item in the list before rendering
function itemTemplateSelector(
  item: ItemType,
  index: number,
  items: Array<ItemType>
) {
  return item.type === 'heading' ? 'heading' : 'item'
}
// #endregion itemTemplateSelector
