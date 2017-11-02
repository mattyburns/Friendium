import React, { Component } from 'react'
import StatsComponent from '../components/StatsComponent'
import FriendIndexComponent from '../components/FriendIndexComponent'
import ControllsComponent from '../components/ControllsComponent'
import LandingPageTile from '../components/tiles/LandingPageTile'
import FriendFormContainer from './FriendFormContainer'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: [],
      currentUser: [],
      friends: []
    }
    this.addNewFriend = this.addNewFriend.bind(this)
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
    debugger
    this.setState({ friends: [responseData, ...this.state.friends] })
  })
  }

  render() {
    let homePage;

    if(this.state.signedIn == true){
      return(
        <div>
          <StatsComponent/>
          <ControllsComponent/>
          <FriendIndexComponent friends={this.state.friends}/>
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
        </div>
      )
    }
  }
}

export default DashboardPage;
