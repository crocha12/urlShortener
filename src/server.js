const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect('mongodb://localhost:27017/url_shortener')
  .then(() => console.log('db is connected'))
  .catch(err => console.log(err))

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log('Server is running!')
})
