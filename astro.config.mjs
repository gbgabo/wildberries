import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import wildberriesTheme from "./shiki-wildberries.json";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        tabler: ["download"],
        "material-symbols": [
          "open-in-new",
          "brush",
          "edit-square-outline",
          "bug-report",
          "stack",
        ],
        bx: ["brush"],
        "heroicons-outline": ["color-swatch"],
        ep: ["arrow-left-bold", "arrow-right-bold"],
        eva: ["diagonal-arrow-right-up-fill"],
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: wildberriesTheme },
  },
});
