import { useQuery } from '@tanstack/react-query'

import { paymentsService } from '../services/payments.service'
import { PAYMENT_USERS_QUERY_KEYS } from '../constants/payments.constants'

export const useIndividualPayments = (params = {}) => {
  return useQuery({
    queryKey: [...PAYMENT_USERS_QUERY_KEYS.list, params],
    queryFn: () => paymentsService.getIndividuals(params),
  })
}
