import { useQuery } from '@tanstack/react-query'

import { SUPPORT_USERS_QUERY_KEYS } from '../constants/support.constants'
import { supportService } from '../services/support.services'

export const useIndividualSupport = (params = {}) => {
  return useQuery({
    queryKey: [...SUPPORT_USERS_QUERY_KEYS.list, params],
    queryFn: () => supportService.getIndividuals(params),
  })
}
