import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

export const UserCurrentSubscriptionCard = ({ currentSubscription }) => {
  const items = [
    { label: 'Plan', value: currentSubscription.plan },
    { label: 'Start Date', value: currentSubscription.startDate },
    { label: 'Next Billing Date', value: currentSubscription.nextBillingDate },
    { label: 'Amount', value: currentSubscription.amount },
  ]

  return (
    <AdminSectionCard
      title="Current Subscription"
      action={<span className="rounded-lg bg-[#16A34A1A] px-2 py-1 text-xs text-[#15803D]">Active</span>}
      contentClassName="space-y-3"
    >
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">{item.label}</p>
          <p className="pt-1 text-sm text-[#0C1014] dark:text-white">{item.value}</p>
        </div>
      ))}
    </AdminSectionCard>
  )
}
