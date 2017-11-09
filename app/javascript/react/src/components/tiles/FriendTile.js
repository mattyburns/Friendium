import React from 'react'
import { Link } from 'react-router';
import friend from '../images/friend.png'

const FriendTile = props => {
  return(

//figure out mouse over div- change size of div

    <div className="friend-tile" id={props.id}>
      <img onClick={props.handleFriendshipStats} className="avatar" id={props.id} src={friend}></img>

      <p>Full name: {props.fullName}</p>
      <p>Pronouns: {props.preferredPronouns}</p>
      <p>Contact info: {props.phoneNumber}, {props.email}</p>

      <Link  className="button round" id="wanna-be-button" to={`/friends/${props.id}`}>Friendship History</Link>
        <button className="button round" id={props.id} onClick={props.handleDeleteFriend}>Delete</button>
        <Link className="button round" id="wanna-be-button" to={`/friends/${props.id}/edit`}>Edit</Link>


    </div>
  )
}


export default FriendTile;
