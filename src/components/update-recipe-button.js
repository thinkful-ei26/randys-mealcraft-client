import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {saveRecipe} from '../actions/saveRecipes'


export class SaveRecipeButton extends React.Component {
  
    
    onClick() {
      const currentUser = this.props.currentUser
      console.log(currentUser._id)
      console.log('save recipe button clicked')
      console.log('saved recipes state', this.props.myRecipes)
      // return this.props.dispatch(fetchRecipeInstructions(this.props.recipeId))
      this.props.dispatch(saveRecipe(this.props.recipe, currentUser.id));
    }

    render() {

      return (
        <button 
          onClick={() => this.onClick()}
        >Save This Recipe</button>
      );
  }
}

const mapStateToProps = state => {
  // console.log('instructions state', state.instructions.instructions)
  return {
    currentUser: state.auth.currentUser,
    myRecipes: state.recipes.savedRecipes
  }
};

export default connect(mapStateToProps)(SaveRecipeButton);