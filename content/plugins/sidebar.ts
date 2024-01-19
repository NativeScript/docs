import type { NSSidebarItem } from '@nativescript/vitepress-theme'
import { sidebar} from '../../.vitepress/plugin-config.mjs';
export default [
  {
    text: 'Plugins',
    link: '/plugins/',
    // hides the sidebar item from the sidebar, but keeps it in the breadcrumbs
    visible: false,
    // todo: add a different type to disable indentation on the root level
    type: 'filetree',
    items: sidebar,
  },
] as NSSidebarItem[]
