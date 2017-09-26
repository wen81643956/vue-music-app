const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15
const PLAY_KEY = '__play__'
const PLAY_MAX_LENGTH = 200

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

function parseArray (arr) {
  return JSON.parse(arr) || []
}

function stringifyArray (arr) {
  return JSON.stringify(arr)
}

export function saveSearch (query) {
  let searches = parseArray(localStorage.getItem(SEARCH_KEY))
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  localStorage.setItem(SEARCH_KEY, stringifyArray(searches))
  return searches
}

export function loadSearch () {
  return parseArray(localStorage.getItem(SEARCH_KEY))
}

export function deleteSearch (query) {
  let searches = parseArray(localStorage.getItem(SEARCH_KEY))
  deleteFromArray(searches, (item) => {
    return item === query
  })
  localStorage.setItem(SEARCH_KEY, stringifyArray(searches))
  return searches
}

export function clearSearch () {
  localStorage.removeItem(SEARCH_KEY)
  return []
}

export function savePlay (song) {
  let songs = parseArray(localStorage.getItem(PLAY_KEY))
  insertArray(songs, song, (item) => {
    return item.id === song.id
  }, PLAY_MAX_LENGTH)
  localStorage.setItem(PLAY_KEY, stringifyArray(songs))
  return songs
}

export function loadPlay () {
  return parseArray(localStorage.getItem(PLAY_KEY))
}

export function deletePlay (song) {
  let songs = parseArray(localStorage.getItem(PLAY_KEY))
  deleteFromArray(songs, (item) => {
    return item.id === song.id
  })
  localStorage.setItem(PLAY_KEY, stringifyArray(songs))
  return songs
}

export function clearPlay () {
  localStorage.setItem(PLAY_KEY, [])
  return []
}
