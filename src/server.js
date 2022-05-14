const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/url_shortener').then(() => console.log('db is connected')).catch(err => console.log(err))

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world!' })
})

app.listen(3333, () => {
  console.log('Server is running!')
})
