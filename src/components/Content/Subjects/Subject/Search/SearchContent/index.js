import React from 'react'

import './index.css'

const SearchContent = props => {
  if (props.isSearchEmpty) {
    return null
  } else {
    return (
      <div className="Search__content">
        <div className="Search__content-inner">
          Search Content
        </div>
      </div>
    )
  }
}

export default SearchContent
