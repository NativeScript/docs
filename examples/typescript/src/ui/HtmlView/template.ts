import { EventData, Page } from '@nativescript/core'

// #region example
const htmlString = `
<h1 style="color: black; font-family: ui-sans-serif, system-ui;">
  <span style="color: #65adf1;">Html</span>View
</h1>
`
// #endregion example

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = {
    htmlString,
  }
}
