import React from 'react'
import GraphTile from './tiles/GraphTile'

const StatsComponent = props => {


  return(

<div class="row">
  <div class="col-12">
    <div>
      <h4>I am the StatsComponent</h4>
      <GraphTile/>
      <GraphTile/>
      <GraphTile/>
    </div>
  </div>
</div>


  )
}

export default StatsComponent;
