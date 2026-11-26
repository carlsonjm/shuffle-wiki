# Shuffle Wiki

The source of [wiki.shuffleplasma.com](https://wiki.shuffleplasma.com): how to use Shuffle, what
changed in every release, and how the open parts work.

Every page is a Markdown file under `src/content/docs/`. To suggest a change, use "Suggest a
change to this page" at the bottom of any page, or open an issue here.

## Build it

```sh
npm ci
npm run dev      # a live preview at http://localhost:4321
npm run build    # the finished site in dist/
```

## Publish it

```sh
npx wrangler login   # once
npm run deploy
```

How pages are laid out and the rules every page follows are in [AGENTS.md](AGENTS.md).
