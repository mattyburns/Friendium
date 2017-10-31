import React from 'react'
import FriendTile from './tiles/FriendTile'

const FriendIndexComponent = props => {

  let user_friends = props.friends.map(friend => {
    return(
      <FriendTile
        key={friend.id}
        firstName={friend.first_name}
        lastName={friend.last_name}
        email={friend.email}
        phoneNumber={friend.phone_number}
        streetAddress={friend.street_address}
        city={friend.city}
        state={friend.state}
        zipCode={friend.zip_code}
      />
    )
  })
  return(
    <div>
      <h4>I am the FriendIndexComponent</h4>
      {user_friends}
    </div>




  )
}


export default FriendIndexComponent;
