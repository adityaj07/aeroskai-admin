import { AdminSectionCard } from '@/components/shared/app/AdminSectionCard'
import { StatusBadge } from '@/components/shared/app/StatusBadge'

export const EmployeeAccountsCard = ({ employees }) => {
  return (
    <AdminSectionCard
      title={`Employee Accounts (${employees.used} / ${employees.total})`}
      contentClassName="space-y-3"
    >
      {employees.list.map((employee) => (
        <div key={employee.email} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#E7EEF8] text-[11px] text-[#1565C0]">
              {employee.initials}
            </div>
            <div>
              <p className="text-sm text-[#0C1014] dark:text-white">{employee.name}</p>
              <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">{employee.email}</p>
            </div>
          </div>
          <StatusBadge status={employee.status} />
        </div>
      ))}
    </AdminSectionCard>
  )
}
