import React from 'react'
import { Link } from 'react-router'
import trash from '../images/trash.png'
import edit from '../images/edit.png'

const InteractionTile = props => {
  return(
    <div className="interaction-tile">
      <p>Date: {props.dateOfInteraction}</p>
      <p>Type: {props.interactionType}</p>
      <p>Notes: {props.notes}</p>

      <Link  to={`/friends/${props.friendId}/interactions/${props.id}/edit`}>
        <img className="edit interaction" src={edit} ></img>
      </Link>
      
      <Link >
        <img className="trash interaction" onClick={props.handleDeleteInteraction} id={props.id} name={props.friendId} src={trash} ></img>
      </Link>

    </div>

  )
}


export default InteractionTile;
