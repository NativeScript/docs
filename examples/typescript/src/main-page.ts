import { EventData, Page } from '@nativescript/core'
import { openDemo } from './utils/demo'
import { getComponentList } from '@example/utils';

// @ts-expect-error - webpack magic to get all examples
const examples = getComponentList(require.context('./ui/', true, /template\.xml$/), '/template.xml');

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = {
    examples,
  }
}

export function onItemTap({ index }: { index: number }) {
  openDemo(examples[index].name)
}
