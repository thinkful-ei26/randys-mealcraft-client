import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/searchRecipes';
// import {getInstructions} from '../actions/getInstructions'
import InstructionsButton from './instructions-button';
import InstructionsList from './instructions-list';
import SaveRecipeButton from './save-recipe-button';
import {fetchSavedRecipes} from '../actions/showSavedRecipes';
import Recipe from './recipe';
import '../stylesheets/recipes-list.css'
import {Link, Redirect} from 'react-router-dom';

export class RecipesList extends React.Component {
  componentDidMount() {
    if (this.props.myRecipes) {
      this.props.dispatch(fetchSavedRecipes());
    }
    this.props.dispatch(fetchRecipes(this.props.ingredients));
    return <Redirect to='/recipes-list'/>
  }

  render() {
    let header = '';
    if (this.props.loggedIn && this.props.myRecipes) {
      header = 'Your Recipes'
    } else if (this.props.recipes.length > 0) {
      header = 'Search Results'
    }


    return (
      <ul className='recipe-list'>
        <div className='search-results'>
          <h2 id='recipe-list-header'>{header}</h2>
        </div>
        <Recipe />  
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    myRecipes: state.recipes.myRecipes,
    ingredients: state.recipes.ingredients,
    instructions: state.recipes.instructions,
    loading: state.recipes.loading,
    loggedIn: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(RecipesList)
