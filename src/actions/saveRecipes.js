import { API_BASE_URL } from "../config";

export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPES_SUCCESS'
export const SaveRecipeSuccess = (data) => {
  return {
    type: SAVE_RECIPE_SUCCESS,
    data
  }
}

export const SAVE_RECIPE_REQUEST = 'SAVE_RECIPE_REQUEST'
export const SaveRecipeRequest = (data) => {
  return {
    type: SAVE_RECIPE_REQUEST,
  }
}

export const SAVE_RECIPE_ERROR = 'SAVE_RECIPES_ERROR'
export const SaveRecipeError = (error) => {
  return {
    type: SAVE_RECIPE_REQUEST,
    error
  }
}

export const saveRecipe = (recipe) => (dispatch) => {
  const authToken = localStorage.getItem('token')
  console.log(this)
  return fetch(`${API_BASE_URL}/myrecipes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(recipe)
  })
  .then(res => (res.json()))
  .then(data => dispatch(SaveRecipeSuccess(data)))
  .catch(error => console.log(error))
}
