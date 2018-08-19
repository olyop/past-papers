import React from 'react'

import { Route } from 'react-router-dom'
import Loading from '../common/Loading'

import Subject from './Subject'

import './index.css'

const Subjects = props => {
	if (props.subjects === null) {
		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div id="Subjects">
				{props.subjects.map(subject => (
					<Route key={subject.key}
						path={`${props.match.path}/${subject.abbreviation}`}
						render={({ match }) => (
							<Subject {...subject}
								match={match} />
						)} />
				))}
			</div>
		)
	} else if (props.subjectsHasError) {
		return <p>{props.subjects}</p>
	}
}

export default Subjects
