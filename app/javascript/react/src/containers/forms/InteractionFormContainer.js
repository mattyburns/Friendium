import React, { Component } from 'react'
import FormFieldTile from './tiles/FormFieldTile'

class InteractionFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      something: ""
    }
  }


  render(){

    return(
      <div>
        <h1>I am the InteractionFormContainer</h1>

        <FormFieldTile />
        <FormFieldTile />
        <FormFieldTile />
      </div>

    )
  }
}


export default InteractionFormContainer;
