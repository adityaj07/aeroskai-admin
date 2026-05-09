import { useQuery } from '@tanstack/react-query'

import { SUBSCRIPTION_USERS_QUERY_KEYS } from '../constants/subscriptions.constants'
import { subscriptionsService } from '../services/subscriptions.service'

export const useIndividualSubscriptions = (params = {}) => {
  return useQuery({
    queryKey: [...SUBSCRIPTION_USERS_QUERY_KEYS.list, params],
    queryFn: () => subscriptionsService.getIndividuals(params),
  })
}
