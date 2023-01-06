import { rolesFactory } from '@roles/factorys/rolesFactory'
import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'

const rolesMethods = rolesFactory()

export function rolesMiddlewares() {
  return {
    nameIsAlreadyInUse,
  }
}

function nameIsAlreadyInUse(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body
  const isValid = rolesMethods.findByName(name)

  if (isValid) {
    throw new AppError('Role already exists', 400)
  }

  next()
}
