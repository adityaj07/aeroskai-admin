export const SubscriptionStatusBadge = ({ status }) => {
  const statusStyles = {
    Active: 'bg-[#16A34A1A] text-[#16A34A] dark:bg-[#16A34A26] dark:text-[#86EFAC]',

    Expired: 'bg-[#DC26261A] text-[#DC2626] dark:bg-[#DC262626] dark:text-[#FCA5A5]',

    'Expiring Soon': 'bg-[#FF7A001A] text-[#FF7A00] dark:bg-[#FF7A0026] dark:text-[#FDBA74]',

    'Free Access': 'bg-[#F7F9F9] text-[#0C1014] dark:bg-[#171A1E] dark:text-white',
  }

  return (
    <span
      className={`inline-flex rounded-lg px-2 py-1 text-xs font-medium ${
        statusStyles[status] ?? 'bg-muted text-muted-foreground'
      }`}
    >
      {status}
    </span>
  )
}
