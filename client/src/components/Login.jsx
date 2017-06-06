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
        <form
          className="registration_form"
          onSubmit={this.props.handleLoginSubmit}
        >
          <input
            type="text"
            value={this.state.inputUserNameValue}
            name='username'
            placeholder='Username'
            onChange={this.handleInputUserNameChange}
          /><br/>
          <input
            type="password"
            value={this.state.inputPasswordValue}
            name='password'
            placeholder='Password'
            onChange={this.handleInputPasswordChange}
          /><br/>
          <button>Login</button>
        </form>
        <p>or</p>
        <Link to='/register' className='button'>Register New User</Link>
        </div>
      </div>
    );
    }

}

export default Login;