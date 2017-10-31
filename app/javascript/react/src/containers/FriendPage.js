import React, { Component } from 'react'
import FriendInfoComponent from '../components/FriendInfoComponent'
import InteractionIndexComponent from '../components/InteractionIndexComponent'
import ControllsComponent from '../components/ControllsComponent'



class FriendPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentUser: "",
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
        this.setState({ currentUser: body.user})
      })
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
