import React from 'react'
import { Link } from 'react-router';
import heart from '../images/heart.png'
import trash from '../images/trash.png'
import edit from '../images/edit.png'
import hands from '../images/hands.png'

const FriendTile = props => {
  return(
    <div className="friend-tile" id={props.id}>
      <h3>{props.fullName}</h3>

      <ul>
        <li>Phone: {props.phoneNumber}</li>
        <li>Email: {props.email}</li>
        <li>Pronouns: {props.preferredPronouns} </li>
        <li>Address: {props.streetAddress}<br></br> {props.city}  {props.state} {props.zipCode}</li>

      </ul>


      <Link to={`/friends/${props.id}`}>
        <img className="hands" src={hands} ></img>
      </Link>

      <img onClick={props.handleFriendshipStats} className="heart" id={props.id} src={heart}></img>

      <Link to={`/friends/${props.id}/edit`}>
        <img className="edit" src={edit}></img>
      </Link>

      <img className="trash" id={props.id} onClick={props.handleDeleteFriend} src={trash}></img>

    </div>
  )
}


export default FriendTile;
