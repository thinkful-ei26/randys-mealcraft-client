import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {saveRecipe} from '../actions/saveRecipes'


export class SaveRecipeButton extends React.Component {
    onClick() {
      console.log('SAVED NOTICE', this.props.savedNotice)
      const currentUser = this.props.currentUser
      console.log(currentUser._id)
      console.log('save recipe button clicked')
      console.log('saved recipes state', this.props.myRecipes)
      // return this.props.dispatch(fetchRecipeInstructions(this.props.recipeId))
      this.props.dispatch(saveRecipe(this.props.recipe, currentUser.id));
      // let savedNotice = <p>Recipe Saved! View this recipe later from your My Recipes button.</p>
      console.log('SAVED NOTICE AFTER ACTION', this.props.savedNotice)
    }

    render() {
      return (

        <div className='save-button'>
        <button 
          onClick={() => this.onClick()}
        >Save This Recipe</button>    
        <p id='saved-notice'>{this.props.savedNotice}</p>
        </div>
      );
  }
}

const mapStateToProps = state => {
  // console.log('instructions state', state.instructions.instructions)
  return {
    currentUser: state.auth.currentUser,
    myRecipes: state.recipes.savedRecipes,
    savedNotice: state.recipes.savedNotice
  }
};

export default connect(mapStateToProps)(SaveRecipeButton);