import React from 'react';


const TypeDropDownTile = props => {
  let interactionTypes = [["","Select an interaction type"],
  [1,"Social media post"],
  [2,"Text"],
  [3,"Letter/Card"],
  [4,"Package"],
  [5,"Phone call"],
  [6,"In-person conversation"],
  [7,"Coffee/Meal"],
  [8,"Day Visit"],
  [9,"Multi-day visit"]]

  let options = interactionTypes.map(type => {
    return(
      <option key={type[0]} value={type[1]}>{type[1]}</option>
    )
  })
  return(

    <div className="type-drop-down-tile">
      <label name={props.name}>{props.labelText}</label><br></br>
      <select onChange={props.handler} name={props.name} value={props.content}>
        {options}
      </select>
    </div>

  )

}

export default TypeDropDownTile;
