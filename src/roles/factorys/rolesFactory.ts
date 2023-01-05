import { v4 as uuidv4 } from 'uuid'

type CreateRoleDTO = string
export interface IRoles {
  id: string
  name: CreateRoleDTO
  created_at: Date
}

const roles: IRoles[] = []

export function rolesFactory() {
  return {
    create,
  }
}

function create(name: string) {
  const newRoles: IRoles = {
    id: uuidv4(),
    name,
    created_at: new Date(),
  }
  roles.push(newRoles)
  return newRoles
}
