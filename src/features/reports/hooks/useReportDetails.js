import { useQuery } from '@tanstack/react-query'

import { REPORTS_QUERY_KEYS } from '../constants/reports.constants'
import { reportsService } from '../services/reports.services'

export const useReportDetails = (reportId) => {
  return useQuery({
    queryKey: [...REPORTS_QUERY_KEYS.detail(reportId)],
    queryFn: () => reportsService.getDetails(reportId),
    enabled: Boolean(reportId),
  })
}
