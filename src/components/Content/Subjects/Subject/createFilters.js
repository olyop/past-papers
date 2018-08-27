const createFilters = searchFilters => {
  return searchFilters.reduce((categoryMap, category) => {
    if (category.type === 'check-boxes') {
      categoryMap[category.key] = category.filters.reduce((filterMap, filter) => {
        filterMap[filter.key] = filter.value
        return filterMap
      }, {})
      return categoryMap
    } else if (category.type === 'radio-button-selection') {
      categoryMap[category.key] = 'topics'
      return categoryMap
    } else {
      return categoryMap
    }
  }, {})
}

export default createFilters
