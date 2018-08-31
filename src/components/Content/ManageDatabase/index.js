import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'

import './index.css'

export default class ManageDatabase extends React.Component {
  render() {
    return (
      <div id="ManageDatabase">
        <div className="centred-content ManageDatabase__content">
          {this.props.globals.searchFilters.slice(1,3).map((searchFilter, index) => (
            <FormControl key={searchFilter.key} classes={{ root: 'ManageDatabase__row' }}>
              <InputLabel>
                {searchFilter.name}
              </InputLabel>
              <Select
                input={<Input name={searchFilter.name} id={searchFilter.key} />}
                value={searchFilter.filters[0].key}
              >
                {searchFilter.filters.map((filter, index) => (
                  <MenuItem
                    key={index}
                    value={filter.key}
                    children={filter.name}
                  />
                ))}
              </Select>
            </FormControl>
          ))}
        </div>
      </div>
    )
  }
}
