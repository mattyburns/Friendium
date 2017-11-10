import React from 'react';
import { browserHistory } from 'react-router'
import back from '../images/back.png'

const BackButton = () => {
  return(
    <img src={back} onClick={browserHistory.goBack}></img>
  )
}

export default BackButton;
