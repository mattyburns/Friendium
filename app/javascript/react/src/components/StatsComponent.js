import React from 'react'
import GraphTile from './tiles/GraphTile'

const StatsComponent = props => {
  let message;
  if(props.daysSinceLastInteraction == ""){
    message = "You haven't logged any interactions with this friend."
  }else {

  }

  return(

    <div className="stats-component">
      <p>Days since last interaction with friend:{props.daysSinceLastInteraction}</p>
      <div>
        <GraphTile/>
        <GraphTile/>
        <GraphTile/>
      </div>
    </div>
  )
}

export default StatsComponent;
