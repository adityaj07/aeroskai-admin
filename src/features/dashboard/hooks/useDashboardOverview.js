import { useQuery } from '@tanstack/react-query'

import { DASHBOARD_QUERY_KEYS } from '../constants/dashboard.constants'
import { dashboardService } from '../services/dashboard.service'

export const useDashboardOverview = () => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.overview,
    queryFn: dashboardService.getOverview,
  })
}
