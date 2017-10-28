import React, { Component } from 'react'
import StatsComponent from './components/StatsComponent'
import FriendIndexContainer from './components/FriendIndexContainer'
import ControllsComponent from './components/ControllsComponent'


class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: ""
    }
  }


  render() {

    return(
      <div>
        <h1>I am the DashboardPage</h1>

        <StatsComponent/>

        <FriendIndexContainer/>

        <ControllsComponent/>

      </div>

    )

  }






}

export default DashboardPage;
