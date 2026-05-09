import { useQuery } from '@tanstack/react-query'

import { paymentsService } from '../services/payments.service'
import { PAYMENT_COMPANIES_QUERY_KEYS } from '../constants/payments.constants'

export const useCompanyPayments = (params = {}) => {
  return useQuery({
    queryKey: [...PAYMENT_COMPANIES_QUERY_KEYS.list, params],
    queryFn: () => paymentsService.getCompanies(params),
  })
}
