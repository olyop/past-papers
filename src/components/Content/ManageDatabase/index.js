import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'

import './index.css'

export default class ManageDatabase extends React.Component {
  render() {
    return (
      <div id="ManageDatabase">
        <div className="centred-content ManageDatabase__content">
          <FormControl key={'source'} classes={{ root: 'ManageDatabase__row' }}>
            <InputLabel>Source</InputLabel>
            <Select
              input={<Input name="Source" />}
              value={'nesa'}
            >
              <MenuItem
                key={'nesa'}
                value={'nesa'}
                children={'NESA'}
              />
              <MenuItem
                key={'external'}
                value={'external'}
                children={'External'}
              />
            </Select>
          </FormControl>
          <FormControl key={'paperType'} classes={{ root: 'ManageDatabase__row' }}>
            <InputLabel>Paper Type</InputLabel>
            <Select
              input={<Input name="Paper Type" />}
              value={'hsc'}
            >
              <MenuItem
                key={'hsc'}
                value={'hsc'}
                children={'HSC'}
              />
              <MenuItem
                key={'trials'}
                value={'trials'}
                children={'Trials'}
              />
              <MenuItem
                key={'halfYearlies'}
                value={'halfYearlies'}
                children={'Half Yearlies'}
              />
            </Select>
          </FormControl>
          <FormControl ley={'year'} classes={{ root: 'ManageDatabase__row' }}>
            <TextField
              id={'year'}
              label="Year"
              placeholder="The year of the test"
            />
          </FormControl>
        </div>
      </div>
    )
  }
}
