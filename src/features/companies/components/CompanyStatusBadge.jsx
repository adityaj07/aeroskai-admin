export const CompanyStatusBadge = ({ status }) => {
  const isActive = status === 'Active'

  if (status === 'Access Restricted') {
    return (
      <span className="inline-flex rounded-lg bg-[#F59E0B1A] px-2 py-1 text-xs font-medium text-[#B45309] dark:bg-[#F59E0B26] dark:text-[#FCD34D]">
        Access Restricted
      </span>
    )
  }

  return (
    <span
      className={`inline-flex rounded-lg px-2 py-1 text-xs font-medium ${
        isActive
          ? 'bg-[#16A34A1A] text-[#15803D] dark:bg-[#16A34A26] dark:text-[#86EFAC]'
          : 'bg-[#DC26261A] text-[#B91C1C] dark:bg-[#DC262626] dark:text-[#FCA5A5]'
      }`}
    >
      {status}
    </span>
  )
}
