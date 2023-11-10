/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TooltipVariant {
  component: "content" | "arrow"
}

type TooltipVariantMap = {
  [key in keyof TooltipVariant]: Array<TooltipVariant[key]>
}

export type TooltipVariantProps = {
  [key in keyof TooltipVariant]?: ConditionalValue<TooltipVariant[key]>
}

export interface TooltipRecipe {
  __type: TooltipVariantProps
  (props?: TooltipVariantProps): string
  raw: (props?: TooltipVariantProps) => TooltipVariantProps
  variantMap: TooltipVariantMap
  variantKeys: Array<keyof TooltipVariant>
  splitVariantProps<Props extends TooltipVariantProps>(props: Props): [TooltipVariantProps, Pretty<DistributiveOmit<Props, keyof TooltipVariantProps>>]
}

/** The styles for the Tooltip.Content component */
export declare const tooltip: TooltipRecipe