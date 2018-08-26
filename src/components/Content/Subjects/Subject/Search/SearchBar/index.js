import React from 'react'

import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import './index.css'

const Filter = props => {
  if (props.category.type === 'check-boxes') {
    return props.category.filters.map((filter, index) => (
      <FormControlLabel
        key={index}
        classes={{ root: 'SearchBar__filter' }}
        label={filter.name}
        control={
          <Checkbox
            classes={{ root: 'SearchBar__filter-checkbox', checked: 'SearchBar__filter-active' }}
            onChange={(event, checked) => props.handleFilterChange(props.category.key, filter.key, checked)}
            checked={props.searchFilters[props.category.key][filter.key]}
          />
        }
      />
    ))
  } else if (props.category.type === 'radio-button-selection') {
    return (
      <RadioGroup
        value={props.searchFilters[props.category.key]}
        onChange={event => props.handleFilterChange(props.category.key, null, event.target.value)}
      >
        {props.category.buttons.map((button, index) => (
          <FormControlLabel
            key={index}
            value={String(index)}
            classes={{ root: 'SearchBar__filter' }}
            control={<Radio classes={{ root: 'SearchBar__filter-radio', checked: 'SearchBar__filter-active' }} />}
            label={button}
          />
        ))}
      </RadioGroup>
    )
  }
}

const SearchBar = props => {
  let conditionalProps = {}
  if (props.isSearchEmpty) {
    conditionalProps.startAdornment = (
      <InputAdornment classes={{ root: 'SearchBar__icon-search' }}>
        <Icon classes={{ root: 'SearchBar__icon-search-icon' }}>search</Icon>
      </InputAdornment>
    )
  } else {
    conditionalProps.endAdornment = (
      <InputAdornment onClick={props.clearSearch} classes={{ root: 'SearchBar__icon-close' }}>
        <IconButton classes={{ root: 'SearchBar__icon-close-button' }}>
          <Icon classes={{ root: 'SearchBar__icon-close-icon' }}>close</Icon>
        </IconButton>
      </InputAdornment>
    )
  }
  return (
    <div className="SearchBar">
      <Input
        onChange={props.handleSearch}
        value={props.search}
        placeholder="Search..."
        classes={{
          root: 'SearchBar__content SearchBar__inner',
          input: `SearchBar__input${props.isSearchEmpty ? '' : ' SearchBar__input_hasText'}`,
          underline: 'SearchBar__input-underline'
        }}
        {...conditionalProps}
      />
      <div className="SearchBar__content SearchBar__filters">
        {props.globals.searchFilters.map((category, index) => (
          <FormGroup key={index} classes={{ root: 'SearchBar__filters-category' }}>
            <FormLabel component="legend" classes={{ root: 'SearchBar__filters-catergory-name' }}>{category.name}</FormLabel>
            <div className="SearchBar__filters-catergory-filters">
              <Filter
                globals={props.globals}
                category={category}
                handleFilterChange={props.handleFilterChange}
                searchFilters={props.searchFilters}
              />
            </div>
          </FormGroup>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
