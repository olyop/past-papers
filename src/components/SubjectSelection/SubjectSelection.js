import React from 'react'

import axios from 'axios'
import Loading from '../common/Loading/Loading'

import './SubjectSelection.css'

class Subject extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hover: false }
		this.handleHover = this.handleHover.bind(this)
	}
	handleHover() {
		this.setState({ hover: !this.state.hover })
	}
	render() {
		return (
			<button className="SubjectSelection_subject"
				onMouseEnter={this.handleHover}
				onMouseLeave={this.handleHover}>
				<span className="SubjectSelection_list">{this.props.index + 1}.</span>
				<div className="SubjectSelection_subject-info">
					<div className="SubjectSelection_subject-name">
						<span className="SubjectSelection_hsc">HSC</span>
						<span>{this.props.name}</span>
					</div>
					<div className="SubjectSelection_updated">Updated: {this.props.updated}</div>
				</div>
			</button>
		)
	}
}

const Subjects = props => {
	if (props.subjects === null) {
		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div className="SubjectSelection_subjects">
				{props.subjects.map((subject, index) => <Subject {...subject} />)}
			</div>
		)
	} else if (props.subjectsError) {
		return <p>{props.subjects}</p>
	}
}

class SubjectSelection extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			subjects: null,
			subjectsError: false
		}
	}
  componentDidMount() {
    axios({
			method: 'get',
			url: `${this.props.globals.api}/subjects`
		})
		.then(response => this.setState({ subjects: response.data }))
    .catch(error => this.setState({ subjects: error, subjectsError: true }))
  }
	render() {
		return (
			<div id="SubjectSelection" className="window">
				<div className="SubjectSelection_content">

					<div className="SubjectSelection_title">Please Choose a Subject</div>

					<Subjects
						globals={this.props.globals}
						subjects={this.state.subjects}
						subjectsError={this.state.subjectsError} />

				</div>
			</div>
		)
	}
}

export default SubjectSelection
