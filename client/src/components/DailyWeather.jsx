import React, { Component } from 'react';

class DailyWeather extends Component {

render() {
    const epochTime = new Date(this.props.day.time * 1000);
    return (
        <li>
        <p>{(epochTime).toGMTString().slice(0,3)}</p>
        <div className={this.props.day.icon}></div>
        <p>Max: {Math.ceil(this.props.day.temperatureMax)}&#8457;/Min: {Math.ceil(this.props.day.temperatureMin)}&#8457;</p>
        </li>
    )
}
}

export default DailyWeather;