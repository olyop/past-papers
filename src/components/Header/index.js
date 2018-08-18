import React from 'react'

import { NavLink } from 'react-router-dom'

import '../../fonts/dank-mono.css'
import './index.css'

const Header = props => {
  return (
    <div id="Header">
      <NavLink to="/" className="Header-logo">past-papers</NavLink>
    </div>
  )
}

export default Header
