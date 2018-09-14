import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'

import globals from '../../../globals'

import './index.css'

export default class ManageDatabase extends React.Component {
  render() {
    return (
      <div id="ManageDatabase">
        <div className="centred-content ManageDatabase__content">
          {globals.dataDictionary.pastPaper.map((prop, index) => {
            if ('selection' in prop) {
              return (
                <FormControl key={prop.prop} classes={{ root: 'ManageDatabase__row' }}>
                  <InputLabel>{prop.name}</InputLabel>
                  <Select
                    input={<Input name={prop.name} />}
                    value={prop.selection[0].prop}
                  >
                    {prop.selection.map((selection, index) => (
                      <MenuItem
                        key={selection.prop}
                        value={selection.prop}
                        children={selection.name}
                      />
                    ))}
                  </Select>
                </FormControl>
              )
            } else {
              return (
                <FormControl key={prop.prop} classes={{ root: 'ManageDatabase__row' }}>
                  <TextField
                    id={prop.prop}
                    label={prop.name}
                    type={prop.type}
                    value={prop.default}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              )
            }
          })}
        </div>
      </div>
    )
  }
}
