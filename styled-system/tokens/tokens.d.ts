/* eslint-disable */
export type Token = "colors.main" | "colors.borders.primary" | "sizes.topBar" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.colorPalette.primary"

export type ColorPalette = "borders"

export type ColorToken = "main" | "borders.primary" | "colorPalette.primary"

export type SizeToken = "topBar" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		colors: ColorToken
		sizes: SizeToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"