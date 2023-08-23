import { DefaultTheme } from 'vitepress';
import { Theme } from 'vitepress';

export declare type NSNavItem = DefaultTheme.NavItem & {
    icon?: string;
};

export declare type NSSidebarGroup = DefaultTheme.SidebarItem & {
    items?: NSSidebarItem[];
};

export declare type NSSidebarItem = DefaultTheme.SidebarItem & {
    icon?: string;
    hidden?: boolean;
    collapsible?: boolean;
    hideChildren?: boolean;
    type?: string;
};

export declare type NSThemeConfig = DefaultTheme.Config & {
    mainURL?: string;
    sidebar?: NSSidebarGroup[];
    nav?: NSNavItem[];
};

declare const theme: (enhanceApp: Theme['enhanceApp']) => Theme;
export default theme;

export { }
