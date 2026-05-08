import { useQuery } from '@tanstack/react-query'

import { APPLICATIONS_QUERY_KEYS } from '../constants/applications.constants'
import { applicationsService } from '../services/applications.service'

export const useApplicationDetails = (applicationId) => {
  return useQuery({
    queryKey: APPLICATIONS_QUERY_KEYS.details(applicationId),
    queryFn: () => applicationsService.getById(applicationId),
    enabled: Boolean(applicationId),
  })
}
