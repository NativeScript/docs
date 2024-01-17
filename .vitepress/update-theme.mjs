import { execSync } from 'child_process'

const THEME_URL = `https://docs.nativescript.org/__/vitepress-theme.tgz`

execSync('yarn remove @nativescript/vitepress-theme')
execSync(`yarn add -D ${THEME_URL}?${Date.now()}`)
