import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import './index.css'

const AddPastPaperFormItem = props => {
  let formState = props.formState
  let dataItem = props.dataItem
  if ('options' in dataItem) {
    let hasExternalOptions = 'externalOptions' in dataItem
    let options = hasExternalOptions ? props[dataItem.externalOptions] : dataItem.options
    return (
      <FormControl classes={{ root: 'AddPastPaper__row' }}>
        <InputLabel>{dataItem.name}</InputLabel>
        <Select
          value={formState[dataItem.property]}
          onChange={event => props.handleChange(event, dataItem)}
        >
          {options.map(option => (
            <MenuItem
              key={option.key}
              value={option.key}
              children={option.name}
            />
          ))}
        </Select>
      </FormControl>
    )
  } else if (dataItem.type === 'array') {
    return (
      <FormControl className="AddPastPaper__row">
        <p>{dataItem.name}</p>
        <p>{formState[dataItem.property].length}</p>
        <Button onClick={event => props.handleChange(event, dataItem)}>
          <Icon>add</Icon>
          Add New {dataItem.element}
        </Button>
      </FormControl>
    )
  } else {
    return (
      <FormControl classes={{ root: 'AddPastPaper__row' }}>
        <TextField
          label={dataItem.name}
          type={dataItem.type}
          value={formState[dataItem.property]}
          onChange={event => props.handleChange(event, dataItem)}
          InputLabelProps={{ shrink: true }}
          placeholder={dataItem.placeholder}
        />
      </FormControl>
    )
  }
}

export default AddPastPaperFormItem
