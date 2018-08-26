import React from 'react'

import { NavLink } from 'react-router-dom'

import './index.css'

const Menu = props => {
  return (
    <div className="Menu">
      <NavLink to="/manage-database">Manage Database</NavLink>
    </div>
  )
}

export default Menu
