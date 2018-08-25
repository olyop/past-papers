import React from 'react'

import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'

import './index.css'

const SearchBar = props => {
  let conditionalProps = {}
  if (props.isSearchEmpty) {
    conditionalProps.startAdornment = (
      <InputAdornment classes={{ root: 'Search__icon-search' }}>
        <Icon classes={{ root: 'Search__icon-search-icon' }}>search</Icon>
      </InputAdornment>
    )
  } else {
    conditionalProps.endAdornment = (
      <InputAdornment onClick={props.clearSearch} classes={{ root: 'Search__icon-close' }}>
        <IconButton classes={{ root: 'Search__icon-close-button' }}>
          <Icon classes={{ root: 'Search__icon-close-icon' }}>close</Icon>
        </IconButton>
      </InputAdornment>
    )
  }
  return (
    <div className="Search__bar">
      <Input
        onChange={props.handleSearch}
        value={props.search}
        placeholder="Search questions..."
        classes={{
          input: `Search__input${props.isSearchEmpty ? '' : ' Search__input_hasText'}`,
          root: 'Search__bar-content Search__bar-inner',
          underline: 'Search__input-underline'
        }}
        {...conditionalProps}
      />
      <div className="Search__bar-content Search__bar-filters">
        <Checkbox />
      </div>
    </div>
  )
}

export default SearchBar
