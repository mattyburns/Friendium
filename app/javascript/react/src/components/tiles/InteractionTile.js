import React from 'react'
import { Link } from 'react-router'

const InteractionTile = props => {
  return(
    <div className="interaction-tile">
      <p>{props.dateOfInteraction}</p>
      <p>{props.interactionType}</p>
      <p>{props.notes}</p>
      <ul className="button-group round">
        <li>
          <Link className="button" to={`/friends/${props.friendId}/interactions/${props.id}/edit`}>Edit</Link>
        </li>
        <li>
          <Link className="button" id={props.id} name={props.friendId} onClick={props.handleDeleteInteraction}>Delete</Link>
        </li>
      </ul>
    </div>

  )
}


export default InteractionTile;
