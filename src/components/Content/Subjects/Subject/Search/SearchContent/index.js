import React from 'react'

import './index.css'

const SearchContent = props => {
  if (props.isSearchEmpty) {
    return null
  } else {
    return (
      <div className="Search__content">
        <div className="Search__content-inner">
          <pre style={{ margin: 0 }}>{JSON.stringify({ query: props.search, filters: props.searchFilters }, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default SearchContent
