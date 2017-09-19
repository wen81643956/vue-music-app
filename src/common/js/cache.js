const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

function insertArray (arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray (arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function saveSearch (query) {
  let searches = JSON.parse(localStorage.getItem(SEARCH_KEY)) || []
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  localStorage.setItem(SEARCH_KEY, JSON.stringify(searches))
  return searches
}

export function loadSearch () {
  return JSON.parse(localStorage.getItem(SEARCH_KEY)) || []
}

export function deleteSearch (query) {
  let searches = JSON.parse(localStorage.getItem(SEARCH_KEY)) || []
  deleteFromArray(searches, (item) => {
    return item === query
  })
  localStorage.setItem(SEARCH_KEY, JSON.stringify(searches))
  return searches
}

export function clearSearch () {
  localStorage.removeItem(SEARCH_KEY)
  return []
}
