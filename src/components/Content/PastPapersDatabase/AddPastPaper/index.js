import React from 'react'

import AddPastPaperFormItem from './AddPastPaperFormItem'

import { gbl_dataDictionary } from '../../../../globals'

import createTemplate from './createTemplate'

import './index.css'

class AddPastPaper extends React.Component {
  constructor(props) {
    super(props)
    this.state = createTemplate({ subjects: this.props.subjects }, gbl_dataDictionary.pastPaper)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event, dataItem) {
    let type = dataItem.type
    let property = dataItem.property
    if (type === 'string' || type === 'number') {
      this.setState({ [property]: event.target.value })
    } else if (type === 'array') {
      let newArray = this.state[property]
      newArray.push(createTemplate({}, gbl_dataDictionary[dataItem.element]))
      this.setState({ [property]: newArray })
    }
  }
  render() {
    return (
      <div id="AddPastPaper">
        {gbl_dataDictionary.pastPaper.map((dataItem, index) => (
          <AddPastPaperFormItem
            key={index}
            dataItem={dataItem}
            formState={this.state}
            handleChange={this.handleChange}
            subjects={this.props.subjects}
          />
        ))}
      </div>
    )
  }
}

export default AddPastPaper
