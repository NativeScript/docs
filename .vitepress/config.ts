import { defineConfig } from "vitepress";

import "./theme/cliLanguage";

import nav from "./nav";
import apiSidebar from "../content/api/sidebar.json";
import mainSidebar from "../content/sidebar";

export default defineConfig({
  srcDir: "./content",
  lang: "en-US",
  title: "NativeScript",
  description: "NativeScript docs",
  ignoreDeadLinks: true,
  cleanUrls: "without-subfolders",
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/NativeScript/docs/blob/main/content/:filePath",
      // pattern:
      //   "https://pr.new/github.com/NativeScript/docs/edit/main/content/:filePath?initialPath=:path",
    },
    algolia: {
      appId: "",
      apiKey: "8d41b4ae92a02aea355e1dc8cfad1899",
      indexName: "nativescript",
    },
    nav,
    sidebar: {
      "/ap": apiSidebar,
      "/": mainSidebar,
    },
  },
});
