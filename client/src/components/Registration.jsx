import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputUsernameValue: '',
        inputFirstNameValue: '',
        inputLastNameValue: '',
        inputEmailValue: '',
        inputPasswordValue: '',
        }
        this.handleInputUserNameChange = this.handleInputUserNameChange.bind(this);
        this.handleInputFirstNameChange = this.handleInputFirstNameChange.bind(this);
        this.handleInputLastNameChange = this.handleInputLastNameChange.bind(this);
        this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
    }  

    /* the handle change methods change the input value as the user types */
    handleInputUserNameChange(event) {
        this.setState({
        inputUsernameValue: event.target.value
        });
    }

    handleInputFirstNameChange(event) {
        this.setState({
        inputFirstNameValue: event.target.value
        });
    }

    handleInputLastNameChange(event) {
        this.setState({
        inputLastNameValue: event.target.value
        });
    }

     handleInputEmailChange(event) {
        this.setState({
        inputEmailValue: event.target.value
        });
    }

    handleInputPasswordChange(event) {
        this.setState({
        inputPasswordValue: event.target.value
        });
    }

  render() {
    return (
      <div className='page'>
        <div className='main_container'>
        <div className='form_container'>
        <form
          className="registration_form"
          onSubmit={this.props.handleRegistrationSubmit}
        >
          <label>Username:
          <input
            type="text"
            value={this.state.inputUserNameValue}
            name='username'
            onChange={this.handleInputUserNameChange}
          /></label><br/>

          <label>First Name:
          <input
            type="text"
            value={this.state.inputFirstNameValue}
            name='firstname'
            onChange={this.handleInputFirstNameChange}
          /></label><br/>

          <label>Last Name:
          <input
            type="text"
            value={this.state.inputLastNameValue}
            name='lastname'
            onChange={this.handleInputLastNameChange}
          /></label><br/>

          <label>Email:
          <input
            type="text"
            value={this.state.inputEmailValue}
            name='email'
            onChange={this.handleInputEmailChange}
          /></label><br/>

          <label>Password:
          <input
            type="password"
            value={this.state.inputPasswordValue}
            name='password'
            onChange={this.handleInputPasswordChange}
          /></label><br/>
          <p>By checking this box, you allow SkyCast to track your location to display weather information</p>
          <label>I agree<input type="checkbox" name="permission"/></label>
        
          <button>Register</button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Registration;