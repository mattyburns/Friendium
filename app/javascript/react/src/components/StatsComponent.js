import React from 'react'
import GraphTile from './tiles/GraphTile'

const StatsComponent = props => {

  return(

    <div className="stats-component">
      <p>Days since last interaction with friend:{props.daysSinceLastInteraction}</p>
      <div>
        <GraphTile/>
        <GraphTile/>
      </div>
    </div>
  )
}

export default StatsComponent;
