---
title: Using the Docs with AI
description: NativeScript documentation is fully agent-ready — markdown for every page, llms.txt indexes, and an MCP server.
contributors: false
---

The NativeScript docs are built to work as well for AI coding agents as they do for humans. Every page is available as plain markdown, machine-readable indexes are published at stable URLs, and a hosted MCP server lets any agent search the docs and API reference directly.

::: tip Related
For setting up AI assistants in your own NativeScript project (context files, `CLAUDE.md`, project rules), see [Agentic Coding](/guide/agentic-coding).
:::

## Markdown for every page

Append `.md` to any docs URL to get the raw markdown version of that page — ideal for pasting into a chat or fetching from an agent:

```cli
https://docs.nativescript.org/guide/multi-window.md
https://docs.nativescript.org/ui/list-view.md
https://docs.nativescript.org/api/classes/Button.md
```

You can also use the **Copy page** button at the top of every page to copy the markdown, open the page in ChatGPT or Claude, or install the MCP server in your editor.

## llms.txt

Following the [llms.txt convention](https://llmstxt.org), two indexes are generated on every deploy:

- [`/llms.txt`](https://docs.nativescript.org/llms.txt) — an index of all documentation pages with titles and links
- [`/llms-full.txt`](https://docs.nativescript.org/llms-full.txt) — the entire documentation compiled into a single markdown file

## MCP server

A hosted [Model Context Protocol](https://modelcontextprotocol.io) server is available at:

```cli
https://docs.nativescript.org/mcp
```

It uses the Streamable HTTP transport, requires no authentication, and exposes four tools:

| Tool          | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| `search_docs` | Full-text search across guides, UI components and core modules |
| `search_api`  | Look up `@nativescript/core` API symbols by name               |
| `get_page`    | Fetch any docs page as raw markdown                            |
| `get_sitemap` | Retrieve the full docs index (llms.txt)                        |

### Cursor

Use the **Copy page → Install MCP in Cursor** button on any page, or add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "nativescript": {
      "url": "https://docs.nativescript.org/mcp"
    }
  }
}
```

### VS Code

```json
{
  "servers": {
    "nativescript": {
      "type": "http",
      "url": "https://docs.nativescript.org/mcp"
    }
  }
}
```

### Claude Code

```cli
claude mcp add --transport http nativescript https://docs.nativescript.org/mcp
```

### Codex

```toml
[mcp_servers.nativescript]
url = "https://docs.nativescript.org/mcp"
```

### Other clients

Any MCP client supporting the Streamable HTTP transport can connect to the URL directly. For clients that only support stdio servers, bridge with [mcp-remote](https://www.npmjs.com/package/mcp-remote):

```cli
npx mcp-remote https://docs.nativescript.org/mcp
```

## API index

A compact, machine-readable index of every `@nativescript/core` API symbol (name, kind, summary, docs URL) is published at:

```cli
https://docs.nativescript.org/api-index.json
```

## Tips for agent rules

If you use `AGENTS.md`, `CLAUDE.md` or Cursor rules in your NativeScript projects, a snippet like this helps agents use the docs effectively:

```md
## NativeScript

- Docs: https://docs.nativescript.org (append .md to any URL for markdown)
- Docs index: https://docs.nativescript.org/llms.txt
- MCP server: https://docs.nativescript.org/mcp
- Verify current API signatures via the API reference before writing code:
  https://docs.nativescript.org/api/
```
