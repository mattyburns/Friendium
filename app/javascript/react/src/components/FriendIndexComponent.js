import React from 'react'
import FriendTile from './tiles/FriendTile'

const FriendIndexComponent = props => {

  let user_friends = props.friends.map(friend => {
    return(
      <FriendTile
        key={friend.id}
        id={friend.id}
        fullName={friend.full_name}
        preferredName = {friend.preferred_name}
        preferredPronouns ={friend.preferred_pronouns}
        email={friend.email}
        phoneNumber={friend.phone_number}
        streetAddress={friend.street_address}
        city={friend.city}
        state={friend.state}
        zipCode={friend.zip_code}
        handleDeleteFriend={props.handleDeleteFriend}
        handleFriendshipStats={props.handleFriendshipStats}
      />
    )
  })
  return(

    <div className="friend-index-component">
      {user_friends}
    </div>
  )
}


export default FriendIndexComponent;
