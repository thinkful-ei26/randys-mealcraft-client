import {FETCH_RECIPES_SUCCESS, 
  FETCH_RECIPES_REQUEST,  
  FETCH_RECIPES_ERROR} 
from '../actions/searchRecipes'

import {FETCH_INSTRUCTIONS_SUCCESS, 
  FETCH_INSTRUCTIONS_REQUEST, 
  FETCH_INSTRUCTIONS_ERROR,}
from '../actions/getInstructions'

import {SAVE_RECIPE_SUCCESS, 
  SAVE_RECIPE_REQUEST,  
  SAVE_RECIPE_ERROR} 
from '../actions/saveRecipes'

import {FETCH_SAVED_RECIPES_SUCCESS, 
  FETCH_SAVED_RECIPES_REQUEST,  
  FETCH_SAVED_RECIPES_ERROR} 
from '../actions/showSavedRecipes'

import {DELETE_RECIPE_SUCCESS, 
  DELETE_RECIPE_REQUEST,  
  DELETE_RECIPE_ERROR} 
from '../actions/deleteRecipes'

import {HIDE_INSTRUCTIONS_SUCCESS, 
  HIDE_INSTRUCTIONS_REQUEST, 
  HIDE_INSTRUCTIONS_ERROR}
from '../actions/hideInstructions'

const initialState = {
  recipes: [],
  instructions: [],
  ingredients: [],
  myRecipes: false,
  loading: false,
  error: null,
  savedNotice: '',
}

const recipesReducer = (state=initialState, action) => {
  if (action.type === FETCH_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      myRecipes: false,
    })
  } else if (action.type === FETCH_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
      myRecipes: false,

    })
  } else if (action.type === FETCH_RECIPES_SUCCESS) {
    return Object.assign({}, state, {
      recipes: action.data,
      loading: false,
      error: null,
      myRecipes: false,
    })
  } else if (action.type === FETCH_INSTRUCTIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === FETCH_INSTRUCTIONS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  } else if (action.type === FETCH_INSTRUCTIONS_SUCCESS) {
    //new recipes object for the one recipe to change Object.assign()
      const recipeToUpdate = state.recipes.find(recipe => recipe.id === action.data);
      //updated recipe
      const updatedRecipe = Object.assign(recipeToUpdate, {instructions: action.id}, {savedMessage: ''});
      //new recipes array containing all old recipes + new one
      const newArray = state.recipes.map(recipe=> {
        if (recipe.id === action.data) {
          recipe = updatedRecipe
        }
        return recipe
      })
    // add new array to recipe property
    return Object.assign({}, state, {
      recipes: newArray,
      loading: false,
      error: null,
      myRecipes: false,
    })
  } else if (action.type === HIDE_INSTRUCTIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === HIDE_INSTRUCTIONS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  } else if (action.type === HIDE_INSTRUCTIONS_SUCCESS) {
      //new recipes object the recipe to hide instructions)
      const recipeToUpdate = state.recipes.find(recipe => recipe.id === action.id);
      //set the recipesInstructions to undefined 
      recipeToUpdate.instructions = undefined
      //new recipes array containing all old recipes + new one
      const newArray = state.recipes.map(recipe=> {
        if (recipe.id === action.data) {
          recipe = recipeToUpdate
        }
        return recipe
      })
    // add new array to recipe property
    return Object.assign({}, state, {
      recipes: newArray,
      loading: false,
      error: null,
    })
  } else if (action.type === SAVE_RECIPE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      myRecipes: false,
    })
  } else if (action.type === SAVE_RECIPE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
      myRecipes: false,

    })
  } else if (action.type === SAVE_RECIPE_SUCCESS) {
    const recipeToSave = state.recipes.find(recipe => recipe.id === action.recipeId)
    console.log('Recipe Id to save', recipeToSave)
    const savedRecipe = Object.assign(recipeToSave, {savedMessage: 'Recipe saved! View it later from your "My Recipes" tab.'})
    console.log('New reciped with savedKey', savedRecipe)
    const newArray = state.recipes.map(recipe=> {
      if (recipe.id === action.recipeId) {
        recipe = savedRecipe
      }
      return recipe
    })
    return Object.assign({}, state, {
      recipes: newArray,
      loading: false,
      error: null,
      myRecipes: false,
    })
  } else if (action.type === FETCH_SAVED_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      myRecipes: false,
    })
  } else if (action.type === FETCH_SAVED_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
      myRecipes: false,
    })
  } else if (action.type === FETCH_SAVED_RECIPES_SUCCESS) {
    console.log('Fetched data', action.data)
    return Object.assign({}, state, {
      recipes: action.data,
      myRecipes: true,
      loading: false,
      error: null
    })
  } else if (action.type === DELETE_RECIPE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      myRecipes: true,
    })
  } else if (action.type === DELETE_RECIPE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
      myRecipes: true,
    })
  } else if (action.type === DELETE_RECIPE_SUCCESS) {
      const newRecipes = state.recipes.filter(recipe=>
        recipe.spoonacularId !== action.spoonacularId)
      return Object.assign({}, state, {
        recipes: newRecipes,
        loading: false,
        error: null,
        myRecipes: true,
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