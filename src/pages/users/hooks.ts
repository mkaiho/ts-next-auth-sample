import { useEffect, useState } from 'react'

import { RestUsers } from '@/services/api/users'

export interface User {
  id: string
  name: string
  email: string
}

export const useHooks = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [users, setUsers] = useState<User[]>([])

  const fetch = async () => {
    if (isLoading) {
      return
    }
    try {
      setIsLoading(true)
      const users = await fetchUsers()
      setUsers(users)
    } catch (e) {
      throw e
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    users,
    isLoading,
  }
}

const fetchUsers = async () => {
  const data = await RestUsers.list()
  return data.map<User>((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
  }))
}
