import { useQuery } from '@tanstack/react-query'

import { SUBSCRIPTION_USERS_QUERY_KEYS } from '../constants/subscriptions.constants'
import { subscriptionsService } from '../services/subscriptions.service'

export const useIndividualSubscriptionDetails = (subscriptionId) => {
  return useQuery({
    queryKey: [...SUBSCRIPTION_USERS_QUERY_KEYS.details, subscriptionId],
    queryFn: () => subscriptionsService.getIndividualById(subscriptionId),
    enabled: Boolean(subscriptionId),
  })
}
