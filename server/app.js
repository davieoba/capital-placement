require('dotenv').config({ path: '.env' })
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { MONGODB_URI } = require('./utils/config')
const personalRoutes = require('./routes/personal-routes')
const profileRoutes = require('./routes/profile-routes')

const app = express()

mongoose.connect(MONGODB_URI).then(() => {
  console.log(`connected to the DB successfully`)
}).catch((err) => console.log('Error connecting to the DB'))


app.use(express.json())
app.use(cors())
app.use('/api/v1/personal/', personalRoutes)
// app.use('/profile/', profileRoutes)


module.exports = app