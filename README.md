# NativeScript Docs (Beta)

Live version: https://nativescript-docs-beta.pages.dev/

---

This repository holds the source for the **beta** version of our docs. This is a work in progress revamp of the docs structure and content. The theme and general functionality is being built in a different repo, this repo is purely focused on the content.

## Goals

- streamline onboarding to NativeScript
- simplify content to it's core, reword and restructure to make pages relevant and to the point
- make the docs SEO friendly and easy to navigate

## Writing workflow

1. clone the repository
2. run `yarn` and then `yarn dev` - open http://localhost:5173/
3. open the docs folder (or the content folder) in your favorite editor like VSCode - optionally open the `content.code-workspace` for a more focused experience.
4. write! ✍️

## Contributing

### Writing content

Pick a topic/page that nobody is working on yet, create a new branch, add the necessary markdown file and an entry to `content/sidebar.ts`.
Open a draft PR and start working on the page. Once you are ready for feedback, mark the PR as ready for review. During the review process, address any feedback until the content is approved.

If you have any questions, feel free to ask them in your PR and ping @rigor789.

> **Note**: in the current stage of the beta docs, please try to only include a single page + the sidebar config change in a PR to make the review process easier, and reduce possible conflicts. Once we have the majority of the pages complete, we can focus on adding cross-links and references where necessary, and do any additional cleanup passes - at which point this requirement will be dropped.

### Reviewing PRs

If you want to help review pending content, look for PRs that are marked as ready for review, open the deployed preview URL (commented on the PR by the Cloudflare bot), navigate to the page in question and give it a thorough read. If there's anything missing, or something could be simplified note that as Review comments on the PR. Optionally suggest changes, and note anything that's missing, could be improved, should be fact-checked (ie. is the API still the same, does it still work?) etc.
