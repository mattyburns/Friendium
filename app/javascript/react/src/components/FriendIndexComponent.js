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
      />
    )
  })
  return(

        <div className="aside-1">
          <h4>I am the FriendIndexComponent</h4>
          {user_friends}
        </div>
  )
}


export default FriendIndexComponent;
