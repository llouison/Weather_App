import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {

render() {
return (
    <div className='main_container'>
        <div className='column'>
            <p>Welcome to SkyCast Weather App</p>
            <Link to='/login' className='button'>Login</Link>
            <Link to='/register' className='button'>Register</Link>
            <footer>
                <img className='attribution' src={require('../images/darksky.png')} />
            </footer>
        </div>
    </div>
);
}

}

export default Index;