import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/searchRecipes';
// import {getInstructions} from '../actions/getInstructions'
import InstructionsButton from './instructions-button';
import InstructionsList from './instructions-list';
import DeleteRecipeButton from './delete-recipe-button';

export class Recipe extends React.Component {
 
  render() {
    let instructions;
    let userControls = ''

    const recipe = this.props.recipes.map((recipe, index) => {
      if (this.props.myRecipes) {
          userControls = <DeleteRecipeButton recipe={recipe} recipeId={recipe.id} spoonacularId={recipe.spoonacularId}/>
          // <UpdateRecipeButton />
      }
      if ((!recipe.instructions) && this.props.loading === false) {
        instructions = <InstructionsButton recipeId={recipe.id} />
      } else if (this.props.loading === true) {
        instructions = <p>Loading Instructions</p>
      } else {
        instructions = <InstructionsList recipeId={recipe.id} recipe={recipe} instructions={recipe.instructions} />
      }  

      return <li key={index}>
        <img src={recipe.image} alt={recipe.title}></img>
        <h2>{recipe.title}</h2>
        {instructions}
        {/* {saveRecipeButton} */}
        {/* <SaveRecipeButton recipe={recipe}/> */}
        {/* <DeleteRecipeButton recipe={recipe} recipeId={recipe.id} spoonacularId={recipe.spoonacularId}/> */}
        {userControls}
      </li>
    }
  )
  return recipe
  }
}

const mapStateToProps = (state) => {
  // console.log('Recipes State:', state.recipes.recipes)
  // console.log('loading state:', state.recipes.loading)
  return {
    myRecipes: state.recipes.myRecipes,
    recipes: state.recipes.recipes,
    ingredients: state.recipes.ingredients,
    instructions: state.recipes.instructions,
    loading: state.recipes.loading,
    loggedIn: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Recipe)