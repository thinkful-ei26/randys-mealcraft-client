import {FETCH_RECIPES_SUCCESS, 
        FETCH_RECIPES_REQUEST,  
        FETCH_RECIPES_ERROR} 
from '../actions/searchRecipes'

import {FETCH_INSTRUCTIONS_SUCCESS, 
        FETCH_INSTRUCTIONS_REQUEST, 
        FETCH_INSTRUCTIONS_ERROR, 
        GET_RECIPE_ID}
from '../actions/getInstructions'

import {SAVE_RECIPE_SUCCESS, 
  SAVE_RECIPE_REQUEST,  
  SAVE_RECIPE_ERROR} 
from '../actions/saveRecipes'

import {FETCH_SAVED_RECIPES_SUCCESS, 
  FETCH_SAVED_RECIPES_REQUEST,  
  FETCH_SAVED_RECIPES_ERROR} 
from '../actions/showSavedRecipes'


const initialState = {
  recipes: [],
  instructions: [],
  ingredients: [],
  savedRecipes: [],
  showRecipes: false,
  loading: false,
  error: null
}

const recipesReducer = (state=initialState, action) => {
  if (action.type === FETCH_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === FETCH_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_RECIPES_SUCCESS) {
    return Object.assign({}, state, {
      recipes: action.data,
      loading: false,
      error: null
    })
  } else if (action.type === FETCH_INSTRUCTIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === FETCH_INSTRUCTIONS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_INSTRUCTIONS_SUCCESS) {
    console.log('FETCH SUCCESS')
    //new recipes object for the one recipe to change Object.assign()
      const recipeToUpdate = state.recipes.find(recipe => recipe.id === action.data);
      //updated recipe
      const updatedRecipe = Object.assign(recipeToUpdate, {instructions: action.id});
      console.log('rupdatedRecipe:', updatedRecipe)
      //new recipes array containing all old recipes + new one
      const newArray = state.recipes.map(recipe=> {
        if (recipe.id === action.data) {
          recipe = updatedRecipe
        }
        return recipe
      })

      console.log('recipes array:', newArray)
    // add new array to recipe property
    return Object.assign({}, state, {
      recipes: newArray,
      loading: false,
      error: null
    })
  } else if (action.type === GET_RECIPE_ID) {
    return Object.assign({}, state, {
      recipeIds: action.id
    })
  } else if (action.type === SAVE_RECIPE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === SAVE_RECIPE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  } else if (action.type === SAVE_RECIPE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
    })
  } else if (action.type === FETCH_SAVED_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === FETCH_SAVED_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else if (action.type === FETCH_SAVED_RECIPES_SUCCESS) {
    console.log(action.data)
    return Object.assign({}, state, {
      recipes: action.data,
      loading: false,
      error: null
    })
  }
  return state
}

export default recipesReducer


// else if (action.type === FETCH_INSTRUCTIONS_SUCCESS) {
//   return Object.assign({}, state, {
//     loading: false,
//     error: null,
//     showInstructions: action.data
//   })
// }