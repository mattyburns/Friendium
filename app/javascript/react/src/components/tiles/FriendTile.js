import React from 'react'
import { Link } from 'react-router';

const FriendTile = props => {
  return(
    <div>
      <p>{props.fullName} {props.email}</p>
      <Link to={`/friends/${props.id}`}>Friend Show Page</Link>
    </div>


        )
}


export default FriendTile;
