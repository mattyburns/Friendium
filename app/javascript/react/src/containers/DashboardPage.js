import React, { Component } from 'react'
import StatsComponent from '../components/StatsComponent'
import FriendIndexComponent from '../components/FriendIndexComponent'
import ControllsComponent from '../components/ControllsComponent'
import SignInMessageTile from '../components/tiles/SignInMessageTile'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: [],
      currentUser: [],
      friends: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in.json',{
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

  render() {
    let homePage;
    if(this.state.signedIn == true){
      homePage = [
        <StatsComponent/>,
        <ControllsComponent/>,
        <FriendIndexComponent friends={this.state.friends}/>
       ];
    }else{
      homePage = <SignInMessageTile/>
    }

    return(
      <div>
        <h1>I am the DashboardPage</h1>

        {homePage}

      </div>

    )

  }






}

export default DashboardPage;
