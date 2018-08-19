import React from 'react'

import './index.css'

const Title = props => (
  <div className="title"
    style={props.style}>
    <h1 className="title-heading">{props.children}</h1>
  </div>
)

export default Title
