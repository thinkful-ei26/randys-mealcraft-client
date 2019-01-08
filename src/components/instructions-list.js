import React from 'react';
import {connect} from 'react-redux';

export class InstructionsList extends React.Component {

  render() {
    if (this.props.loading) {
      return <div><p>Loading</p></div>
    }

    let recipeIngredients = ''
    if (this.props.instructions.length === 0) {
      recipeIngredients = <p>Oops! This recipe's ingredients aren't listed</p>
    } else {
      recipeIngredients = this.props.instructions[0].steps[0].ingredients.map(ingredient=> {
        return <li key={ingredient.name}>{ingredient.name}</li>
      })
    }

    let ingredients;
    if (recipeIngredients.length === 0) {
      ingredients = ''
    } else {
      ingredients = 
      <ul className='ingredients-list'>
        Ingredients: 
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
    
    return (
      <div className='recipe-instructions'>
        {cookTime}
        {ingredients}
        {instructions}
        <button>Hide Instructions</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.recipes.loading
  }
}

export default connect(mapStateToProps)(InstructionsList)