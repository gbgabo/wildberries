import { defineConfig } from "astro/config";
import wildberriesTheme from "./shiki-wildberries.json";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://wildberries.style/',

  integrations: [
    icon({
      include: {
        tabler: ["download"],
        "material-symbols": [
          "open-in-new",
          "brush",
          "edit-square-outline",
          "bug-report",
          "stack",
          "info-rounded",
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

  vite: {
    plugins: [tailwindcss()],
  },
});