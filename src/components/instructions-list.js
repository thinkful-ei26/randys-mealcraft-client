import React from 'react';
import {connect} from 'react-redux';
import SaveRecipeButton from './save-recipe-button';
import HideInstructionsButton from './hide-instructions-button';

export class InstructionsList extends React.Component {

  render() {
    if (this.props.loading) {
      return <div><p>Loading</p></div>
    }

    

    let recipeIngredients = ''
    if (this.props.instructions.length === 0) {
      recipeIngredients = <p>Oops! This recipe's ingredients aren't listed</p>
    } else {
      recipeIngredients = this.props.instructions[0].steps[0].ingredients.map((ingredient, index)=> {
        return <p key={index}>{ingredient.name}</p>
      })
    }

    let ingredients;
    if (recipeIngredients.length === 0) {
      ingredients = ''
    } else {
      ingredients = 
      <ul className='ingredients-list'>
        <span>Ingredients: </span>
        {recipeIngredients}
      </ul>
    }

    let cookTime;
    if (this.props.ingredients === undefined ) {
      cookTime = ''
    } else if (this.props.instructions[0].steps[0].length) {
      cookTime = <p>Cook Time: {this.props.instructions[0].steps[0].length.number} {this.props.instructions[0].steps[0].length.unit}</p>
    } else {
      cookTime = ''
    }

    let instructions;
    if (this.props.instructions.length === 0) {
      instructions = <p>No instructions for this recipe... Save it to add your own!</p>
    } else {
      instructions = <p>Instructions: {this.props.instructions[0].steps[0].step}</p>
    }
    
    let hideInstructionsButton = '';
    if (!this.props.myRecipes) {
      hideInstructionsButton = <HideInstructionsButton recipeId={this.props.recipeId} />
    }

    let saveRecipeButton = '';
    if (this.props.loggedIn !== null && this.props.myRecipes === false) {
      saveRecipeButton = <SaveRecipeButton recipe={this.props.recipe} recipeId={this.props.recipeId}/>
    }

    // console.log(this.props.instructions[0])
    // let savedRecipeMessage = <p>{this.props.instructions[0].savedMessage}</p> 

    return (
      <div className='recipe-instructions'>
        {cookTime}
        {ingredients}
        {instructions}
        {hideInstructionsButton}
        {saveRecipeButton}
        {/* {savedRecipeMessage} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.recipes.loading,
    loggedIn: state.auth.currentUser,
    myRecipes: state.recipes.myRecipes
  }
}

export default connect(mapStateToProps)(InstructionsList)