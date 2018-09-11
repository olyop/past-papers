import React from 'react'

import SearchBar from './SearchBar'
import SearchContent from './SearchContent'

import './index.css'

const Search = props => {
  let isSearchEmpty = props.search === ''
  return (
    <div className="Search">
      <SearchBar
        search={props.search}
        handleSearch={props.handleSearch}
        clearSearch={props.clearSearch}
        handleFilterChange={props.handleFilterChange}
        searchFilters={props.searchFilters}
        isSearchEmpty={isSearchEmpty}
      />
      <SearchContent
        search={props.search.trim()}
        searchFilters={props.searchFilters}
        isSearchEmpty={isSearchEmpty}
      />
    </div>
  )
}

export default Search
