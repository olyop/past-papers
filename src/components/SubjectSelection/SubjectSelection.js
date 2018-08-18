import React from 'react'

import axios from 'axios'
<<<<<<< HEAD:src/components/SubjectSelection/SubjectSelection.js
import Loading from '../common/Loading/Loading'
=======

import Loading from '../common/Loading'
>>>>>>> eb62a5ccf0814be33872e947a710b89e1386f0da:src/components/misc/SubjectSelection.js

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
<<<<<<< HEAD:src/components/SubjectSelection/SubjectSelection.js

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
=======
>>>>>>> eb62a5ccf0814be33872e947a710b89e1386f0da:src/components/misc/SubjectSelection.js

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
<<<<<<< HEAD:src/components/SubjectSelection/SubjectSelection.js
=======

>>>>>>> eb62a5ccf0814be33872e947a710b89e1386f0da:src/components/misc/SubjectSelection.js
				<div className="SubjectSelection_content">

					<div className="SubjectSelection_title">Please Choose a Subject</div>

					<Subjects
						globals={this.props.globals}
						subjects={this.state.subjects}
						subjectsError={this.state.subjectsError} />

				</div>
<<<<<<< HEAD:src/components/SubjectSelection/SubjectSelection.js
=======

>>>>>>> eb62a5ccf0814be33872e947a710b89e1386f0da:src/components/misc/SubjectSelection.js
			</div>
		)
	}
}

export default SubjectSelection
