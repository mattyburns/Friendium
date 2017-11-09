import React from 'react'
import { Link } from 'react-router';
import face from '../images/face.png'

const FriendTile = props => {
  return(

//figure out mouse over div- change size of div

    <div className="friend-tile" id={props.id}>

      <ul className="button-group radius">
        <li><Link  className="button small" to={`/friends/${props.id}`}>Friendship History</Link>
        </li>
        <li>
          <Link className="button small"  to={`/friends/${props.id}/edit`}>Edit</Link>
        </li>
        <li>
          <Link className="button small" id={props.id} onClick={props.handleDeleteFriend}>Delete</Link>
        </li>
      </ul>

      <p>{props.fullName}</p>
      <p>{props.preferredPronouns}</p>
      <p>Contact info: {props.phoneNumber}, {props.email}</p>




      <img onClick={props.handleFriendshipStats} className="avatar" id={props.id} src={face}></img>

      </div>
  )
}


export default FriendTile;
