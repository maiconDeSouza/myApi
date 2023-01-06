import { rolesFactory } from '@roles/factorys/rolesFactory'
import { Request, Response } from 'express'

const rolesMethods = rolesFactory()

export function rolesControllers() {
  return {
    createRoles,
    findAllRoles,
  }
}

function createRoles(req: Request, res: Response) {
  const { name } = req.body

  const role = rolesMethods.create(name)

  res.status(201).json(role)
}

function findAllRoles(req: Request, res: Response) {
  const roles = rolesMethods.findAll()

  res.status(200).json(roles)
}
