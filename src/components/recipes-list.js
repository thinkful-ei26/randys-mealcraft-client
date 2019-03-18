import React from 'react';
import {connect} from 'react-redux';
import {fetchRecipes} from '../actions/searchRecipes';
import {fetchSavedRecipes} from '../actions/showSavedRecipes';
import Recipe from './recipe';
import '../stylesheets/recipes-list.css'
import {Redirect} from 'react-router-dom';

export class RecipesList extends React.Component {
  componentDidMount() {
    if (this.props.myRecipes) {
      this.props.dispatch(fetchSavedRecipes());
    }
    this.props.dispatch(fetchRecipes(this.props.ingredients));
    console.log('hello')
    return <Redirect to='/recipes-list'/>
  }

  render() {
    return (
      <ul className='recipe-list'>
        <div className='search-results'>
        </div>
        <Recipe />  
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(this.state.recipes)
  return {
    ingredients: state.ingredients,
    recipes: state.recipes.recipes
  }
}

export default connect(mapStateToProps)(RecipesList)
