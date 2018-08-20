import React from 'react'

import { Title } from '../../common/Styles'
import { NavLink } from 'react-router-dom'

import './index.css'

const SubjectSubTitle = props => (
  <div className="Subject-sub-title">
    <div className="Subject-sub-title-path">{props.path}</div>
    <div className="Subject-sub-title-hyphen">&#8211;</div>
    <div className="Subject-sub-title-updated">Last Updated, <span className="Subject-sub-title-updated-underline">{props.updated}</span></div>
  </div>
)

class Subject extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabValue: 0 }
    this.handleTabChange = this.handleTabChange.bind(this)
  }
  handleTabChange(event, value) {
    this.setState({ tabValue: value })
  }
  render() {
    return (
      <div className="Subject">

        <div className="Subject-header">
          <Title style={{ paddingBottom: '8px' }}>
            <span className="Subject-hsc">HSC</span>
            {this.props.name}
          </Title>
          <SubjectSubTitle path={this.props.match.path} updated={this.props.updated} />
        </div>

        <NavLink to={`${this.props.match.path}/questions`}>
          <i className="material-icons Subject-tab-icon">question_answer</i>
          <span>QUESTIONS</span>
        </NavLink>
        <NavLink to={`${this.props.match.path}/past-papers`}>
          <i className="material-icons Subject-tab-icon">insert_drive_file</i>
          <span>PAST PAPERS</span>
        </NavLink>
        <NavLink to={`${this.props.match.path}/about`}>
          <i className="material-icons Subject-tab-icon">info</i>
          <span>ABOUT</span>
        </NavLink>

      </div>
    )
  }
}

export default Subject
