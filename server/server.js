const app = require('./app')
const { PORT } = require('./utils/config')


app.listen(PORT, () => {
  console.log(`application started on port: ${PORT}`)
})