import React from 'react'

import { Route } from 'react-router-dom'
import Loading from '../common/Loading'
import AxiosError from '../common/AxiosError'

import Subject from './Subject'

import './index.css'

const Subjects = props => {
	if (props.subjectsHasError) {
		return <AxiosError {...props.subjectsError} />
	} else if (props.subjects === null) {
 		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div className="Subjects">
				{props.subjects.map(subject => (
					<Route key={subject.key}
						path={`${props.match.path}/${subject.abbreviation}`}
						render={({ match }) => (
							<Subject
								globals={props.globals}
								subject={subject}
								match={match} />
						)} />
				))}
			</div>
		)
	}
}

export default Subjects
