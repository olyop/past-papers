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
        <div className="centred-content">
          <FormControl>
            <InputLabel>
              Source
            </InputLabel>
            <Select
              input={<Input name="age" id="age-label-placeholder" />}
              value="nesa"
            >
              {this.props.globals.searchFilters[1].filters.map((source, index) => <MenuItem key={index} value={source.key}>{source.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
      </div>
    )
  }
}
