import React, { Component } from 'react';
import Index from './components/Index';
import Registration from './components/Registration';
import Login from './components/Login';
import Search from './components/Search';
import History from './components/History';
import './App.css';

// importing react router
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => {
	console.log(props);
	console.log(rest);
	return (
    rest.isLoggedIn ? (
      React.createElement(component, Object.assign(rest, props))
    ) : (
      <Redirect to='/login' />
    )
  )}}/>
)

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      username: null,
      userId: null,
      isLoggedIn: false,
    }
    /* binding all methods in the App class that both reference 'this' and will also be called from the DOM*/
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogoutSubmit = this.handleLogoutSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  /* this method posts the entered values in the registration form to the users table to create a new user then calls the updateState method to set user info in state to the new user */
  handleRegistrationSubmit(event){
    event.preventDefault();
    console.log('registering new user');
    fetch('/auth/register', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: event.target.username.value,
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        password: event.target.password.value,
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      this.updateState(responseJson.data.user.username, responseJson.data.user.id);
    })
  }

   /* this method posts the entered values in the login form to the users table to verify that the user exists and the password is correct then calls the updateState method to set user info in state to that user */
  handleLoginSubmit(event){
    event.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
      console.log(responseJson.user);
      this.updateState(responseJson.user.username, responseJson.user.id);
    });
  }

  /* this method sets user info in state to either a new user from registration or a known user from login */
  updateState(username, id){
    this.setState((prevState) => {
      return {
        username: username,
        userId: id,
        isLoggedIn: true,
      }
    })
  }

  /* this method logs a user out of the current session and changes the app state back to initial state*/
  handleLogoutSubmit(event){
    event.preventDefault();
    fetch('auth/logout')
    this.setState((prevState) => {
      return {
        user: null,
        isLoggedIn: false,
      }
    })
  }


  render() {
    return (
      <Router>
        <div className='app'>
        <header>
            <h1>SkyCast Weather</h1>
          </header>
        <Route exact path='/' 
              component={Index} 
              user={this.state.user} 
              userId={this.state.userId}
              isLoggedIn={this.state.isLoggedIn}/>
        <Route 
              path='/login' 
              render={() => ( this.state.isLoggedIn 
                ? <Redirect push to='/search' /> 
                : <Login handleLoginSubmit={this.handleLoginSubmit} /> 
              )} 
          />
          <Route 
              path='/register' 
              render={() => ( this.state.isLoggedIn 
                ? <Redirect push to='/search' /> 
                : <Registration handleRegistrationSubmit={this.handleRegistrationSubmit} /> 
              )} 
          />
           <PrivateRoute exact path='/search' 
              userId={this.state.userId}
              username={this.state.username}
              isLoggedIn 
              component={Search} 
            />
            <PrivateRoute exact path='/history' 
              userId={this.state.userId}
              username={this.state.username}
              isLoggedIn 
              component={History} 
            />
        </div>
      </Router>
    );
  }
}

export default App;
