import { API_BASE_URL } from "../config";

export const FETCH_SAVED_RECIPES_SUCCESS = 'FETCH_SAVED_RECIPES_SUCCESS'
export const fetchSavedRecipesSuccess = (data) => {
  return {
    type: FETCH_SAVED_RECIPES_SUCCESS,
    data
  }
}

export const FETCH_SAVED_RECIPES_REQUEST = 'FETCH_SAVED_RECIPES_REQUEST'
export const fetchSavedRecipesRequest = (data) => {
  return {
    type: FETCH_SAVED_RECIPES_REQUEST,
  }
}

export const FETCH_SAVED_RECIPES_ERROR = 'FETCH_SAVED_RECIPES_REQUEST'
export const fetchSavedRecipesError = (error) => {
  return {
    type: FETCH_SAVED_RECIPES_REQUEST,
    error
  }
}

export const SHOW_INSTRUCTIONS = 'SHOW_INSTRUCTIONS'
export const showInstructions = () => {
  return {
    type: SHOW_INSTRUCTIONS,
  }
}

export const fetchSavedRecipes = () => dispatch => {
  const authToken = localStorage.getItem('token')
  return fetch(`${API_BASE_URL}/myrecipes`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }  })
  .then(res => (res.json()))
  .then(data => dispatch(fetchSavedRecipesSuccess(data)))
  .catch(error => console.log(error))
}
