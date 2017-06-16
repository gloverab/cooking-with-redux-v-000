export function createIngredient(ingredient) {
  return {
    type: "CREATE_INGREDIENT",
    payload: ingredient
  }
}

export function recipeFormAddIngredient(ingredient) {
  return {
    type: "RECIPE_FORM_ADD_INGREDIENT",
    payload: ingredient
  }
}
