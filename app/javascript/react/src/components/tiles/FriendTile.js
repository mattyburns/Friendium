import React from 'react'
import { Link } from 'react-router';

const FriendTile = props => {
  return(
    <div className="friend-tile">
      <p>{props.fullName} {props.email}</p>
      <Link to={`/friends/${props.id}`}>Friend Show Page</Link>
      <button id={props.id} onClick={props.handleDeleteFriend}>Delete</button>
      <Link to={`/friends/${props.id}/edit`}>Edit</Link>

    </div>
  )
}


export default FriendTile;
