import React from 'react'

import './index.css'

const Loading = props => (
	<div className="Loading">
		<div className="Loading__ring"></div>
		<div className="Loading__text">{props.text}</div>
	</div>
)

export default Loading
