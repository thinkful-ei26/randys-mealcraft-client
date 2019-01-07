import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/searchRecipes';
// import {getInstructions} from '../actions/getInstructions'
import InstructionsButton from './instructions-button';
import InstructionsList from './instructions-list';
import SaveRecipeButton from './save-recipe-button';
import {fetchSavedRecipes} from '../actions/showSavedRecipes';
import Recipe from './recipe';
import '../stylesheets/recipes-list.css'

export class RecipesList extends React.Component {
  componentDidMount() {
    if (this.props.showRecipes) {
      this.props.dispatch(fetchSavedRecipes());

    }
    this.props.dispatch(fetchRecipes(this.props.ingredients));
  }

  render() {
    return (
      <ul className='recipe-list'>
        <Recipe />  
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Recipes State:', state.recipes.recipes)
  console.log('loading state:', state.recipes.loading)
  return {
    recipes: state.recipes.recipes,
    showRecipes: state.recipes.showRecipes,
    ingredients: state.recipes.ingredients,
    instructions: state.recipes.instructions,
    loading: state.recipes.loading,
    loggedIn: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(RecipesList)
