import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/searchRecipes';
// import {getInstructions} from '../actions/getInstructions'
import InstructionsButton from './instructions-button';
import InstructionsList from './instructions-list';
import SaveRecipeButton from './save-recipe-button';

export class Recipe extends React.Component {
 
  render() {
    let instructions;


    // if (this.props.showRecipes) {
    //   const recipe = this.prop.myRecipes((recipe, index) => {
    //     return <li key={index}>
    //   <h2>{recipe.title}</h2>
    //   <img src={recipe.image} alt={recipe.title}></img>
    //   {instructions}
    // </li>
    //   })
    // }

    const recipe = this.props.recipes.map((recipe, index) => {

    console.log('instructions state', this.props.instructions)
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
      saveRecipeButton = <SaveRecipeButton recipe={recipe}/>
    }

    return <li key={index}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title}></img>
      {instructions}
      {saveRecipeButton}
    </li>
    }
  )

  return recipe
  }
}

const mapStateToProps = (state) => {
  console.log('Recipes State:', state.recipes.recipes)
  console.log('loading state:', state.recipes.loading)
  return {
    showRecipes: state.recipes.showRecipes,
    myRecipes: state.recipes.savedRecipes,
    recipes: state.recipes.recipes,
    ingredients: state.recipes.ingredients,
    instructions: state.recipes.instructions,
    loading: state.recipes.loading,
    loggedIn: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Recipe)