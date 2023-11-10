import { defineRecipe } from "@pandacss/dev";

export const tooltipRecipe = defineRecipe({
  className: "tooltip",
  description: "The styles for the Tooltip.Content component",
  variants: {
    component: {
      content: {
        backgroundColor: "main",
        paddingX: "3",
        paddingY: "2",
        borderRadius: "lg",
        color: "surface.secondary",
        boxShadow: "main",
      },
      arrow: { fill: "main" },
    },
  },
});
