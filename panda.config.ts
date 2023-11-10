import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "./src/recipes/button.recipe";
import { tooltipRecipe } from "./src/recipes/tooltip.recipe";

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
    extend: {
      tokens: {
        colors: {
          "gray-100": { value: "#F3F3F3" },
          red: { value: "#E45B52" },
          main: { value: "#1C4A47" },
          secondary: { value: "#ED7846" },
          lightMain: { value: "#E8EDEA" },
          lightSecondary: { value: "#FEE8DF" },
          borders: {
            primary: { value: "#E4E4E7" },
            secondary: { value: "#EF8559" },
          },
          surface: {
            primary: { value: "#FFFFFF" },
            secondary: { value: "#FAFAFB" },
          },
          text: {
            primary: { value: "#24292F" },
            secondary: { value: "#667085" },
            third: { value: "#B2B7C2" },
          },
        },
        sizes: {
          topBar: { value: "60px" },
          paginationItem: { value: "32px" },
          tableRow: { value: "60px" },
          tableHeader: { value: "40px" },
          dropdownSeperator: { value: "16px" },
          groupIcon: { value: "12px" },
        },
        shadows: {
          main: {
            value:
              "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
          },
        },
      },
      recipes: { button: buttonRecipe, tooltip: tooltipRecipe },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
