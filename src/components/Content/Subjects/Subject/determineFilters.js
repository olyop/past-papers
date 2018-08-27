const determineFilters = (prevState, category, filter, value) => {
  if (typeof value === 'string') {
    return value
  } else if (typeof value === 'boolean') {
    return {
      ...prevState.searchFilters[category],
      [filter]: value
    }
  }
}

export default determineFilters
