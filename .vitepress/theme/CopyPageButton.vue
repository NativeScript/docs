<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const SITE_ORIGIN = 'https://docs.nativescript.org'
const MCP_URL = `${SITE_ORIGIN}/mcp`

const open = ref(false)
const copied = ref(false)
const root = ref<HTMLElement | null>(null)

const mdPath = computed(() => '/' + page.value.relativePath)
const mdUrl = computed(() => SITE_ORIGIN + mdPath.value)

const chatGptUrl = computed(
  () =>
    'https://chatgpt.com/?hints=search&q=' +
    encodeURIComponent(`Read ${mdUrl.value} so I can ask questions about it.`)
)
const claudeUrl = computed(
  () =>
    'https://claude.ai/new?q=' +
    encodeURIComponent(`Read ${mdUrl.value} so I can ask questions about it.`)
)

const cursorDeeplink = computed(() => {
  const config = btoa(JSON.stringify({ url: MCP_URL }))
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=nativescript&config=${config}`
})
const vscodeDeeplink = computed(() => {
  const config = JSON.stringify({
    name: 'nativescript',
    type: 'http',
    url: MCP_URL,
  })
  return `vscode:mcp/install?${encodeURIComponent(config)}`
})

async function copyMarkdown() {
  try {
    const res = await fetch(mdPath.value + location.search)
    const text = res.ok ? await res.text() : mdUrl.value
    await navigator.clipboard.writeText(text)
  } catch {
    await navigator.clipboard.writeText(mdUrl.value)
  }
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
  open.value = false
}

async function copyMcpConfig() {
  const config = {
    mcpServers: {
      nativescript: { url: MCP_URL },
    },
  }
  await navigator.clipboard.writeText(JSON.stringify(config, null, 2))
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
  open.value = false
}

function onClickOutside(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="root" class="copy-page">
    <div class="copy-page-group">
      <button class="copy-page-main" type="button" @click="copyMarkdown">
        <svg
          class="copy-page-icon"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="8" height="9" rx="1.5" />
          <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-5A1.5 1.5 0 0 0 3 3.5v7A1.5 1.5 0 0 0 4.5 12H5" />
        </svg>
        {{ copied ? 'Copied!' : 'Copy page' }}
      </button>
      <button
        class="copy-page-toggle"
        type="button"
        aria-label="More copy options"
        :aria-expanded="open"
        @click="open = !open"
      >
        <svg
          class="copy-page-icon"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
    </div>

    <div v-if="open" class="copy-page-menu">
      <button type="button" class="copy-page-item" @click="copyMarkdown">
        <span class="copy-page-item-title">Copy page as Markdown</span>
        <span class="copy-page-item-desc">Copy this page as Markdown for LLMs</span>
      </button>
      <a class="copy-page-item" :href="mdPath" target="_blank" rel="noopener" @click="open = false">
        <span class="copy-page-item-title">View as Markdown</span>
        <span class="copy-page-item-desc">Open this page as plain Markdown</span>
      </a>
      <a class="copy-page-item" :href="chatGptUrl" target="_blank" rel="noopener" @click="open = false">
        <span class="copy-page-item-title">Open in ChatGPT</span>
        <span class="copy-page-item-desc">Ask questions about this page</span>
      </a>
      <a class="copy-page-item" :href="claudeUrl" target="_blank" rel="noopener" @click="open = false">
        <span class="copy-page-item-title">Open in Claude</span>
        <span class="copy-page-item-desc">Ask questions about this page</span>
      </a>
      <div class="copy-page-divider" />
      <a class="copy-page-item" :href="cursorDeeplink" @click="open = false">
        <span class="copy-page-item-title">Install MCP in Cursor</span>
        <span class="copy-page-item-desc">Add the NativeScript docs MCP server</span>
      </a>
      <a class="copy-page-item" :href="vscodeDeeplink" @click="open = false">
        <span class="copy-page-item-title">Install MCP in VS Code</span>
        <span class="copy-page-item-desc">Add the NativeScript docs MCP server</span>
      </a>
      <button type="button" class="copy-page-item" @click="copyMcpConfig">
        <span class="copy-page-item-title">Copy MCP config</span>
        <span class="copy-page-item-desc">For Claude Code, Windsurf and others</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.copy-page {
  position: relative;
  display: inline-block;
  margin: 0.25rem 0 1rem;
  font-size: 0.8125rem;
  line-height: 1;
}

.copy-page-group {
  display: inline-flex;
  align-items: stretch;
  border: 1px solid rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  overflow: hidden;
}

.copy-page-main,
.copy-page-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.45rem 0.65rem;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
}

.copy-page-toggle {
  border-left: 1px solid rgba(128, 128, 128, 0.35);
  padding: 0.45rem 0.45rem;
}

.copy-page-main:hover,
.copy-page-toggle:hover,
.copy-page-item:hover {
  background: rgba(128, 128, 128, 0.12);
}

.copy-page-icon {
  width: 14px;
  height: 14px;
  flex: none;
}

.copy-page-menu {
  position: absolute;
  z-index: 30;
  top: calc(100% + 4px);
  left: 0;
  min-width: 280px;
  padding: 0.25rem;
  border: 1px solid rgba(128, 128, 128, 0.35);
  border-radius: 10px;
  background: var(--copy-page-menu-bg, #fff);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

:global(html.dark) .copy-page-menu {
  --copy-page-menu-bg: #1b1b1f;
}

.copy-page-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  width: 100%;
  padding: 0.45rem 0.55rem;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  text-align: left;
  text-decoration: none;
}

.copy-page-item-title {
  font-weight: 500;
}

.copy-page-item-desc {
  font-size: 0.72rem;
  opacity: 0.65;
}

.copy-page-divider {
  margin: 0.25rem 0;
  border-top: 1px solid rgba(128, 128, 128, 0.25);
}
</style>
