import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {fetchRecipes} from '../actions/searchRecipes'
import Input from './input';
import '../stylesheets/search-form.css';

export class SearchForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(fetchRecipes(values.ingredients))
  }

  render() {
    let error;
    let className;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }

    if (this.props.loggedIn !== null) {
      className = 'dashboard-search-form'
    } else {
      className = 'landing-search-form'
    }
    
    return (
      <form 
        className={className}
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values))}>
        {error}
        <label htmlFor='ingredients'>Search recipes by ingredient</label>
        <Field 
          component={Input}
          type="text"
          name="ingredients"
          id="ingredients"
        />

        <button disabled={this.props.pristine || this.props.submitting}>
          Search Recipes
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'search-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('search-form'))
})(SearchForm);
