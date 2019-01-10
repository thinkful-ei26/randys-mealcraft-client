import React from 'react';
import {connect} from 'react-redux';

import LoginForm from './login-form';
import {Link, Redirect} from 'react-router-dom';
import '../stylesheets/top-nav.css'
import MyRecipesButton from './my-recipes-button';
import {clearAuth} from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class TopNav extends React.Component {
  onLogout() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let navbar =''
    if (this.props.loggedIn === null) {
      navbar = 
      <nav>
        <ul className="user-controls">            
          <li id="register">
            <p>Want to save recipes? <span id='register'><Link to="/register">Register here!</Link></span></p>
          </li>
          <li>
            <LoginForm />
          </li>
        </ul>
      </nav>
    } else {
      navbar = 
        <nav>
          <div role='banner' className='dashboard-banner'>
            <ul className="user-controls">            
              <li>
                <p>Meal<span id='craft'>Craft</span></p>
                <p>Weclome back, {this.props.currentUser}!</p>
              </li>
              <li>
                <MyRecipesButton />
                <br></br>
                <button onClick={() => this.onLogout()}>Log out</button>
              </li>
            </ul>  
          </div>
        </nav>
    }

    return (
      navbar
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(TopNav)