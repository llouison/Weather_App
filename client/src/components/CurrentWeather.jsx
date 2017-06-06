import React, { Component } from 'react';

class CurrentWeather extends Component {

render() {
    console.log(this.props.weatherInfo.weatherInfo.icon);
    return (
        <div className='main_container'>
            <h2 className='locationName'>{this.props.weatherInfo.locationInfo}</h2>
            <h3>{Math.ceil(this.props.weatherInfo.weatherInfo.currently.temperature)}&#8457;</h3>
            <div className={this.props.weatherInfo.weatherInfo.currently.icon} id='main_icon'></div>
            <h4>{this.props.weatherInfo.weatherInfo.currently.summary}</h4>
            <hr/>
        </div>
    )
}
}

export default CurrentWeather;