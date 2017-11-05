import React from 'react'
import GraphTile from './tiles/GraphTile'

const StatsComponent = props => {


  return(

    <div class="main">
      <h4>I am the StatsComponent</h4>
      <GraphTile/>
      <GraphTile/>
      <GraphTile/>
    </div>


  )
}

export default StatsComponent;
