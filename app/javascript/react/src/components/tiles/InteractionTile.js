import React from 'react'
import { Link } from 'react-router'

const InteractionTile = props => {
  return(
    <div>
      <p>{props.dateOfInteraction}</p>
      <p>{props.interactionType}</p>
      <p>{props.notes}</p>
      <button id={props.id} name={props.friendId} onClick={props.handleDeleteInteraction}>Delete</button>
      <Link to={'/'}>Edit</Link>
    </div>


  )
}


export default InteractionTile;
