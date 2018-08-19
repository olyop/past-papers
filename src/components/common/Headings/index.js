import React from 'react'

import './index.css'

const Heading1 = props => (
  <h1 className="heading-1"
    style={props.style}>{props.children}</h1>
)

const Heading2 = props => (
  <h1 className="heading-2"
    style={props.style}>{props.children}</h1>
)

const Heading3 = props => (
  <h1 className="heading-2"
    style={props.style}>{props.children}</h1>
)

const Heading4 = props => (
  <h1 className="heading-3"
    style={props.style}>{props.children}</h1>
)

export { Heading1, Heading2, Heading3, Heading4 }
