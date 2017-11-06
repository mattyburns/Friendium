import React from 'react'
import GraphTile from './tiles/GraphTile'

const StatsComponent = props => {

  return(

    <div className="stats-component">
      <h4>I am the StatsComponent</h4>
      <p>Days since last interaction with friend:{props.daysSinceLastInteraction}</p>
      <GraphTile/>
      <GraphTile/>
      <GraphTile/>
    </div>
  )
}

export default StatsComponent;
