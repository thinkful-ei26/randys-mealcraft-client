import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// import recipesReducer from '../reducers/recipesReducer';
import {fetchRecipeInstructions} from '../actions/getInstructions'
import { fetchSavedRecipes } from '../actions/showSavedRecipes';
import '../stylesheets/my-recipes-button.css'

export class MyRecipesButton extends React.Component {
  onClick() {
    return (
      <Redirect to="/myrecipes" />,
      this.props.dispatch(fetchSavedRecipes())
    )
  }

  render() {
    return (
      <button 
        onClick={() => this.onClick()}
      id="my-recipes-button">My Recipes</button>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    myRecipes: state.recipes.myRecipes,
  }
};

export default connect(mapStateToProps)(MyRecipesButton);