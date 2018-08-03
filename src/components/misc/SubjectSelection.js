import React from 'react'

import axios from 'axios'

import Loading from '../common/Loading'

import './SubjectSelection.css'

class SubjectSelectionButton extends React.Component {
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

class SubjectSelection extends React.Component {
	constructor(props) {
		super(props)
		this.state = { subjects: null }
	}
  componentDidMount() {
    const axiosConfig = {
			method: 'get',
			url: `${this.props.globals.api}/subjects`
		}
    axios(axiosConfig)
      .then(response => this.setState({ subjects: response.data }))
      .catch(error => this.setState({ subjects: error }))
  }
	render() {
		console.log(this.state.subjects)
		return (
			<div id="SubjectSelection" className="window">

				<div className="SubjectSelection_content">
					<div className="SubjectSelection_title">Please Choose a Subject</div>
					{this.state.subjects === null ? <Loading /> : (
						<div className="SubjectSelection_subjects">
							{this.state.subjects.map((subject, index) => <SubjectSelectionButton {...subject} />)}
						</div>
					)}
				</div>

			</div>
		)
	}
}

export default SubjectSelection
