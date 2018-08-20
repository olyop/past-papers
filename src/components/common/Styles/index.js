import React from 'react'

import './index.css'

const Title = props => (
  <div className="Styles_title"
    style={props.style}>
    {props.children}
  </div>
)

const SubTitle = props => (
  <div className="Styles_sub-title"
    style={props.style}>{props.children}</div>
)

const Heading1 = props => (
  <div className="Styles_heading-1"
		style={props.style}>{props.children}</div>
)

const Heading2 = props => (
  <h1 className="Styles_heading-2"
    style={props.style}>{props.children}</h1>
)

const Heading3 = props => (
  <h1 className="Styles_heading-2"
    style={props.style}>{props.children}</h1>
)

const Heading4 = props => (
  <h1 className="Styles_heading-3"
    style={props.style}>{props.children}</h1>
)

export {
  Title,
  SubTitle,
  Heading1,
  Heading2,
  Heading3,
  Heading4
}
