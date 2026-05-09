import { useState } from 'react'

import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'

import { SUBSCRIPTION_USERS_STATUS_FILTERS } from '../../constants/subscriptions.constants'
import { useIndividualSubscriptions } from '../../hooks/useIndividualSubscriptions'
import { SubscriptionOverviewCard } from '../shared/SubscriptionOverviewCard'

import { SubscriptionUsersTable } from './SubscriptionUsersTable'

export const SubscriptionUsersSection = () => {
  const [status, setStatus] = useState('All')

  const { data: subscriptionData, isLoading } = useIndividualSubscriptions({
    status,
  })

  const { data: allUsersData } = useIndividualSubscriptions({
    status: 'All',
  })

  const buildTrend = (seed) => [43, 44, 44, 43, 42, 42, 45, 47, 47, 46, 45, 46].map((v) => v + seed)

  // Keep card metrics independent from filters for stable overview UX.
  const overviewSource = allUsersData?.data ?? []
  const overviewMetrics = {
    total: overviewSource.length,
    totalActive: overviewSource.filter((s) => s.status === 'Active').length,
    expiringSoon: overviewSource.filter((s) => s.status === 'Expiring Soon').length,
    expired: overviewSource.filter((s) => s.status === 'Expired').length,
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SubscriptionOverviewCard
          title="Active Subs"
          value={overviewMetrics.total}
          trend={buildTrend(0)}
        />
        <SubscriptionOverviewCard
          title="Monthly Plan"
          value={overviewMetrics.totalActive}
          trend={buildTrend(-2)}
        />
        <SubscriptionOverviewCard
          title="Yearly Plan"
          value={overviewMetrics.expiringSoon}
          trend={buildTrend(-5)}
        />
        <SubscriptionOverviewCard
          title="Free Users"
          value={overviewMetrics.expired}
          trend={buildTrend(-1)}
        />
      </div>

      <StatusSwitcher
        statuses={SUBSCRIPTION_USERS_STATUS_FILTERS}
        selectedStatus={status}
        onStatusChange={setStatus}
      />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#9AA2AD]">
          Loading individual subscriptions...
        </div>
      ) : (
        <SubscriptionUsersTable users={subscriptionData?.data} meta={subscriptionData?.meta} />
      )}
    </div>
  )
}
