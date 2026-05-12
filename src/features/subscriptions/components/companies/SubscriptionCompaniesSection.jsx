import { useState } from 'react'

import { SUBSCRIPTION_COMPANIES_STATUS_FILTERS } from '../../constants/subscriptions.constants'
import { useCompanySubscriptions } from '../../hooks/useCompanySubsriptions'

import { SubscriptionCompaniesTable } from './SubscriptionCompaniesTable'
import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'

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
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#9AA2AD]">
          Loading company subscriptions...
        </div>
      ) : (
        <SubscriptionCompaniesTable
          companies={subscriptionData?.data}
          meta={subscriptionData?.meta}
        />
      )}
    </div>
  )
}
