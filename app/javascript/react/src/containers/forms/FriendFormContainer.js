import React, { Component } from 'react'
import FormFieldTile from './tiles/FormFieldTile'

class FriendFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      something: ""
    }
  }

  render(){

    return(
      <div>
        <h1>I am the FriendFormContainer</h1>

        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
      </div>

    )
  }
}


export default FriendFormContainer;
