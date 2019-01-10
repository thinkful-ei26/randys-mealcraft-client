import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import '../stylesheets/registration-form.css'
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');


export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className='registration-form'
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values)
          console.log(values)
        }
        )}>
        <label htmlFor='firstName'>First name</label>
        <Field component={Input} type='text' name='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <Field component={Input} type="text" name="lastName" />
        <label htmlFor="username">Username</label>
        <Field 
          component={Input}
          type='text'
          name='username'
          validate={[required, nonEmpty]}
        />
        <label htmlFor='password'>Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
         />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword, isTrimmed]}
        />
        <div className='button-div'>
        <button
          type="submit"
          id='register-button'
          disabled={this.props.pristine || this.props.submitting}>
          Register
        </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);