import React from 'react';

// import './top-nav.css';
import LoginForm from './login-form';
import {Link, Redirect} from 'react-router-dom';
import '../stylesheets/top-nav.css'

export default class TopNav extends React.Component {

  render() {
    return (
      <nav>
        <div className="welcome-bar">
          <ul className="user-controls">            
            <li id="register">
              <p>Want to save recipes? <Link to="/register">Register here</Link>!</p>
            </li>
            <li>
              <LoginForm />
            </li>
          </ul>
          <header>
            <h1>MealCraft</h1>    
          </header>
        </div>
      </nav>
    );
  }
}