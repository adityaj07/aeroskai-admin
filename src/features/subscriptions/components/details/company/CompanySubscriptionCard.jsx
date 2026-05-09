import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { Progress } from '@/components/ui/progress'

export const CompanySubscriptionCard = ({ subscription }) => {
  const usage = Math.round((subscription.inUse / subscription.seats) * 100)

  return (
    <AdminSectionCard
      title="Subscription"
      action={<span className="rounded-lg bg-[#16A34A1A] px-2 py-1 text-xs text-[#15803D]">Active</span>}
      contentClassName="space-y-3"
    >
      <p className="text-[30px] font-semibold text-[#0C1014] dark:text-white">{subscription.seats} Seats</p>
      <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">
        {subscription.inUse} of {subscription.seats} seats in use
      </p>
      <Progress
        value={usage}
        className="h-1.5 bg-[#F3F4F6] dark:bg-white/10 [&_[data-slot=progress-indicator]]:bg-[#1565C0]"
      />

      <div className="grid grid-cols-2 gap-4 text-xs text-[#6F7680] dark:text-[#A9B0BA]">
        <div>
          <p>Start Date</p>
          <p className="pt-1 text-sm text-[#0C1014] dark:text-white">{subscription.startDate}</p>
        </div>
        <div>
          <p>End Date</p>
          <p className="pt-1 text-sm text-[#0C1014] dark:text-white">{subscription.endDate}</p>
        </div>
      </div>
    </AdminSectionCard>
  )
}
