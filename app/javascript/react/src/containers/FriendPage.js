import React, { Component } from 'react'
import FriendInfoComponent from '../components/FriendInfoComponent'
import InteractionIndexComponent from '../components/InteractionIndexComponent'
import ControllsComponent from '../components/ControllsComponent'



class FriendPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      interactions:[]
    }
  }

  componentDidMount() {
    let friendId = this.props.params.id
    fetch(`/api/v1/friends/${friendId}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({ interactions: body.interactions})
      })
  }


  render(){
    return(
      <div>
        <div>
          <div>
            <FriendInfoComponent/>

            <InteractionIndexComponent/>

            <ControllsComponent/>
          </div>
        </div>
      </div>

    )
  }
}






export default FriendPage;
