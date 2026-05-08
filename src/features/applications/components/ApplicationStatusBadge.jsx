export const ApplicationStatusBadge = ({ status }) => {
  const statusStyles = {
    Approved: 'bg-[#16A34A1A] text-[#16A34A] dark:bg-[#16A34A26] dark:text-[#86EFAC]',

    Rejected: 'bg-[#DC26261A] text-[#DC2626] dark:bg-[#DC262626] dark:text-[#FCA5A5]',

    'Pending Review': 'bg-[#FF7A001A] text-[#FF7A00] dark:bg-[#FF7A0026] dark:text-[#FDBA74]',
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
