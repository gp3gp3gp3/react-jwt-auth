const express = require('express')
const path = require('path')

const app = express()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000
const publicPath = path.resolve(__dirname, 'public')

app.use(express.static(publicPath))

app.listen(port, function() {
  console.log('Server running on port ' + port)
})
