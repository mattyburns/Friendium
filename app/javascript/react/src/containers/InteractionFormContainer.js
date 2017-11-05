import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import FormFieldTile from '../components/tiles/FormFieldTile';
import ErrorsTile from '../components/tiles/ErrorsTile';
import TypeDropDownTile from '../components/tiles/TypeDropDownTile';
import TextAreaTile from '../components/tiles/TextAreaTile';
import moment from 'moment';

class InteractionFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      interactionType: "",
      notes: "",
      dateOfInteraction: moment() ,
      errors: ""

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.validateContent = this.validateContent.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
    this.handleSubmitInteraction = this.handleSubmitInteraction.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event){
    let field = event.target.name
    let newValue = event.target.value
    this.setState({[field]: newValue})
  }

  handleDateChange(date){
    this.setState({
      dateOfInteraction: date
    });
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
    this.props.addInteraction(InteractionPayload);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      interactionType: "",
      notes: "",
      dateOfInteraction: moment(),
    })
  }

  render(){
    let handleSubmit = (event) => this.validateSubmit(event)
    let errors;
    if(this.state.errors.length) {
      errors = <ErrorsTile errors={this.state.errors} />
    }

    return(
      <div className="interaction-form-container">
        <form>
          <label>Date:</label>
          <DatePicker
            selected={this.state.dateOfInteraction}
            onChange={this.handleDateChange}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />

          <TypeDropDownTile
            name="interactionType"
            content={this.state.interactionType}
            labelText="Interaction type:"
            handler={this.handleChange}
          />

          <label>Notes:</label>
          <TextAreaTile
            name="notes"
            content={this.state.notes}
            handler={this.handleChange}
          />

          <input type="submit" className="button" value="Save" onClick={handleSubmit} />
        </form>

        <div>
          {errors}
        </div>

      </div>
    )
  }
}

export default InteractionFormContainer;
