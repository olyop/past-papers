const createTemplate = dataDictionary => {
  let template = {}
  for (let i = 0; i < dataDictionary.length; i++) {
    let dataItem = dataDictionary[i]
    if ('options' in dataItem) {
      template[dataItem.property] = dataItem.options[0].key
    } else {
      if (dataDictionary.type === 'array') {
        template[dataItem.property] = []
      } else {
        template[dataItem.property] = dataItem.default
      }
    }
  }
  return template
}

export default createTemplate
