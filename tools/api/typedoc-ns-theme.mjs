/**
 * Local TypeDoc plugin: adds VitePress frontmatter (title/description) to
 * every generated API page so the NativeScript theme renders page titles the
 * same way it does for hand-written content pages.
 */
import { MarkdownPageEvent } from 'typedoc-plugin-markdown'
import { ReflectionKind } from 'typedoc'

function summaryOf(model) {
  const parts = model?.comment?.summary ?? []
  const text = parts
    .map((p) => p.text ?? '')
    .join('')
    .trim()
    .replace(/\s+/g, ' ')
  // frontmatter descriptions should be short, single-line
  return text.length > 160 ? text.slice(0, 157) + '...' : text
}

export function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    const model = page.model
    const isProjectPage = model?.kind === ReflectionKind.Project
    const title = isProjectPage ? 'API Reference' : (model?.name ?? 'API')
    const description = isProjectPage
      ? 'Complete API reference for @nativescript/core.'
      : summaryOf(model)

    page.frontmatter = {
      title,
      titleTemplate: ':title - API / NativeScript',
      ...(description ? { description } : {}),
      contributors: false,
      ...page.frontmatter,
    }
  })
}
