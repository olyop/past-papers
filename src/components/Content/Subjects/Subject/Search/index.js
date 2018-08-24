import React from 'react'

import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

import './index.css'

const Search = props => {
  return (
    <div className="Search">
      <div className="Search__bar">
        <Input
          onChange={props.handleSearch}
          value={props.search}
          placeholder="Search questions..."
          classes={{
              input: 'Search__input',
              root: 'Search__bar-inner',
              underline: 'Search__underline'
          }}
          startAdornment={
            <InputAdornment classes={{ root: 'Search__icon-search' }}>
              <Icon classes={{ root: 'Search__icon-search-icon' }}>search</Icon>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment classes={{ root: 'Search__icon-close' }}>
              <IconButton classes={{ root: 'Search__icon-close-button' }}>
                <Icon classes={{ root: 'Search__icon-close-icon' }}>close</Icon>
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      {props.search === '' ? null : (
        <div className="Search__content">
          <div className="Search__content-inner">
            Search Content
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
