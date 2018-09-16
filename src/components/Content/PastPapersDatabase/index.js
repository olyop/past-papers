import React from 'react'

import { Route } from 'react-router-dom'

import AddPastPaper from './AddPastPaper'
import ViewDatabase from './ViewDatabase'

import './index.css'

class PastPapersDatabase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="PastPapersDatabase">
        <div className="centred-content">
          <Route path={`${this.props.match.path}/view-database`} exact render={() => (
            <ViewDatabase />
          )} />
          <Route path={`${this.props.match.path}/add-past-paper`} exact render={() => (
            <AddPastPaper />
          )} />
        </div>
      </div>
    )
  }
}

export default PastPapersDatabase
