import React, { Component } from 'react'
import StatsComponent from '../components/StatsComponent'
import FriendIndexComponent from '../components/FriendIndexComponent'
import ControllsComponent from '../components/ControllsComponent'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: ""
    }
  }

  componentDidMount() {
    fetch('/api/v1/user/is_signed_in.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({ currentUser: body.user })
      })
  }



  render() {

    return(
      <div>
        <h1>I am the DashboardPage</h1>

        <StatsComponent/>

        <FriendIndexComponent/>

        <ControllsComponent/>

      </div>

    )

  }






}

export default DashboardPage;
