import React from 'react'
import InteractionTile from './tiles/InteractionTile'

const InteractionIndexComponent = props => {

  let user_interactions = props.interactions.map(interaction => {
    return(
      <InteractionTile
        key={interaction.id}
        id={interaction.id}
        interactionType={interaction.interaction_type}
        notes= {interaction.notes}
        dateOfInteraction={interaction.date_of_interaction}
      />
    )
  })


  return(


    <div className="row">
      <div className="col-4">
        <div>
          <h4>I am the InteractionIndexComponent</h4>
          {user_interactions}
        </div>
      </div>
    </div>
  )
}


export default InteractionIndexComponent;
