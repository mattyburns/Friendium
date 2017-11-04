import React, { Component } from 'react'
import FormFieldTile from '../components/tiles/FormFieldTile'
import ErrorsTile from '../components/tiles/ErrorsTile'
import ControllsComponent from '../components/ControllsComponent'

class InteractionEditPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      interactionType: "",
      notes: "",
      dateOfInteraction: "",
      errors: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
    this.handleSubmitInteraction = this.handleSubmitInteraction.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.updateInteraction = this.updateInteraction.bind(this);
  }
// Make this an onClick function of the edit button
  componentDidMount() {
    let friendId = this.props.params.friend_id
    let interactionId = this.props.params.id
    fetch(`/api/v1/friends/${friendId}/interactions/${interactionId}/edit`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ interactionType: body.interaction.interaction_type})
      this.setState({ notes: body.interaction.notes})
      this.setState({ dateOfInteraction: body.interaction.date_of_interaction})
    })
  }

  updateInteraction(payLoad) {
    let friendId = this.props.params.friend_id
    let interactionId = this.props.params.id
    fetch(`/api/v1/friends/${friendId}/interactions/${interactionId}`, {
      method: 'PUT',
      body: JSON.stringify(payLoad)
    })
    // .then(response => response.json())
    // .then(responseData =>{
    //   // this.setState({ interactions: [responseData, ...this.state.interactions] })
    })
  }


  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  validateContent(selection) {
    let errors = []
    if (this.state.interactionType === ""){
      errors.push("Please enter a type of interaction.")
    }
    if (this.state.dateOfInteraction === ""){
      errors.push("Please enter a date to create an interaction.")
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
    this.handleSubmitInteraction(event)
    this.handleClearForm(event)
  }

  handleSubmitInteraction(event){
    event.preventDefault();
    let InteractionPayload = {
      interactionType: this.state.interactionType,
      notes: this.state.notes,
      dateOfInteraction: this.state.dateOfInteraction,
      friendId: this.props.friendId
    }
    this.updateInteraction(InteractionPayload);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      interactionType: "",
      notes: "",
      dateOfInteraction: "",
    })
  }

  render(){
    let handleSubmit = (event) => this.validateSubmit(event)
    let updateInteraction = (event) => this.updateInteraction(event)
    // might not need the above
    let errors;
    if(this.state.errors.length) {
      errors = <ErrorsTile errors={this.state.errors} />
    }

    return(
      <div>
        <form>
          <FormFieldTile
            name="interactionType"
            content={this.state.interactionType}
            labelText="Interaction type:"
            handler={this.handleChange}
          />

          <FormFieldTile
            name="notes"
            content={this.state.notes}
            labelText="Notes:"
            handler={this.handleChange}
          />

          <FormFieldTile
            name="dateOfInteraction"
            content={this.state.dateOfInteraction}
            labelText="Date of interaction:"
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

export default InteractionEditPage;
