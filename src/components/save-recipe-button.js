import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {saveRecipe} from '../actions/saveRecipes'


export class SaveRecipeButton extends React.Component {
    onClick() {
      const currentUser = this.props.currentUser
      this.props.dispatch(saveRecipe(this.props.recipe, currentUser.id, this.props.recipeId));
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
  return {
    currentUser: state.auth.currentUser,
    savedNotice: state.recipes.savedNotice
  }
};

export default connect(mapStateToProps)(SaveRecipeButton);