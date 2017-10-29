import React from 'react'
import { Link } from 'react-router'
import BackButton from './buttons/BackButton'

const NavBar = props => {
  return(
    <div>
      <BackButton/>
      <Link to='friend_path'>Friend Show Page</Link>
      {props.children}
    </div>



  )
}


export default NavBar;
