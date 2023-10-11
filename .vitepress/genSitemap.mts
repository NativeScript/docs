import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { type SiteConfig } from 'vitepress'

interface SiteMapEntry {
  url: string
  lastmod: number | undefined
}

export class SiteMap {
  private links = new Map<string, SiteMapEntry>()

  add(entry: SiteMapEntry) {
    this.links.set(entry.url, entry)
  }

  async write({ outDir, site }: SiteConfig) {
    const sitemap = new SitemapStream({
      hostname: site.themeConfig.baseUrl,
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    this.links.forEach((link) => {
      sitemap.write(link)
    })
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
}
