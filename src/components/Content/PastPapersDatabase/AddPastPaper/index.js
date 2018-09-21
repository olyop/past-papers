import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import globals from '../../../../globals'

import createTemplate from './createTemplate'

import './index.css'

class AddPastPaper extends React.Component {
  constructor(props) {
    super(props)
    this.state = createTemplate(globals.dataDictionary.pastPaper)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event, dataItem) {
    let type = dataItem.type
    if (type === 'string' || type === 'number') {
      this.setState({ [dataItem.property]: event.target.value })
    } else if (type === 'array') {
      console.log(typeof this.state[dataItem.property])
      // this.setState({ [dataItem.property]: this.state[dataItem.property].push(createTemplate(globals.dataDictionary.section)) })
    }
  }
  render() {
    return (
      <div id="AddPastPaper">
        {globals.dataDictionary.pastPaper.map(dataItem => {
          if ('options' in dataItem) {
            return (
              <FormControl key={dataItem.property} classes={{ root: 'AddPastPaper__row' }}>
                <InputLabel>{dataItem.name}</InputLabel>
                <Select
                  value={this.state[dataItem.property]}
                  onChange={event => this.handleChange(event, dataItem)}
                >
                  {dataItem.options.map(option => (
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
              <div key={dataItem.property} className="AddPastPaper__row">
                <p>{dataItem.name}</p>
                <Button onClick={event => this.handleChange(event, dataItem)}>
                  <Icon>add</Icon>
                  Add New {dataItem.element}
                </Button>
              </div>
            )
          } else {
            return (
              <FormControl key={dataItem.property} classes={{ root: 'AddPastPaper__row' }}>
                <TextField
                  label={dataItem.name}
                  type={dataItem.type}
                  value={this.state[dataItem.property]}
                  onChange={event => this.handleChange(event, dataItem)}
                  InputLabelProps={{ shrink: true }}
                  placeholder={dataItem.placeholder}
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
