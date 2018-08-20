import React from 'react'

import Loading from '../common/Loading'
import AxiosError from '../common/AxiosError'
import { NavLink } from 'react-router-dom'

import './index.css'

const Subject = props => (
	<NavLink to={`/subjects/${props.abbreviation}`}
		className="SubjectSelection_subject">
		<span className="SubjectSelection_list">{props.index + 1}.</span>
		<div className="SubjectSelection_subject-info">
			<div className="SubjectSelection_subject-text">
				<div className="SubjectSelection_subject-name">
					<span className="SubjectSelection_hsc">HSC</span>
					<span>{props.name}</span>
				</div>
				<div className="SubjectSelection_updated">Updated: {props.updated}</div>
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
			<div id="SubjectSelection">
				<div className="SubjectSelection_content">
					<div className="SubjectSelection_title">Please Choose a Subject</div>
					<div className="SubjectSelection_subjects">
						{props.subjects.map((subject, index) => <Subject globals={props.globals} {...subject} />)}
					</div>
				</div>
			</div>
		)
	}
}

export default SubjectSelection
