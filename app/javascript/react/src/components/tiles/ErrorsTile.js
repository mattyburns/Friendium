import React from 'react'

const ErrorsTile = props => {
  let formErrors = (props.errors).map(error => {
    return(
      <li key={error}>{error}</li>
    )
  })

  return(
    <ul>
      {formErrors}
    </ul>
  )
}


export default ErrorsTile;
