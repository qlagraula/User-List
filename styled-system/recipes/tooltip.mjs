import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const tooltipFn = /* @__PURE__ */ createRecipe('tooltip', {}, [])

const tooltipVariantMap = {
  "component": [
    "content",
    "arrow"
  ]
}

const tooltipVariantKeys = Object.keys(tooltipVariantMap)

export const tooltip = /* @__PURE__ */ Object.assign(tooltipFn, {
  __recipe__: true,
  __name__: 'tooltip',
  raw: (props) => props,
  variantKeys: tooltipVariantKeys,
  variantMap: tooltipVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, tooltipVariantKeys)
  },
})