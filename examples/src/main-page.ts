import { EventData, Page } from '@nativescript/core'
import { openDemo } from './utils/demo'

const examples = []

// @ts-expect-error - webpack magic to get all examples
const requireUIExamples = require.context('./ui/', true, /template\.xml$/)
requireUIExamples.keys().map((key) => {
  const name = key.replace('./', '').replace('/template.xml', '')
  examples.push({ name })
})

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = {
    examples,
  }
}

export function onItemTap({ index }: { index: number }) {
  openDemo(examples[index].name)
}
