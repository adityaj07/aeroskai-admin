import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { Skeleton } from '@/components/ui/skeleton'
import { ROUTES } from '@/constants/routes.constants'

import { QuickActionCard } from './QuickActionCard'
import { RevenueBarChartCard } from './RevenueBarChartCard'
import { StatOverviewCard } from './StatOverviewCard'

export const DashboardOverview = ({ data, isLoading }) => {
  const navigate = useNavigate()

  const actionRouteMap = {
    'create-company-account': `${ROUTES.DASHBOARD}/${ROUTES.COMPANY_CREATE}`,
    'manage-users': `${ROUTES.DASHBOARD}/${ROUTES.USERS}`,
    'review-applications': `${ROUTES.DASHBOARD}/${ROUTES.APPLICATIONS}`,
    'support-inbox': `${ROUTES.DASHBOARD}/${ROUTES.SUPPORT}`,
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-36 rounded-[20px]" />
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Skeleton className="h-[360px] rounded-[20px]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-[172px] rounded-[20px]" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="space-y-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.04 },
          },
        }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {data.stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={{
              hidden: { opacity: 0, y: 6 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <StatOverviewCard title={stat.title} value={stat.value} trend={stat.trend} />
          </motion.div>
        ))}
      </motion.div>

      <div className="grid min-w-0 items-stretch gap-4 md:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <RevenueBarChartCard revenue={data.revenue} />

        <div className="grid min-w-0 content-start gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-1 xl:grid-cols-2">
          {data.actions.map((action) => (
            <QuickActionCard
              key={action.id}
              title={action.title}
              description={action.description}
              icon={action.icon}
              onAction={() => {
                const targetRoute = actionRouteMap[action.id]
                if (targetRoute) navigate(targetRoute)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
