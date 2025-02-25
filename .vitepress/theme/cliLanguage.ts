// https://mysticmind.dev/vitepress-fenced-code-block-syntax-highlighting-quirks-with-net-or-other-languages
import { bundledLanguages } from 'shiki'
import cliLanguageGrammar from './shiki/cli.tmLanguage.json'

bundledLanguages['cli'] = {
  id: 'cli',
  scopeName: 'source.cli',
  grammar: cliLanguageGrammar,
}
// bundledLanguages.push()
