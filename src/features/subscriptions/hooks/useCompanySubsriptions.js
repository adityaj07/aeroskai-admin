import { useQuery } from '@tanstack/react-query'

import { SUBSCRIPTION_COMPANIES_QUERY_KEYS } from '../constants/subscriptions.constants'
import { subscriptionsService } from '../services/subscriptions.service'

export const useCompanySubscriptions = (params = {}) => {
  return useQuery({
    queryKey: [...SUBSCRIPTION_COMPANIES_QUERY_KEYS.list, params],
    queryFn: () => subscriptionsService.getCompanies(params),
  })
}
