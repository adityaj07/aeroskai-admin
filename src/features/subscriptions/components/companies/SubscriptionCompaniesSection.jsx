import { useState } from 'react'

import { SUBSCRIPTION_COMPANIES_STATUS_FILTERS } from '../../constants/subscriptions.constants'
import { useCompanySubscriptions } from '../../hooks/useCompanySubsriptions'

import { SubscriptionCompaniesTable } from './SubscriptionCompaniesTable'
import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'
import { SubscriptionCompaniesSectionSkeleton } from '@/components/shared/app/skeletons/subscription/SubscriptionCompaniesSectionSkeleton'

export const SubscriptionCompaniesSection = () => {
  const [status, setStatus] = useState('All')

  const { data: subscriptionData, isLoading } = useCompanySubscriptions({
    status,
  })

  return (
    <div className="space-y-6">
      <StatusSwitcher
        statuses={SUBSCRIPTION_COMPANIES_STATUS_FILTERS}
        selectedStatus={status}
        onStatusChange={setStatus}
      />

      {isLoading ? (
        <SubscriptionCompaniesSectionSkeleton />
      ) : (
        <SubscriptionCompaniesTable
          companies={subscriptionData?.data}
          meta={subscriptionData?.meta}
        />
      )}
    </div>
  )
}
