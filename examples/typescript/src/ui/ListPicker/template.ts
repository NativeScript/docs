import { EventData, Page } from '@nativescript/core'

// #region example
const items = [`First`, `Second`, `Third`]
// #endregion example

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = {
    items,
  }
}
