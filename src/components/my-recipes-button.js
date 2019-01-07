import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// import recipesReducer from '../reducers/recipesReducer';
import {fetchRecipeInstructions} from '../actions/getInstructions'
import { fetchSavedRecipes } from '../actions/showSavedRecipes';


export class MyRecipesButton extends React.Component {


    onClick() {
      return (
        <Redirect to="/myrecipes" />,
        console.log('my recipes button clicked'),
        this.props.dispatch(fetchSavedRecipes()),
        console.log(this.props.recipes)
      )
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