import React from 'react'

import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'

import './index.css'

export default class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <div className="Search__bar">
          <Input
            id="input-with-icon-adornment"
            onChange={this.props.handleSearch}
            value={this.props.search}
            placeholder="Search questions..."
            classes={{
              input: 'Search__input',
              root: 'Search__bar-inner',
              underline: 'Search__underline'
            }}
            startAdornment={
              <InputAdornment position="start"
                classes={{ root: 'Search__icon' }}>
                <Icon>search</Icon>
              </InputAdornment>
            }
          />
        </div>
        <div className="col-md-12 Search__content">
          <Paper classes={{ root: 'col-md-12' }}>Search Content</Paper>
        </div>
      </div>
    )
  }
}
