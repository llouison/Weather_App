import React, { Component } from 'react';

class HourlyWeather extends Component {

render() {
    const epochTime = new Date(this.props.hour.time * 1000);
    return (
        <li>
        <p>{(epochTime).toGMTString().slice(16,22)}</p>
        <p>{this.props.hour.icon}</p>
        <p>{Math.ceil(this.props.hour.temperature)}&#8457;</p>
        </li>
    )
}
}

export default HourlyWeather;