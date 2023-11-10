import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1",
    paddingX: "4",
    borderWidth: 1,
    borderRadius: "md",
    fontSize: "xs",
    cursor: "pointer",
  },
  variants: {
    visual: {
      primary: { borderColor: "borders.primary", color: "text.primary" },
      secondary: {
        borderColor: "borders.secondary",
        backgroundColor: "secondary",
        color: "surface.primary",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
  },
});
