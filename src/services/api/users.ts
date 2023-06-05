import { Rest } from './client'

export interface User {
  id: string
  name: string
  email: string
}

export class RestUsers extends Rest {
  static async list(): Promise<User[]> {
    return this._client.get<User[]>('/users').then((res) => res.data)
  }
}
