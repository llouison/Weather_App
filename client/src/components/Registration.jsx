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
          className='registration_form'
          onSubmit={this.props.handleRegistrationSubmit}
        >
          <input
            type='text'
            value={this.state.inputUserNameValue}
            name='username'
            placeholder='Username'
            onChange={this.handleInputUserNameChange}
          /><br/>
          <input
            type='text'
            value={this.state.inputFirstNameValue}
            name='firstname'
            placeholder='First Name'
            onChange={this.handleInputFirstNameChange}
          /><br/>
          <input
            type='text'
            value={this.state.inputLastNameValue}
            name='lastname'
            placeholder='Last Name'
            onChange={this.handleInputLastNameChange}
          /><br/>
          <input
            type='text'
            value={this.state.inputEmailValue}
            name='email'
            placeholder='Email'
            onChange={this.handleInputEmailChange}
          /><br/>
          <input
            type='password'
            value={this.state.inputPasswordValue}
            name='password'
            placeholder='Password'
            onChange={this.handleInputPasswordChange}
          /><br/>
          <p className='permission'>By checking this box, you allow SkyCast to track your location to display weather information</p>
          <input type='checkbox' className='check'/><br/>
          <button>Register</button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Registration;