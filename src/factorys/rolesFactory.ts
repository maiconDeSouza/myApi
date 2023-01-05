import { v4 as uuidv4 } from 'uuid'

export interface IRoles {
  id: string
  name: string
  created_at: Date
}

export function rolesFactory(name: string): IRoles {
  return {
    id: uuidv4(),
    name,
    created_at: new Date(),
  }
}
