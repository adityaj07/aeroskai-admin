import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

export const ApplicationDetailInfoCard = ({ title, items }) => {
  return (
    <AdminSectionCard title={title} contentClassName="space-y-3">
      {items.map((item) => {
        const isEmpty = item.value === undefined || item.value === null || item.value === ''
        return (
          <div key={item.label}>
            <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">{item.label}</p>
            <div className="pt-1 text-sm text-[#0C1014] dark:text-white">
              {isEmpty ? <span className="text-[#6F7680] dark:text-[#A9B0BA]">—</span> : item.value}
            </div>
          </div>
        )
      })}
    </AdminSectionCard>
  )
}

export default ApplicationDetailInfoCard
