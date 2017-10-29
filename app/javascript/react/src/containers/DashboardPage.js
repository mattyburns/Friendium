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
