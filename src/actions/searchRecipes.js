// import { API_BASE_URL } from "../config";

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const fetchRecipesSuccess = (data) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    data
  }
}

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST'
export const fetchRecipesRequest = (data) => {
  return {
    type: FETCH_RECIPES_REQUEST,
  }
}

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_REQUEST'
export const fetchRecipesError = (error) => {
  return {
    type: FETCH_RECIPES_REQUEST,
    error
  }
}

export const SHOW_INSTRUCTIONS = 'SHOW_INSTRUCTIONS'
export const showInstructions = () => {
  return {
    type: SHOW_INSTRUCTIONS,
  }
}

export const fetchRecipes = (ingredients) => dispatch => {
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=${ingredients}`, {
    method: 'GET',
    headers: {'X-RapidAPI-Key': '9dd8773296msh1e9332f045d6091p1cf10bjsna6b2dc28c2e9'}
  })
  .then(res => (res.json()))
  .then(data => dispatch(fetchRecipesSuccess(data)))
  .catch(error => console.log(error))
}

