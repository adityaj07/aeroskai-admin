import { Skeleton } from '@/components/ui/skeleton'

import { SubscriptionCompaniesSectionSkeleton } from './SubscriptionCompaniesSectionSkeleton'

export const SubscriptionsPageSkeleton = () => {
  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#F7F9F9] p-1 dark:bg-white/5">
        <Skeleton className="h-8 w-28 rounded-md" />
        <Skeleton className="h-8 w-36 rounded-md" />
      </div>

      {/* Default Active Tab Content */}
      <SubscriptionCompaniesSectionSkeleton />
    </div>
  )
}
