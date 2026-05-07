import { useQuery } from '@tanstack/react-query'

import { companiesService } from '../services/companies.service'

export const useCompanyDetails = (companyId) => {
  return useQuery({
    queryKey: ['companies', 'details', companyId],
    queryFn: () => companiesService.getById(companyId),
    enabled: Boolean(companyId),
  })
}
