import React from 'react'

import { NavLink, Route } from 'react-router-dom'
import { Title } from '../../../common/Styles'
import Search from './Search'

import './index.css'

class Subject extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchFilters: this.props.globals.searchFilters.reduce((categoryMap, category) => {
        if (category.type === 'check-boxes') {
          categoryMap[category.name.toLowerCase()] = category.filters.reduce((filterMap, filter) => {
            filterMap[filter.name.toLowerCase()] = filter.value
            return filterMap
          }, {})
          return categoryMap
        } else if (category.type === 'radio-button-selection') {
          categoryMap[category.name.toLowerCase()] = String(0)
          return categoryMap
        } else {
          return categoryMap
        }
      }, {})
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleSearch(event) {
    this.setState({ search: event.target.value })
  }
  clearSearch() {
    this.setState({ search: '' })
  }
  handleFilterChange = (category, filter, value) => {
    if (typeof value === 'string') {
      this.setState(prevState => ({
        ...prevState,
        searchFilters: {
          ...prevState.searchFilters,
          [category]: value
        }
      }))
    } else if (typeof value === 'boolean') {
      this.setState(prevState => ({
        ...prevState,
        searchFilters: {
          ...prevState.searchFilters,
          [category]: {
            ...prevState.searchFilters[category],
            [filter]: value
          }
        }
      }))
    }
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
              to={`${this.props.match.path}${page.path}`}
              exact
              className="Subject__nav-item"
              activeClassName="Subject__nav-item-active"
            >
              <i className="material-icons Subject__nav-item-icon">{page.icon}</i>
              {page.name === '' ? null : <span className="Subject__nav-item-text">{page.name}</span>}
            </NavLink>
          ))}
        </div>

        <div className="Subject__content">
          <Route
						path={`${this.props.match.path}/questions`}
						render={({ match }) => (
							<Search
								globals={this.props.globals}
                search={this.state.search}
								handleSearch={this.handleSearch}
                clearSearch={this.clearSearch}
                handleFilterChange={this.handleFilterChange}
                searchFilters={this.state.searchFilters}
              />
						)} />
        </div>

      </div>
    )
  }
}

export default Subject
