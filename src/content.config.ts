import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

// keywords: other words people use for a page; search reads them, nothing shows them.
export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: z.object({ keywords: z.string().optional() }) }) }),
};
