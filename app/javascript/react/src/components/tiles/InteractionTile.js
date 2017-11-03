import React from 'react'

const InteractionTile = props => {



  return(
    <div>
      <p>{props.dateOfInteraction}</p>
      <p>{props.interactionType}</p>
      <p>{props.notes}</p>
    </div>


  )
}


export default InteractionTile;
