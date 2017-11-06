import React from 'react'
import AddButton from './buttons/AddButton'
import FilterButton from './buttons/FilterButton'
import { Link } from 'react-router'
import BackButton from './buttons/BackButton'

const ControllsComponent = props => {

  return(
    <div className="controlls-component">
      <h4>I am the ControllsComponent</h4>
      <AddButton/>
      <FilterButton/>
      <BackButton/>
    </div>
  )
}


export default ControllsComponent;
