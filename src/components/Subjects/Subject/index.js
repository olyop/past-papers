import React from 'react'

import { Title } from '../../common/Styles'
import { NavLink } from 'react-router-dom'

import './index.css'

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

        <div className="Subject__header">
          <Title style={{ paddingBottom: '8px' }}>
            <span className="Subject__hsc">HSC</span>
            {this.props.subject.name}
          </Title>
          <div className="Subject__sub-title">
            <div className="Subject__sub-title-path">{this.props.match.path}</div>
            <div className="Subject__sub-title-hyphen">&#8211;</div>
            <div className="Subject__sub-title-updated">Last Updated, <span className="Subject__sub-title-updated-underline">{this.props.subject.updated}</span></div>
          </div>
        </div>

        <div className="Subject__nav">
          {this.props.globals.subjectPages.map((page, index) => (
            <NavLink
              key={index}
              to={`${this.props.match.path}/${page.path}`}
              className="Subject__nav-item"
              activeClassName="Subject__nav-item-active"
            >
              <i className="material-icons Subject__tab-icon">{page.icon}</i>
              {page.name}
            </NavLink>
          ))}
        </div>

        <div className="Subject__content">
          Content
        </div>

      </div>
    )
  }
}

export default Subject
