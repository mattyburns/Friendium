import React, { Component } from 'react'
import FormFieldTile from '../components/tiles/FormFieldTile'
import ErrorsTile from '../components/tiles/ErrorsTile'
import ControllsComponent from '../components/ControllsComponent'

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
      zipCode: "",
      errors: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
    this.handleSubmitFriendForm = this.handleSubmitFriendForm.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount() {
    let friendId = this.props.params.id
    debugger
    fetch(`/api/v1/friends/${friendId}/edit`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      debugger
      this.setState({ fullName: body.friend.interaction})

    })
  }

  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  validateContent(selection) {
    let errors = []
    if (this.state.fullName === ""){
      errors.push("Name field can't be blank.")
    }
    if (this.state.zipCode != ""){
      if (!/([0-9])\d{4}/.test(this.state.zipCode)){
        errors.push("Zip code must be 5 digits.")
      }
    }
    this.setState({errors: errors})

    if (errors.length){
      return false;
    } else {
      return true;
    }
  }

  validateSubmit(event){
    event.preventDefault();
    if(this.validateContent() === false) {
      return false;
    }
    this.handleSubmitFriendForm(event)
    this.handleClearForm(event)
  }

  handleSubmitFriendForm(event){
    event.preventDefault();
    let friendPayload = {
      fullName: this.state.fullName,
      preferredName: this.state.preferredName,
      preferredPronouns: this.state.preferredPronouns,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      streetAddress: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      userId: this.props.currentUser.id
    }
    this.props.addNewFriend(friendPayload);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      fullName: "",
      preferredName: "",
      preferredPronouns: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
    })
  }

  render(){
    let handleSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
      errors = <ErrorsTile errors={this.state.errors} />
    }

    return(
      <div>

        <form>
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
            name="phoneNumber"
            content={this.state.phoneNumber}
            labelText="Phone number:"
            handler={this.handleChange}
          />

          <FormFieldTile
            name="streetAddress"
            content={this.state.streetAddress}
            labelText="Street Address:"
            handler={this.handleChange}
          />

          <FormFieldTile
            name="city"
            content={this.state.city}
            labelText="City:"
            handler={this.handleChange}
          />

          <FormFieldTile
            name="state"
            content={this.state.state}
            labelText="State:"
            handler={this.handleChange}
          />

          <FormFieldTile
            name="zipCode"
            content={this.state.zipCode}
            labelText="Zip code:"
            handler={this.handleChange}
          />
          <input type="submit" className="button" value="Save" onClick={handleSubmit} />
        </form>

        <div>
          {errors}
        </div>

        <ControllsComponent/>

      </div>
    )
  }
}

export default FriendFormContainer;
