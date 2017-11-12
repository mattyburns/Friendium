import React, { Component } from 'react'
import InteractionIndexComponent from '../components/InteractionIndexComponent'
import InteractionFormContainer from './InteractionFormContainer'
import ControllsComponent from '../components/ControllsComponent'



class FriendPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      interactions:[]

    }
    this.addInteraction = this.addInteraction.bind(this)
    this.handleDeleteInteraction = this.handleDeleteInteraction.bind(this)
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
    let friendId = this.props.params.id
    fetch(`/api/v1/friends/${friendId}/interactions`, {
      method: 'POST',
      body: JSON.stringify(payLoad)
    })
    .then(response => response.json())
    .then(responseData =>{
      this.setState({ interactions: [responseData, ...this.state.interactions] })
    })
  }

  handleDeleteInteraction(event) {
    let interactionId = event.target.id
    let friendId = event.target.name
    fetch(`/api/v1/friends/${friendId}/interactions/${interactionId}`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(response => {
      this.setState( {interactions: response.interactions} )
    })
  }


  render(){
    let addInteraction = (event) => this.addInteraction(event)
    let handleDeleteInteraction = (event) => this.handleDeleteInteraction(event)
    return(
      <div className="friend-page">
        <div className="small-12 small-centered medium-8 large-4 columns">
          <InteractionIndexComponent
            interactions={this.state.interactions}
            handleDeleteInteraction={this.handleDeleteInteraction}
            friendId={this.props.params.id}
          />
          <div>
            <InteractionFormContainer
              friendId={this.props.params.id}
              addInteraction={this.addInteraction}
            />
          </div>

          <ControllsComponent/>

        </div>
      </div>

    )
  }
}


export default FriendPage;
