import React from 'react'
import InteractionTile from './tiles/InteractionTile'

const InteractionIndexComponent = props => {


  return(


    <div className="row">
      <div className="col-5">
        <div>
          <h4>I am the InteractionIndexComponent</h4>

          <InteractionTile/>
          <InteractionTile/>
          <InteractionTile/>
          <InteractionTile/>
        </div>
      </div>
    </div>

  )
}


export default InteractionIndexComponent;
