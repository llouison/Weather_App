import React, { Component } from 'react';

class DailyWeather extends Component {

render() {
    const epochTime = new Date(this.props.day.time * 1000);
    return (
        <li>
        <p>{(epochTime).toGMTString().slice(0,3)}</p>
        <p>{this.props.day.summary}</p>
        <p>Max: {this.props.day.temperatureMax}&#8457;/Min: {this.props.day.temperatureMin}&#8457;</p>
        </li>
    )
}
}

export default DailyWeather;