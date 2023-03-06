require('dotenv/config')
const mongoose = require('mongoose')
const schema = mongoose.Schema
const dburl = process.env.DATABASE_URL

mongoose.connect(dburl)

const dbschema = new schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  city: String,
  state: String,
  zip: String
})

module.exports = mongoose.model('userinfo', dbschema)