export function getComponentList(context: any, componentName: string) {
  let examples: Array<{ name: string }> = []
  context.keys().map((key) => {
    const name = key
      .replace('./ui/', '')
      .replace('./', '')
      .replace(componentName, '')
    examples.push({ name })
  })
  return examples
}
