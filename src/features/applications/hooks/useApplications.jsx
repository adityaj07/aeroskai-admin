import { useQuery } from '@tanstack/react-query'

import { applicationsService } from '../services/applications.service'
import { APPLICATIONS_QUERY_KEYS } from '../constants/applications.constants'

export const useApplications = (params = {}) => {
  return useQuery({
    queryKey: [...APPLICATIONS_QUERY_KEYS.list, params],
    queryFn: () => applicationsService.getAll(params),
  })
}
