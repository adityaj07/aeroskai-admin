import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

export const CompanyDetailInfoCard = ({ title, items }) => {
  return (
    <AdminSectionCard title={title} contentClassName="space-y-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">{item.label}</p>
          <p className="text-sm text-[#0C1014] dark:text-white">{item.value}</p>
        </div>
      ))}
    </AdminSectionCard>
  )
}
