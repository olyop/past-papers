const createTemplate = (externalOptions, dataDictionary) => {
  let template = {}
  for (let i = 0; i < dataDictionary.length; i++) {
    let dataItem = dataDictionary[i]
    if ('externalOptions' in dataItem) {
      template[dataItem.property] = externalOptions[dataItem.externalOptions][0].key
    } else if ('options' in dataItem) {
      template[dataItem.property] = dataItem.options[0].key
    } else if (dataItem.type === 'array') {
      template[dataItem.property] = new Array(0)
    } else {
      template[dataItem.property] = dataItem.default
    }
  }
  return template
}

export default createTemplate
