import 'dotenv/config'
import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

const port = process.env.PORT || 1993
app.listen(port, () => console.log(`Server started on port ${port}!`))
