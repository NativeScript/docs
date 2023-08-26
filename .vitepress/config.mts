import { defineConfig } from 'vitepress'
import apiSidebar from '../content/api/sidebar.json'
import mainSidebar from '../content/sidebar'
import uiSidebar from '../content/ui/sidebar'
import nav from './nav'
import './theme/cliLanguage'

export default defineConfig({
  srcDir: './content',
  lang: 'en-US',
  title: 'NativeScript',
  description: 'NativeScript docs',
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    editLink: {
      // pattern:
      //   'https://github.com/NativeScript/docs/blob/main/content/:filePath',
      pattern:
        'https://pr.new/github.com/NativeScript/docs/edit/main/content/:filePath?initialPath=:path',
    },
    algolia: {
      appId: '',
      apiKey: '8d41b4ae92a02aea355e1dc8cfad1899',
      indexName: 'nativescript',
    },
    nav,
    sidebar: {
      '/api': apiSidebar,
      '/ui': uiSidebar,
      '/': mainSidebar,
    },
  },
  markdown: {
    headers: true,
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
