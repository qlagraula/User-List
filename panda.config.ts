import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  strictTokens: true,

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        main: { value: "#1C4A47" },
        borders: {
          primary: { value: "#E4E4E7" },
        },
      },
      sizes: {
        topBar: { value: "60px" },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
