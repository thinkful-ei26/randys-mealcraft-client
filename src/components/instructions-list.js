import React from 'react';
import {connect} from 'react-redux';

export class InstructionsList extends React.Component {
  generateInstructions() {
  }

  render() {
    if (this.props.loading) {
      return <div><p>Loading</p></div>
    }

    let recipeIngredients = this.props.instructions[0].steps[0].ingredients.map(ingredient=> {
      return <li>{ingredient.name}</li>
    })

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
    if (this.props.instructions[0].steps[0].length) {
      cookTime = <p>Cook Time: {this.props.instructions[0].steps[0].length.number} {this.props.instructions[0].steps[0].length.unit}</p>
    } else {
      cookTime = ''
    }
    
    return (
      <div className='recipe-instructions'>
        {cookTime}
        {ingredients}
        <p>Instructions: {this.props.instructions[0].steps[0].step}</p>
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