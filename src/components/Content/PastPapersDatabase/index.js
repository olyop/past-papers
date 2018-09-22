import React from 'react'

import { Route, NavLink } from 'react-router-dom'

import AddPastPaper from './AddPastPaper'
import ViewDatabase from './ViewDatabase'

import './index.css'

const PastPapersDatabase = props => (
  <div id="PastPapersDatabase">
    <div className="centred-content">
      <div className="PastPapersDatabase__header">
        <NavLink to={`${props.match.path}/view-database`}>View Database</NavLink>
        <NavLink to={`${props.match.path}/add-past-paper`}>Add Past Paper</NavLink>
      </div>
      <div className="PastPapersDatabase__content">
        <Route path={`${props.match.path}/view-database`} exact render={() => <ViewDatabase />} />
        <Route path={`${props.match.path}/add-past-paper`} exact render={() => <AddPastPaper />} />
      </div>
    </div>
  </div>
)

export default PastPapersDatabase
