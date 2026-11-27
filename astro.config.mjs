// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

// The wiki has three levels: areas (the tabs along the top), groups (folding lists in the left
// column, one area at a time) and pages. An area is a folder under src/content/docs, a group is a
// folder inside it, and a page is a Markdown file in a group. Add a group here once; its pages
// list themselves.
const group = (label, directory) => ({ label, collapsed: true, items: [{ autogenerate: { directory } }] });

export default defineConfig({
  site: "https://wiki.shuffleplasma.com",
  integrations: [
    starlight({
      title: "Shuffle Wiki",
      description: "How to use Shuffle, what changed in every release, and how the open parts work.",
      logo: { dark: "./src/assets/mark-dark.svg", light: "./src/assets/mark-light.svg" },
      favicon: "/favicon.svg",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/carlsonjm/shuffle-wiki" }],
      editLink: { baseUrl: "https://github.com/carlsonjm/shuffle-wiki/edit/main/" },
      lastUpdated: true,
      customCss: ["@fontsource-variable/manrope", "./src/styles/shuffle.css"],
      components: { Header: "./src/components/Header.astro", PageTitle: "./src/components/PageTitle.astro" },
      expressiveCode: { themes: ["github-dark"], styleOverrides: { borderRadius: "8px" } },
      plugins: [
        starlightSidebarTopics([
          { id: "start", label: "Get started", link: "/start/", items: [group("First steps", "start/first-steps")] },
          {
            id: "shuffle", label: "Shuffle", link: "/shuffle/",
            items: [
              group("Cards and workspaces", "shuffle/cards-and-workspaces"),
              group("Search", "shuffle/search"),
              group("Files", "shuffle/files"),
              group("Around the screen", "shuffle/around-the-screen"),
              group("Keys and touch", "shuffle/keys-and-touch"),
              group("Notes", "shuffle/notes"),
              group("Helpers", "shuffle/helpers"),
              group("Shuffle Settings", "shuffle/settings"),
              group("When something goes wrong", "shuffle/when-something-goes-wrong"),
            ],
          },
          {
            id: "apps", label: "Apps and devices", link: "/apps/",
            items: [
              group("Getting apps", "apps/getting-apps"),
              group("Games", "apps/games"),
              group("Everyday apps", "apps/everyday-apps"),
              group("Devices and files", "apps/devices-and-files"),
            ],
          },
          { id: "releases", label: "Releases", link: "/releases/", items: [group("2026", "releases/2026")] },
          { id: "open", label: "Open source", link: "/open/", items: [group("The open parts", "open/the-open-parts")] },
        ], { exclude: ["/"] }),
      ],
    }),
  ],
});
