const statusClasses = {
  Open: 'bg-[#FFE4E6] text-[#E11D48] dark:bg-[#E11D4826] dark:text-[#FDA4AF]',
  Pending: 'bg-[#FFF7ED] text-[#F59E0B] dark:bg-[#F59E0B26] dark:text-[#FCD34D]',
  Resolved: 'bg-[#DCFCE7] text-[#16A34A] dark:bg-[#16A34A26] dark:text-[#86EFAC]',
}

export const SupportStatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex rounded-lg px-2 py-1 text-[10px] font-semibold ${statusClasses[status] ?? 'bg-[#EAEEF3] text-[#6F7680]'}`}
    >
      {status}
    </span>
  )
}
