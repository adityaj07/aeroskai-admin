import { useQuery } from '@tanstack/react-query'

import { COMPANIES_QUERY_KEYS } from '../constants/companies.constants'
import { companiesService } from '../services/companies.service'
import { applicationsService } from '../services/applications.service'

export const useApplications = (params = {}) => {
  return useQuery({
    queryKey: [...COMPANIES_QUERY_KEYS.list, params],
    queryFn: () => applicationsService.getAll(params),
  })
}
