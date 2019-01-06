import React from 'react';
// import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import '../stylesheets/app.css'

// import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={RegistrationPage} />
      </div>
    )
  }
}