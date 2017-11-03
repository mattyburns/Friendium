import React, { Component } from 'react'
import FriendInfoComponent from '../components/FriendInfoComponent'
import InteractionIndexComponent from '../components/InteractionIndexComponent'
import ControllsComponent from '../components/ControllsComponent'
import InteractionFormContainer from './InteractionFormContainer'



class FriendPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      interactions:[]

    }
    this.addInteraction = this.addInteraction.bind(this)
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

  addInteraction(payLoad) {
  fetch(`/api/v1/interactions`, {
    method: 'POST',
    body: JSON.stringify(payLoad)
  })
  .then(response => response.json())
  .then(responseData =>{
    this.setState({ interactions: [responseData, ...this.state.interactions] })
  })
  }


  render(){
    return(
      <div>
        <FriendInfoComponent/>

        <InteractionIndexComponent
          interactions={this.state.interactions}
        />

        <ControllsComponent/>

        <InteractionFormContainer
          friendId={this.props.params.id}
          addInteraction={this.addInteraction}
        />
      </div>

    )
  }
}






export default FriendPage;
