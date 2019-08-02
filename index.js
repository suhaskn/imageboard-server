const express = require('express')
const db = require('./db')
const imageRouter = require('./image/router')
const app = express()

const port = process.env.PORT || 4000

app.use(imageRouter)

app.listen(port, ()=> console.log(`Listenig to ${port}`))