import React from 'react'
import { Link } from 'react-router'

const InteractionTile = props => {
  return(
    <div className="interaction-tile">
      <p>{props.dateOfInteraction}</p>
      <p>{props.interactionType}</p>
      <p>{props.notes}</p>
      <Link className="button round" id={props.id} name={props.friendId} onClick={props.handleDeleteInteraction}>Delete</Link>
      <Link className="wanna-be-button button round" to={`/friends/${props.friendId}/interactions/${props.id}/edit`}>Edit</Link>
    </div>

  )
}


export default InteractionTile;
