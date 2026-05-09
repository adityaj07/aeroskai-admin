import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

export const UserBillingSummaryCard = ({ billingSummary }) => {
  const items = [
    { label: 'Total Paid', value: billingSummary.totalPaid },
    { label: 'Last Payment', value: billingSummary.lastPayment },
    { label: 'Payments Count', value: `${billingSummary.paymentsCount} payments` },
  ]

  return (
    <AdminSectionCard title="Billing Summary" contentClassName="space-y-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">{item.label}</p>
          <p className="pt-1 text-sm text-[#0C1014] dark:text-white">{item.value}</p>
        </div>
      ))}
    </AdminSectionCard>
  )
}
