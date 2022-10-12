const pjson = require('./package.json')
const author = pjson.author
const version = pjson.version
const appName = pjson.name
const description = pjson.description
const repo = pjson.repository
const language = "id"
const default_country = "id"

module.exports = { 
  pjson, 
  author, 
  version, 
  description, 
  appName, 
  repo,
  language,
  default_country
}