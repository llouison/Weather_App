import React, { Component } from 'react';

class CurrentWeather extends Component {

render() {
    console.log(this.props.weatherInfo.weatherInfo.icon);
    return (
        <div className='main_container'>
            <h2 className='locationName'>{this.props.weatherInfo.locationInfo}</h2>
            <h3>{Math.ceil(this.props.weatherInfo.weatherInfo.currently.temperature)}&#8457;</h3>
            <h3>{this.props.weatherInfo.weatherInfo.currently.icon}</h3>
            <div className={this.props.weatherInfo.weatherInfo.currently.icon}></div>
        </div>
    )
}
}

export default CurrentWeather;