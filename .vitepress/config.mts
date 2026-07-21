import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import typedocSidebar from '../content/api/typedoc-sidebar.json'
import mainSidebar from '../content/sidebar'
import uiSidebar from '../content/ui/sidebar'
import pluginsSidebar from '../content/plugins/sidebar'
import nav from './nav'
import './clientAppEnhance';
// import './theme/cliLanguage'
import path from 'node:path'
import { SiteMap } from './genSitemap.mjs'

const isDev = process.env.NODE_ENV !== 'production'
const branch = process.env.CF_PAGES_BRANCH ?? 'main'

const apiSidebar = [
  {
    text: 'API Reference',
    link: '/api/',
  },
  ...typedocSidebar,
]

const sitemap = new SiteMap()
const baseUrl = 'https://docs.nativescript.org'
function toUrl(path: string) {
  const url = new URL(
    path.replace(/((^|\/)index)?\.md$/, '$2'),
    baseUrl
  ).toString()
  // remove trailing slash
  return url.replace(/\/$/, '')
}

export default defineConfig({
  srcDir: './content',
  lang: 'en-US',
  title: 'NativeScript',
  description: 'NativeScript docs',
  head: [
    [
      'script',
      {
        async: 'true',
        src: 'https://vueschool.io/banner.js?affiliate=NSCRIPT&type=top',
      }  
    ],
  ],
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  vite: {
    ssr: {
      noExternal: ['@nativescript/vitepress-theme'],
    },
    plugins: [
      llmstxt({
        domain: 'https://docs.nativescript.org',
        title: 'NativeScript',
        description:
          'NativeScript empowers you to access native platform APIs from JavaScript directly. Develop iOS, Android and visionOS apps with TypeScript, Angular, Vue, React, Svelte or Solid.',
        // also emit /index.md for the home page (default skips it)
        excludeIndexPage: false,
      }),
    ],
  },
  themeConfig: {
    editLink: {
      ...(isDev && {
        text: 'Edit in VS Code',
      }),
      pattern: isDev
        ? `vscode://file/${path.resolve(__dirname, '../content/:filePath')}`
        : `https://github.com/NativeScript/docs/edit/${branch}/content/:filePath`,
    },
    algolia: {
      appId: '110JARHFDU',
      apiKey: '1092c85b01c392fc821d783427c7f27a',
      indexName: 'nativescript',
    },
    nav,
    sidebar: {
      '/api': apiSidebar,
      '/ui': uiSidebar,
      '/plugins': pluginsSidebar,
      '/': mainSidebar,
    },
  },
  markdown: {
    headers: true,
    theme: "github-dark",
    config(md) {
      // Inject the "Copy page" button (markdown/LLM/MCP actions) at the top
      // of every page body, right below the theme-rendered title.
      md.core.ruler.push('copy-page-button', (state) => {
        // only inject into full page renders (not inline snippets like
        // custom container titles), and only for actual doc pages
        if (state.inlineMode) return
        if (!state.env?.relativePath) return
        if (state.env?.frontmatter?.copyPage === false) return
        const token = new state.Token('html_block', '', 0)
        token.content = '<CopyPageButton />\n'
        state.tokens.unshift(token)
      })
    },
  },
  async transformPageData(pageData, { siteConfig }) {
    // const contributors = await githubAuthors.getAuthorsForFilePath(
    //   path.resolve(siteConfig.srcDir, pageData.relativePath)
    // )
    // pageData.frontmatter.contributors ??= contributors ?? []

    pageData.frontmatter.contributors = transformContributors(
      pageData.frontmatter.contributors
    )
  },
  transformHtml(_, id, { pageData }) {
    if (!/[\\/]404\.html$/.test(id))
      sitemap.add({
        // you might need to change this if not using clean urls mode
        url: toUrl(pageData.relativePath),
        lastmod:
          pageData.lastUpdated ?? pageData.frontmatter?.date ?? Date.now(),
      })
  },
  async buildEnd(config) {
    await sitemap.write(config)
  },
})

function transformContributors(contributors?: string[] | false) {
  // explicitly set to false to disable contributors list
  if (contributors === false) {
    return []
  }

  // if not set, default to NativeScript
  if (!contributors) {
    return [
      {
        username: 'NativeScript',
        avatarURL: 'https://github.com/NativeScript.png?size=24',
        profileURL: 'https://github.com/NativeScript',
      },
    ]
  }

  // otherwise, transform the list of usernames into a list of objects
  return contributors.map((username: string) => {
    return {
      username,
      avatarURL: `https://github.com/${username}.png?size=24`,
      profileURL: `https://github.com/${username}`,
    }
  })
}
