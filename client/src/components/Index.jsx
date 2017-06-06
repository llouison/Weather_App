import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {

render() {
return (
    <div className='page'>
    <p>Welcome to SkyCast Weather App</p>
    <Link to='/register'>Register New User</Link>
    <Link to='/login'>Login User</Link>
    </div>
);
}

}

export default Index;