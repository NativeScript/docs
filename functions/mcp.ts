/**
 * NativeScript Docs MCP server — a stateless Model Context Protocol endpoint
 * served as a Cloudflare Pages Function at https://docs.nativescript.org/mcp
 *
 * Implements the MCP Streamable HTTP transport (JSON responses, no SSE —
 * every tool call is a simple request/response, so streaming is unnecessary).
 *
 * Tools:
 * - search_docs   full-text search over the docs (Algolia DocSearch index)
 * - get_page      fetch any docs page as raw markdown (the ".md twin")
 * - search_api    look up @nativescript/core API symbols (api-index.json)
 * - get_sitemap   the llms.txt index of all documentation pages
 */

const SERVER_INFO = {
  name: 'nativescript-docs',
  title: 'NativeScript Docs',
  version: '1.0.0',
}

const SUPPORTED_PROTOCOL_VERSIONS = ['2025-06-18', '2025-03-26', '2024-11-05']

// Public search-only credentials (also shipped in the site frontend)
const ALGOLIA_APP_ID = '110JARHFDU'
const ALGOLIA_API_KEY = '1092c85b01c392fc821d783427c7f27a'
const ALGOLIA_INDEX = 'nativescript'

const TOOLS = [
  {
    name: 'search_docs',
    title: 'Search NativeScript docs',
    description:
      'Full-text search across the NativeScript documentation (guides, UI components, core modules, best practices). Returns matching pages with URLs. Fetch a result with get_page for full content.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query, e.g. "ListView item templates" or "http request"',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_page',
    title: 'Get docs page as markdown',
    description:
      'Fetch a NativeScript documentation page as raw markdown. Pass the page path, e.g. "/ui/list-view" or "/api/classes/Button" (with or without a .md suffix).',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'Docs page path, e.g. "/guide/multi-window" or "/api/classes/Button"',
        },
      },
      required: ['path'],
    },
  },
  {
    name: 'search_api',
    title: 'Search @nativescript/core API',
    description:
      'Look up API symbols (classes, interfaces, functions, variables, enums, type aliases, namespaces) in @nativescript/core by name. Returns symbol kind, summary and docs URL. Fetch full details with get_page.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: {
          type: 'string',
          description: 'Full or partial symbol name, e.g. "ImageSource" or "knownFolders"',
        },
        kind: {
          type: 'string',
          description:
            'Optional filter: class, interface, function, variable, enum, type-alias or namespace',
        },
      },
      required: ['symbol'],
    },
  },
  {
    name: 'get_sitemap',
    title: 'Get docs sitemap (llms.txt)',
    description:
      'Returns the llms.txt index of the NativeScript docs: every page with its title and URL, grouped by section. Useful for orientation before searching or fetching pages.',
    inputSchema: { type: 'object', properties: {} },
  },
]

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Expose-Headers': 'Mcp-Session-Id',
    },
  })
}

function rpcResult(id: unknown, result: unknown) {
  return { jsonrpc: '2.0', id, result }
}

function rpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: '2.0', id, error: { code, message } }
}

function textContent(text: string, isError = false) {
  return { content: [{ type: 'text', text }], isError }
}

async function fetchAsset(context: any, path: string): Promise<Response> {
  const url = new URL(path, context.request.url)
  return context.env.ASSETS.fetch(new Request(url.toString()))
}

async function searchDocs(query: string) {
  const res = await fetch(
    `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${ALGOLIA_INDEX}/query`,
    {
      method: 'POST',
      headers: {
        'X-Algolia-Application-Id': ALGOLIA_APP_ID,
        'X-Algolia-API-Key': ALGOLIA_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        hitsPerPage: 10,
        attributesToRetrieve: ['hierarchy', 'url', 'content'],
        attributesToSnippet: ['content:30'],
      }),
    }
  )
  if (!res.ok) {
    return textContent(`Search failed (${res.status}). Try get_sitemap instead.`, true)
  }
  const data: any = await res.json()
  const hits = (data.hits ?? []).map((hit: any) => {
    const crumbs = Object.values(hit.hierarchy ?? {})
      .filter(Boolean)
      .join(' > ')
    const snippet = hit._snippetResult?.content?.value
      ?.replace(/<\/?(em|mark)>/g, '')
      ?.trim()
    return { title: crumbs, url: hit.url, ...(snippet ? { snippet } : {}) }
  })
  if (!hits.length) {
    return textContent(`No results for "${query}". Try a broader query or get_sitemap.`)
  }
  const lines = hits.map(
    (h: any) => `- ${h.title}\n  ${h.url}${h.snippet ? `\n  ${h.snippet}` : ''}`
  )
  return textContent(`Results for "${query}":\n\n${lines.join('\n')}`)
}

async function getPage(context: any, path: string) {
  // normalize: strip origin, query, fragment; ensure leading slash
  let clean = path.trim()
  clean = clean.replace(/^https?:\/\/[^/]+/, '')
  clean = clean.split(/[?#]/)[0]
  if (!clean.startsWith('/')) clean = '/' + clean
  if (clean.includes('..')) {
    return textContent('Invalid path.', true)
  }
  if (!clean.endsWith('.md')) {
    clean = clean.replace(/\/$/, '') || '/index'
    clean += '.md'
  }
  // markdown twins follow the vitepress-plugin-llms layout:
  // "dir/index.md" is written to "/dir.md"; the root "index.md" keeps its name
  if (clean !== '/index.md' && clean.endsWith('/index.md')) {
    clean = clean.slice(0, -'/index.md'.length) + '.md'
  }

  const res = await fetchAsset(context, clean)
  if (!res.ok) {
    return textContent(
      `Page not found: ${clean}. Use search_docs or get_sitemap to find valid paths.`,
      true
    )
  }
  return textContent(await res.text())
}

async function searchApi(context: any, symbol: string, kind?: string) {
  const res = await fetchAsset(context, '/api-index.json')
  if (!res.ok) {
    return textContent('API index unavailable.', true)
  }
  const data: any = await res.json()
  const needle = symbol.toLowerCase()
  let matches = data.symbols.filter((s: any) => s.name.toLowerCase().includes(needle))
  if (kind) {
    matches = matches.filter((s: any) => s.kind === kind)
  }
  // exact matches first, then shorter names first
  matches.sort((a: any, b: any) => {
    const aExact = a.name.toLowerCase() === needle ? 0 : 1
    const bExact = b.name.toLowerCase() === needle ? 0 : 1
    return aExact - bExact || a.name.length - b.name.length
  })
  matches = matches.slice(0, 20)
  if (!matches.length) {
    return textContent(`No API symbols matching "${symbol}".`)
  }
  const lines = matches.map(
    (s: any) =>
      `- ${s.name} (${s.kind}) — https://docs.nativescript.org${s.url}${s.summary ? `\n  ${s.summary}` : ''}`
  )
  return textContent(
    `API symbols matching "${symbol}" (@nativescript/core ${data.version}):\n\n${lines.join('\n')}`
  )
}

async function getSitemap(context: any) {
  const res = await fetchAsset(context, '/llms.txt')
  if (!res.ok) {
    return textContent('Sitemap unavailable.', true)
  }
  return textContent(await res.text())
}

async function handleRequest(context: any, message: any) {
  const { id, method, params } = message

  switch (method) {
    case 'initialize': {
      const requested = params?.protocolVersion
      const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(requested)
        ? requested
        : SUPPORTED_PROTOCOL_VERSIONS[1]
      return rpcResult(id, {
        protocolVersion,
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO,
        instructions:
          'NativeScript documentation server. Use search_docs for guides and concepts, search_api for @nativescript/core symbols, get_page to read any page as markdown, and get_sitemap for a full index.',
      })
    }
    case 'ping':
      return rpcResult(id, {})
    case 'tools/list':
      return rpcResult(id, { tools: TOOLS })
    case 'tools/call': {
      const name = params?.name
      const args = params?.arguments ?? {}
      try {
        switch (name) {
          case 'search_docs':
            return rpcResult(id, await searchDocs(String(args.query ?? '')))
          case 'get_page':
            return rpcResult(id, await getPage(context, String(args.path ?? '')))
          case 'search_api':
            return rpcResult(
              id,
              await searchApi(
                context,
                String(args.symbol ?? ''),
                args.kind ? String(args.kind) : undefined
              )
            )
          case 'get_sitemap':
            return rpcResult(id, await getSitemap(context))
          default:
            return rpcError(id, -32602, `Unknown tool: ${name}`)
        }
      } catch (err: any) {
        return rpcResult(id, textContent(`Tool error: ${err?.message ?? err}`, true))
      }
    }
    default:
      return rpcError(id, -32601, `Method not found: ${method}`)
  }
}

export async function onRequest(context: any) {
  const { request } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    })
  }

  // Stateless server: no SSE stream to resume, no session to delete
  if (request.method === 'GET') {
    return jsonResponse(
      {
        name: SERVER_INFO.name,
        description:
          'NativeScript docs MCP server. Connect with an MCP client using the Streamable HTTP transport at this URL.',
        docs: 'https://docs.nativescript.org/ai',
      },
      405
    )
  }
  if (request.method === 'DELETE') {
    return new Response(null, { status: 204 })
  }
  if (request.method !== 'POST') {
    return jsonResponse(rpcError(null, -32600, 'Method not allowed'), 405)
  }

  let body: any
  try {
    body = await request.json()
  } catch {
    return jsonResponse(rpcError(null, -32700, 'Parse error'), 400)
  }

  const messages = Array.isArray(body) ? body : [body]

  // Notifications/responses only → acknowledge with 202, no body
  const requests = messages.filter((m) => m && m.method && m.id !== undefined)
  if (!requests.length) {
    return new Response(null, {
      status: 202,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
  }

  const responses = await Promise.all(requests.map((m) => handleRequest(context, m)))
  return jsonResponse(Array.isArray(body) ? responses : responses[0])
}
