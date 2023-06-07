import { faker } from '@faker-js/faker'
import { rest } from 'msw'

import { User } from '@/services/api/users'

const createMockUsers = (n: number) => {
  faker.seed(1)
  return Array.from({ length: n }).map<User>(() => {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    }
  })
}

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<User[]>(createMockUsers(26)))
  }),
]
