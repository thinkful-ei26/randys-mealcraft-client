import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/searchRecipes';
// import {getInstructions} from '../actions/getInstructions'
import InstructionsButton from './instructions-button';
import InstructionsList from './instructions-list';
import SaveRecipeButton from './save-recipe-button';
import '../stylesheets/recipes-list.css'

export class RecipesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes(this.props.ingredients));
  }
  render() {
    let instructions;
    const recipes = this.props.recipes.map((recipe, index) => {

    console.log(this.props.instructions)
    if ((!recipe.instructions) && this.props.loading === false) {
      instructions = <InstructionsButton recipeId={recipe.id} />
    } else if (this.props.loading === true) {
      instructions = <p>Loading Instructions</p>
    } else {
    // if (this.props.recipes.instructions !== null && this.props.loading === false) {
      instructions = <InstructionsList instructions={recipe.instructions}>
        <button>Hide Instructions</button>
      </InstructionsList>
    }  

    let saveRecipeButton = '';
    if (this.props.loggedIn !== null) {
      saveRecipeButton = <SaveRecipeButton />
    }

    return <li key={index}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title}></img>
      {instructions}
      {saveRecipeButton}
    </li>
    }
  )


    return (
      <ul className='recipe-list'>
        {recipes}    
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Recipes State:', state.recipes.recipes)
  console.log('loading state:', state.recipes.loading)
  return {
    recipes: state.recipes.recipes,
    ingredients: state.recipes.ingredients,
    instructions: state.recipes.instructions,
    loading: state.recipes.loading,
    loggedIn: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(RecipesList)
