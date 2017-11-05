import React from 'react';

const TextAreaTile = props => {
  return(

<div>
  <textarea
    rows="10"
    cols="50"
    id={props.name}
    value={props.content}
    name={props.name}
    onChange={props.handler} />
</div>

  )

}

export default TextAreaTile;
