import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import SearchForm from './search-form';
import RecipesList from './recipes-list';
// import MyRecipesButton from './my-recipes-button';
import TopNav from './top-nav';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
       <TopNav />
        <div className="home">
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