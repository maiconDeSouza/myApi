import { rolesFactory } from '@roles/factorys/rolesFactory'
import { Request, Response, Router } from 'express'

const rolesRouter = Router()
const rolesMethods = rolesFactory()

rolesRouter.post('/', (request: Request, response: Response) => {
  const { name } = request.body

  const role = rolesMethods.create(name)

  response.status(201).json(role)
})

rolesRouter.get('/', (request: Request, response: Response) => {
  const roles = rolesMethods.findAll()

  response.status(200).json(roles)
})

export { rolesRouter }
