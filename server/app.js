import { configDotenv } from 'dotenv'
configDotenv()
import express from 'express'
const app = express()
import cookieParser from 'cookie-parser'
import { connectionDb } from './config/db.js'

import router from './router/user.router.js'

connectionDb()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/users', router)

app.listen(port)
