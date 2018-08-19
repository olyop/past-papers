import React from 'react'

import { Title, Heading1 } from '../../common/Styles'

import './index.css'

const SubjectSubTitle = props => (
  <div className="Subject-sub-title">
    <div className="Subject-sub-title-path">{props.path}</div>
    <div className="Subject-sub-title-hyphen">&#8211;</div>
    <div className="Subject-sub-title-updated">Last Updated <span className="Subject-sub-title-updated-underline">{props.updated}</span></div>
  </div>
)

class Subject extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content1: true
    }
    this.handleContent1 = this.handleContent1.bind(this)
  }
  handleContent1() {
    this.setState({ content1: !this.state.content1 })
  }
  render() {
    return (
      <div className="Subject">
        <Title style={{ paddingBottom: '10px' }}>{this.props.name}</Title>
        <SubjectSubTitle path={this.props.match.path} updated={this.props.updated} />
        <Heading1 onClick={this.handleContent1}
          active={this.state.content1}
          subtitle="410 papers">Search</Heading1>
      </div>
    )
  }
}

export default Subject
