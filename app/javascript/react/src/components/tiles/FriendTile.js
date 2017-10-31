import React from 'react'

const FriendTile = props => {
  return(
    <div>
      <p>{props.firstName} {props.lastName} {props.email}</p>
    </div>


  )
}


export default FriendTile;
