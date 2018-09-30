import React from 'react'

import { Route, NavLink } from 'react-router-dom'

import AddPastPaper from './AddPastPaper'
import ViewDatabase from './ViewDatabase'

import { gbl_manageDatabasePages } from '../../../globals'

import './index.css'

const PastPapersDatabase = props => (
  <div id="PastPapersDatabase">
    <div className="centred-content">
      <div className="PastPapersDatabase__header">
        {gbl_manageDatabasePages.map(page => (
          <NavLink
            key={page.path}
            className="PastPapersDatabase__link"
            to={props.match.path + page.path}
            activeClassName="PastPapersDatabase__link-active"
          >
            <i className="material-icons">{page.icon}</i>
            <p>{page.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="PastPapersDatabase__content">
        {gbl_manageDatabasePages.map(page => (
          <Route key={page.key} path={props.match.path + page.path} exact render={() => {
            if (page.key === 'view-database') { return <ViewDatabase /> }
            else if (page.key === 'add-past-paper') { return <AddPastPaper subjects={props.subjects} /> }
          }} />
        ))}
      </div>
    </div>
  </div>
)

export default PastPapersDatabase
