
export const FETCH_SAVE_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const fetchSaveRecipesSuccess = (data) => {
  return {
    type: FETCH_SAVE_RECIPES_SUCCESS,
    data
  }
}

export const FETCH_SAVE_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST'
export const fetchSaveRecipesRequest = (data) => {
  return {
    type: FETCH_SAVE_RECIPES_REQUEST,
  }
}

export const FETCH_SAVE_RECIPES_ERROR = 'FETCH_RECIPES_REQUEST'
export const fetchSaveRecipesError = (error) => {
  return {
    type: FETCH_SAVE_RECIPES_REQUEST,
    error
  }
}

export const saveRecipe = (recipe) => dispatch => {
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=${ingredients}`, {
    method: 'POST',
    headers: {},
    body: recipe
  })
  .then(res => (res.json()))
  .then(data => dispatch(fetchSaveRecipesSuccess(data)))
  .catch(error => console.log(error))
}
