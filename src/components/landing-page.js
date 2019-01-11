import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SearchForm from './search-form';
import RecipesList from './recipes-list';
import {authSuccess} from '../actions/auth';
import '../stylesheets/landing-page.css'
import TopNav from './top-nav';

class LandingPage extends React.Component {
    // If we are logged in redirect straight to the user's dashboard
    componentDidMount() {
        // const authToken = localStorage.getItem('token')
        this.props.dispatch(authSuccess(this.props.currentUser))
    }

    render() {
        if (this.props.loggedIn !== null) {
            return <Redirect to="/dashboard" />;
        }

        let scrollDown = ''
        if (this.props.recipes.length > 0) {
            scrollDown = 'Scroll down to view results'
        }

        let header = '';
        if (this.props.loggedIn && this.props.myRecipes) {
          header = 'Your Recipes'
        } else if (this.props.loggedIn && this.props.recipes.length === 0) {
          header = 'Search for new recipes or view your saved recipes'
        } else if (this.props.recipes.length > 0) {
          header = `Here are ${this.props.recipes.length} recipes with ${this.props.ingredients}`
        }

        return (
            <div className='landing-page'>
                <div className="wrapper">
                    <TopNav />
                    <div className='landing-content'>
                        <header>
                            <h1>Meal<span id='craft'>Craft</span></h1>    
                        </header>
                        <p id="landing-message">Search, view, and save the internet's most popular recipes</p>
                        <SearchForm loggedIn={this.props.loggedIn}/>
                        <h3>{scrollDown}</h3>
                    </div>
                </div>
                <h2 id='recipe-list-header'>{header}</h2>
                <RecipesList />
            </div>
    
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
    currentUser: state.auth.currentUser,
    myRecipes: state.recipes.myRecipes,
    recipes: state.recipes.recipes,
    ingredients: state.recipes.ingredients

});

export default connect(mapStateToProps)(LandingPage);