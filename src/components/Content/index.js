import React from 'react'

import { Route } from 'react-router-dom'
import Loading from '../common/Loading'
import AxiosError from '../common/AxiosError'
import SubjectSelection from './SubjectSelection'
import Subjects from './Subjects'
import ManageDatabase from './ManageDatabase'

import './index.css'

const ContentContainer = props => (
  <div className={`content${props.menu ? ' content-menu-active' : ''}`}>
    {props.children}
  </div>
)

const Content = props => {
  if (props.subjectsHasError) {
    return (
      <ContentContainer menu={props.menu}>
        <AxiosError {...props.subjectsError} />
      </ContentContainer>
    )
  } else if (props.subjects === null) {
    return (
      <ContentContainer menu={props.menu}>
        <Loading text="Loading database..." />
      </ContentContainer>
    )
  } else if (props.subjects.constructor === Array) {
    return (
      <ContentContainer menu={props.menu}>
        <Route path="/" exact render={() => (
          <SubjectSelection
            subjects={props.subjects}
          />
        )} />
        <Route path="/subjects" render={({ match }) => (
          <Subjects
            subjects={props.subjects}
            match={match}
          />
        )} />
        <Route path="/manage-database" render={({ match }) => (
          <ManageDatabase
            subjects={props.subjects}
            match={match}
          />
        )}/>
      </ContentContainer>
    )
  }
}

export default Content
