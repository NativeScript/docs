# NativeScript Docs

Live version: https://docs.nativescript.org/

---

This repository holds the source for the **latest** version of our docs.

## Goals

- streamline onboarding to NativeScript
- simplify content to its core, reword and restructure to make pages relevant and to-the-point
- make the docs SEO-friendly and easy to navigate

## Writing workflow

1. clone the repository
2. run `yarn` to install the dependencies
3. run `yarn dev`, then visit http://localhost:5173/
4. open the repository root (or the `content` folder) in your favorite editor like VSCode.
5. write! ✍️

> **Tip** In case of VSCode you can optionally open the `docs.code-workspace` for a more focused experience either from the terminal with `code docs.code-workspace` or from the **File > Open Workspace from file...** menu and selecting the `docs.code-workspace`.

## Contributing

### Writing content

Pick a topic/page that nobody is working on yet, create a new branch, add the necessary markdown file and an entry to `content/sidebar.ts`.
Open a draft PR and start working on the page. Once you are ready for feedback, mark the PR as ready for review. During the review process, address any feedback until the content is approved.

If you have any questions, feel free to ask them in your PR.

### Reviewing PRs

If you want to help review pending content, look for PRs that are marked as ready for review, open the deployed preview URL (commented on the PR by the Cloudflare bot), navigate to the page in question and give it a thorough read. If there's anything missing, or something could be simplified note that as Review comments on the PR. Optionally suggest changes, and note anything that's missing, could be improved, should be fact-checked (ie. is the API still the same, does it still work?) etc.
