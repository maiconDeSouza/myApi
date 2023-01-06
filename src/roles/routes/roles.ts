import { Router } from 'express'

import { rolesControllers } from '@roles/controllers/rolesControllers'
import { rolesMiddlewares } from '@roles/middlewares/rolesMiddlewares'

const rolesRouter = Router()

const mid = rolesMiddlewares()
const contro = rolesControllers()

rolesRouter.post('/', mid.nameIsAlreadyInUse, contro.createRoles)

rolesRouter.get('/', contro.findAllRoles)

export { rolesRouter }
