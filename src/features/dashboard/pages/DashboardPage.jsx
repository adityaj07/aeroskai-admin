import { DashboardOverview } from '../components/overview/DashboardOverview'
import { useDashboardOverview } from '../hooks/useDashboardOverview'

const DashboardPage = () => {
  const { data, isLoading } = useDashboardOverview()

  return <DashboardOverview data={data} isLoading={isLoading} />
}

export default DashboardPage
