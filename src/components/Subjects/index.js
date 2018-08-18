import React from 'react'

import { Route } from 'react-router-dom'
import Loading from '../common/Loading'

// Import subjects
import MathsAdvanced from './MathsAdvanced'
import MathsExt1 from './MathsExt1'
import MathsExt2 from './MathsExt2'

const Subjects = props => {
	if (props.subjects === null) {
		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div>
				{props.subjects.map(subject => (
					<Route key={subject.key}
						path={`/subjects/${subject.abbreviation}`}
						render={({ match, location }) => {
							if (subject.key === 'GKvfvjbZsc') {
								return <MathsAdvanced />
							} else if (subject.key === 'dhRkSziwwp') {
								return <MathsExt1 />
							} else if (subject.key === 'VeRLrzucwI') {
								return <MathsExt2 />
							}
						}} />
				))}
			</div>
		)
	} else if (props.subjectsHasError) {
		return <p>{props.subjects}</p>
	}
}

export default Subjects
