const express = require('express')
const db = require('./db')
const imageRouter = require('./image/router')
const loginRouter = require('./auth/router')
const userRouter = require('./user/router')
const bodyParser = require('body-parser')
const router = require('./image/router')
const cors = require('cors')

const port = process.env.PORT || 4000

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(router)

app.use(imageRouter)
app.use(loginRouter)
app.use(userRouter)

app.listen(port, ()=> console.log(`Listenig to ${port}`))
