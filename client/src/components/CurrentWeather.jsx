import React, { Component } from 'react';

class CurrentWeather extends Component {

render() {
    return (
        <div>
            <h2>{this.props.weatherInfo.locationInfo}</h2>
            <h3>{this.props.weatherInfo.weatherInfo.currently.temperature}&#8457;</h3>
            <h3>{this.props.weatherInfo.weatherInfo.currently.summary}</h3>
        </div>
    )
}
}

export default CurrentWeather;