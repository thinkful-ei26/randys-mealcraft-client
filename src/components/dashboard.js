import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import SearchForm from './search-form';
import RecipesList from './recipes-list';
// import MyRecipesButton from './my-recipes-button';
import TopNav from './top-nav';

export class Dashboard extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    
    let header = '';
    if (this.props.loggedIn && this.props.myRecipes) {
      header = 'Your Recipes'
    } else if (this.props.loggedIn && this.props.recipes.length === 0) {
      header = 'Search for new recipes or view your saved recipes'
    } else if (this.props.recipes.length > 0) {
      header = `${this.props.recipes.length} recipes with ${this.props.ingredients}`
    }

    return (
      <div className="dashboard">
       <TopNav />
        <div className="home">
          <SearchForm />
          <h2 id='recipe-list-header'>{header}</h2>
          <RecipesList />
        </div>
      </div>

    
    
    );
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: currentUser,
        recipes: state.recipes.recipes,
        myRecipes: state.recipes.myRecipes,
        loading: state.recipes.loading,
        loggedIn: state.auth.currentUser,
        ingredients: state.recipes.ingredients,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));