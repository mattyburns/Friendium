import React, { Component } from 'react'
import StatsComponent from '../components/StatsComponent'
import FriendIndexComponent from '../components/FriendIndexComponent'
import ControllsComponent from '../components/ControllsComponent'
import LandingPageTile from '../components/tiles/LandingPageTile'
import FriendFormContainer from './FriendFormContainer'
import people from '../components/images/people.png'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: [],
      currentUser: [],
      friends: []
    }
    this.addNewFriend = this.addNewFriend.bind(this)
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in',{
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({signedIn: body.signed_in})
      this.setState({currentUser: body.user})
    })
    fetch('/api/v1/friends', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({ friends: body.friends })
      })
  }

  addNewFriend(payLoad) {
  fetch(`/api/v1/friends`, {
    method: 'POST',
    body: JSON.stringify(payLoad)
  })
  .then(response => response.json())
  .then(responseData =>{
    this.setState({ friends: [responseData, ...this.state.friends] })
  })
  }

  handleDeleteFriend(event) {
  let friendId = event.target.id
  fetch(`/api/v1/friends/${friendId}`, {
    method: 'DELETE',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(response => {
    this.setState( {friends: response.friends} )
  })
}

  render() {
    let homePage;
    let addNewFriend = (event) => this.addNewFriend(event)
    let handleDeleteFriend = (event) => this.handleDeleteFriend(event)

    if(this.state.signedIn == true){
      return(
        <div>
          <StatsComponent/>
          <ControllsComponent/>
          <FriendIndexComponent
            friends={this.state.friends}
            handleDeleteFriend ={this.handleDeleteFriend}
          />
          <FriendFormContainer
            currentUser={this.state.currentUser}
            addNewFriend={this.addNewFriend}
          />
        </div>
      )

    }else{
      return(
        <div>
          <LandingPageTile/>
          <div id="header">
            <img src={people} alt="people" />
          </div>
        </div>
      )
    }
  }
}

export default DashboardPage;
