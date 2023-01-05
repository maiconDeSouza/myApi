import { IRoles } from '@factorys/rolesFactory'
import { rolesFactory } from '@factorys/rolesFactory'
import { Request, Response, Router } from 'express'

const rolesRouter = Router()

const roles: IRoles[] = []

rolesRouter.post('/', (request: Request, response: Response) => {
  const { name } = request.body

  const role = rolesFactory(name)

  roles.push(role)

  response.status(201).json(role)
})

export { rolesRouter }
