import React from 'react'

import makeId from '../../functions/make-id'

import './SubjectSelection.css'

const subjects = [
	{
		key: makeId(),
		name: 'Mathematics'
	},
	{
		key : makeId(),
		name: 'Mathematics Extension 1'
	}
]

class SubjectSelectionButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hover: false }
		this.handleHover = this.handleHover.bind(this)
	}
	handleHover() {	this.setState({ hover: !this.state.hover }) }
	render() {
		return (
			<button className="SubjectSelection_button"
				onMouseEnter={this.handleHover}
				onMouseLeave={this.handleHover}>
				<div className="SubjectSelection_button-icon"><i className="material-icons" style={{ color: this.state.hover ? '#333' : '#fff' }}>arrow_right_alt</i></div>
				<span className="SubjectSelection_list">{this.props.index + 1}.</span>
				<span className="SubjectSelection_hsc">HSC</span>
				<span>{this.props.name}</span>
			</button>
		)
	}
} 

class SubjectSelection extends React.Component {
	render() {
		return (
			<div id="SubjectSelection" className="window">
				
				<div className="SubjectSelection_content">
					<div className="SubjectSelection_title">Subjects</div>
					<div className="SubjectSelection_subjects">
						{subjects.map((subject, index) => <SubjectSelectionButton index={index} {...subject} />)}
					</div>
				</div>
				
			</div>
		)
	}
}

export default SubjectSelection