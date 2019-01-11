import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {saveRecipe} from '../actions/saveRecipes'


export class SaveRecipeButton extends React.Component {
  
    
    onClick() {
      const currentUser = this.props.currentUser
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
  return {
    currentUser: state.auth.currentUser,
    myRecipes: state.recipes.savedRecipes
  }
};

export default connect(mapStateToProps)(SaveRecipeButton);