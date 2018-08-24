import React from 'react'

import { NavLink } from 'react-router-dom'

import '../../fonts/dank-mono.css'
import './hamburger/hamburgers.min.css'
import './index.css'

const Hamburger = props => (
  <button onClick={() => props.handleMenu()}
    className={`hamburger hamburger--boring ${props.menu ? 'is-active ' : ''}Header__hamburger`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

const Header = props => (
  <div id="Header">
    <Hamburger menu={props.menu} handleMenu={props.handleMenu} />
    <NavLink to="/"
      onClick={() => props.home()}
      className="Header__logo"
      children="past-papers"
    />
  </div>
)

export default Header
