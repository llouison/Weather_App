import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {

render() {
return (
    <div className='main_container'>
        <div className='column'>
            <h1 className='logo'>SkyCast Weather</h1>
            <Link to='/login' className='button'>Login</Link>
            <Link to='/register' className='button'>Register</Link>
        </div>
    </div>
);
}

}

export default Index;