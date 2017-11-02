import React, { Component } from 'react'
import FormFieldTile from '../components/tiles/FormFieldTile'

class FriendFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: "",
      preferredName: "",
      preferredPronouns: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: ""
    }
  }


// include in payload "user_id", null: false


// name="name"
// content={this.state.name}
// nameText="Name:"
// handler={this.handleChange}


  handleChange(){

  }



  render(){

    return(
      <div>
        <h1>I am the FriendFormContainer</h1>

        <FormFieldTile
          name="fullName"
          content={this.state.fullName}
          labelText="Full name:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="preferredName"
          content={this.state.preferredName}
          labelText="Preferred name:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="preferredPronouns"
          content={this.state.preferredPronouns}
          labelText="Preferred pronouns:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="email"
          content={this.state.email}
          labelText="Email:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="fullName"
          content={this.state.fullName}
          labelText="Full name:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="fullName"
          content={this.state.fullName}
          labelText="Full name:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="fullName"
          content={this.state.fullName}
          labelText="Full name:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="fullName"
          content={this.state.fullName}
          labelText="Full name:"
          handler={this.handleChange}
        />

        <FormFieldTile
          name="fullName"
          content={this.state.fullName}
          labelText="Full name:"
          handler={this.handleChange}
        />
      </div>
    )
  }
}

export default FriendFormContainer;
