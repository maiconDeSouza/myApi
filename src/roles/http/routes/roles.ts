import { rolesFactory } from '@roles/factorys/rolesFactory'
import { Request, Response, Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (request: Request, response: Response) => {
  const { name } = request.body

  const rolesMethods = rolesFactory()

  const role = rolesMethods.create(name)

  response.status(201).json(role)
})

export { rolesRouter }
