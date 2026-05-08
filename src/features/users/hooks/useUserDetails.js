import { useQuery } from '@tanstack/react-query'

import { usersService } from '../services/user.service'

export const useUserDetails = (userId) => {
  return useQuery({
    queryKey: ['users', 'details', userId],
    queryFn: () => usersService.getById(userId),
    enabled: Boolean(userId),
  })
}
