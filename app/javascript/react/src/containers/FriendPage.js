import React, { Component } from 'react'
import FriendInfoComponent from './components/FriendInfoComponent'
import InteractionIndexComponent from './components/InteractionIndexComponent'
import ControllsComponent from './components/ControllsComponent'



class FriendPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      something: ""
    }
  }



  render(){

    return(
      <div>
        <h1>I am the FriendPage</h1>

        <FriendInfoComponent/>

        <InteractionIndexComponent/>

        <ControllsComponent/>

      </div>

    )
  }
}






export default FriendPage;
