import React from 'react';

const TextAreaTile = props => {
  return(

    <div className="text-area-tile">
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
