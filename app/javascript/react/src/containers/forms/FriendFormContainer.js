import React, { Component } from 'react'
import FormFieldTile from './tiles/FormFieldTile'

class FriendFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: ""
    }
  }


// include in payload "user_id", null: false








  render(){

    return(
      <div>
        <h1>I am the FriendFormContainer</h1>

        <FormFieldTile
          firstName={this.state.firstName}
        />
        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
      </div>

    )
  }
}


export default FriendFormContainer;
