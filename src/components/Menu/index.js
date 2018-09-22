import React from 'react'

import { NavLink } from 'react-router-dom'

import './index.css'

const Menu = props => {
  return (
    <div className="Menu">
      <div className="Menu__inner">
        <NavLink to="/manage-database/add-past-paper">Manage Database</NavLink>
      </div>
    </div>
  )
}

export default Menu
