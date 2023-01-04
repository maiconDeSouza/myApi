import express, { Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (requeste: Request, response: Response) => {
  return response.json({ msg: `Olá dev!!!!` })
})

const port = process.env.PORT || 1992
app.listen(port, () => console.log(`Server started on port ${port}!`))
