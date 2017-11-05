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
        handleDeleteInteraction={props.handleDeleteInteraction}
        friendId={props.friendId}
      />
    )
  })
  
  return(

    <div className="interaction-index-component">
      <h4>I am the InteractionIndexComponent</h4>
      {user_interactions}
    </div>

  )
}


export default InteractionIndexComponent;
