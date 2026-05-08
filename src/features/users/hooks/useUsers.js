import { useQuery } from '@tanstack/react-query'

import { USERS_QUERY_KEYS } from '../constants/users.constants'
import { usersService } from '../services/user.service'

export const useUsers = (params = {}) => {
  return useQuery({
    queryKey: [...USERS_QUERY_KEYS.list, params],
    queryFn: () => usersService.getAll(params),
  })
}
