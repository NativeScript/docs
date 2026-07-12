/**
 * Generates the API reference (content/api) from the published
 * `@nativescript/core` typings using TypeDoc + typedoc-plugin-markdown.
 *
 * Usage: yarn generate:api-docs
 *
 * Outputs:
 * - content/api/**\/*.md          plain markdown pages (rendered by VitePress)
 * - content/api/typedoc-sidebar.json  sidebar consumed by .vitepress/config.mts
 * - content/public/api-index.json compact symbol index (search / MCP tooling)
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')
const apiDir = path.join(repoRoot, 'content/api')
const fullJsonPath = path.join(repoRoot, 'tmp/api-full.json')

const corePkg = JSON.parse(
  fs.readFileSync(
    path.join(repoRoot, 'node_modules/@nativescript/core/package.json'),
    'utf8'
  )
)

const walkMarkdown = (dir, fn) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walkMarkdown(p, fn)
    else if (p.endsWith('.md')) fn(p)
  }
}

// Core releases are tagged "<version>-core" in the NativeScript repo;
// "Defined in" source links point at that tag so line numbers stay accurate.
const coreTag = `${corePkg.version}-core`

// 1. Clean previous output
fs.rmSync(apiDir, { recursive: true, force: true })

// 2. Run TypeDoc
execSync(`npx typedoc --options tools/api/typedoc.json --gitRevision ${coreTag}`, {
  cwd: repoRoot,
  stdio: 'inherit',
})

// 3. Flatten the "NativeScript/namespaces" module dir to "namespaces"
const moduleDir = path.join(apiDir, 'NativeScript')
if (fs.existsSync(path.join(moduleDir, 'namespaces'))) {
  fs.renameSync(
    path.join(moduleDir, 'namespaces'),
    path.join(apiDir, 'namespaces')
  )
  fs.rmSync(moduleDir, { recursive: true, force: true })

  // Rewrite links in every markdown file and the sidebar
  const rewrite = (file) => {
    const src = fs.readFileSync(file, 'utf8')
    const out = src.replaceAll('NativeScript/namespaces/', 'namespaces/')
    if (out !== src) fs.writeFileSync(file, out)
  }
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(p)
      else if (p.endsWith('.md') || p.endsWith('.json')) rewrite(p)
    }
  }
  walk(apiDir)
}

// 4. Fix source links whose .d.ts file only exists in the published package.
// Handwritten .d.ts files are committed verbatim, so tag + line anchors are
// exact. Compiled ones (built from .ts at publish time) aren't in the repo:
// point those at the .ts source instead, without a line anchor.
try {
  const treeRes = await fetch(
    `https://api.github.com/repos/NativeScript/NativeScript/git/trees/${coreTag}?recursive=1`,
    process.env.GITHUB_TOKEN
      ? { headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } }
      : {}
  )
  if (!treeRes.ok) throw new Error(`GitHub tree API: HTTP ${treeRes.status}`)
  const tree = await treeRes.json()
  if (tree.truncated) throw new Error('GitHub tree API response truncated')
  const repoFiles = new Set(tree.tree.map((t) => t.path))

  const linkRe = new RegExp(
    `\\[([^\\]]+)\\]\\(https://github\\.com/NativeScript/NativeScript/blob/${coreTag.replaceAll('.', '\\.')}/packages/core/([^)#]+)#L\\d+\\)`,
    'g'
  )
  const blobBase = `https://github.com/NativeScript/NativeScript/blob/${coreTag}/packages/core/`
  let rewritten = 0
  let unlinked = 0
  walkMarkdown(apiDir, (file) => {
    const src = fs.readFileSync(file, 'utf8')
    const out = src.replace(linkRe, (match, text, dtsPath) => {
      if (repoFiles.has(`packages/core/${dtsPath}`)) return match
      const tsPath = dtsPath.replace(/\.d\.ts$/, '.ts')
      if (repoFiles.has(`packages/core/${tsPath}`)) {
        rewritten++
        // The .d.ts line number is meaningless in the .ts source, so drop it
        return `[${tsPath}](${blobBase}${tsPath})`
      }
      unlinked++
      return text
    })
    if (out !== src) fs.writeFileSync(file, out)
  })
  console.log(
    `source links: ${rewritten} redirected to .ts sources, ${unlinked} unlinked (no repo file)`
  )
} catch (err) {
  console.warn(`source links: skipped repo-tree validation (${err.message})`)
}

// 5. Use clean URLs in the sidebar (".md" URLs serve the raw markdown twins,
// the rendered pages live at the extension-less path)
const sidebarPath = path.join(apiDir, 'typedoc-sidebar.json')
const sidebar = JSON.parse(fs.readFileSync(sidebarPath, 'utf8'))
const stripMd = (items) => {
  for (const item of items) {
    if (item.link?.endsWith('.md')) {
      item.link = item.link.slice(0, -'.md'.length)
    }
    if (item.items) stripMd(item.items)
  }
}
stripMd(sidebar)
fs.writeFileSync(sidebarPath, JSON.stringify(sidebar, null, 2))

// 6. Build the compact symbol index from the full TypeDoc JSON
const project = JSON.parse(fs.readFileSync(fullJsonPath, 'utf8'))

const KIND = {
  2: 'namespace',
  4: 'namespace',
  8: 'enum',
  16: 'enum-member',
  32: 'variable',
  64: 'function',
  128: 'class',
  256: 'interface',
  1024: 'property',
  2048: 'method',
  2097152: 'type-alias',
}

const KIND_DIR = {
  namespace: 'namespaces',
  enum: 'enumerations',
  variable: 'variables',
  function: 'functions',
  class: 'classes',
  interface: 'interfaces',
  'type-alias': 'type-aliases',
}

function summaryOf(refl) {
  const parts = refl.comment?.summary ?? []
  const text = parts
    .map((p) => p.text ?? '')
    .join('')
    .trim()
    .replace(/\s+/g, ' ')
  return text.length > 220 ? text.slice(0, 217) + '...' : text
}

const index = []

function visit(refl, parents) {
  const kind = KIND[refl.kind]
  if (kind && KIND_DIR[kind]) {
    const namespaceChain = parents
    let url
    if (kind === 'namespace') {
      url =
        '/api/namespaces/' +
        [...namespaceChain.map((p) => p.name), refl.name].join('/namespaces/') +
        '/'
    } else {
      const prefix = namespaceChain.length
        ? 'namespaces/' +
          namespaceChain.map((p) => p.name).join('/namespaces/') +
          '/'
        : ''
      url = `/api/${prefix}${KIND_DIR[kind]}/${refl.name}`
    }
    index.push({
      name: refl.name,
      kind,
      url,
      ...(summaryOf(refl) ? { summary: summaryOf(refl) } : {}),
    })
  }
  for (const child of refl.children ?? []) {
    visit(child, kind === 'namespace' ? [...parents, refl] : parents)
  }
}

for (const child of project.children ?? []) {
  visit(child, [])
}

const apiIndex = {
  package: '@nativescript/core',
  version: project.packageVersion ?? corePkg.version,
  generated: new Date().toISOString().slice(0, 10),
  symbols: index,
}
fs.writeFileSync(
  path.join(repoRoot, 'content/public/api-index.json'),
  JSON.stringify(apiIndex)
)

console.log(
  `\napi-index.json: ${index.length} symbols (core ${apiIndex.version})`
)
