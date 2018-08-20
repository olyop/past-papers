import React from 'react'

import { NavLink } from 'react-router-dom'

import '../../fonts/dank-mono.css'
import './hamburger/hamburgers.min.css'
import './index.css'

const Hamburger = props => (
  <button onClick={() => props.handleHamburger()}
    className={`hamburger hamburger--boring ${props.hamburger ? 'is-active ' : ''}Header-hamburger`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
)

const Header = props => {
  return (
    <div id="Header">
      <Hamburger hamburger={props.hamburger} handleHamburger={props.handleHamburger} />
      <NavLink to="/"
        onClick={() => props.home()}
        className="Header-logo">
        past-papers
      </NavLink>
    </div>
  )
}

export default Header
