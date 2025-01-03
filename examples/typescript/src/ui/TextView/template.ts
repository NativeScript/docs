import { EventData, Page } from '@nativescript/core'

// #region example
const text = `TextView\nWith\nMultiple\nLines!`
// #endregion example

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = {
    text,
  }
}
