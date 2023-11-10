import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    padding: "1.5",
    borderWidth: 1,
    borderRadius: "md",
    fontSize: "xs",
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
    cursor: {
      pointer: { cursor: "pointer" },
      default: { cursor: "default" },
    },
    size: {
      fluid: { width: "full", justifyContent: "center" },
      default: {},
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "default",
    cursor: "pointer",
  },
});
