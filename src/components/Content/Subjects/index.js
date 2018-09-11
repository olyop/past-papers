import React from 'react'

import { Route } from 'react-router-dom'

import Subject from './Subject'

import './index.css'

const Subjects = props => (
	<div id="Subjects">
		{props.subjects.map(subject => (
			<Route key={subject.key}
				path={`${props.match.path}/${subject.abbreviation}`}
				render={({ match }) => (
					<Subject
						subject={subject}
						match={match}
					/>
				)} />
		))}
	</div>
)

export default Subjects
