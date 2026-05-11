import { useQuery } from '@tanstack/react-query'

import { SUPPORT_COMPANIES_QUERY_KEYS } from '../constants/support.constants'
import { supportService } from '../services/support.services'

export const useCompanySupport = (params = {}) => {
  return useQuery({
    queryKey: [...SUPPORT_COMPANIES_QUERY_KEYS.list, params],
    queryFn: () => supportService.getCompanies(params),
  })
}
