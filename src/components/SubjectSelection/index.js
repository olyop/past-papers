import React from 'react'

import Loading from '../common/Loading'
import AxiosError from '../common/AxiosError'
import { NavLink } from 'react-router-dom'

import './index.css'

const SubjectSelectionSubject = props => (
	<NavLink to={`/subjects/${props.abbreviation}/${props.globals.subjectPages[0].path}`}
		className="SubjectSelection__subject">
		<span className="SubjectSelection__list">{props.index + 1}.</span>
		<div className="SubjectSelection__subject-info">
			<div className="SubjectSelection__subject-text">
				<div className="SubjectSelection__subject-name">
					<span className="SubjectSelection__hsc">HSC</span>
					<span>{props.name}</span>
				</div>
				<div className="SubjectSelection__updated">Updated: {props.updated}</div>
			</div>
		</div>
	</NavLink>
)

const SubjectSelection = props => {
	if (props.subjectsHasError) {
		return <AxiosError {...props.subjectsError} />
	} else if (props.subjects === null) {
		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div className="SubjectSelection">
				<div className="SubjectSelection__content">
					<div className="SubjectSelection__title">Please Choose a Subject</div>
					<div className="SubjectSelection__subjects">
						{props.subjects.map((subject, index) => (
							<SubjectSelectionSubject
								globals={props.globals}
								{...subject}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default SubjectSelection
