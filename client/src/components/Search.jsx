import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import { Link } from 'react-router-dom'

class Search extends Component {
constructor(props) {
    super(props);
    this.state = {
    username: this.props.username,
    userId: this.props.userId,
    inputSearchValue: '',
    weatherInfo: null,
    }
    this.handleInputSearchChange = this.handleInputSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.displayWeather = this.displayWeather.bind(this);
} 

handleInputSearchChange(event) {
    this.setState({
    inputSearchValue: event.target.value
    });
}

handleSearchSubmit(event){
    event.preventDefault();
    fetch('/api/search', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
      body: JSON.stringify({
        search: event.target.search.value,
        userId: this.state.userId,
      }),
    })
    .then((response) => {
      return response.json()
    })
    .then((responseJson) => {
        console.log(responseJson.data);
        this.updateState(responseJson.data);
    });
  }

  updateState(data){
      console.log('updating state to' , data)
    this.setState((prevState) => {
      return {
        weatherInfo: data,
      }
    })
  }

  displayWeather(){
      console.log(this.state.weatherInfo);
      if (this.state.weatherInfo !== null) {
          return (
            <div className='main_container'>
                <CurrentWeather weatherInfo={this.state.weatherInfo} />
                <ul className='daily'>
                    {this.state.weatherInfo.weatherInfo.hourly.data.map((hour, index) =>{
                    return(
                    <HourlyWeather
                        hour={hour}
                        key={index}
                    />)
                    })}
                </ul>
                <hr/>
                <ul className='daily'>
                    {this.state.weatherInfo.weatherInfo.daily.data.map((day, index) =>{
                    return(
                    <DailyWeather
                        day={day}
                        key={index}
                    />)
                    })}
                </ul>
            </div>
          )
      }
  }

render() {
    return (
        <div className='main_container'>
            <div className='column'>
                <form 
                    className="search_form"
                    onSubmit={this.handleSearchSubmit}
                >
                    <input type='text' name='search' placeholder='enter a location' />
                    <button>Search</button>
                </form>
                <Link to='/history' className='button'>Search History</Link>
                {this.displayWeather()}
                <a href='https://darksky.net/poweredby/'><img className='attribution' src={require('../images/darksky.png')} /></a>
            </div>
        </div>
    )
}
}

export default Search;