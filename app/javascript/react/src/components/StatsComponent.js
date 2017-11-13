import React from 'react'

const StatsComponent = props => {
  let message;
  if(props.daysSinceLastInteraction == ""){
    message = "You haven't logged any interactions with this friend."
  }else {

  }

  return(

    <div>
      <p>Days since last interaction with friend:{props.daysSinceLastInteraction}</p>

    </div>
  )
}

export default StatsComponent;
