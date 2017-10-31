import React, { Component } from 'react'
import StatsComponent from '../components/StatsComponent'
import FriendIndexComponent from '../components/FriendIndexComponent'
import ControllsComponent from '../components/ControllsComponent'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
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
    return(
      <div>
        <h1>I am the DashboardPage</h1>

        <StatsComponent/>

        <FriendIndexComponent
          friends={this.state.friends}
        />

        <ControllsComponent/>

      </div>

    )

  }






}

export default DashboardPage;
