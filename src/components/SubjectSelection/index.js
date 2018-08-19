import React from 'react'

import Loading from '../common/Loading'
import { NavLink } from 'react-router-dom'

import './index.css'

const Subject = props => (
	<NavLink to={`/subjects/${props.abbreviation}`}
		className="SubjectSelection_subject">
		<span className="SubjectSelection_list">{props.index + 1}.</span>
		<div className="SubjectSelection_subject-info">
			<img src={`${props.globals.aws}/nesa-logo.png`}
				className="SubjectSelection_nesa"
				alt="NESA" />
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

const SubjectsList = props => {
	if (props.subjects === null) {
		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div className="SubjectSelection_subjects">
				{props.subjects.map((subject, index) => <Subject globals={props.globals} {...subject} />)}
			</div>
		)
	} else if (props.subjectsHasError) {
		return <p>{props.subjects}</p>
	}
}

const SubjectSelection = props => (
	<div className="window">
		<div id="SubjectSelection">
			<div className="SubjectSelection_content">

				<div className="SubjectSelection_title">Please Choose a Subject</div>

				<SubjectsList globals={props.globals}
					subjects={props.subjects}
					subjectsHasError={props.subjectsHasError} />

			</div>
		</div>
	</div>
)

export default SubjectSelection
