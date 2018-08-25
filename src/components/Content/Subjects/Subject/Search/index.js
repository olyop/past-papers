import React from 'react'

import SearchBar from './SearchBar'
import SearchContent from './SearchContent'

import './index.css'

const Search = props => {
  let isSearchEmpty = props.search === ''
  return (
    <div className="Search">
      <SearchBar
        globals={props.globals}
        search={props.search}
        handleSearch={props.handleSearch}
        clearSearch={props.clearSearch}
        isSearchEmpty={isSearchEmpty}
      />
      <SearchContent
        globals={props.globals}
        search={props.search}
        isSearchEmpty={isSearchEmpty}
      />
    </div>
  )
}

export default Search
