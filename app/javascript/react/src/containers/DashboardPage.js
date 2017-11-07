import React, { Component } from 'react'
import FriendIndexComponent from '../components/FriendIndexComponent'
import LandingPageTile from '../components/tiles/LandingPageTile'
import FriendFormContainer from './FriendFormContainer'
import StatsComponent from '../components/StatsComponent'
import people from '../components/images/people.png'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: [],
      currentUser: [],
      friends: [],
      daysSinceLastInteraction:""
    }
    this.addNewFriend = this.addNewFriend.bind(this)
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this)
    this.handleInteractionTimeElapse = this.handleInteractionTimeElapse.bind(this)
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

  handleInteractionTimeElapse(event){
    let friendId = event.target.id
    fetch(`/api/v1/friends/${friendId}`,{
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({daysSinceLastInteraction: body.days_since_last_interaction})
    })
  }

  render() {
    let homePage;
    let addNewFriend = (event) => this.addNewFriend(event)
    let handleDeleteFriend = (event) => this.handleDeleteFriend(event)
    let handleInteractionTimeElapse = (event) => this.handleInteractionTimeElapse(event)

    if(this.state.signedIn == true){
      return(
        <div className="dashboard-page">
          <StatsComponent daysSinceLastInteraction ={this.state.daysSinceLastInteraction}/>
          <FriendFormContainer
            currentUser={this.state.currentUser}
            addNewFriend={this.addNewFriend}
          />
          <FriendIndexComponent
            friends={this.state.friends}
            handleDeleteFriend ={this.handleDeleteFriend}
            handleInteractionTimeElapse ={this.handleInteractionTimeElapse}
          />
        </div>
      )

    }else{
      return(
        <div className="landing-page">
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
