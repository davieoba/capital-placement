require('dotenv').config({ path: '.env' })
const express = require('express')
const mongoose = require('mongoose')
const { MONGODB_URI } = require('./utils/config')
const questionRoutes = require('./routes/question-routes')

const app = express()

mongoose.connect(MONGODB_URI).then(() => {
  console.log(`connected to the DB successfully`)
}).catch((err) => console.log('Error connecting to the DB'))


app.use(express.json())
app.use('/question', questionRoutes)


module.exports = app