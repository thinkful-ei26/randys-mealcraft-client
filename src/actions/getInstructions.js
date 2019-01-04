// import { API_BASE_URL } from "../config";

export const GET_RECIPE_ID = 'GET_INSTRUCTIONS'
export const getRecipeId = (id) => {
  return {
    type: GET_RECIPE_ID,
    id
  }
}

export const FETCH_INSTRUCTIONS_SUCCESS = 'FETCH_INSTRUCTIONS_SUCCESS'
export const fetchInstructionsSuccess = (id, data) => {
  return {
    type: FETCH_INSTRUCTIONS_SUCCESS,
    id,
    data
  }
}

export const FETCH_INSTRUCTIONS_REQUEST = 'FETCH_INSTRUCTIONS_REQUEST'
export const fetchInstructionsRequest = (data) => {
  return {
    type: FETCH_INSTRUCTIONS_REQUEST,
  }
}

export const FETCH_INSTRUCTIONS_ERROR = 'FETCH_INSTRUCTIONS_REQUEST'
export const fetchInstructionsError = (error) => {
  return {
    type: FETCH_INSTRUCTIONS_REQUEST,
    error
  }
}

export const fetchRecipeInstructions = (id) => dispatch => {
  dispatch(fetchInstructionsRequest())
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/analyzedInstructions?stepBreakdown=false`, {
    method: 'GET',
    headers: {'X-RapidAPI-Key': '9dd8773296msh1e9332f045d6091p1cf10bjsna6b2dc28c2e9'}
  })
  .then(res => (res.json()))
  .then(data => dispatch(fetchInstructionsSuccess(data, id)))

  .catch(error => dispatch(fetchInstructionsError(error)))
}