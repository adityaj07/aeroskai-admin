import { useQuery } from '@tanstack/react-query'

import { REPORTS_QUERY_KEYS } from '../constants/reports.constants'
import { reportsService } from '../services/reports.services'

export const useReports = (params = {}) => {
  return useQuery({
    queryKey: [...REPORTS_QUERY_KEYS.list, params],
    queryFn: () => reportsService.getAll(params),
  })
}
