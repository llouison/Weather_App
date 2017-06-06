import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputUsernameValue: '',
        inputPasswordValue: '',
        }
        this.handleInputUserNameChange = this.handleInputUserNameChange.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
    }

    handleInputUserNameChange(event) {
        this.setState({
        inputUsernameValue: event.target.value
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
          onSubmit={this.props.handleLoginSubmit}
        >
          <label>Username:
          <input
            type="text"
            value={this.state.inputUserNameValue}
            name='username'
            onChange={this.handleInputUserNameChange}
          /></label><br/>

          <label>Password:
          <input
            type="password"
            value={this.state.inputPasswordValue}
            name='password'
            onChange={this.handleInputPasswordChange}
          /></label><br/>
          
          <button>Login</button>
        </form>
        <Link to='/register'>Register New User</Link>
        </div>
        </div>
      </div>
    );
    }

}

export default Login;