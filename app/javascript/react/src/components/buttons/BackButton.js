import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div className="button">
      <button onClick={browserHistory.goBack}>Back</button>
    </div>
  )
}

export default BackButton;
