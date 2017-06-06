import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class History extends Component {
constructor(props) {
super(props);
this.state = {
    username: this.props.username,
    userId: this.props.userId,
    usersSearch: [],
}
this.getUsersHistory = this.getUsersHistory.bind(this);
this.updateUsersSearch = this.updateUsersSearch.bind(this);
this.emptyList = this.emptyList.bind(this);
this.renderSearchList = this.renderSearchList.bind(this);
}

componentDidMount(){
    this.getUsersHistory();
}

getUsersHistory(){
fetch(`/api/users/${this.props.userId}`)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
          console.log(responseJson);
        this.updateUsersSearch(responseJson.data.usersSearch);
    });
  }

   updateUsersSearch(Search){
     this.setState((prevState) => {
      return {
        usersSearch: Search,
      }
	  })
  }

   emptyList(){
    return(
      <div>
        <p>{this.props.username}, there is nothing in your search history</p>
        <Link to='/search'>Start A Search</Link>
      </div>
    )
  }

  renderSearchList(){
    return(
        <div className='page'>
            {this.state.usersSearch.map((query, index) => {
            return (
              <li 
                key={index}
              ><p>{query.search_input}</p>
              </li>
            )
          })}
          <Link to='/search'>Back to Search</Link>
        </div>
    )
  }


render() {
    if (this.state.usersSearch.length === 0) {
      return this.emptyList();
    } else {
      return this.renderSearchList();
    }
}

}

export default History;