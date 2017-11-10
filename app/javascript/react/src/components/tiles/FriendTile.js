import React from 'react'
import { Link } from 'react-router';
import face from '../images/face.png'

const FriendTile = props => {
  return(
    <div className="friend-tile" id={props.id}>


      <h3>{props.fullName}</h3>

      <p>{props.preferredPronouns}</p>
      <p>Contact info: {props.phoneNumber}, {props.email}</p>

      <ul className="button-group round">
        <li><Link  className="button small" to={`/friends/${props.id}`}>Friendship History</Link>
        </li>
        <li>
          <Link className="button small"  to={`/friends/${props.id}/edit`}>Edit</Link>
        </li>
        <li>
          <Link className="button small" id={props.id} onClick={props.handleDeleteFriend}>Delete</Link>
        </li>
      </ul>
      <img onClick={props.handleFriendshipStats} className="avatar" id={props.id} src={face}></img>
      </div>
  )
}


export default FriendTile;
