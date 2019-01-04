import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import SearchForm from './search-form';
import RecipesList from './recipes-list';
import MyRecipesButton from './my-recipes-button';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>

        <MyRecipesButton />

        <div className="home">
          <h2>MealCraft</h2>
          <SearchForm />
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
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));