# Shuffle Wiki — working contract

The wiki at wiki.shuffleplasma.com: how to use Shuffle, what changed in every release, and how
the open parts work. Built with Astro Starlight; published as static files on Cloudflare.

## How it is laid out

Three levels, so it holds hundreds of pages without a long list anywhere:

- **Areas** are the tabs along the top: a folder under `src/content/docs/` with an `index.mdx`
  landing page, listed once in `astro.config.mjs` (`starlightSidebarTopics`) and on the front
  page (`src/components/Home.astro`).
- **Groups** fold open in the left column, one area at a time: a folder inside an area, listed
  once in `astro.config.mjs` and in the area's `index.mdx`.
- **Pages** are Markdown files in a group. A new page lists itself; `sidebar.order` sets its place.

A page with no `##` sections sets `tableOfContents: false`, so no empty "On this page" bar shows.

Every page has a `title` (the question or task, as a person would put it), a `description` (the
answer in one line, shown under the title) and `keywords` (other words people use for it).

## Writing rules

These come from the product owner and are not open to reinterpretation.

1. **Every direction is a real way to do it, checked against Shuffle.** Before a step goes in,
   confirm it in the product: keys in `shuffle/docs/INPUT.md`, Settings names in
   `shuffle/settings/qml`, Helper names in split-rock. Never "its icon is in the dock": pins can be
   removed. Open things with a key or from Search.
2. **The key is Meta.** Never "Windows" or "Super". Write it as
   `<kbd><a href="/start/first-steps/meta-key/">Meta</a></kbd>` so it links to the Meta key page.
   Other keys are plain `<kbd>Ctrl</kbd>`.
3. **Start from what is on the screen**, for someone who has never seen this desktop. One step
   at a time; say where to click and what it is called; nothing about how it works.
4. **Apps come from Discover**, step by step. Never "type the app's name into Search to install it".
5. **Lines to paste go in a Konsole block**, one line per block:
   ```` ```sh frame="terminal" title="Konsole" ````. Link to the Konsole page the first time.
6. Plain, full sentences. No fragment headings. Words on the screen in **bold**.
7. Proposed or unreleased things (licensing, inputOS) stay out until the product owner says they
   can be public.
8. Releases list only what reached buyers, in buyers' words, with no repository links, pull
   request numbers or people's names.

## Who edits

Claude threads write pages and open a pull request; the product owner approves. Readers suggest
changes with "Suggest a change to this page", which opens the file on GitHub. There is no open
editing and no human support.

## Checks

`npm ci && npm run build` must finish with no errors. Look at changed pages with
`npx astro preview` in light and dark and at phone width.

## Publishing

Merging into `main` publishes. Cloudflare Workers Builds watches this repository, runs
`npm run build`, then `npx wrangler deploy`, and the change is live at wiki.shuffleplasma.com
within a minute or two (product owner's choice, 26 Nov 2026). Nothing to run by hand;
`npm run deploy` does the same from a computer if a publish ever has to be forced.
