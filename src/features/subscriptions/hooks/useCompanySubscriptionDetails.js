import { useQuery } from '@tanstack/react-query'

import { SUBSCRIPTION_COMPANIES_QUERY_KEYS } from '../constants/subscriptions.constants'
import { subscriptionsService } from '../services/subscriptions.service'

export const useCompanySubscriptionDetails = (subscriptionId) => {
  return useQuery({
    queryKey: [...SUBSCRIPTION_COMPANIES_QUERY_KEYS.details, subscriptionId],
    queryFn: () => subscriptionsService.getCompanyById(subscriptionId),
    enabled: Boolean(subscriptionId),
  })
}
