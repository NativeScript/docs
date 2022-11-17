import { defineConfig } from "vitepress";
import sidebar from "../content/sidebar";
// https://mysticmind.dev/vitepress-fenced-code-block-syntax-highlighting-quirks-with-net-or-other-languages
import { BUNDLED_LANGUAGES } from "shiki";
import cliLanguageGrammar from "./shiki/cli.tmLanguage.json";

BUNDLED_LANGUAGES.push({
  id: "cli",
  scopeName: "source.cli",
  // @ts-ignore
  grammar: cliLanguageGrammar,
});

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
      pattern: "https://pr.new/github.com/NativeScript/docs/edit/main/:path",
      // "https://pr.new/github.com/NativeScript/docs/edit/main/:filePath?initialPath=:path",
    },
    sidebar,
  },
});
