import React from 'react'
import { Link } from 'react-router';

const FriendTile = props => {
  return(
    <div className="friend-tile">
      <p>Friend:{props.preferredName}</p>
      <p>Full name: {props.fullName}</p>
      <p>Contact info: {props.phoneNumber}, {props.email}</p>

      <Link to={`/friends/${props.id}`}>Friend Show Page</Link>
      <button id={props.id} onClick={props.handleDeleteFriend}>Delete</button>
      <Link to={`/friends/${props.id}/edit`}>Edit</Link>

    </div>
  )
}


export default FriendTile;
