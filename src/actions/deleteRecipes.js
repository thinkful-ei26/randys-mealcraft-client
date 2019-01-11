import { API_BASE_URL } from "../config";

export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPES_SUCCESS'
export const deleteRecipeSuccess = (spoonacularId) => {
  return {
    type: DELETE_RECIPE_SUCCESS,
    spoonacularId
  }
}

export const DELETE_RECIPE_REQUEST = 'DELETE_RECIPE_REQUEST'
export const deleteRecipeRequest = () => {
  return {
    type: DELETE_RECIPE_REQUEST,
  }
}

export const DELETE_RECIPE_ERROR = 'DELETE_RECIPES_REQUEST'
export const deleteRecipeError = (error) => {
  return {
    type: DELETE_RECIPE_REQUEST,
    error
  }
}

export const deleteRecipe = (recipeId, spoontacularId) => (dispatch) => {
  const authToken = localStorage.getItem('token')
  return fetch(`${API_BASE_URL}/myrecipes/${recipeId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    // body: recipeId
  })
  .then(res => res.json(res))
  .then(() => {
    dispatch(deleteRecipeSuccess(spoontacularId))
  })
  .catch(error => console.log(error))
}
