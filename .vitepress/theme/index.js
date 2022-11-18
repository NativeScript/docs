import Theme from "./vitepress-theme";
import "./style.css";
// https://mysticmind.dev/vitepress-fenced-code-block-syntax-highlighting-quirks-with-net-or-other-languages
import { BUNDLED_LANGUAGES } from "shiki";
import cliLanguageGrammar from "./shiki/cli.tmLanguage.json";

BUNDLED_LANGUAGES.push({
  id: "cli",
  scopeName: "source.cli",
  // @ts-ignore
  grammar: cliLanguageGrammar,
});

export default {
  ...Theme(),
};
