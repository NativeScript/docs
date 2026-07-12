/**
 * Production-parity smoke test for the NativeScript docs.
 *
 * Checks static pages, markdown twins, llms.txt artifacts, the API index,
 * legacy API URL redirects (Cloudflare _redirects) and the /mcp endpoint.
 *
 * Usage:
 *   yarn smoke --base https://docs.nativescript.org
 *   yarn smoke --base https://<preview>.pages.dev
 *   yarn smoke --base http://localhost:8788   (wrangler pages dev)
 *
 * No dependencies — requires Node 18+.
 */

const args = process.argv.slice(2)
const baseIdx = args.indexOf('--base')
const BASE = (baseIdx !== -1 && args[baseIdx + 1]
  ? args[baseIdx + 1]
  : 'http://localhost:8788'
).replace(/\/$/, '')

let passed = 0
let failed = 0

function report(ok, name, detail = '') {
  if (ok) {
    passed++
    console.log(`PASS  ${name}`)
  } else {
    failed++
    console.log(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

async function checkPage(path, mustContain) {
  try {
    const res = await fetch(BASE + path, { redirect: 'follow' })
    const text = await res.text()
    const ok = res.status === 200 && mustContain.every((s) => text.includes(s))
    report(
      ok,
      `GET ${path}`,
      res.status !== 200
        ? `status ${res.status}`
        : `missing: ${mustContain.filter((s) => !text.includes(s)).join(', ')}`
    )
    return text
  } catch (err) {
    report(false, `GET ${path}`, String(err))
    return ''
  }
}

async function checkRedirect(from, toSuffix) {
  try {
    const res = await fetch(BASE + from, { redirect: 'manual' })
    const location = res.headers.get('location') ?? ''
    const ok =
      res.status >= 301 && res.status <= 308 && location.endsWith(toSuffix)
    report(
      ok,
      `redirect ${from} -> ${toSuffix}`,
      `status ${res.status}, location ${location || '(none)'}`
    )
  } catch (err) {
    report(false, `redirect ${from}`, String(err))
  }
}

async function mcp(method, params = {}, id = 1) {
  const res = await fetch(BASE + '/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id, method, params }),
  })
  if (!res.ok) throw new Error(`status ${res.status}`)
  return res.json()
}

console.log(`Smoke testing ${BASE}\n`)

// ---- static pages ----
await checkPage('/', ['NativeScript'])
await checkPage('/guide/ai', ['MCP', 'llms.txt'])
await checkPage('/api/', ['Namespaces', 'Classes'])
const buttonHtml = await checkPage('/api/classes/Button', ['tapEvent'])
report(
  !/href="\/api\/[^"]*\.md"/.test(buttonHtml),
  'API sidebar uses clean URLs (no .md hrefs)'
)
await checkPage('/api/namespaces/Utils/', ['Namespaces'])
await checkPage('/api/namespaces/CoreTypes/namespaces/KeyboardType/variables/datetime', [
  'core-types/index.d.ts',
])

// ---- markdown twins ----
const buttonMd = await checkPage('/api/classes/Button.md', [
  'Represents a standard Button widget',
])
report(
  buttonMd.trimStart().startsWith('---'),
  '/api/classes/Button.md is raw markdown'
)
await checkPage('/guide/ai.md', ['MCP'])
await checkPage('/index.md', ['NativeScript'])
await checkPage('/guide/publishing.md', ['Publishing'])
await checkPage(
  '/api/namespaces/CoreTypes/namespaces/KeyboardType/variables/datetime.md',
  ['const datetime']
)

// ---- llms.txt + API index ----
await checkPage('/llms.txt', ['# NativeScript', 'Table of Contents'])
const llmsFull = await checkPage('/llms-full.txt', ['NativeScript'])
report(
  llmsFull.length > 1_000_000,
  '/llms-full.txt is complete',
  `${llmsFull.length} bytes`
)
try {
  const res = await fetch(BASE + '/api-index.json')
  const data = await res.json()
  report(
    res.status === 200 && Array.isArray(data.symbols) && data.symbols.length > 800,
    `/api-index.json (${data.symbols?.length ?? 0} symbols, core ${data.version})`
  )
} catch (err) {
  report(false, '/api-index.json', String(err))
}

// ---- legacy API URL redirects (Cloudflare layer) ----
await checkRedirect('/api/class/Button', '/api/classes/Button')
await checkRedirect('/api/interface/AlertOptions', '/api/interfaces/AlertOptions')
await checkRedirect('/api/enum/CoreTypes', '/api/enumerations/CoreTypes')
await checkRedirect('/api/namespace/Utils', '/api/namespaces/Utils/')

// ---- MCP endpoint ----
try {
  const init = await mcp('initialize', {
    protocolVersion: '2025-06-18',
    capabilities: {},
    clientInfo: { name: 'smoke-test', version: '1.0.0' },
  })
  report(
    init.result?.serverInfo?.name === 'nativescript-docs',
    'MCP initialize'
  )

  const tools = await mcp('tools/list', {}, 2)
  const names = (tools.result?.tools ?? []).map((t) => t.name)
  report(
    ['search_docs', 'get_page', 'search_api', 'get_sitemap'].every((n) =>
      names.includes(n)
    ),
    `MCP tools/list (${names.join(', ')})`
  )

  const api = await mcp(
    'tools/call',
    { name: 'search_api', arguments: { symbol: 'ImageSource' } },
    3
  )
  report(
    api.result?.content?.[0]?.text?.includes('/api/classes/ImageSource'),
    'MCP search_api(ImageSource)'
  )

  const pageRes = await mcp(
    'tools/call',
    { name: 'get_page', arguments: { path: '/guide/multi-window' } },
    4
  )
  report(
    pageRes.result?.content?.[0]?.text?.includes('UIScene'),
    'MCP get_page(/guide/multi-window)'
  )

  const search = await mcp(
    'tools/call',
    { name: 'search_docs', arguments: { query: 'ListView templates' } },
    5
  )
  report(
    search.result?.content?.[0]?.text?.includes('docs.nativescript.org'),
    'MCP search_docs(ListView templates)'
  )
} catch (err) {
  report(false, 'MCP endpoint', String(err))
}

// ---- Algolia (same REST call the search modal makes) ----
try {
  const res = await fetch(
    'https://110JARHFDU-dsn.algolia.net/1/indexes/nativescript/query',
    {
      method: 'POST',
      headers: {
        'X-Algolia-Application-Id': '110JARHFDU',
        'X-Algolia-API-Key': '1092c85b01c392fc821d783427c7f27a',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: 'ListView', hitsPerPage: 3 }),
    }
  )
  const data = await res.json()
  report(
    res.ok && (data.hits?.length ?? 0) > 0,
    `Algolia index reachable (${data.hits?.length ?? 0} hits for "ListView")`
  )
} catch (err) {
  report(false, 'Algolia index reachable', String(err))
}

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
