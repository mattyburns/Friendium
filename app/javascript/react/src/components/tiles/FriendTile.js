import React from 'react'
import { Link } from 'react-router';
import friend from '../images/friend.png'

const FriendTile = props => {
  return(

//figure out mouse over div- change size of div

    <div className="friend-tile" id={props.id}>
      <p>Friend:{props.preferredName}</p>
      <p>Full name: {props.fullName}</p>
      <p>Contact info: {props.phoneNumber}, {props.email}</p>
      

      <Link id="wanna-be-button" to={`/friends/${props.id}`}>Friend Show Page</Link>
      <button id={props.id} onClick={props.handleDeleteFriend}>Delete</button>
      <Link id="wanna-be-button" to={`/friends/${props.id}/edit`}>Edit</Link>

      <img onClick={props.handleInteractionTimeElapse} className="avatar" id={props.id} src={friend}></img>

      </div>
  )
}


export default FriendTile;
