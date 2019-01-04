import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {fetchRecipeInstructions} from '../actions/getInstructions'


export class MyRecipesButton extends React.Component {
    onClick() {
      console.log('my recipes button clicked')
      // return this.props.dispatch(fetchRecipeInstructions(this.props.recipeId))
    }

    render() {

      return (
           <button 
              onClick={() => this.onClick()}
           >My Recipes</button>
      );
  }
}

const mapStateToProps = state => {
  // console.log('instructions state', state.instructions.instructions)
  return {
    recipes: state.recipes.recipes
  }
};

export default connect(mapStateToProps)(MyRecipesButton);