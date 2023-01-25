import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({
    message: `Oi`,
  })
})

const port = 1992

app.listen(port, () => console.log(`Server started on port ${port}`))
