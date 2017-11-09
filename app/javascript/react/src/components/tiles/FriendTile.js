import React from 'react'
import { Link } from 'react-router';
import face from '../images/face.png'

const FriendTile = props => {
  return(

//figure out mouse over div- change size of div

    <div className="friend-tile" id={props.id}>
      <img onClick={props.handleFriendshipStats} className="avatar" id={props.id} src={face}></img>

      <p>Full name: {props.fullName}</p>
      <p>Pronouns: {props.preferredPronouns}</p>
      <p>Contact info: {props.phoneNumber}, {props.email}</p>

      <Link  className="button round" to={`/friends/${props.id}`}>Friendship History</Link>
      <Link className="button round" id={props.id} onClick={props.handleDeleteFriend}>Delete</Link>
      <Link className="button round"  to={`/friends/${props.id}/edit`}>Edit</Link>


    </div>
  )
}


export default FriendTile;
