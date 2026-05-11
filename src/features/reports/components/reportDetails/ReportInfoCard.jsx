import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'

export const ReportInfoCard = ({ report }) => {
  const rows = [
    { label: 'Report ID', value: report.id },
    { label: 'Reported Type', value: report.reportedType },
    { label: 'Date Submitted', value: report.dateSubmitted },
  ]

  return (
    <AdminSectionCard title="Report Information" contentClassName="space-y-3">
      {rows.map((row) => (
        <div key={row.label}>
          <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">{row.label}</p>
          <p className="mt-1 text-sm font-medium text-[#0C1014] dark:text-white">{row.value}</p>
        </div>
      ))}
    </AdminSectionCard>
  )
}
