import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {deleteRecipe} from '../actions/deleteRecipes'


export class DeleteRecipeButton extends React.Component {
  
    
    onClick() {
      const currentUser = this.props.currentUser
      this.props.dispatch(deleteRecipe(this.props.recipeId, this.props.spoonacularId));
    }

    render() {

      return (
        <button 
          onClick={() => this.onClick()}
        >Delete This Recipe</button>
      );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    myRecipes: state.recipes.savedRecipes
  }
};

export default connect(mapStateToProps)(DeleteRecipeButton);