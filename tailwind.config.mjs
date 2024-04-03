/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--aw-color-primary)",
        secondary: "var(--aw-color-secondary)",
        accent: "var(--aw-color-accent)",
        "dark-purple": "#240041",
        //TODO: Tailwind apparently can't handle classes with /xx opacity syntax
        //currently declaring these colors from their direct color value (but also still storing on CustomStyle global scope)
        "darker-purple": "#19002e",
        "acid-green": "#00ffb7",
        cherry: "#900048",
        pink: "#ff0e82",
        "light-purple": "#c79bff",
        grape: "#752dce",
        "pastel-purple": "#e7d4ff",
        "muted-purple": "#ecdeff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
