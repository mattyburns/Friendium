import React from 'react'
import InfoTile from './tiles/InfoTile'

const FriendInfoComponent = props => {


  return(

  <div className="row">
    <div className="col-2">
      <div>
        <h4>I am the FriendInfoComponent</h4>
        <InfoTile/>
      </div>
    </div>
  </div>


  )
}


export default FriendInfoComponent;
