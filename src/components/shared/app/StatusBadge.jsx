export const StatusBadge = ({ status }) => {
  const statusStyles = {
    Pending: 'bg-[#FF7A001A] text-[#FF7A00]',

    'Under Review': 'bg-[#1565C01A] text-[#1565C0] dark:bg-[#2563EB26] dark:text-[#93C5FD]',

    Resolved: 'bg-[#16A34A1A] text-[#16A34A] dark:bg-[#16A34A26] dark:text-[#86EFAC]',

    Rejected: 'bg-[#DC26261A] text-[#DC2626]',

    Approved: 'bg-[#16A34A1A] text-[#16A34A] dark:bg-[#16A34A26] dark:text-[#86EFAC]',

    'Pending Review': 'bg-[#FF7A001A] text-[#FF7A00]',

    Active: 'bg-[#16A34A1A] text-[#16A34A]',

    Inactive: 'bg-[#DC26261A] text-[#DC2626]',

    'Access Restricted': 'bg-[#FF7A001A] text-[#FF7A00]',

    Successful: 'bg-[#16A34A1A] text-[#16A34A] dark:bg-[#16A34A1A] dark:text-[#16A34A]',

    Refunded: 'bg-[#1565C01A] text-[#1565C0]',

    Failed: 'bg-[#DC26261A] text-[#DC2626]',

    Expired: 'bg-[#DC26261A] text-[#DC2626]',

    'Expiring Soon': 'bg-[#FF7A001A] text-[#FF7A00]',

    'Free Access': 'bg-[#F7F9F9] text-[#0C1014] dark:bg-[#171A1E] dark:text-white',

    Open: 'bg-[#DC26261A] text-[#DC2626]',
  }

  return (
    <span
      className={`inline-flex rounded-lg px-3 py-1 text-xs font-medium ${
        statusStyles[status] ?? 'bg-muted text-muted-foreground'
      }`}
    >
      {status}
    </span>
  )
}
