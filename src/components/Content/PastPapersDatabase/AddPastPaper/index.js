import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import globals from '../../../../globals'

import './index.css'

class AddPastPaper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="AddPastPaper">
        {globals.dataDictionary.pastPaper.map((prop, index) => {
          if ('selection' in prop) {
            return (
              <FormControl key={prop.prop} classes={{ root: 'AddPastPaper__row' }}>
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
          } else if (prop.type === 'array') {
            return (
              <div key={prop.prop} className="AddPastPaper__row">
                <p>{prop.name}</p>
                <Button size="small">
                  <Icon>add</Icon>
                  Add New {prop.element}
                </Button>
              </div>
            )
          } else {
            return (
              <FormControl key={prop.prop} classes={{ root: 'AddPastPaper__row' }}>
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
    )
  }
}

export default AddPastPaper
